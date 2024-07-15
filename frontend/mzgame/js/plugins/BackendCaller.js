/*:
 * @target MZ
 * @plugindesc 对后端进行调用，实现Agent交互
 * @author cnlnpjhsy
 * @url https://github.com/cnlnpjhsy/ChatTherapist
 * @help BackendCaller.js
 * 
 * 该插件可以处理游戏中玩家与Agent之间的交互，并与后端服务器进行socket通信。
 * 
 * @param BackendURL
 * @type string
 * @default localhost:8080
 * @desc 后端接口的URL，API请求会发向这里
 * 
 * @param isStreamingResponse
 * @type boolean
 * @default true
 * @desc 是否启用流式传输回复
 * 
 * @param StagePhaseVarID
 * @type variable
 * @default 1
 * @desc 存储舞台阶段的变量编号，用于控制事件的进行顺序
 * 
 * @param ResponseMessageVarID
 * @type variable
 * @default 2
 * @desc 接收到后端回复时要将回复存储进的变量编号
 * 
 * @param StageTimeVarID
 * @type variable
 * @default 3
 * @desc 接收到后端传来的舞台时间时要将时间存储进的变量编号
 * 
 * @param UserMessageVarID
 * @type variable
 * @default 4
 * @desc 存储用户输入消息的变量编号
 * 
 * @param DialogueLogVarID
 * @type variable
 * @default 5
 * @desc 存储对话历史记录的变量编号
 * 
 * @param ResponseRecievedSwitchID
 * @type switch
 * @default 1
 * @desc 指示是否接收到了后端回复的开关编号
 * 
 * @param ResponseEndSwitchID
 * @type switch
 * @default 2
 * @desc 流式传输时，指示回复是否完成的开关编号
 * 
 * @param GameInitializedSwitchID
 * @type switch
 * @default 3
 * @desc 指示舞台与Agent是否已经完成了初始化的开关编号
 * 
 * ==================================================
 * @command init_game
 * @text 重置游戏状态
 * @desc 初始化当前所有Agent的记忆与状态
 * 
 * @arg force
 * @text 强制重置
 * @type boolean
 * @default false
 * @desc 不关心是否正在进行已有的重置，直接强制进行（仅新游戏开始时）
 * 
 * ==================================================
 * @command step_game
 * @text 步进游戏进程
 * @desc 结束当前时间段内玩家行动，推进舞台事件并为所有Agent更新必要信息
 * 
 * ==================================================
 * @command get_script
 * @text 获取对话剧本
 * @desc 从游戏目录中读取dialogue_script.json文件。给定剧本发生的阶段，返回一个字典，包含已对话语句与未对话语句的两个列表。
 * 
 * @arg script_id
 * @text 剧本阶段ID
 * @type string
 * @desc 要读取的剧本内容的键
 * 
 * @arg var_id
 * @text 存储的变量ID
 * @type variable
 * @desc 将剧本内容存储进哪个变量
 * 
 * ==================================================
 * @command generate_response
 * @text 生成回复
 * @desc Agent根据场况与对话历史，生成相应的回复
 * 
 * @arg target_agent
 * @text 目标Agent名字
 * @type string
 * @desc 令对应的Agent生成对话
 * 
 * @arg dialogue_history
 * @text 对话历史
 * @type string
 * @default $gameVariables.value().history
 * @desc 能够读取当前演出对话历史的javascript代码
 * 
 * @arg hint
 * @text 场况指示
 * @type string
 * @default 海尔森进入了休息室。
 * @desc 提供给Agent的场况指示，提示Agent生成符合场况的回复
 * 
 * ==================================================
 * @command raise_dialogue
 * @text 发起对话
 * @desc 与Agent互动时，由Agent发起对话
 * 
 * @arg target_agent
 * @text 目标角色名
 * @type string
 * @default 盖海妲
 * @desc 要交互的Agent的名字。TODO：使用列表来选择
 * 
 * @arg player
 * @text 玩家名
 * @type string
 * @default 海尔森
 * @desc 玩家自己的名字。TODO：直接从游戏中读取
 * 
 * ==================================================
 * @command response_dialogue
 * @text 回复对话
 * @desc 对Agent的对话做出回复
 * 
 * @arg target_agent
 * @text 目标角色名
 * @type string
 * @default 盖海妲
 * @desc 要交互的Agent的名字。TODO：使用列表来选择
 * 
 * @arg player
 * @text 玩家名
 * @type string
 * @default 海尔森
 * @desc 玩家自己的名字。TODO：直接从游戏中读取
 * 
 * @arg player_response_varID
 * @text 回复来源变量
 * @type variable
 * @default 1
 * @desc 要发送的玩家回复所在的变量编号
 * 
 * ==================================================
 * @command end_dialogue
 * @text 结束对话
 * @desc 结束与Agent的互动
 * 
 * @arg target_agent
 * @text 目标角色名
 * @type string
 * @default 盖海妲
 * @desc 要交互的Agent的名字。TODO：使用列表来选择
 * 
 * ==================================================
 * @command dispatch_history
 * @text 分发对话记录
 * @desc 将一个对话语句分发给指定场景下的所有Agent
 * 
 * @arg scene_id
 * @text 区域ID
 * @type number
 * @desc 指定能接收到对话语句的区域ID
 * 
 * @arg role
 * @text 语句角色
 * @type string
 * @desc 能够读取出当前对话语句的发言人的javascript代码。示例：$gameVariables._data[22].current_utterance.role
 * 
 * @arg utterance
 * @text 语句内容
 * @type string
 * @desc 能够读取出当前对话语句的javascript代码。示例：$gameVariables.value(2)["约翰"];
 * 
 * ==================================================
 * @command set_instruction
 * @text 设置扮演指导
 * @desc 为指定Agent更新扮演指导instruction
 * 
 * @arg target_agent
 * @text 目标角色名
 * @type string
 * @desc 要修改扮演指导的Agent的名字
 * 
 * @arg instruction
 * @text 扮演指导
 * @type string
 * @desc 要修改的扮演指导的内容
 * 
 * ==================================================
 */

