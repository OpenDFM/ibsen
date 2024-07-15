import csv
import os
import re
from typing import Dict, List

import faiss
import pandas as pd
from langchain.docstore import InMemoryDocstore
from langchain.embeddings.base import Embeddings
from langchain.schema import Document
from langchain.vectorstores.faiss import FAISS
from sklearn.metrics.pairwise import cosine_similarity


def remove_quote(query: str):
    pattern = r":\"(.*?)\""
    match = re.search(pattern, query)
    if match:
        return match.group(1)
    return query

def add_stopword(utterance: str):
    if utterance[-1] not in (',', '.', '?', '!', ')'):
        utterance += '. '
    return utterance

class CorpusDatabase:
    def __init__(
        self, 
        corpus_path: str=None, 
        embeddings: Embeddings=None,
        embedding_size: int=1536,
        name: str="Unnamed",
        targets: List[str]=["Edward Helson"]
    ):
        self.corpus_db: FAISS = None
        self.embeddings = embeddings
        self.embedding_size = embedding_size
        self.name = name
        self.targets = targets

        self.initialized = self.load_corpus_csv(corpus_path)

    def _create_faiss(self) -> FAISS:
        return FAISS(
            embedding_function=self.embeddings.embed_query, 
            index=faiss.IndexFlatL2(self.embedding_size), 
            docstore=InMemoryDocstore({}), 
            index_to_docstore_id={},
            relevance_score_fn=lambda val: 1 - val
        )

    def load_corpus_csv(self, corpus_path: str=None, reconstruct: bool=False) -> bool:
        "Read the corpus CSV file and update the FAISS database. If there are `.faiss` and `.pkl` files with the same name in the directory, load FAISS directly."
        if corpus_path is None:
            print(f"{self.name} No corpus file provided, unable to read.")
            return False
        if self.embeddings is None:
            print(f"{self.name} No embeddings provided, unable to read.")
            return False
        corpus_name = os.path.splitext(corpus_path)[0]
        name = os.path.basename(corpus_name)
        corpus_dir = os.path.dirname(corpus_path)
        if not reconstruct and os.path.exists(corpus_name + ".faiss") and os.path.exists(corpus_name + ".pkl"):
            self.corpus_db = FAISS.load_local(corpus_dir, self.embeddings, name)
        else:
            if reconstruct:
                print(f"Rebuilding {self.name} embedding representation...")
            else:
                print(f"No local corpus database found for {self.name}, rebuilding embedding representation...")
            documents = self._process_corpus_csv(corpus_path)
            self.corpus_db = self._create_faiss()
            self.corpus_db.add_documents(documents)
            self.corpus_db.save_local(corpus_dir, name)
        print(f"{self.name} Corpus database loaded!")
        return True

    def _process_corpus_csv(self, corpus_path: str) -> List[Document]:
        """
        Read the dialogue corpus in CSV format and return a list of documents for FAISS retrieval.

        Expected column names in the CSV document: `dialogue_id`, `role`, `content`

        The page_content of the documents in the returned list represents the user's question, and metadata["response"] represents the actor's answer.
        """
        documents = []
        with open(corpus_path, "r") as f:
            try:
                data = pd.read_csv(f)
            except UnicodeDecodeError:
                data = pd.read_csv(f, encoding="gbk")
        
        user_utterance = ""
        agent_utterance = ""
        current_dialogue_id = ""
        last_role = ""
        for i, row in data.iterrows():
            if row["dialogue_id"] != current_dialogue_id:
                if agent_utterance != "" and user_utterance != "":
                    doc = Document(page_content=user_utterance, metadata={"response": agent_utterance})
                    documents.append(doc)
                    user_utterance, agent_utterance = "", ""
                    last_role = ""
            current_dialogue_id = row["dialogue_id"]
            if row["role"] != last_role:
                if last_role == "actor" and user_utterance != "":
                    doc = Document(page_content=user_utterance, metadata={"response": agent_utterance})
                    documents.append(doc)
                    user_utterance, agent_utterance = "", ""
            if row["role"] == "actor":
                agent_utterance += add_stopword(row["content"])
            if row["role"] == "player":
                user_utterance += add_stopword(row["content"])
            last_role = row["role"]
        if agent_utterance != "" and user_utterance != "":
            doc = Document(page_content=user_utterance, metadata={"response": agent_utterance})
            documents.append(doc)

        return documents
    
    def search_context(self, query: str, target: str="Edward Helson", threshold: float=0.1, return_num: int=3):
        if not self.initialized or target not in self.targets:
            return "!<NoCorpus>!"
        query = remove_quote(query)
        similar_documents = self.corpus_db.similarity_search_with_relevance_scores(
            query, k=return_num, score_threshold=threshold
        )
        contexts: List[Dict[str, str]] = []
        for doc, score in similar_documents:
            question = doc.page_content
            response = doc.metadata["response"]
            contexts.append({"question": question.strip(), "response": response.strip()})
        return contexts
