import json
import re
from copy import deepcopy
from datetime import datetime
from time import sleep
from typing import Dict, List, Optional, Tuple

import numpy as np
import pandas as pd
from langchain.schema import BaseRetriever, Document
from langchain.vectorstores.base import VectorStore
from pydantic import BaseModel, Field
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


def _get_hours_passed(time: datetime, ref_time: datetime) -> float:
    """Get the hours passed between two datetime objects."""
    return (time - ref_time).total_seconds() / 3600

class FAISSRetriever(BaseRetriever, BaseModel):
    """
    Retriever combining similarity with recency.
    Based on: https://github.com/QuangBK/generativeAgent_LLM/blob/main/server/time_weighted_retriever.py
    """

    vectorstore: VectorStore
    "vectorstore (VectorStore): VectorStore object to store the documents"

    k: int = 5
    "k (int, optional): Number of retrieved documents"

    time_decay: float = 0.01
    "time_decay (float, optional): Exponential decay factor used as `(1.0 - decay_rate) ** hrs_passed`"

    search_kwargs: dict = Field(default_factory=lambda: dict(score_threshold=0.4))
    "**search_kwargs: Other search arguments used by `vectorstore.similarity_search_with_relevance_scores`"


    def get_recency_score(self, document: Document, current_time: datetime) -> float:
        "Return the recency scores for a document."
        hours_passed = _get_hours_passed(
            current_time,
            document.metadata["last_accessed_at"],
        )
        hours_passed = max(hours_passed, 0)
        score_time = (1.0 - self.time_decay) ** hours_passed
        score_time = min(score_time, 1)
        return score_time

    def get_tfidf_scores(self, query: str, documents: List[Document]) -> List[float]:
        if len(documents) == 0:
            return []
        vectorizer = TfidfVectorizer()
        tfidf_matrix = vectorizer.fit_transform([query] + [doc.page_content for doc in documents])
        cosine_similarities = cosine_similarity(tfidf_matrix[0], tfidf_matrix[1:]).flatten()
        return cosine_similarities

    def get_similar_documents(self, query: str, top_k: int=20) -> List[Tuple[Document, float]]:
        """
        Return the top_k most similar documents to the query. 
        The return format is a dictionary `{document_id: (document, similarity)}`
        """
        retry_cnt = 0
        while True:
            try:
                docs_and_scores = self.vectorstore.similarity_search_with_relevance_scores(
                    query, top_k, **self.search_kwargs
                )
                break
            except Exception as e:
                retry_cnt += 1
                print(f"Retry {retry_cnt} get_similar_docs due to:", e)
                sleep(3)
                if retry_cnt >= 5:
                    break
        for fetched_doc, relevance in docs_and_scores:
            fetched_doc.metadata["similarity"] = relevance
        return docs_and_scores

    def get_relevant_documents(self, query: str, current_time: Optional[datetime]=None, top_k: int=None) -> List[Document]:
        "Return the top_k documents with highest combination scores (e.g. similarity, recency)."
        if current_time is None:
            current_time = datetime.now()
        if top_k is None:
            top_k = self.k

        # Get the most relevant documents
        docs_and_similarity_scores = self.get_similar_documents(query)
        tfidf_scores = self.get_tfidf_scores(query, [doc for doc, similarity in docs_and_similarity_scores])
        rescored_docs = [
            (doc, (self.get_recency_score(doc, current_time), similarity, tfidf_relevance))  # (doc, (recency, similarity, tfidf))
            for (doc, similarity), tfidf_relevance in zip(docs_and_similarity_scores, tfidf_scores)
        ]
        
        result = []
        if len(rescored_docs) > 0:
            score_array = np.array([scores for doc, scores in rescored_docs])
            assert score_array.shape[1] == 3
            # Normalize the scores
            delta_np = score_array.max(axis=0) - score_array.min(axis=0)
            delta_np = np.where(delta_np == 0, 0.5, delta_np)
            x_norm = (score_array - score_array.min(axis=0)) / delta_np
            # Weight the scores
            x_norm[:, 0] = x_norm[:, 0] * 0.5   # recency
            x_norm[:, 1] = x_norm[:, 1] * 1.0   # similarity
            x_norm[:, 2] = x_norm[:, 2] * 0.5   # tfidf
            x_norm_sum = x_norm.sum(axis=1)
            rescored_docs = [
                (doc, weighted_score)
                for (doc, scores), weighted_score in zip(rescored_docs, x_norm_sum)
            ]                                                     
            
            rescored_docs.sort(key=lambda x: x[1], reverse=True)
            for doc, _ in rescored_docs[: top_k]:
                result.append(doc)
        return result

    def add_memory_document(self, memory_document: Document, **kwargs) -> List[str]:
        "Add a document to the vectorstore with a timestamp."
        document = deepcopy(memory_document)
        current_time = kwargs.get("current_time")
        if current_time is None:
            current_time = datetime.datetime.now()
        if document.metadata.get("last_accessed_at") is None:
            document.metadata["last_accessed_at"] = current_time
        if document.metadata.get("created_at") is None:
            document.metadata["created_at"] = current_time

        result = []
        retry_cnt = 0
        while True:
            try:
                result = self.vectorstore.add_documents([document], **kwargs)
                break
            except Exception as e:
                retry_cnt += 1
                print(f"Retry {retry_cnt} add document due to:", e)
                sleep(3)
                if retry_cnt >= 5:
                    break
        return result


