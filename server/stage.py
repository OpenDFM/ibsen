import json
import os
from typing import Dict, List

import guidance
from langchain.embeddings import OpenAIEmbeddings

from .actor import GenerativeActor
from .director import GenerativeDirector
from .prompter import Prompter
import datetime


class Player:
    def __init__(self, name: str) -> None:
        self.name = name
        self.current_act = ""
        self.action = {"action": "", "moveTo": "", "utterance": ""}


class ScriptManager:
    def __init__(self, script_path: str) -> None:
        self.script = {}
        with open(script_path, "r", encoding="utf-8") as f:
            self.script = json.load(f)
        
        self.title: str = self.script["title"]
        self.intro: str = self.script["intro"]
        self.actors: Dict[str, dict] = self.script["actors"]
        self.acts: List[List[dict]] = self.script["acts"]


class GenerativeStage:
    def __init__(self, script_path: str, default_llm="gpt-4o-mini") -> None:
        self.script = ScriptManager(script_path)
        self.default_llm = default_llm

        self.title = "Stage"
        self.log_identity = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
        self.players: Dict[str, Player] = {}
        self.actors: Dict[str, GenerativeActor] = {}
        self.directors: Dict[str, GenerativeDirector] = {}

        self.act_no = -1
        self.finished = False
        self.current_act_names: List[str] = []
        self.current_datetime = datetime.datetime.strptime("2023-02-20 10:40:00","%Y-%m-%d %H:%M:%S")

        self._init_stage()

    def _init_stage(self):
        self.act_no = -1
        for actor_name, actor_info in self.script.actors.items():
            new_actor = GenerativeActor(
                prompter=Prompter(guidance, default_llm=self.default_llm), 
                name=actor_name,
                embeddings_model=OpenAIEmbeddings(),
            )
            new_actor.description = actor_info["description"]
            new_actor.current_datetime = self.current_datetime
            for relation_name, relation in actor_info["relations"].items():
                new_actor.add_character(character=relation_name, relation=relation, alias=relation_name.split())
            new_actor.get_and_add_impressions()
            self.actors[actor_name] = new_actor

        for act in self.script.acts:
            for subact in act:
                title = subact["title"]
                new_director = GenerativeDirector(
                    prompter=Prompter(guidance, default_llm=self.default_llm),
                    background=subact["background"],
                    act_goals=subact["goals"]
                )
                new_director.act_name = title
                new_director.next_act_name = subact["next_act"]
                new_director.place = subact["place"]
                new_director.note = subact["note"]
                new_director.player_in = subact["player_in"]
                new_director.player_out = subact["player_out"]
                for actor_name in subact["actors"]:
                    new_director.add_actor(self.actors[actor_name])
                self.directors[title] = new_director

    def add_player(self, player: Player):
        if player.name not in self.players:
            self.players[player.name] = player

    def load_next_act(self) -> bool:
        for act_name in self.current_act_names:
            director = self.directors[act_name]
            if director.next_act_name != "":
                for player_name in director.players:
                    self.players[player_name].current_act = director.next_act_name
                self.directors[director.next_act_name].players = director.players
        self.current_act_names.clear()
        self.act_no += 1
        if self.act_no >= len(self.script.acts):
            return True

        self.current_act_names = [act["title"] for act in self.script.acts[self.act_no]]
        for name in self.current_act_names:
            if not self.directors[name].completed:
                self.directors[name].active = True
                self.directors[name].add_dialogue_log({"role": "Narration", "content": self.directors[name].background})
        for player in self.players.values():
            if player.current_act == "":
                player.current_act = self.current_act_names[0]
        return False

    def parse_player_action(self, player: Player):
        if player.action["action"] == "move":
            target_act_name = player.action["moveTo"]
            if player.current_act != target_act_name:
                source_act_name = player.current_act
                source_director = self.directors[source_act_name]
                source_director.remove_player(player.name)
            player.current_act = target_act_name
            target_director = self.directors[target_act_name]
            target_director.add_player(player.name)
        elif player.action["action"] == "talk":
            current_act_name = player.current_act
            current_director = self.directors[current_act_name]
            current_director.add_dialogue_log({"role": player.name, "content": player.action["utterance"]})
            current_director.interrupted = True
        elif player.action["action"] == "moveTalk":
            target_act_name = player.action["moveTo"]
            if player.current_act != target_act_name:
                source_act_name = player.current_act
                source_director = self.directors[source_act_name]
                source_director.remove_player(player.name)
            player.current_act = target_act_name
            target_director = self.directors[target_act_name]
            target_director.add_player(player.name)
            target_director.add_dialogue_log({"role": player.name, "content": player.action["utterance"]})
            target_director.interrupted = True
        elif player.action["action"] == "none":
            # If the director allocates the turn to the player but it does nothing, we want to tell the director about this fact.
            # Another difference to the paper for better experience.
            current_act_name = player.current_act
            current_director = self.directors[current_act_name]
            if current_director.interrupted:
                current_director.add_dialogue_log({"role": "Narration", "content": f"{player.name} does nothing."})
        else:
            raise AssertionError(player.action)

    def is_current_acts_active(self) -> bool:
        return sum([self.directors[act_name].active for act_name in self.current_act_names]) != 0

    def step(self):
        for player in self.players.values():
            self.parse_player_action(player)
        self.current_datetime += datetime.timedelta(minutes=1)
        for actor in self.actors.values():
            actor.current_datetime = self.current_datetime

        act_status = {}
        for act_name in self.current_act_names:
            director = self.directors[act_name]
            if not director.active:
                continue

            next_script = director.direct_next_turn()
            if next_script["role"] in director.players:
                director.interrupted = True
            else:
                print(f"{next_script['role']}: {next_script['content']}")
                director.add_dialogue_log(next_script)
            director.check_and_update_goal()
            act_status[act_name] = {
                "next_script": next_script,
                "active": director.active,
                "players": [player.name for player in self.players.values() if player.current_act == act_name]
            }

        self.save_stage_log(name=f"{self.title}_{self.log_identity}")
        if not self.is_current_acts_active():
            self.finished = self.load_next_act()
        return act_status

    def save_stage_log(self, dir="server/logs", name="dialogue_log"):
        LOG_NAME = name + ".json"
        logs = {actor_name: self.actors[actor_name].dialogue_history.dialogue_history for actor_name in self.actors}
        if not os.path.exists(dir):
            os.makedirs(dir)
        with open(os.path.join(dir, LOG_NAME), "w", encoding="utf-8") as fw:
            json.dump(logs, fw, ensure_ascii=False, indent=4)
