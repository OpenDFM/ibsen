import copy
import os

import guidance

from api_key import OPENAI_API_KEY
from server.actor import GenerativeActor
from server.stage import GenerativeStage, Player

API_KEY = OPENAI_API_KEY
os.environ["OPENAI_API_KEY"] = API_KEY

# You may upgrade your `tiktoken` version to use gpt-4o-mini.
LLM_NAME = "gpt-4o-mini"

SCRIPT_PATH = "data/script/hedda_gabler_modern.json"

guidance.llm = guidance.llms.OpenAI(LLM_NAME, chat_mode=True)

hedda_stage = GenerativeStage(SCRIPT_PATH, default_llm=LLM_NAME)
PLAYER_NAME = "Edward Helson"
player = Player(PLAYER_NAME)
hedda_stage.add_player(player)

def prompt_player_input() -> bool:
    print(player.name, "is in the Act: ", player.current_act)
    act_dict = {}
    for act_name in hedda_stage.current_act_names:
        act_dict[len(act_dict) + 1] = act_name
    candidate_str = "; ".join([f"[{k}] {v}" for k, v in act_dict.items()] + ["[0] Do nothing; \ninput [-1] for interview."])
    print("Input the numbers below to enter the act, or directly input the text to begin a conversation: " + candidate_str)
    user_input = input()
    try:
        number_input = int(user_input)
        if number_input == 0:
            player.action = {"action": "none", "moveTo": player.current_act, "utterance": ""}
            return True
        elif number_input == -1:
            prompt_guide_interview()
            return False
        elif number_input in act_dict:
            player.action = {"action": "move", "moveTo": act_dict[number_input], "utterance": ""}
            return True
        else:
            raise ValueError
    except ValueError:
        string_input = str(user_input)
        player.action = {"action": "talk", "moveTo": player.current_act, "utterance": string_input}
        return True

def prompt_guide_interview():
    def prompt_interview(actor: GenerativeActor):
        while True:
            print("Input the question you are interested in, or input [0] to exit the interview: ")
            user_input = input()
            if user_input == "0":
                actor.interview_history.clear()
                return
            else:
                response = actor.interview(user_input)
                print(f"{actor.name}：{response}")

    actor_dict = {}
    for actor_name in hedda_stage.actors:
        actor_dict[len(actor_dict) + 1] = actor_name
    candidate_str = "; ".join([f"[{k}] {v}" for k, v in actor_dict.items()] + ["[0] Exit"])
    while True:
        print("Input the numbers below to select an actor you want to interview: " + candidate_str)
        user_input = input()
        try:
            number_input = int(user_input)
            if number_input == 0:
                return
            elif number_input in actor_dict:
                actor_name = actor_dict[number_input]
                actor = hedda_stage.actors[actor_name]
                actor.interview_history = copy.deepcopy(actor.dialogue_history.active_history)
                actor.interview_history.append({"role": "Narration", "content": f"(Director has paused the play. Now please continue to answer the questions of user as the role of {actor.name}.)"})
                prompt_interview(actor)
            else:
                raise ValueError
        except ValueError:
            pass


print("********************", hedda_stage.script.title, "********************")
print("Drama Background")
print(hedda_stage.script.intro)
input("Press Any Key to Continue...")
hedda_stage.load_next_act()

finished = False
while not finished:
    has_input = False
    while not has_input:
        has_input = prompt_player_input()
    hedda_stage.step()
    finished = hedda_stage.finished
prompt_guide_interview()
