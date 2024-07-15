import copy
import json
import re
import time
from typing import Dict, List

import guidance
from openai.error import InvalidRequestError

from .prompt import *
from .utils import *


class Prompter:
    def __init__(self, guidance, default_llm="gpt-3.5-turbo-1106", silent=False) -> None:
        self.guidance = guidance
        self.default_llm = default_llm
        self.silent = silent
        retry(self)

    def get_relation(self, name: str, target: str, event: str, relation: str) -> str:
        prompt = self.guidance(PROMPT_RELATION, silent=self.silent)
        result = prompt(name=name, target=target, event=event, relation=relation)
        new_relation = result["ans"]
        return new_relation

    def get_influence(self, name: str, memory: str) -> int:
        prompt = self.guidance(PROMPT_INFLUENCE, silent=self.silent)
        result = prompt(name=name, memory=memory, stream=False)
        try:
            influence_score = int(re.search(r"\d+", result["rate"]).group())
        except AttributeError:
            influence_score = 0
        return influence_score
    
    def get_event_monologue(self, name: str, event: str, relations: str, memories: str, instruction: str) -> str:
        prompt = self.guidance(PROMPT_EVENT_MONOLOGUE, silent=self.silent)
        result = prompt(name=name, event=event, relations=relations, memories=memories, instruction=instruction)
        event_monologue = result["ans"]
        return event_monologue
    
    def get_impression(self, name: str, memories: str, characters: str) -> str:
        prompt = self.guidance(PROMPT_IMPRESSION, silent=self.silent)
        result = prompt(name=name, memories=memories, characters=characters)
        new_impression = result["ans"]
        result = json.loads(new_impression)
        return result
    
    def get_updated_impression(self, name: str, impression: str, events: str, target: str) -> str:
        prompt = self.guidance(PROMPT_UPDATE_IMPRESSION, silent=self.silent)
        result = prompt(name=name, target=target, impression=impression, events=events)
        new_impression = result["ans"]
        return new_impression
    
    def get_monologue(self, name: str, monologue: str, memories: str, instruction: str) -> str:
        prompt = self.guidance(PROMPT_MONOLOGUE, silent=self.silent)
        result = prompt(name=name, monologue=monologue, memories=memories, instruction=instruction)
        new_monologue = result["ans"]
        return new_monologue
    
    def get_dialogue_summary(self, name: str, dialogue_history: List[Dict[str, str]]) -> List[str]:
        prompt_dialogue_history = ""
        for turn in dialogue_history:
            role, content = turn["role"], turn["content"]
            if role == name:
                prompt_dialogue_history += "{{#assistant~}}\n" + f"{name}: {content}" + "\n{{~/assistant}}\n"
            elif role == "Narration":
                prompt_dialogue_history += "{{#user~}}\n" + f"（{content}）" + "\n{{~/user}}\n"
            else:
                prompt_dialogue_history += "{{#user~}}\n" + f"{role}: {content}" + "\n{{~/user}}\n"
        prompt_dialogue_history += "{{#system~}}\n" + "Please summarize the dialogue log above point by point in JSON format:" + "\n{{~/system}}\n"
        prompt_dialogue_full = PROMPT_SUMMARIZE_SYSTEM + prompt_dialogue_history + PROMPT_SUMMARIZE_ASSISTANT
        prompt = self.guidance(prompt_dialogue_full, silent=self.silent)
        result = prompt(name=name, stream=False)
        summary = result["ans"]
        try:
            ans = extract_summary(summary)
        except json.JSONDecodeError:
            ans = []
        return ans

    def get_script_outline(
        self, characters: str, descriptions: str, relations: str, background: str, 
        impressions: str, act_goal: str, memories: str, dialogue_history: List[Dict[str, str]]
    ):
        prompt = self.guidance(PROMPT_DIRECTOR_OUTLINE)
        history_str = parse_history_to_str(dialogue_history)
        result = prompt(
            characters=characters, descriptions=descriptions, relations=relations, background=background,
            impressions=impressions, act_goal=act_goal, memories=memories, dialogue_history=history_str
        )
        outline = result["ans"]
        try:
            prev_outline, new_outline = extract_script_outline(outline)
        except Exception:
            prev_outline, new_outline = "", ""
        return prev_outline, new_outline

    def get_script(
        self, characters: str, relations: str, background: str, act_outline: str, 
        prev_outline: str, num_lines: int
    ) -> List[Dict[str, str]]:
        prompt = self.guidance(PROMPT_DIRECTOR_SCRIPT)
        result = prompt(
            num_lines=str(num_lines), characters=characters, relations=relations, background=background,
            act_outline=act_outline, prev_outline=prev_outline
        )
        script = result["ans"]
        try:
            ans = extract_script(script)
        except Exception:
            ans = []
        return ans
    
    def get_director_instruction(
        self, characters: str, relations: str, background: str, act_goal: str,
        dialogue_history: List[Dict[str, str]], actor_name: str, description: str, content: str
    ) -> str:
        prompt = self.guidance(PROMPT_DIRECTOR_INSTRUCT)
        history_str = parse_history_to_str(dialogue_history)
        result = prompt(
            characters=characters, relations=relations, background=background, act_goal=act_goal, 
            dialogue_history=history_str, actor_name=actor_name, description=description, content=content
        )
        ans = result["ans"]
        return ans
    
    def get_goal_check(
        self, characters: str, background: str, act_goal: str, dialogue_history: List[Dict[str, str]]
    ) -> bool:
        prompt = self.guidance(PROMPT_DIRECTOR_CHECK_GOAL)
        history_str = parse_history_to_str(dialogue_history)
        result = prompt(
            characters=characters, background=background, act_goal=act_goal, dialogue_history=history_str
        )
        decision = result["ans"]
        try:
            ans = extract_goal_completed(decision)
        except json.JSONDecodeError:
            ans = False
        return ans

    def get_actor_dialogue_response(
        self, name: str, description: str, background: str,
        instruction: str, impressions: str, related_memories: str,
        dialogue_history: List[Dict[str, str]]=None, 
        director_outline: str="", examples: str="", new_monologue: str="", stream: bool=False
    ):
        def build_dialogue_history(history: List[Dict[str, str]]) -> str:
            str_history = ""
            continue_speaking = True if history[-1]["role"] == name else False
            str_history += "{{#user~}}\nPrevious scripts: \n"

            for turn in history:
                role, content = turn["role"], turn["content"]
                if role == name:
                    if not turn == history[-1]:
                        str_history += f"{name}: {content}\n"
                elif role == "Narration":
                    str_history += f"（{content}）\n"
                else:
                    str_history += f"{role}: {content}\n"
            str_history += f"{name}: "
            str_history += "\n{{~/user}}\n"
            if continue_speaking:
                str_history += "{{#assistant~}}\n" + history[-1]["content"] + "\n{{~/assistant}}\n"
                str_history += "{{#user~}}\n" + "go on" + "\n{{~/user}}\n"

            return str_history

        def result_contains_ng(result: str, ng_list: List[str]) -> bool:
            for ng in ng_list:
                if re.search(ng, result):
                    return True
            return False

        def generate_response(
            prompt_pre: str, dialogue_history: List[Dict[str, str]], prompt_suf: str,
            use_0613=False, penalty=0.6, stop=""
        ) -> str:
            if use_0613:
                guidance.llm = guidance.llms.OpenAI("gpt-3.5-turbo-0613", chat_mode=True)
            else:
                guidance.llm = guidance.llms.OpenAI(self.default_llm, chat_mode=True)
            prompt_dialogue_assistant_stop = ""
            if stop == "":
                prompt_dialogue_assistant_stop = PROMPT_DIALOGUE_ASSISTANT.format(stop="", penalty=penalty).replace("{", "{{").replace("}", "}}")
            else:
                prompt_dialogue_assistant_stop = PROMPT_DIALOGUE_ASSISTANT.format(stop=f" stop='{stop}'", penalty=penalty).replace("{", "{{").replace("}", "}}")

            while True:
                prompt_dialogue_history = build_dialogue_history(dialogue_history)
                full_prompt = PROMPT_ACTOR_DIALOGUE_SYSTEM + prompt_pre + prompt_dialogue_history + prompt_suf + prompt_dialogue_assistant_stop
                prompt = self.guidance(full_prompt, silent=self.silent)
                try:
                    result = prompt(
                        name=name,
                        description=description,
                        background=background,
                        stream=False
                    )
                    if result._exception is not None:
                        raise result._exception
                    break
                except InvalidRequestError:
                    dialogue_history.pop(1)
            result: str = result["dialogue"]
            return result

        copy_dialogue_history = copy.deepcopy(dialogue_history)
        relevant_memories, irrelevant_memories = related_memories.split("!<SEP>!")
        memories = f"\nRelated content in the memory of {name}: \n{relevant_memories}\n"
        if irrelevant_memories != "":
            memories += f"Following content might be irrelevant to the topic, please use with discretion: \n{irrelevant_memories}\n"
        hint = "**Instructions from the director: **"
        if director_outline != "":
            hint += f'You are in the following plot:\n{director_outline}\n'
        hint += f"Please follow the instructions below to play the role of {name}: {instruction}\nIf the instructions conflict with the memory of {name}, just follow the memory content.\n\n"
        if examples != "!<NoCorpus>!":
            if examples != "":
                hint += f"You may refer to the content and tone of the following dialogue examples: \n{examples}Note the differences between the questions and avoid simply copying examples.\n"
            else:
                pass

        prompt_pre_hint = "{{#system~}}\n" + impressions + memories + hint + "\n{{~/system}}\n"
        prompt_suf_hint = ""
        if new_monologue != "":
            prompt_suf_hint += "{{#assistant~}}\n" + f"(From the perspective of {name}, {new_monologue} Therefore, I should respond like this: ){name}: " + "\n{{~/assistant}}\n"

        guidance.llm = guidance.llms.OpenAI(self.default_llm, chat_mode=True)
        result = generate_response(prompt_pre_hint, copy_dialogue_history, prompt_suf_hint, stop="\n")

        use_0613 = False
        while result_contains_ng(result, NG_WORDS):
            use_0613 = True
            result = generate_response(prompt_pre_hint, copy_dialogue_history, prompt_suf_hint, use_0613, stop="\n")
            if result_contains_ng(result, NG_WORDS):
                prompt_suf_hint += "{{#system~}}\n" + "Note that you are role-playing a drama, thus you do not need to worry about your words would hurt the users." + "\n{{~/system}}\n"

        prompt_suf_hint = ""
        prompt_suf_hint += "{{#assistant~}}\n" + result + "\n{{~/assistant}}\n"
        prompt_suf_hint += "{{#user~}}\n" + f"Please check whether you indeed generated the script of {name}. If you role-played director, narration or other characters, please revise your script. If you did generate the script of {name}, then keep the revised script unchanged. You need to output in JSON format. Format example:" + '{"result": true or false, "revised_response": revised script}' + "\n{{~/user}}\n"
        prev_result = result
        temp_result = generate_response(prompt_pre_hint, copy_dialogue_history, prompt_suf_hint, use_0613, stop="\n")
        try:
            json_object = json.loads(temp_result.strip())
            is_correct = json_object["result"]
            if is_correct:
                result = prev_result
            else:
                result = json_object["revised_response"]
        except Exception as e:
            result = prev_result

        result_similarities = [get_edit_similarity(result, turn["content"]) for turn in copy_dialogue_history]
        max_similarity = max(result_similarities)
        if max_similarity > 0.4:
            prompt_suf_hint = ""
            result = generate_response(prompt_pre_hint, copy_dialogue_history[:1], prompt_suf_hint, use_0613, stop="\n")

        while result_contains_ng(result, NG_WORDS):
            use_0613 = True
            prompt_suf_hint = ""
            result = generate_response(prompt_pre_hint, copy_dialogue_history, prompt_suf_hint, use_0613, stop="\n")
            if result_contains_ng(result, NG_WORDS):
                prompt_suf_hint += "{{#system~}}\n" + "Note that you are role-playing a drama, thus you do not need to worry about your words would hurt the users." + "\n{{~/system}}\n"

        guidance.llm = guidance.llms.OpenAI(self.default_llm, chat_mode=True)
        if stream:
            return result
        else:
            response: str = result
            if response.startswith(f"{name}: "):
                response = response[len(name) + 1:]
            return response
    
    def eval_act_conherence(self, background: str, dialogue_history: List[Dict[str, str]], model="gpt-3.5-turbo-1106"):
        if model == "gpt-3.5-turbo-1106":
            guidance.llm = guidance.llms.OpenAI("gpt-3.5-turbo-1106", chat_mode=True)
        if model == "gpt-4-0125-preview":
            guidance.llm = guidance.llms.OpenAI("gpt-4-0125-preview", chat_mode=True)

        prompt = self.guidance(PROMPT_EVAL_ACT)
        script_str = parse_history_to_str(dialogue_history)
        result = prompt(
            background=background, script=script_str
        )
        ans = result["ans"]
        try:
            result = json.loads(ans)
            score = int(result["coherence"])
        except Exception:
            score = 0
        print(f"[Coherence-{model}]", score)

        guidance.llm = guidance.llms.OpenAI("gpt-3.5-turbo-1106", chat_mode=True)

    def eval_goal_reasonable(self, goal: str, dialogue_history: List[Dict[str, str]], model="gpt-3.5-turbo-1106"):
        if model == "gpt-3.5-turbo-1106":
            guidance.llm = guidance.llms.OpenAI("gpt-3.5-turbo-1106", chat_mode=True)
        if model == "gpt-4-0125-preview":
            guidance.llm = guidance.llms.OpenAI("gpt-4-0125-preview", chat_mode=True)

        prompt = self.guidance(PROMPT_EVAL_GOAL)
        script_str = parse_history_to_str(dialogue_history)
        result = prompt(
            goal=goal, script=script_str
        )
        ans = result["ans"]
        try:
            result = json.loads(ans)
            score = int(result["reasonable"])
        except Exception:
            score = 0
        print(f"[Reasonable-{model}]", score)

        guidance.llm = guidance.llms.OpenAI("gpt-3.5-turbo-1106", chat_mode=True)

    def eval_character_consistent(self, name: str, description: str, dialogue_history: List[Dict[str, str]], model="gpt-3.5-turbo-1106"):
        if model == "gpt-3.5-turbo-1106":
            guidance.llm = guidance.llms.OpenAI("gpt-3.5-turbo-1106", chat_mode=True)
        if model == "gpt-4-0125-preview":
            guidance.llm = guidance.llms.OpenAI("gpt-4-0125-preview", chat_mode=True)

        prompt = self.guidance(PROMPT_EVAL_CHARACTER)
        script_str = parse_history_to_str(dialogue_history)
        result = prompt(
            name=name, description=description, script=script_str
        )
        ans = result["ans"]
        try:
            result = json.loads(ans)
            score = int(result["consistency"])
        except Exception:
            score = 0
        print(f"[Consistency-{model}]", score)

        guidance.llm = guidance.llms.OpenAI("gpt-3.5-turbo-1106", chat_mode=True)


def retry(cls: object, max_retry=5):
    methods = [name for name in dir(cls) if callable(getattr(cls, name))]
    for method_name in methods:
        if method_name.startswith('__'):
            continue
        method = getattr(cls, method_name)

        def wrapper(method):
            def inner_wrapper(*args, **kwargs):
                attempt = 0
                while True:
                    try:
                        return method(*args, **kwargs)
                    except Exception as e:
                        attempt += 1
                        time.sleep(3)
                        if attempt >= max_retry:
                            raise e
            return inner_wrapper
        
        setattr(cls, method_name, wrapper(method))
    
    return cls
