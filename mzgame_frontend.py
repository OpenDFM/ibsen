import argparse
import http.server
import os
import socketserver
import threading

import guidance
from flask import Flask, abort, request
from flask_cors import CORS
from flask_socketio import SocketIO

from api_key import OPENAI_API_KEY
from server.stage import GenerativeStage, Player

API_KEY = OPENAI_API_KEY
os.environ["OPENAI_API_KEY"] = API_KEY

# You may upgrade your `tiktoken` version to use gpt-4o-mini.
LLM_NAME = "gpt-4o-mini"

SCRIPT_PATH = "data/script/hedda_gabler_mzgame.json"

guidance.llm = guidance.llms.OpenAI(LLM_NAME, chat_mode=True)

# Prepare the mzgame web server (frontend) and Flask app (backend)
app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")
CORS(app)

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="frontend/mzgame", **kwargs)

def run_frontend_server(port=8081):
    PORT = port
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving frontend HTTP on port {PORT} (http://localhost:{PORT}/)")
        httpd.serve_forever()


# globals
drama_stage: GenerativeStage = None
drama_player: Player = None

def init_stage():
    stage = GenerativeStage(SCRIPT_PATH, default_llm=LLM_NAME)
    PLAYER_NAME = "Edward Helson"
    player = Player(PLAYER_NAME)
    stage.add_player(player)
    return stage, player

def init_game():
    global drama_stage, drama_player
    print("Initialize the drama game...")
    drama_stage, drama_player = init_stage()
    drama_stage.load_next_act()
    print("Game initialized!")

# sockets
@socketio.on("connect")
def handle_connect():
    print("[handle_connect] Connected with the player!")

@socketio.on("ClientInitializeGame")
def handle_init_game():
    init_game()
    socketio.emit("ServerGameInitialized")

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
    socketio.emit("ServerGameStepped", {"act_status": act_status, "act_no": act_no, "stage_time": stage_time, "id": id})

@socketio.on("ClientGetCurrentBackground")
def handle_get_current_background(data: dict):
    print("[handle_get_current_background] Getting current background...")
    player_place = data.get("place")
    id: str = data.get("id")

    place_to_act_name = {drama_stage.directors[act_name].place: act_name for act_name in drama_stage.current_act_names}
    current_act_name = place_to_act_name.get(player_place)
    background = drama_stage.directors[current_act_name].background
    socketio.emit("ServerGotCurrentBackground", {"background": background, "id": id})


@socketio.on("disconnect")
def handle_disconnect():
    print("Disconnected from the player!")


# routes
@app.route("/", methods=["GET", "POST"])
def index():
    return "Hello world!"

@app.route("/stage")
def stage():
    return "The curtain revealed..."
    
@app.route("/stage/<agent_name>", methods=["GET"])
def agent(agent_name: str):
    print(f"This is route of {agent_name}!")
    try:
        agent = drama_stage.actors(agent_name)
    except Exception as e:
        abort(404)
    
    if request.method == "GET":
        return f"{agent_name} is here."


if __name__ == "__main__":
    args = argparse.ArgumentParser()
    args.add_argument("--backend_port", type=int, default=8080)
    args.add_argument("--frontend_port", type=int, default=8081)
    args = args.parse_args()

    threading.Thread(target=run_frontend_server, args=(args.frontend_port,)).start()
    socketio.run(app, "localhost", args.backend_port, debug=False)
