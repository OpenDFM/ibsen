import copy
import os

import guidance

from api_key import OPENAI_API_KEY
from server.actor import GenerativeActor
from server.stage import GenerativeStage, Player

from flask import Flask, request, abort
from flask_socketio import SocketIO
from flask_cors import CORS

API_KEY = OPENAI_API_KEY
os.environ["OPENAI_API_KEY"] = API_KEY

LLM_NAME = "gpt-3.5-turbo-1106"

SCRIPT_PATH = "data/script/hedda_gabler_modern.json"

guidance.llm = guidance.llms.OpenAI(LLM_NAME, chat_mode=True)

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")  # 在这里配置CORS！
CORS(app)


regionId_to_place = {
    1: "Hotel lobby",
    2: "Press conference hall",
    3: "Press conference backstage",
    11: "Hotel corridor",
}

def init_stage():
    stage = GenerativeStage(SCRIPT_PATH, default_llm=LLM_NAME)
    PLAYER_NAME = "Edward Helson"
    player = Player(PLAYER_NAME)
    stage.add_player(player)
    return stage, player

# globals
drama_stage: GenerativeStage = None
drama_player: Player = None

def init_game():
    global drama_stage, drama_player
    print("Initialize the drama game...")
    drama_stage, drama_player = init_stage()
    # drama_stage.stage_clock.activate()
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
    客户端请求步进游戏。接收`data`作为玩家的动作。
    ```
    {
        "action": "none" | "move" | "talk" | "moveTalk",
        "moveTo": regionId,
        "utterance": utterance,
        "id": uuid
    }
    ```
    """
    print("[handle_step_game] 步进游戏...")
    action: str = data.get("action")
    moveTo: int = data.get("moveTo")
    utterance: str = data.get("utterance")
    id: str = data.get("id")

    place_to_act_name = {drama_stage.directors[act_name]["place"]: act_name for act_name in drama_stage.current_act_names}
    moveTo_place = regionId_to_place.get(moveTo)
    moveTo_act_name = place_to_act_name.get(moveTo_place)
    if moveTo_act_name == drama_player.current_act:
        if action == "move":
            action = "none"
        elif action == "moveTalk":
            action = "talk"
    drama_player.action = {"action": action, "moveTo": moveTo_act_name, "utterance": utterance}
    finished = drama_stage.step()
    act_no = drama_stage.act_no
    socketio.emit("ServerGameStepped", {"finished": finished, "act_no": act_no, "id": id})

@socketio.on("ClientRaiseAPDialogueSession")
def handle_raise_ap_dialogue_session(data: dict):
    """
    客户端发起了与Agent的对话请求。Agent-Player的对话进程建立，Agent首先产生一个回复并返回。

    `data`应是json格式的数据：
    ```
    {
        "player": 玩家的名字,
        "target_agent": 目标Agent的名字,
        "stream": 是否流式传输
    }
    ```
    """
    print("[handle_raise_ap_dialogue_session] 接收到数据：" + str(data))
    target_agent_name = data.get("target_agent")
    target_agent = drama_agents.get(target_agent_name)
    player = data.get("player")
    stream = data.get("stream")

    full_response = ""
    # TODO: 当agent.reflecting==True时，暂停接受回答
    if not stream:  # 非流式传输，直接返回字符串
        first_response = drama_stage.create_ap_dialogue_session(target_agent, player, stream=False)
        socketio.emit("ServerAPDialogueSessionResponse", {"response": first_response})
        full_response = first_response
    else:           # 流式传输，从生成器中迭代结果
        result_generator = drama_stage.create_ap_dialogue_session(target_agent, player, stream=True)
        for chunk in result_generator:
            partial_result = chunk.get("dialogue", "")
            if partial_result == "": continue
            if partial_result.startswith("盖海妲："):
                partial_result = partial_result[4:]
            socketio.emit("ServerAPDialogueSessionResponse", {"response": partial_result})
            sleep(0.1)
        full_response = partial_result
    socketio.emit("ServerAPDialogueSessionResponseEnd", {"response": full_response})
    print("【改写后】", full_response)
    # 用对话记录更新Agent的记忆；TODO：在这里实现记忆更新似乎不太合适
    target_agent.dialogue_history.append((target_agent.name, full_response))
    memory = f"{player}前来向{target_agent.name}搭话\n{target_agent.name}对{player}说：“{full_response}”"
    target_agent.memory_buffer.append(memory)

@socketio.on("ClientAPDialogueSessionResponse")
def handle_ap_dialogue_session_response(data: dict):
    """
    客户端在一个已有的对话进程中发出了回复。Agent应处理Player发来的回复并生成自己的回复。
    
    `data`应是json格式的数据：
    ```
    {
        "player": 玩家的名字,
        "target_agent": 目标Agent的名字,
        "player_response": 玩家输入的回复,
        "stream": 是否流式传输
    }
    ```
    """
    print("[handle_ap_dialogue_session_response] 接收到数据：" + str(data))
    target_agent_name = data.get("target_agent")
    target_agent = drama_agents.get(target_agent_name)
    player = data.get("player")
    player_response = data.get("player_response")
    stream = data.get("stream")

    full_response = ""
    if not stream:
        agent_response = drama_stage.interact_ap_dialogue_session(target_agent, player, player_response, stream=False)
        socketio.emit("ServerAPDialogueSessionResponse", {"response": agent_response})
        full_response = agent_response
    else:
        result_generator = drama_stage.interact_ap_dialogue_session(target_agent, player, player_response, stream=True)
        for chunk in result_generator:
            partial_result = chunk.get("dialogue", "")
            if partial_result == "": continue
            if partial_result.startswith("盖海妲："):
                partial_result = partial_result[4:]
            socketio.emit("ServerAPDialogueSessionResponse", {"response": partial_result})
            sleep(0.1)
        full_response = partial_result
    socketio.emit("ServerAPDialogueSessionResponseEnd", {"response": full_response})
    print("【改写后】", full_response)

    target_agent.dialogue_history.append((target_agent.name, full_response))
    memory = f"{player}对{target_agent.name}说：“{player_response}”\n{target_agent.name}对{player}说：“{full_response}”"
    target_agent.memory_buffer.append(memory)

@socketio.on("ClientEndAPDialogueSession")
def handle_end_ap_dialogue_session(data: dict):
    """
    客户端请求结束现有的对话进程。Agent应进行相关的对话清理工作。

    `data`应是json格式的数据：`{"target_agent": 目标Agent的名字}`
    """
    print("[handle_end_ap_dialogue_session] 接收到数据：" + str(data))
    target_agent_name = data.get("target_agent")
    target_agent = drama_agents.get(target_agent_name)

    drama_stage.end_ap_dialogue_session(target_agent)

@socketio.on("disconnect")
def handle_disconnect():
    print("已与玩家断开连接！")


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
    # if request.method == "POST":
    #     received_data = request.get_json()
    #     print(f"received data: {received_data}")
    #     message = received_data['messages']
    #     return_data = {
    #         'status': 'success',
    #         'message': f'我接收到了你的信息：{message}\n'
    #     }
    #     return flask.Response(response=json.dumps(return_data, ensure_ascii=False), status=201)


if __name__ == "__main__":
    socketio.run(app, "localhost", 8080, debug=False)