class DialogueLogger:
    """
    ```
    [{"role": "...", "content": "..."}, ...]
    ```
    """
    def __init__(self, prompter, owner: str, background="", max_active_num=16, reserve_active_num=8) -> None:
        self.prompter = prompter
        self.owner = owner

        self.dialogue_history: List[Dict[str, str]] = []
        self.background = background
        self.active_history: List[Dict[str, str]] = []
        self.max_active_num = max_active_num
        self.reserve_active_num = reserve_active_num

    def add_log(self, log: Dict[str, str]) -> List[str]:
        self.dialogue_history.append(log)
        self.active_history.append(log)
        summarized_history = self._maintain_log()
        return summarized_history

    def clear_active_log(self):
        self.active_history.clear()

    def _maintain_log(self) -> List[str]:
        summarized_history = []
        if len(self.active_history) > self.max_active_num:
            summarized_history = self.prompter.get_dialogue_summary(self.owner, self.active_history[1:-self.reserve_active_num])
            self.active_history = self.active_history[-self.reserve_active_num:]
            if self.background != "":
                self.active_history.insert(0, {"role": "Narration", "content": self.background})
            self.active_history.insert(0, {"role": "Narration", "content": "Before this, " + "; ".join(summarized_history)})
        return summarized_history


def get_events_from_csv(csv_path: str) -> List[dict]:
    with open(csv_path, "r", encoding="utf-8") as csv_file:
        data = pd.read_csv(csv_file, encoding="utf-8")
    events_list = []
    for i, row in data.iterrows():
        event = {}
        event["event_no"] = row["event_id"]
        event["occurrence_time"] = row["time"]
        event["public_event"] = "" if pd.isnull(row["public_event"]) else row["public_event"]
        private_events = {}
        for key_name in row.keys()[3:]:
            private_event = row[key_name]
            if not pd.isnull(private_event):
                private_events[key_name] = private_event
        event["private_events"] = private_events

        events_list.append(event)
    return events_list

def parse_document_to_str(list_docs: List[Document], relevant_threshold=.0, return_monologue=True, include_time=False) -> str:
    texts = ""
    texts_irrelevant = ""
    for document in list_docs:
        content = document.page_content
        if return_monologue and document.metadata["monologue"] != "":
            content = document.metadata["monologue"]
        if include_time:
            time_t = document.metadata["created_at"].strftime("%m{m}%d{d}%H:%M").format(m="-", d=", ") + ": "
        else:
            time_t = ""

        if relevant_threshold > 0 and document.metadata["similarity"] < relevant_threshold:
            texts_irrelevant += "" + time_t + content + "\n"
        else:
            texts += "" + time_t + content + "\n"
    return texts + "!<SEP>!" + texts_irrelevant


def merge_docs(docs1, docs2):
    list_index1 = []
    docs_merged = []
    for doc_t in docs1:
        list_index1.append(doc_t.metadata['buffer_idx'])
        docs_merged.append(doc_t)
    for doc_t in docs2:
        if not (doc_t.metadata['buffer_idx'] in list_index1):
            docs_merged.append(doc_t)
    return docs_merged

def parse_history_to_str(history: List[Dict[str, str]]) -> str:
    result = ""
    for turn in history:
        assert "role" in turn and "content" in turn, turn
        if turn["role"] == "Narration":
            result += f"（{turn['content']}）\n\n"
        else:
            result += f"{turn['role']}: {turn['content']}\n\n"
    return result.strip()

def parse_context_to_str(context: List[Dict[str, str]]) -> str:
    unique_list = set([(example["question"], example["response"]) for example in context])
    contexts = ""
    for entity in unique_list:
        contexts += f'When being asked about "{entity[0]}", you can answer "{entity[1]}";\n'
    return contexts


def extract_summary(input_jsonl: str) -> List[str]:
    result = json.loads(input_jsonl)
    list_str = result["summary"]
    return list_str

def extract_script_outline(input_jsonl: str):
    result = json.loads(input_jsonl)
    prev_outline, new_outline = result["previous_outline"], result["new_outline"]
    return prev_outline, new_outline

def extract_script(input_jsonl: str) -> List[Dict[str, str]]:
    result = json.loads(input_jsonl)
    list_script = result["scripts"]
    for turn in list_script:
        assert "role" in turn and "content" in turn, turn
    return list_script

def extract_goal_completed(input_jsonl: str) -> bool:
    result = json.loads(input_jsonl)
    decision = result["completed"]
    return decision

def extract_respond_decision(input_jsonl: str) -> bool:
    result = json.loads(input_jsonl)
    decision = result["answer"]
    return decision

def extract_dicts(input_jsonl: str) -> List[dict]:
    dict_pattern = re.compile(r'\{[^{}]+\}')
    matches = dict_pattern.findall(input_jsonl)
    result = [json.loads(match) for match in matches]
    return result


def get_edit_similarity(str1: str, str2: str) -> float:
    import Levenshtein
    distance = Levenshtein.distance(str1, str2)
    max_length = max(len(str1), len(str2))
    normalized_similarity = 1 - distance / max_length

    return normalized_similarity