(() => {
	delete Input.keyMapper[88];

	const pluginName = "BackendCaller";
	const pluginParameters = PluginManager.parameters(pluginName);
	const backendURL = String(pluginParameters["BackendURL"]) || "http://localhost:8080";
	const isStreamingResponse = Boolean(pluginParameters["isStreamingResponse"] === "true");

	const stagePhaseVarID = Number(pluginParameters["StagePhaseVarID"]) || 1;
	const responseMessageVarID = Number(pluginParameters["ResponseMessageVarID"]) || 2;
	const stageTimeVarID = Number(pluginParameters["StageTimeVarID"]) || 3;
	const userMessageVarID = Number(pluginParameters["UserMessageVarID"]) || 4;
	const dialogueLogVarID = Number(pluginParameters["DialogueLogVarID"]) || 5;
	let dialogueLog = [];

	const responseRecievedSwitchID = Number(pluginParameters["ResponseRecievedSwitchID"]) || 1;
	const responseEndSwitchID = Number(pluginParameters["ResponseEndSwitchID"]) || 2;
	const gameInitializedSwitchID = Number(pluginParameters["GameInitializedSwitchID"]) || 3;

	// 重写Game_Event与Game_Player对象，增加_utterance属性用于存储事件的对话语句
    const _GameEventInitialize = Game_Event.prototype.initialize;
    Game_Event.prototype.initialize = function() {
        _GameEventInitialize.apply(this, arguments);
        this._utterance = "";
    };
    Game_Event.prototype.setUtterance = function(text) {
        this._utterance = text;
    };
    Game_Event.prototype.getUtterance = function() {
        return this._utterance;
	};
	
    const _GamePlayerInitialize = Game_Player.prototype.initialize;
    Game_Player.prototype.initialize = function() {
        _GamePlayerInitialize.apply(this, arguments);
        this._utterance = "";
    };
    Game_Player.prototype.setUtterance = function(text) {
        this._utterance = text;
    };
    Game_Player.prototype.getUtterance = function() {
        return this._utterance;
	};
	
	// 重写文本对象，使之能够读取上述属性
	// const _WindowBaseConvertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
	// Window_Base.prototype.convertEscapeCharacters = function (text) {
	// 	text = _WindowBaseConvertEscapeCharacters.apply(this, arguments);
	// 	if (/\x1bE\[(\d+)\]/gi.exec(text)) {
	// 		const event_id = /\x1bE\[(\d+)\]/gi.exec(text)[1];
	// 		const event = $gameMap.events()[parseInt(event_id) - 1];
	// 		const utterance = event.getUtterance();
	// 		const wrapped_utterance = lineWrapper(utterance, 20)
	// 		text = text.replace(/\x1bE\[(\d+)\]/gi, (_, p1) =>
	// 			`${wrapped_utterance}`
	// 		);
	// 	}
	// 	return text;
	// };

	// 隐藏计时器
	const _SpriteTimerUpdateVisibility = Sprite_Timer.prototype.updateVisibility;
	Sprite_Timer.prototype.updateVisibility = function() {
		this.visible = false;
	}

	const socket = io(backendURL)
	let connected = false;
	socket.on("connect", () => {
		console.log("成功连接后端服务器！");
		connected = true;
	});

	socket.on("disconnect", () => {
		console.log("已与后端服务器断开连接！");
		connected = false;
	});

	/* 前后端通信部分 */

	function generateUUID() {
		return uuid.v4();
	}

	PluginManager.registerCommand(pluginName, "init_game", args => {
		const force_init = Boolean(args.force === "true");
		if (!force_init && $gameSwitches.value(gameInitializedSwitchID) === false) {
			console.log("错误：游戏尚未完成初始化，无法重置！");
			return;
		}
		$gameSwitches.setValue(gameInitializedSwitchID, false);
		$gameVariables.setValue(stageTimeVarID, "Feb 20|10:00");
		dialogueLog.length = 0;
		const emptyHistory = { "盖海妲": [], "戴乔治": [], "约翰": [], "彼得": [], "玛丽": [], "柏莎": [], "卑锐客": [] };
		$gameVariables.setValue(dialogueLogVarID, emptyHistory);
		const emptyResponse = { "盖海妲": "", "戴乔治": "", "约翰": "", "彼得": "", "玛丽": "" };
		$gameVariables.setValue(responseMessageVarID, emptyResponse);
		$gamePlayer.setUtterance("");
		socket.emit("ClientInitializeGame");

		socket.on("ServerGameInitialized", args => {
			$gameSwitches.setValue(gameInitializedSwitchID, true);
			$gameVariables.setValue(stagePhaseVarID, 1040);
			socket.on("ServerCurrentStageTime", args => {
				let stage_datetime = String(args.time) || "2023-02-20 10:00:00";
				let formatted_datetime = formatDate(stage_datetime);
				$gameVariables.setValue(stageTimeVarID, formatted_datetime);
			});
		});
	});

	PluginManager.registerCommand(pluginName, "step_game", args => {
		// TODO: 禁止玩家行动并提醒，直至步进结束
		const _gamePlayerMoveByInput = $gamePlayer.moveByInput;
		if (connected)
			$gamePlayer.moveByInput = () => { return false; }

		// 检查玩家所处位置以及是否有对话，构造message
		let playerRegionId = $gamePlayer.regionId();
		let playerUtterance = $gamePlayer.getUtterance();
		const id = generateUUID();
		let message = {};
		if (playerUtterance !== "")
			message = { "action": "moveTalk", "moveTo": playerRegionId, "utterance": playerUtterance, "id": id };
		else
			message = { "action": "move", "moveTo": playerRegionId, "utterance": "", "id": id };
		socket.emit("ClientStepGame", message);

		socket.on("ServerGameStepped", response => {
			if (response["id"] === id) {
				$gamePlayer.moveByInput = _gamePlayerMoveByInput;
				$gameVariables.setValue(stagePhaseVarID, response["act_no"]);
			}
		});
	});

	PluginManager.registerCommand(pluginName, "generate_response", args => {
		const target_agent = String(args.target_agent);
		const dialogue_history = eval(String(args.dialogue_history));
		const hint = String(args.hint);
		const id = generateUUID();
		let message = {
			"target_agent": target_agent,
			"dialogue_history": dialogue_history,
			"hint": hint,
			"id": id
		};
		socket.emit("ClientRequestAgentResponse", message);

		socket.on("ServerSendAgentResponse", response => {
			if (response["id"] === id) {
				const agent_response = response["response"];
				// if (!agent_response.startsWith("抱歉"))
				// if (!(agent_response === "!<NoResponse>!"))
					$gameVariables._data[responseMessageVarID][target_agent] = agent_response;
			}
		});
	});

	PluginManager.registerCommand(pluginName, "set_instruction", args => {
		const target_agent = String(args.target_agent);
		const instruction = String(args.instruction);

		let message = {
			"target_agent": target_agent,
			"instruction": instruction
		};
		socket.emit("ClientSetAgentInstruction", message);
	});

	PluginManager.registerCommand(pluginName, "raise_dialogue", args => {
		if ($gameSwitches.value(responseRecievedSwitchID) === true) {
			console.log("错误：已经接收到了回复！");
			return;
		}
		const target_agent = String(args.target_agent) || "盖海妲";
		const player = String(args.player) || "海尔森";
		let message = {
			"player": player,
			"target_agent": target_agent,
			"stream": isStreamingResponse
		};
		socket.emit("ClientRaiseAPDialogueSession", message);

		socket.on("ServerAPDialogueSessionResponse", response => {
			const wrapped_response = lineWrapperScroll(response["response"], 23);
			$gameVariables.setValue(responseMessageVarID, wrapped_response);
			$gameSwitches.setValue(responseRecievedSwitchID, true);
			$gameSwitches.setValue(responseEndSwitchID, false);
		});
		socket.on("ServerAPDialogueSessionResponseEnd", response => {
			// $gameSwitches.setValue(responseRecievedSwitchID, false);
			$gameSwitches.setValue(responseEndSwitchID, true);
			full_response = response["response"]
			dialogueLog.push({
				"speaker": target_agent,
				"utterance": response
			})
		});
	});

	PluginManager.registerCommand(pluginName, "response_dialogue", args => {
		if ($gameSwitches.value(responseRecievedSwitchID) === true) {
			console.log("错误：已经接收到了回复！");
			return;
		}
		const target_agent = String(args.target_agent) || "盖海妲";
		const player = String(args.player) || "海尔森";
		const player_response_varID = Number(args.player_response_varID) || 1;
		const player_response = $gameVariables.value(player_response_varID);
		let message = {
			"player": player,
			"target_agent": target_agent,
			"player_response": player_response,
			"stream": isStreamingResponse
		};
		dialogueLog.push({
			"speaker": player,
			"utterance": player_response
		})
		socket.emit("ClientAPDialogueSessionResponse", message);

		socket.on("ServerAPDialogueSessionResponse", response => {
			const wrapped_response = lineWrapperScroll(response["response"], 23);
			$gameVariables.setValue(responseMessageVarID, wrapped_response);
			$gameSwitches.setValue(responseRecievedSwitchID, true);
			$gameSwitches.setValue(responseEndSwitchID, false);
		});
		socket.on("ServerAPDialogueSessionResponseEnd", response => {
			// $gameSwitches.setValue(responseRecievedSwitchID, false);
			$gameSwitches.setValue(responseEndSwitchID, true);
			full_response = response["response"]
			dialogueLog.push({
				"speaker": target_agent,
				"utterance": response
			})
		});
	});

	PluginManager.registerCommand(pluginName, "end_dialogue", args => {
		const target_agent = String(args.target_agent) || "盖海妲";
		let message = {
			"target_agent": target_agent
		};
		socket.emit("ClientEndAPDialogueSession", message);
	});

	/* 剧本表现部分 */

	// 获取剧本阶段对应的对话脚本
	PluginManager.registerCommand(pluginName, "get_script", args => {
		const script_id = String(args.script_id);
		const var_id = Number(args.var_id);

		const script_path = "js/plugins/dialogue_script.json";
		fetch(script_path)
			.then(response => response.json())
			.then(data => {
				let scene_state = {
					"active": false,
					"complete": false,
					"roles": [],
					"history": [],
					"current_utterance": {},
					"candidate": data[script_id]
				};
				$gameVariables.setValue(var_id, scene_state);
			})
			.catch(error => {
				console.error("Error when reading dialogue script:", error)
			});
	});

	PluginManager.registerCommand(pluginName, "dispatch_history", args => {
		const sceneId = Number(args.scene_id);
		const role = eval(String(args.role))
		const utterance = eval(String(args.utterance));

		if (utterance !== "!<NoResponse>!")
			dispatchDialogueHistory(sceneId, { "role": role, "utterance": utterance });
	});

	function dispatchDialogueHistory(sceneId, current_utterance) {
		for (let event of $gameMap.events()) {
			let eventName = event.event().name;
			if (!eventName.startsWith("角色/"))
				continue;
			eventName = eventName.substring(3);

			if ($gameMap.regionId(event.x, event.y) === sceneId) {
				$gameVariables._data[dialogueLogVarID][eventName].push(current_utterance)
			}
		}
	}

	/* 游戏表现部分 */

	// 使多行对话内容不闪烁地显示在对话窗口中
	// Thanks @Mac15001900 in rpgmakerweb!
	// TODO: 超过4行的对话在结束时仍会闪烁一下，之后再改进
	// const _Window_Message_processNewLine = Window_Message.prototype.processNewLine;
	// Window_Message.prototype.processNewLine = function (textState) {
	// 	Window_Base.prototype.processNewLine.call(this, textState);
	// 	// this._lineShowFast = true;
	// 	if (this.needsNewPage(textState)) {
	// 		this.startPause();
	// 	}
	// };

	// 在菜单中显示当前舞台时间
    var _Scene_MenuBase_start = Scene_MenuBase.prototype.start;
    Scene_MenuBase.prototype.start = function () {
        _Scene_MenuBase_start.call(this);
		if (this instanceof Scene_Phone) {
            this.createVariableDisplay();
        }
	};
    Scene_MenuBase.prototype.createVariableDisplay = function () {
        this.variableText = new Sprite();
        this.addChild(this.variableText);
        this.updateVariableDisplay();
	};
    Scene_MenuBase.prototype.updateVariableDisplay = function () {
		if (this.variableText) {
			let stage_datetime = $gameVariables.value(3);
			let date = stage_datetime.split("|")[0];
			let time = stage_datetime.split("|")[1];
            this.variableText.bitmap = new Bitmap(Graphics.boxWidth, Graphics.boxHeight);
			this.variableText.bitmap.fontSize = 18;
			this.variableText.bitmap.fontFace = "Arial";
			this.variableText.bitmap.drawText(time, 270, 25, Graphics.boxWidth - 20, 36);
			this.variableText.bitmap.drawText(date, 420, 25, Graphics.boxWidth - 20, 36);
        }
        setTimeout(this.updateVariableDisplay.bind(this), 1000); // 每隔1秒刷新一次
    };
    var _Scene_MenuBase_terminate = Scene_MenuBase.prototype.terminate;
    Scene_MenuBase.prototype.terminate = function () {
        if (this.variableText) {
            this.removeChild(this.variableText);
        }
        _Scene_MenuBase_terminate.call(this);
	};
	
	// 回车键显示输入文本框
	document.addEventListener("keydown", function (event) {
		if (event.key === "Enter" && SceneManager._scene instanceof Scene_Map && !document.getElementById("inputForm")) {
            if (typeof PluginManager !== "undefined" && PluginManager.callCommand) {
				isInputDialogRunning = true;
				PluginManager.callCommand(
					window.global,
					"InputDialog_Custom",
					"openDialog",
					{
						"varId": userMessageVarID,
						// TODO: 纵轴上添加文本输入提示
						"defaultText": "",
						"defaultValue": "",
						"okButtonLabel": "Send",
						"cancelButtonLabel": "Cancel",
						"maxLength": 140
					}
				);
            }
        }
	});	

	// 辅助函数
	function lineWrapper(utterance, max_line_length) {
		if (typeof utterance !== 'string' || typeof max_line_length !== 'number' || max_line_length <= 0) {
			return utterance; // 输入无效，直接返回原字符串
		}
		utterance = utterance.replace(/\s+/g, '')

		let result = '';
		let count = 0;
		// if (utterance.length >= max_line_length * 4) {
		// 	max_line_length = 27
		// 	result += "\x1b}"
		// }
		// if (utterance.length >= max_line_length * 4) {
		// 	max_line_length = 33
		// 	result += "\x1b}"
		// }

		for (let i = 0; i < utterance.length; i++) {
			result += utterance[i];
			count++;

			// 如果字符数达到指定的n，则插入换行符并重置计数
			if (count === max_line_length) {
				result += '\n\x1b<';
				count = 0;
			}
		}

		return result;
	}

	// 为长字符串换行，滚动地写入对话框中
	function lineWrapperScroll(utterance, max_line_length) {
		if (typeof utterance !== 'string' || typeof max_line_length !== 'number' || max_line_length <= 0) {
			return utterance; // 输入无效，直接返回原字符串
		}
		utterance = utterance.replace(/\s+/g, '')

		let result = '';
		let count = 0;
		let line_count = 1
		const max_line = 4
		let word = '';
		
		for (let i = 0; i < utterance.length; i++) {
			// 累积当前单词
			word += utterance[i];
		
			// 检查是否到达行末或者当前字符是空格
			if (utterance[i] === ' ' || count + word.length > max_line_length) {
				// 如果当前行的字符长度加上即将添加的单词长度超过最大行长，将当前单词换至下一行
				if (count + word.length > max_line_length) {
					result += "\n\x1b>";
					count = 0;
					line_count++;
				}
				// 添加单词到结果中
				result += word;
				count += word.length;
				word = '';
			}
			// 如果当前行数超过4行，向上滚动一行（移去最上面一行）
			if (line_count > max_line) {
				let s = result.split("\n\x1b>");
				s.shift();
				result = s.join("\n\x1b>");
				line_count--;
			}
		}
		// 添加最后一个单词
		if (word.length > 0) {
			if (count + word.length > max_line_length) {
				result += "\n\x1b>";
				line_count++;
			}
			result += word;
		}

		return result;
	}

	// 格式化日期
	function formatDate(inputDate) {
		const date = new Date(inputDate);

		// 格式化日期部分（月和日）
		const month = (date.getMonth() + 1).toString()
		const day = date.getDate().toString()

		const formattedDate = `${month}月${day}日`;

		// 格式化时间部分（时和分）
		const hours = date.getHours().toString().padStart(2, '0');
		const minutes = date.getMinutes().toString().padStart(2, '0');

		const formattedTime = `${hours}:${minutes}`;

		return `${formattedDate}|${formattedTime}`;
	}

	// 依据Agent名称获取相应的Game_Event
	function getEventFromName(name) {
		for (let event of $gameMap.events()) {
			let event_name = event.event().name;
			if (!event_name.startsWith("角色/"))
				continue;
			event_name = event_name.substring(3);
			if (name === event_name)
				return event;
		}
		console.log("[getEventFromName] Cannot find agent:", name);
		return undefined;
	}

	// 获取NPC前方扇形范围内看到和听到的事件
	function observationDetector(this_event, angle = 120, radius_far = 5, radius_near = 2) {
		let observation = {
			location: "",
			seen_near: [],
			seen_far: [],
			heard_near: [],
			heard_far: []
		}
		const this_event_direction = this_event.direction();
		observation.location = "记者会大厅";
		// 观察其他NPC
		for (let event of $gameMap.events()) {
			let event_name = event.event().name;
			if (event.eventId() === this_event.eventId() || !event_name.startsWith("角色/"))
				continue;
			event_name = event_name.substring(3);
			var distance = Math.sqrt(Math.pow(event.x - this_event.x, 2) + Math.pow(event.y - this_event.y, 2));
			var angle = Math.atan2(event.y - this_event.y, event.x - this_event.x) * (180 / Math.PI);
			angle = (angle + 360) % 360;

			if (distance <= radius_near)
				observation.seen_near.push(event_name);
			else if (distance <= radius_far)
				if (Math.abs(angle - getAdjustedAngle(this_event_direction)) <= angle / 2)
					observation.seen_far.push(event_name);
			if (event.getUtterance() !== "") {
				if (distance <= radius_near)
					observation.heard_near.push([event_name, event.getUtterance()]);
				else if (distance <= radius_far)
					observation.heard_far.push([event_name, event.getUtterance()]);
			}
		}
		// 观察玩家
		const player_name = $gameActors.actor(1).name()
		var distance = Math.sqrt(Math.pow($gamePlayer.x - this_event.x, 2) + Math.pow($gamePlayer.y - this_event.y, 2));
		var angle = Math.atan2($gamePlayer.y - this_event.y, $gamePlayer.x - this_event.x) * (180 / Math.PI);
		angle = (angle + 360) % 360;
		if (distance <= radius_near)
			observation.seen_near.push(player_name);
		else if (distance <= radius_far)
			if (Math.abs(angle - getAdjustedAngle(this_event_direction)) <= angle / 2)
				observation.seen_far.push(player_name);

		if ($gamePlayer.getUtterance() !== "") {
			// 听到周围对话
			if (distance <= radius_near)
				observation.heard_near.push([player_name, $gamePlayer.getUtterance()]);
			else if (distance <= radius_far)
				observation.heard_far.push([player_name, $gamePlayer.getUtterance()]);
		}

		return observation;
	}
	function getAdjustedAngle(direction) {
		/* O > x方向
		 * v
		 * y方向
		 */
		switch (direction) {
			case 2: return 90;	// 正下，+y
			case 4: return 180;	// 正左，-x
			case 6: return 0;	// 正右，+x
			case 8: return 270;	// 正上，-y
			default: return 0;
		}
	}

})()