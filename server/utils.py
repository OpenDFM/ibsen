import json
import re
from typing import Dict, List, Tuple
from langchain.schema import Document
import pandas as pd


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
