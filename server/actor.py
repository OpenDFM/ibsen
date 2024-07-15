import os
from datetime import datetime
from time import sleep
from typing import Dict, List

import faiss
import numpy as np
from langchain.docstore import InMemoryDocstore
from langchain.schema import Document
from langchain.vectorstores.faiss import FAISS

from .prompter import Prompter
from .corpus import CorpusDatabase
from .prompt import *
from .utils import *


def score_normalizer(val: float) -> float:
    return 1 - 1 / (1 + np.exp(val))

def cosine_score_normalizer(val: float) -> float:
    return 1 - val

PROFILE_ROOT = "data/profile"
CORPUS_ROOT = "data/corpus"

class GenerativeActor:
    def __init__(
        self, 
        prompter: Prompter, 
        name: str, 
        embeddings_model, 
    ):
        self.name = name
        self.description = ""
        self.instruction = ""
        self.monologue = ""

        self.embeddings_model = embeddings_model
        self.profile_events: List[dict] = []
        self.current_datetime = datetime.strptime("2023-02-20 11:00:00","%Y-%m-%d %H:%M:%S")
        self.prompter = prompter

        self.dialogue_history = DialogueLogger(prompter, owner=name)
        self.interview_history = []

        self._init_actor()

    def _init_actor(self):
        embedding_size = 1536   # embedding size of OpenAI embeddings
        profile_path = os.path.join(PROFILE_ROOT, self.name + ".json")
        if os.path.exists(profile_path):
            with open(profile_path, "r", encoding="utf-8") as profile_file:
                self.profile_events = json.load(profile_file)
        
        corpus_path = os.path.join(CORPUS_ROOT, self.name + ".csv")
        if not os.path.exists(corpus_path):
            corpus_path = None

        memory_db = FAISS(
            embedding_function=self.embeddings_model.embed_query, 
            index=faiss.IndexFlatL2(embedding_size), 
            docstore=InMemoryDocstore({}), 
            index_to_docstore_id={}, 
            relevance_score_fn=cosine_score_normalizer
        )
        self.retriever = FAISSRetriever(
            vectorstore=memory_db, 
            k=5, 
            time_decay=0.01, 
            search_kwargs={"score_threshold": 0.3}
        )
        self.character_db = FAISS(
            embedding_function=self.embeddings_model.embed_query, 
            index=faiss.IndexFlatL2(embedding_size), 
            docstore=InMemoryDocstore({}), 
            index_to_docstore_id={}, 
            relevance_score_fn=cosine_score_normalizer
        )
        self.corpus_db = CorpusDatabase(
            corpus_path=corpus_path, 
            embeddings=self.embeddings_model, 
            embedding_size=embedding_size,
            name=self.name
        )

        for event in self.profile_events:
            event_no = event["event_no"]
            event_datetime = datetime.strptime(event["occurrence_time"],"%Y-%m-%d %H:%M:%S")
            memory_document = Document(
                page_content=event["memory"], 
                metadata={"event_no": event_no, "created_at": event_datetime, "monologue": event["monologue"]}
            )
            self.add_memory(memory_document, force_influence=True)

    def get_current_datetime(self,) -> datetime:
        return datetime.now()

    def add_character(self, character: str, alias: List[str]=[], relation: str="Not yet available", impression: str="Not yet available"):
        character_document = Document(
            page_content=character,
            metadata={
                "alias": alias,
                "relation": relation,
                "impression": impression
            }
        )
        retry_cnt = 0
        while True:
            try:
                self.character_db.add_documents([character_document])
                break
            except Exception as e:
                retry_cnt += 1
                print(f"Retry {retry_cnt} add_character due to:", e)
                sleep(3)
                if retry_cnt >= 5:
                    break

    def get_and_add_impressions(self):
        target_characters = [doc.page_content for doc in self.character_db.docstore._dict.values()]
        memories = [event["memory"] for event in self.profile_events]
        impression_dict = self.prompter.get_impression(self.name, "\n".join(memories), "\n".join(target_characters))
        for doc in self.character_db.docstore._dict.values():
            try:
                doc.metadata["impression"] = impression_dict[doc.page_content]
            except KeyError:
                doc.metadata["impression"] = "Not yet available"
    
    def get_impressions_of(self, characters: List[str]) -> Dict[str, str]:
        character_documents = self.character_db.docstore._dict.values()
        impressions_dict = {doc.page_content: doc.metadata["impression"] for doc in character_documents}
        impressions = {character: impressions_dict.get(character, "") for character in characters}
        return impressions

    def get_relations_with(self, characters: List[str]) -> List[str]:
        character_documents = self.character_db.docstore._dict.values()
        relations_dict = {doc.page_content: doc.metadata["relation"] for doc in character_documents}
        relations = [relations_dict.get(character, "") for character in characters]
        return relations

    def get_related_character_docs(self, event: str, include_self=False) -> List[Document]:
        character_documents = self.character_db.docstore._dict.values()
        related_character_docs = []
        for doc in character_documents:
            if doc.page_content == self.name and not include_self:
                continue
            if doc.page_content in event or any([name in event for name in doc.metadata["alias"]]):
                related_character_docs.append(doc)
        return related_character_docs

    def add_memory(self, memory, force_influence=False, check_reflection=True):
        if isinstance(memory, Document):
            memory_document = memory

            influence = memory_document.metadata.get("influence")
            if influence is None:
                if force_influence:
                    influence = 1
                else:
                    influence = self.prompter.get_influence(self.name, memory_document.page_content)
                try:
                    influence = int(influence)
                except ValueError:
                    print(f"Warning: [Influence set to 0] {influence}")
                    influence = 0
                memory_document.metadata["influence"] = influence
            memory_time = memory_document.metadata.get("created_at")
            if memory_time is None:
                memory_time = self.get_current_datetime()
                memory_document.metadata["created_at"] = memory_time
        else:   # expected str
            memory = memory
            memory_time = self.get_current_datetime()
            if force_influence:
                influence = 1
            else:
                influence = self.prompter.get_influence(self.name, memory)
            influence = int(influence)
            memory_document = Document(
                page_content=memory,
                metadata={"influence": influence, "created_at": memory_time, "monologue": ""}
            )
        
        self._update_character_relation(memory_document.page_content)

        if memory_document.metadata["monologue"] == "":
            self._add_event_monologue(memory_document)
            print(f"[{self.name}] [{influence}] {memory_document.page_content} | Monologue: {memory_document.metadata['monologue']}")
        else:
            print(f"[{self.name}] [{influence}] {memory_document.page_content} | Monologue: {memory_document.metadata['monologue']}")
        self.retriever.add_memory_document(memory_document=memory_document, current_time=memory_time)

    def _update_character_relation(self, event: str):
        related_character_docs = self.get_related_character_docs(event)
        for character_doc in related_character_docs:
            name = character_doc.page_content
            relation = character_doc.metadata["relation"]
            new_relation = self.prompter.get_relation(self.name, name, event, relation)
            character_doc.metadata["relation"] = new_relation

    def update_character_impression(self, events: List[str]):
        character_documents = self.character_db.docstore._dict.values()
        for doc in character_documents:
            related_events = [event for event in events if doc.page_content in event or any([name in event for name in doc.metadata["alias"]])]
            if len(related_events) > 0:
                new_impression = self.prompter.get_updated_impression(
                    self.name, doc.metadata["impression"], "; ".join(related_events), doc.page_content
                )
                doc.metadata["impression"] = new_impression

    def _add_event_monologue(self, memory_document: Document):
        event = memory_document.page_content
        related_documents = self.retriever.get_relevant_documents(event, top_k=5, current_time=memory_document.metadata["created_at"])
        related_memories = parse_document_to_str(related_documents, relevant_threshold=0.4, return_monologue=False, include_time=True)
        relevant_memories, irrelevant_memories = related_memories.split("!<SEP>!")

        related_character_docs = self.get_related_character_docs(event)
        relations = "\n".join([character_doc.metadata["relation"] for character_doc in related_character_docs])

        event = memory_document.metadata["created_at"].strftime("%m{m}%d{d}%H:%M").format(m="-", d=", ") + ": " + event
        event_monologue = self.prompter.get_event_monologue(self.name, event, relations, relevant_memories, self.description)
        memory_document.metadata["monologue"] = event_monologue
        memory_document.metadata["monologue"] = event

    def generate_actor_response(self, background="", outline="", stream=False) -> str:
        examples = ""
        related_documents = []

        instruction_outline = self.instruction.strip().split("\n")[0].split(":")[-1].strip()
        documents = self.retriever.get_relevant_documents(instruction_outline, top_k=3, current_time=self.current_datetime)
        related_documents.extend(documents)
        for dialogue_log in self.dialogue_history.active_history[-3:]:
            utterance = ""
            if dialogue_log["role"] != "Narration":
                utterance += dialogue_log["role"] + ": "
            utterance += dialogue_log["content"]
            documents = self.retriever.get_relevant_documents(utterance, top_k=5, current_time=self.current_datetime)
            for document in documents:
                if document.page_content not in [exist_document.page_content for exist_document in related_documents]:
                    related_documents.append(document)

            context = self.corpus_db.search_context(
                query=dialogue_log["content"], 
                target=dialogue_log["role"], 
                threshold=0.7
            )
            if context != "!<NoCorpus>!":
                examples += parse_context_to_str(context)

        related_characters = []
        for turn in self.dialogue_history.active_history[-3:]:
            content = turn["content"]
            character_docs = self.get_related_character_docs(content)
            related_characters.extend([doc.page_content for doc in character_docs])
        related_characters = list(set(related_characters))
        impressions = f"Impressions of {self.name} on characters below: \n"
        result = self.get_impressions_of(related_characters)
        for name, impression in result.items():
            impressions += f"On {name}: {impression}\n"

        related_memories = parse_document_to_str(related_documents, relevant_threshold=0.4)
        if examples == "":
            examples = "!<NoCorpus>!"

        result = self.prompter.get_actor_dialogue_response(
            name=self.name, description=self.description, background=background,  
            instruction=self.instruction, impressions=impressions, 
            related_memories=related_memories, dialogue_history=self.dialogue_history.active_history, 
            director_outline=outline, 
            examples=examples, new_monologue=self.monologue, stream=stream
        )

        return result

    def interview(self, question, director_next_line="") -> str:
        examples = ""

        utterance = ""
        utterance += question
        documents = self.retriever.get_relevant_documents(utterance, top_k=10, current_time=self.current_datetime)

        context = self.corpus_db.search_context(
            query=question, 
            threshold=0.7
        )
        if context != "!<NoCorpus>!":
            examples += parse_context_to_str(context)

        related_characters = []
        character_docs = self.get_related_character_docs(question)
        related_characters.extend([doc.page_content for doc in character_docs])
        related_characters = list(set(related_characters))
        impressions = f"Impressions of {self.name} on characters below: \n"
        result = self.get_impressions_of(related_characters)
        for name, impression in result.items():
            impressions += f"On {name}: {impression}\n"

        related_memories = parse_document_to_str(documents, relevant_threshold=0.3)
        if examples == "":
            examples = "!<NoCorpus>!"
        
        self.interview_history.append({"role": "User", "content": question})
        response = self.prompter.get_actor_dialogue_response(
            name=self.name, description=self.description, background="",  
            instruction="", impressions=impressions, 
            related_memories=related_memories, dialogue_history=self.interview_history[-10:], 
            director_outline=director_next_line, 
            examples=examples, new_monologue=self.monologue, stream=False
        )
        self.interview_history.append({"role": self.name, "content": response})

        return response
