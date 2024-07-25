/*:
 * @target MZ
 * @plugindesc 对后端进行调用，实现Agent交互
 * @author cnlnpjhsy
 * @url https://github.com/OpenDFM/ibsen
 * @help BackendCaller.js
 * 
 * 该插件可以处理游戏中玩家与Agent之间的交互，并与后端服务器进行socket通信。
 * 
 * @param BackendURL
 * @type string
 * @default localhost:8080
 * @desc 后端接口的URL，API请求会发向这里
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
 * @param ShowAllUtteranceSwitchID
 * @type switch
 * @default 1
 * @desc 是否显示所有角色的对话，无论玩家是否与角色处于同一区域
 * 
 * @param IsConnectedSwitchID
 * @type switch
 * @default 2
 * @desc 指示是否已经连接到了后端的开关编号；用于存储插件指令调用后的结果
 * 
 * @param GameInitializedSwitchID
 * @type switch
 * @default 3
 * @desc 指示舞台与Agent是否已经完成了初始化的开关编号
 * 
 * @param StageToNextPhaseSwitchID
 * @type switch
 * @default 4
 * @desc 指示是否可以进入下一阶段的开关编号
 * 
 * @param GameCouldStepSwitchID
 * @type switch
 * @default 5
 * @desc 指示舞台是否可以进行步进的开关编号
 * 
 * @param GameSteppingSwitchID
 * @type switch
 * @default 6
 * @desc 指示舞台是否正在进行步进的开关编号
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
 * @command is_conntected
 * @text 检查连接状态
 * @desc 检查当前是否已经连接到了后端服务器，将结果存进开关IsConnectedSwitchID中
 * 
 * ==================================================
 * @command step_game
 * @text 步进游戏进程
 * @desc 结束当前时间段内玩家行动，推进舞台事件并为所有Agent更新必要信息
 * 
 * ==================================================
 * @command get_current_background
 * @text 获取当前幕背景
 * @desc 获取玩家当前所在幕的剧本故事背景
 * 
 * ==================================================
 */

