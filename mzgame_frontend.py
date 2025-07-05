import argparse
import copy
import http.server
import os
import socketserver
import threading
from typing import Dict, Union

import guidance
from flask import Flask, abort, request
from flask_cors import CORS
from flask_socketio import SocketIO

from api_key import OPENAI_API_KEY
from server.stage import GenerativeStage, Player

API_KEY = OPENAI_API_KEY
os.environ["OPENAI_API_KEY"] = API_KEY

# NOTE: tiktoken currently does not support gpt-4.1-nano, you should modify
# the tiktoken/model.py file to add the encoding for gpt-4.1-nano:
# MODEL_PREFIX_TO_ENCODING["gpt-4.1-"] = "o200k_base"
LLM_NAME = "gpt-4.1-nano"

SCRIPT_PATH = "data/script/hedda_gabler_mzgame.json"

guidance.llm = guidance.llms.OpenAI(LLM_NAME, chat_mode=True)

# Prepare the mzgame web server (frontend) and Flask app (backend)
app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")
CORS(app)

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="frontend/mzgame-zh", **kwargs)

def run_frontend_server(port=8081):
    PORT = port
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving frontend HTTP on port {PORT} (http://localhost:{PORT}/)")
        httpd.serve_forever()


# globals
user_sessions: Dict[str, Dict[str, Union[GenerativeStage, Player]]] = {}  # username: {"stage": GenerativeStage, "player": Player}
sid_sessions = {}       # sid: username

with open("data/username.txt", "r", encoding="utf-8") as f:
    allowed_usernames = [line.strip() for line in f if line.strip()]

def init_stage():
    stage = GenerativeStage(SCRIPT_PATH, default_llm=LLM_NAME)
    PLAYER_NAME = "海尔森"
    player = Player(PLAYER_NAME)
    stage.add_player(player)
    return stage, player

# sockets
@socketio.on("connect")
def handle_connect():
    username = request.args.get("username")
    if not username or username not in allowed_usernames:
        print(f"[handle_connect] Invalid username: {username}")
        abort(400, "Invalid username")
    print(f"[handle_connect] Connected with the player: {username}!")
    sid_sessions[request.sid] = username
    socketio.emit("ServerUserConnected", {"username": username}, room=request.sid)

@socketio.on("ClientInitializeGame")
def handle_init_game():
    username = sid_sessions.get(request.sid)
    if not username or username not in allowed_usernames:
        print(f"[handle_init_game] Invalid username: {username}")
        abort(400, "Invalid username")
    print(f"[handle_init_game] Initializing game for user: {username}")
    drama_stage, drama_player = init_stage()
    drama_stage.load_next_act()
    user_sessions[username] = {"stage": drama_stage, "player": drama_player}
    socketio.emit("ServerGameInitialized", room=request.sid)

@socketio.on("ClientStepGame")
def handle_step_game(data: dict):
    """
    The client request for a stage step. Recieve `data` as the player's action.
    ```
    {
        "action": "none" | "move" | "talk" | "moveTalk",
        "moveTo": regionId,
        "utterance": utterance,
        "id": uuid
    }
    ```
    """
    print("[handle_step_game] Stepping stage...")
    username = sid_sessions.get(request.sid)
    assert username and username in user_sessions, "[handle_step_game] Session not found"
    session = user_sessions[username]
    drama_stage = session["stage"]
    drama_player = session["player"]

    action: str = data.get("action")
    moveTo: str = data.get("moveTo")
    utterance: str = data.get("utterance")
    id: str = data.get("id")

    place_to_act_name = {drama_stage.directors[act_name].place: act_name for act_name in drama_stage.current_act_names}
    moveTo_act_name = place_to_act_name.get(moveTo)
    if moveTo_act_name == drama_player.current_act:
        if action == "move":
            action = "none"
        elif action == "moveTalk":
            action = "talk"
    drama_player.action = {"action": action, "moveTo": moveTo_act_name, "utterance": utterance}
    act_status = drama_stage.step()
    act_no = drama_stage.act_no
    stage_finished = drama_stage.finished
    stage_time = drama_stage.current_datetime.strftime("%Y-%m-%d %H:%M:%S")
    socketio.emit("ServerGameStepped", {"act_status": act_status, "act_no": act_no, "stage_time": stage_time, "id": id}, room=request.sid)

@socketio.on("ClientGetCurrentBackground")
def handle_get_current_background(data: dict):
    print("[handle_get_current_background] Getting current background...")
    username = sid_sessions.get(request.sid)
    assert username and username in user_sessions, "[handle_get_current_background] Session not found"
    drama_stage = user_sessions[username]["stage"]

    player_place = data.get("place")
    id: str = data.get("id")

    place_to_act_name = {drama_stage.directors[act_name].place: act_name for act_name in drama_stage.current_act_names}
    current_act_name = place_to_act_name.get(player_place)
    background = drama_stage.directors[current_act_name].background
    socketio.emit("ServerGotCurrentBackground", {"background": background, "id": id}, room=request.sid)

@socketio.on("ClientInterviewActor")
def handle_interview_actor(data: dict):
    """
    The client request to interview an actor.
    ```
    {
        "actorName": actor_name,
        "status": "init" | "continue" | "end",
        "question": utterance,
        "id": uuid
    }
    """
    print("[handle_interview_actor] Interviewing actor...")
    username = sid_sessions.get(request.sid)
    assert username and username in user_sessions, "[handle_interview_actor] Session not found"
    drama_stage = user_sessions[username]["stage"]

    actor_name: str = data.get("actorName")
    status: str = data.get("status")
    question: str = str(data.get("question"))
    id: str = data.get("id")

    assert actor_name in drama_stage.actors, f"[handle_interview_actor] Actor {actor_name} not found"
    actor = drama_stage.actors[actor_name]
    if status == "end":
        print(f"[handle_interview_actor] Ending interview with actor: {actor_name}")
        actor.interview_history.clear()
        return
    elif status == "init":
        actor.interview_history = copy.deepcopy(actor.dialogue_history.active_history)
        actor.interview_history.append({"role": "旁白", "content": f"（导演暂停了演出。请以{actor.name}的身份，继续回答用户的问题。）"})
    response = actor.interview(question)
    print(f"[handle_interview_actor] Actor {actor_name} responded: {response}")
    socketio.emit("ServerInterviewActorResponse", {"response": response, "id": id}, room=request.sid)

@socketio.on("disconnect")
def handle_disconnect():
    sid = request.sid
    username = sid_sessions.pop(sid, None)
    if username:
        user_sessions.pop(username, None)
    print(f"Disconnected sid={sid}, user={username}")


# routes
@app.route("/", methods=["GET", "POST"])
def index():
    return "Hello world!"

@app.route("/stage")
def stage():
    return "The curtain revealed..."


if __name__ == "__main__":
    args = argparse.ArgumentParser()
    args.add_argument("--frontend_port", type=int, default=8081)
    args = args.parse_args()

    threading.Thread(target=run_frontend_server, args=(args.frontend_port,)).start()
    socketio.run(app, "localhost", 8080, debug=False)
