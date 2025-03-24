from collections import deque
from typing import Deque, Dict, List

from .actor import GenerativeActor
from .prompter import Prompter
from .utils import DialogueLogger, parse_document_to_str


class GenerativeDirector:
    def __init__(self, prompter: Prompter, background="", act_goals: List[str]=[]) -> None:
        self.act_name = ""
        self.next_act_name = ""
        self.place = ""
        self.actors: Dict[str, GenerativeActor] = {}
        self.players: List[str] = []
        self.player_in = ""
        self.player_out = ""
        self.note = ""

        self.background = background
        self.act_goals: Deque[str] = deque(act_goals)
        self.dialogue_logger = DialogueLogger(prompter, owner="Scene Director", background=background)

        self.eval_dialogue_history = []

        self.prompter = prompter
        self.current_goal = "" if len(self.act_goals) == 0 else self.act_goals.popleft()
        self.current_goal_counter = 0
        self.current_outline = ""
        self.current_scripts: Deque[Dict[str, str]] = deque()
        self.interrupted = False
        self.completed = True if self.current_goal == "" else False
        self.active = False


    def add_actor(self, actor: GenerativeActor):
        if actor.name not in self.actors:
            self.actors[actor.name] = actor
    
    def remove_actor(self, actor: GenerativeActor):
        pass

    def add_player(self, player: str, notify=True):
        "Add a player controlled by human. Director will not interfere the behaviour of players."
        if player not in self.players:
            self.players.append(player)
            if self.active and notify:
                self.add_dialogue_log({"role": "Narration", "content": self.player_in})
                self.interrupted = True

    def remove_player(self, player: str, notify=True):
        try:
            self.players.remove(player)
            if self.active and notify:
                self.add_dialogue_log({"role": "Narration", "content": self.player_out})
                self.interrupted = True
        except ValueError:
            return
        
    def add_dialogue_log(self, log: Dict[str, str]):
        if self.active:
            self.dialogue_logger.add_log(log)
            self.eval_dialogue_history.append(log)
            for actor in self.actors.values():
                summarized_history = actor.dialogue_history.add_log(log)
                for summary in summarized_history:
                    actor.add_memory(summary, force_influence=True)
                if len(summarized_history) > 0:
                    # self.prompter.eval_character_consistent(actor.name, actor.description, actor.dialogue_history.active_history)
                    actor.update_character_impression(summarized_history)

    def generate_new_script(self, lines=5):
        list_characters = [actor for actor in self.actors] + self.players
        center_actor = self.actors[list_characters[0]]
        list_descriptions = [actor.description for actor in self.actors.values()]
        current_goal = self.current_goal

        related_characters = []
        related_characters.extend(list_characters)
        for turn in self.dialogue_logger.active_history:
            content = turn["content"]
            character_docs = center_actor.get_related_character_docs(content)
            related_characters.extend([doc.page_content for doc in character_docs])
        related_characters = list(set(related_characters))
        list_relations = center_actor.get_relations_with(related_characters)

        related_impressions = []
        for actor in self.actors.values():
            impressions = f"Impressions of {actor.name} on the characters below:\n"
            result = actor.get_impressions_of(related_characters)
            for name, impression in result.items():
                impressions += f"On {name}: {impression}\n"
            related_impressions.append(impressions)

        related_memories = []
        for actor in self.actors.values():
            memories = f"Character profile of {actor.name}:\n"
            documents = actor.retriever.get_relevant_documents(current_goal, current_time=actor.current_datetime, top_k=3)
            str_documents = parse_document_to_str(documents, return_monologue=False).split("!<SEP>!")[0]
            memories += str_documents
            if str_documents.strip() != "":
                related_memories.append(memories)

        prev_outline, new_outline = self.prompter.get_script_outline(
            "，".join(list_characters), "\n".join([]), 
            "\n".join(list_relations), "", "\n".join(related_impressions), 
            current_goal, "\n".join(related_memories), self.dialogue_logger.active_history
        )
        self.current_outline = new_outline
        new_scripts = self.prompter.get_script(
            "，".join(list_characters), "\n".join(list_relations), "",
            new_outline, prev_outline, lines
        )
        return new_scripts

    def generate_instruction(self, actor: GenerativeActor, content: str) -> str:
        list_characters = [actor for actor in self.actors] + self.players
        list_relations = actor.get_relations_with(list_characters)  # TODO
        current_goal = self.current_goal

        instruction = self.prompter.get_director_instruction(
            "，".join(list_characters), "\n".join(list_relations), "",
            current_goal, self.dialogue_logger.active_history, actor.name, actor.description, content
        )
        return instruction

    def direct_next_turn(self) -> Dict[str, str]:
        if not self.completed:
            if self.interrupted or len(self.current_scripts) == 0:
                new_scripts = self.generate_new_script(lines=5)
                print(new_scripts)
                self.current_scripts = deque(new_scripts)

                if len(self.current_scripts) == 0:
                    new_scripts = self.generate_new_script(lines=4)
                    self.current_scripts = deque(new_scripts)
                assert len(self.current_scripts) != 0, "New script has length 0"
        self.interrupted = False
        next_script = self.current_scripts.popleft()
        next_role, next_content = next_script["role"], next_script["content"]
        # When a player's "talk" generates the new script, sometimes the next script's role is the player again.
        # This is not a good experience for the player; we want to skip this turn. This is a little different with the paper :( 
        while next_role in self.players and self.dialogue_logger.active_history[-1]["role"] == next_role:
            next_script = self.current_scripts.popleft()
            next_role, next_content = next_script["role"], next_script["content"]

        revised_next_script = {"role": next_role, "content": next_content}
        if next_role in [actor for actor in self.actors]:
            next_actor = self.actors.get(next_role)
            next_instruction = self.generate_instruction(next_actor, next_content)
            next_instruction = ""
            next_actor.instruction = next_instruction
            next_content = next_actor.generate_actor_response(background=self.background, outline=self.current_outline)
            revised_next_script["content"] = next_content
        elif next_role in self.players:
            revised_next_script["content"] = "!<Await>!"
        elif next_role == "Narration":
            pass
        else:
            pass
            # raise AssertionError(next_script)
        
        return revised_next_script
    
    def check_and_update_goal(self, min=5, max=8):
        list_characters = [actor for actor in self.actors] + self.players
        self.current_goal_counter += 1
        if self.current_goal_counter < min:
            completed = False
        elif self.current_goal_counter > max:
            completed = True
        else:
            completed = self.prompter.get_goal_check(
                "，".join(list_characters), "", self.current_goal,
                self.dialogue_logger.active_history[-self.current_goal_counter:]
            )
        if completed:
            # self.prompter.eval_goal_reasonable(goal=self.current_goal, dialogue_history=self.eval_dialogue_history)
            self.eval_dialogue_history.clear()
            self.current_scripts.clear()
            if len(self.act_goals) > 0:
                self.current_goal = self.act_goals.popleft()
                self.current_goal_counter = 0
            else:
                self.current_goal = ""
                self.completed = True
                # self.prompter.eval_act_conherence(background=self.background, dialogue_history=self.dialogue_logger.dialogue_history)
                if len(self.current_scripts) == 0:
                    self.active = False
                print(f"Act completed: {self.act_name}")