(() => {
	delete Input.keyMapper[88];

	const pluginName = "BackendCaller";
	const pluginParameters = PluginManager.parameters(pluginName);
	const backendURL = String(pluginParameters["BackendURL"]) || "http://localhost:8080";

	const stagePhaseVarID = Number(pluginParameters["StagePhaseVarID"]) || 1;
	const responseMessageVarID = Number(pluginParameters["ResponseMessageVarID"]) || 2;
	const stageTimeVarID = Number(pluginParameters["StageTimeVarID"]) || 3;
	const userMessageVarID = Number(pluginParameters["UserMessageVarID"]) || 4;

	const showAllUtteranceSwitchID = Number(pluginParameters["ShowAllUtteranceSwitchID"]) || 1;
	const isConnectedSwitchID = Number(pluginParameters["IsConnectedSwitchID"]) || 2;
	const gameInitializedSwitchID = Number(pluginParameters["GameInitializedSwitchID"]) || 3;
	const stageToNextPhaseSwitchID = Number(pluginParameters["StageToNextPhaseSwitchID"]) || 4;
	const gameCouldStepSwitchID = Number(pluginParameters["GameCouldStepSwitchID"]) || 5;
	const gameSteppingSwitchID = Number(pluginParameters["GameSteppingSwitchID"]) || 6;

	const gameStepCommonEventID = 3;
	const nameToEventId = {
		"Hedda Gai": 2,
		"George Dai": 3,
		"John": 4,
		"Peter": 5,
		"Mary": 7,
		"Narration": 9,
		"Berta": 10,
		"Brack": 15
	};
	const regionIdToPlace = {
		1: "Lobby",
		2: "Press conference hall",
		3: "Press conference backstage",
		11: "Hotel corridor"
	};

	// 重写Game_Event与Game_Player对象，增加_utterance属性用于存储事件的对话语句
	const _GameEventInitialize = Game_Event.prototype.initialize;
	Game_Event.prototype.initialize = function () {
		_GameEventInitialize.apply(this, arguments);
		this._utterance = "";
	};
	Game_Event.prototype.setUtterance = function (text) {
		this._utterance = text;
	};
	Game_Event.prototype.getUtterance = function () {
		return this._utterance;
	};

	const _GamePlayerInitialize = Game_Player.prototype.initialize;
	Game_Player.prototype.initialize = function () {
		_GamePlayerInitialize.apply(this, arguments);
		this._utterance = "";
	};
	Game_Player.prototype.setUtterance = function (text) {
		this._utterance = text;
	};
	Game_Player.prototype.getUtterance = function () {
		return this._utterance;
	};


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

	PluginManager.registerCommand(pluginName, "is_conntected", args => {
		$gameSwitches.setValue(isConnectedSwitchID, connected);
	});

	PluginManager.registerCommand(pluginName, "init_game", args => {
		const force_init = Boolean(args.force === "true");
		if (!force_init && $gameSwitches.value(gameInitializedSwitchID) === false) {
			console.log("错误：游戏尚未完成初始化，无法重置！");
			return;
		}
		$gameSwitches.setValue(showAllUtteranceSwitchID, true);
		$gameSwitches.setValue(gameInitializedSwitchID, false);
		$gameSwitches.setValue(stageToNextPhaseSwitchID, false);
		$gameVariables.setValue(stageTimeVarID, "Feb 20|10:00");
		const emptyResponse = [];
		$gameVariables.setValue(responseMessageVarID, emptyResponse);
		$gamePlayer.setUtterance("");
		socket.emit("ClientInitializeGame");

		socket.on("ServerGameInitialized", args => {
			$gameSwitches.setValue(gameInitializedSwitchID, true);
			$gameVariables.setValue(stagePhaseVarID, 0);
			const formatted_datetime = formatDate("2023-02-20 10:40:00");
			$gameVariables.setValue(stageTimeVarID, formatted_datetime);
		});
	});

	PluginManager.registerCommand(pluginName, "step_game", args => {
		// TODO: 禁止玩家行动并提醒，直至步进结束
		const _gamePlayerMoveByInput = $gamePlayer.moveByInput;
		if (connected)
			$gamePlayer.moveByInput = () => { return false; }
		$gameSwitches.setValue(gameCouldStepSwitchID, false);
		$gameSwitches.setValue(gameSteppingSwitchID, true);

		// 检查玩家所处位置以及是否有对话，构造message
		const playerRegionId = $gamePlayer.regionId();
		const playerPlace = regionIdToPlace[playerRegionId];
		const playerUtterance = $gamePlayer.getUtterance();
		const id = generateUUID();
		$gamePlayer.setUtterance("");
		let message = {};
		if (playerUtterance !== "")
			message = { "action": "moveTalk", "moveTo": playerPlace, "utterance": playerUtterance, "id": id };
		else
			message = { "action": "move", "moveTo": playerPlace, "utterance": "", "id": id };
		socket.emit("ClientStepGame", message);

		socket.on("ServerGameStepped", response => {
			if (response["id"] === id) {
				// TODO: 解析步进之后的act状态。先显示好对话，再更新舞台进度，最后解除玩家行动限制
				const act_status = response["act_status"];
				$gameVariables.setValue(responseMessageVarID, act_status);
				const stageTime = String(response["stage_time"]);
				const formatted_datetime = formatDate(stageTime);
				$gameVariables.setValue(stageTimeVarID, formatted_datetime);
				if (response["act_no"] > $gameVariables.value(stagePhaseVarID))
					$gameSwitches.setValue(stageToNextPhaseSwitchID, true);
				// 玩家和某一幕处在同一地点时，才显示该幕对应的下一条script
				Object.values(act_status).forEach(value => {
					const nextScript = value.next_script;
					if (nameToEventId.hasOwnProperty(nextScript.role)) {
						if ($gameSwitches.value(showAllUtteranceSwitchID) && nextScript.role !== "Narration") {
							// 显示所有对话时，对于旁白，仍然只显示玩家当前所在的区域
							$gameMap.events()[nameToEventId[nextScript.role] - 1].setUtterance(nextScript.content);
						} else if (value.hasOwnProperty("players") && value.players.includes($gameActors.actor(1).name())) {
							$gameMap.events()[nameToEventId[nextScript.role] - 1].setUtterance(nextScript.content);
						}
					}
				})
				$gamePlayer.moveByInput = _gamePlayerMoveByInput;
				$gameSwitches.setValue(gameCouldStepSwitchID, true);
				$gameSwitches.setValue(gameSteppingSwitchID, false);
			}
		});
	});

	PluginManager.registerCommand(pluginName, "get_current_background", args => {
		const playerRegionId = $gamePlayer.regionId();
		const playerPlace = regionIdToPlace[playerRegionId];
		const id = generateUUID();
		const message = { "place": playerPlace, "id": id };
		socket.emit("ClientGetCurrentBackground", message);

		socket.on("ServerGotCurrentBackground", response => {
			if (response["id"] === id) {
				const background = response["background"];
				$gameMap.events()[nameToEventId["Narration"] - 1].setUtterance(background);
			}
		});
	});


	/* 剧本表现部分 */

	/* 游戏表现部分 */

	// 修改标题界面的可用选项，并增加About界面
	const _Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
	Window_TitleCommand.prototype.makeCommandList = function () {
		this.addCommand(TextManager.newGame, "newGame");
		this.addCommand(TextManager.options, "options");
		this.addCommand("About [🔗]", "aboutGame");
	};

	const _Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
	Scene_Title.prototype.createCommandWindow = function () {
		_Scene_Title_createCommandWindow.call(this);
		this._commandWindow.setHandler("aboutGame", this.commandAboutGame.bind(this));
	};

	Scene_Title.prototype.commandAboutGame = function () {
		window.open("https://github.com/OpenDFM/ibsen", "_blank");
		this._commandWindow.activate();
	};

	// 屏幕左上角设置步进的图标捷径
	const createPagedownButton = () => {
		const button = new Sprite_Button("pagedown");
		button.x = 4;
		button.y = 4;
		button.visible = true;
		button.setClickHandler(() => {
			if (!$gameMessage.isBusy() && !$gameMessage.isPopupBusy()) {
				$gameTemp.reserveCommonEvent(gameStepCommonEventID);
			}
		});
		return button;
	};
	const _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
	Scene_Map.prototype.createAllWindows = function () {
		_Scene_Map_createAllWindows.apply(this, arguments);
		this._pagedownButton = createPagedownButton();
		this.addChild(this._pagedownButton);
	};
	const _Scene_Map_update = Scene_Map.prototype.update;
	Scene_Map.prototype.update = function () {
		_Scene_Map_update.apply(this, arguments);
		if ($gameMessage.isBusy() || $gameMessage.isPopupBusy()) {
			this._pagedownButton.visible = false;
		} else {
			this._pagedownButton.visible = true;
			if (Input.isTriggered("tab")) {
				$gameTemp.reserveCommonEvent(gameStepCommonEventID);
			}
		}
	};
	Input.keyMapper[9] = "tab"; // 9 is the keycode for Tab

	// 在菜单中显示当前舞台时间
	const _Scene_MenuBase_start = Scene_MenuBase.prototype.start;
	Scene_MenuBase.prototype.start = function () {
		_Scene_MenuBase_start.apply(this, arguments);
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
			let stage_datetime = $gameVariables.value(stageTimeVarID);
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
	const _Scene_MenuBase_terminate = Scene_MenuBase.prototype.terminate;
	Scene_MenuBase.prototype.terminate = function () {
		if (this.variableText) {
			this.removeChild(this.variableText);
		}
		_Scene_MenuBase_terminate.apply(this, arguments);
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

	// 键盘按下ESC键或者进入菜单时，清除所有事件的utterance
	const _Scene_Map_start = Scene_Map.prototype.start;
	Scene_Map.prototype.start = function () {
		_Scene_Map_start.apply(this, arguments);
		$gameMap.events().forEach(event => {
			event.setUtterance("");
		});
	};

	// 辅助函数

	// 为长字符串换行，滚动地写入对话框中

	// 格式化日期
	function formatDate(inputDate) {
		const date = new Date(inputDate);

		// 格式化日期部分（月和日）
		const month = (date.getMonth() + 1).toString()
		const day = date.getDate().toString()

		const monthAbbreviations = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		const formattedDate = `${monthAbbreviations[month - 1]} ${day.padStart(2, '0')}`;

		// 格式化时间部分（时和分）
		const hours = date.getHours().toString().padStart(2, '0');
		const minutes = date.getMinutes().toString().padStart(2, '0');

		const formattedTime = `${hours}:${minutes}`;

		return `${formattedDate}|${formattedTime}`;
	}

	// 依据Agent名称获取相应的Game_Event

	// 获取NPC前方扇形范围内看到和听到的事件

})()