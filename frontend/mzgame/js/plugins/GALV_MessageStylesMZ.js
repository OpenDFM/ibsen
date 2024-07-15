//-----------------------------------------------------------------------------
//  Galv's Message Styles MZ
//-----------------------------------------------------------------------------
//  For: RPGMAKER MV
//  GALV_MessageStylesMZ.js
//-----------------------------------------------------------------------------
//  2020-11-07 - Version 2.1 - added plugin order fix
//  2020-10-18 - Version 2.0 - hopefully fixed bugs with other text commands
//  2020-10-11 - Version 1.9 - fixed another text command issue
//  2020-10-04 - Version 1.8 - fixed issue when using other text commands after
//                             the pop command
//  2020-10-02 - Version 1.7 - fixed position issue when using larger screen
//                             width/height than the UI.
//  2020-09-28 - Version 1.6 - added compatibility with Galv's Cam Control zoom
//  2020-09-26 - Version 1.5 - fixed some code scope issues
//  2020-09-22 - Version 1.4 - added compatibility codes
//  2020-09-19 - Version 1.3 - added ability to add y offset per message
//                             more code updates/improvements
//  2020-09-18 - Version 1.2 - added ability to change message windowskin,
//                             arrow graphics, code updates and improvements,
//                             fixed target x,y bug and changed syntax method
//	                           fixed 'middle' align arrow to be invisible
//  2020-09-17 - Version 1.1 - fixed a bug with the \. and \| wait codes
//  2020-09-16 - Version 1.0 - release
//-----------------------------------------------------------------------------
// Terms can be found at:
// galvs-scripts.com
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.Galv_MessageStyles = true;

var Galv = Galv || {};                  // Galv's main object
Galv.Mstyle = Galv.Mstyle || {};        // Galv's stuff
Galv.Mstyle.pluginName = "GALV_MessageStylesMZ";

//-----------------------------------------------------------------------------
/*:
 * @plugindesc (v.2.1) 'Show Text' windows float above characters and change visuals during game.
 * @url http://galvs-scripts.com
 * @target MZ
 * @author Galv
 * @orderAfter GALV_MessageTimerMZ
 *
 * @param iIndicator
 * @text Input Indicator Position
 * @desc pos,x,y - pos is a direction number (numpad). 1,2,3,4,6,7,8,9.
 * @default 2,0,-12
 *
 * @param mPadding
 * @text Message Padding
 * @desc Adds padding around the text in the message box... top,right,bottom,left.
 * @default 0,0,0,0
 *
 * @param invertPos
 * @text Invert Floating Message
 * @type boolean
 * @default false
 * @desc When showing a floating message, displaying window position 'Bottom' will instead be top and vice verca.
 *
 * @param aGraphic
 * @text Arrow Graphic
 * @desc Image from /img/system/ that is used to point at the target of a floating message box. Leave blank for none.
 * @default WindowArrow
 *
 * @param yOffset
 * @text Default Y Offset
 * @desc How many pixels above the event/actor the message box will appear.
 * @default 60
 *
 *
 * @command mWindowStyle
 * @text Message Window Style
 * @desc Set the styles for the default message window (not using \pop).
 *
 * @arg windowskin
 * @text Windowskin
 * @default Window
 * @desc The windowskin graphic from /img/system (without extension)
 *
 *
 * @command pWindowStyle
 * @text Pop Window Style
 * @desc Set the styles for the popup message window (when \pop is used).
 *
 * @arg windowskin
 * @text Windowskin
 * @default Window
 * @desc The windowskin graphic from /img/system (without extension).
 *
 * @arg arrowGraphic
 * @text Arrow Graphic
 * @default WindowArrow
 * @dec Change the arrow graphic for the popup window.
 *
 *
 * @command defaultWindowStyle
 * @text Reset Window Styles
 * @desc Changes styles for both windows to default.
 *
 * @help
 *   Galv's Message Styles
 * ----------------------------------------------------------------------------
 * The main purpose of this plugin is to allow your "Show Text" message boxes
 * to have a different style to other windows in the game. The plugin settings
 * have a variety of visual settings you can tweak, and in addition using a
 * text code in Show Text messages will allow you to turn that message into a
 * floating message.
 *
 * NOTE: The use of /{ and \} text commands are not currently supported inside
 * pop message windows.
 *
 * ----------------------------------------------------------------------------
 *   CODE to use inside a SHOW TEXT message event command
 * ----------------------------------------------------------------------------
 * The following code must be put in the first line of a Show Message event
 * command to work.
 *
 *       \pop[t]
 *
 * t = event Id - to target an event on the map
 *     0 to target the event the Show Text command is used in
 *     -1,-2,-3,-4... negative numbers to target followers in those postions
 *     a1,a2,a3, etc... to target a specific actor IF they are a follower. If
 *                      not a follower, the message will not display
 *     x|y to target a SCREEN pixel position.
 *
 * EXAMPLES
 * \pop[23]  // targets event 23
 * \pop[-3]  // targets the 3rd follower in your follower lineup
 * \pop[a8]  // targets actor 8, only if the actor is a follower on the map
 * \pop[500|200] // targets center of message to screen position at
 *               // 500px X and 200px Y
 *
 * OPTIONALLY:
 * Advanced data can be added via the \pop[] text within a message.
 *
 *       \pop[t,y,windowskin,windowarrow]
 *
 * t      = same as above
 * y      = another modifier for y offset in pixels - for taller sprites.
 *          set to 0 to not modify the default y offset
 * windowskin = filename for a different window to use (blank for no change)
 * windowarrow = filename for a different arrow to use (blank for no change)
 *
 * ----------------------------------------------------------------------------
 *   PLUGIN COMMANDS
 * ----------------------------------------------------------------------------
 * There are plugin commands available to change windowskins. When they are
 * used, all messages will use the new settings until they used again to
 * change them back to defaults. These are a work in progress, more features
 * may be added to them.
 *
 */
//-----------------------------------------------------------------------------
//  CODE STUFFS
//-----------------------------------------------------------------------------

// PLUGIN COMMANDS
//-----------------------------------------------------------------------------

PluginManager.registerCommand(Galv.Mstyle.pluginName, "mWindowStyle", args => {
	args.index = 0;
	$gameSystem.updateMStyles(args);
});

PluginManager.registerCommand(Galv.Mstyle.pluginName, "pWindowStyle", args => {
	args.index = 1;
	$gameSystem.updateMStyles(args);
});

PluginManager.registerCommand(Galv.Mstyle.pluginName, "defaultWindowStyle", args => {
	$gameSystem.buildMStyles();
});

Galv.Mstyle.invertPos = PluginManager.parameters(Galv.Mstyle.pluginName)['invertPos'] == 'true';
Galv.Mstyle.arrow = PluginManager.parameters(Galv.Mstyle.pluginName)['aGraphic'];
Galv.Mstyle.yOffset = Number(PluginManager.parameters(Galv.Mstyle.pluginName)['yOffset']);

// If screen is bigger than ui
Galv.Mstyle.screenXOffset = 0;
Galv.Mstyle.screenYOffset = 0;

Galv.Mstyle.indPos = PluginManager.parameters(Galv.Mstyle.pluginName)['iIndicator'].split(",");
for (let i = 0; i < Galv.Mstyle.indPos.length; i++) {
	Galv.Mstyle.indPos[i] = Number(Galv.Mstyle.indPos[i]);
};

Galv.Mstyle.padding = PluginManager.parameters(Galv.Mstyle.pluginName)['mPadding'].split(",");
for (let i = 0; i < Galv.Mstyle.padding.length; i++) {
	Galv.Mstyle.padding[i] = Number(Galv.Mstyle.padding[i]);
};

Galv.Mstyle.target = null;
Galv.Mstyle.thisEvent = null;
Galv.Mstyle.refreshOnClose = false;
Galv.Mstyle.tempPopData = {};

Galv.Mstyle.checkTarget = function(text) {
	let target = {};
	let tmp = text.replace(/\\/g, "\x1b");
	tmp = tmp.replace(/\x1b\x1b/g, "\\");
	tmp = tmp.replace(/\x1bV\[(\d+)\]/gi, (_, p1) =>
        $gameVariables.value(parseInt(p1))
    );
	
	let popData = tmp.match(/\x1bpop\[[^\]]*\]/gi);
	
	if (popData) {
		const data = popData[0].match(/\[(.*)\]/)[1].split(",");
		const d = data[0].split("|");
		if (!d[1]) {
			// target is an id only
			target.id = d[0];
		} else {
			// target is an x,y
			target.x = d[0];
			target.y = d[1];
		}

		target.extra = []; // additional potential data here
		for (let i = 1; i < data.length; i++) {
			target.extra.push(data[i]);
		}
	}
	return target;
};

Galv.Mstyle.setTarget = function(target) {
	// build temp pop data object
	this.buildTempPopData(target);

	if (target.y) {
		// Target has a Y value, so it's an X,Y object
		this.xyTarget = {
			_x: Number(target.x),
			_y: Number(target.y),
			screenX: function() {return this._x},
			screenY: function() {return this._y},
		};
		return this.xyTarget;
	} else if (!target.id.contains("a")) { 
		// Target is an ID (event or negatives for follower) and NOT and x,y location
		target.id = Number(target.id);
		// event ID or player
		if (target.id >= -1) {
			switch (target.id) {
				case 0:
					return $gameMap.event(this.thisEvent);
					break;
				case -1:
					return $gamePlayer;
					break;
				default:
					return $gameMap.event(target.id);
					break;
			};
		} else {
			// Target is a follower
			const f = Math.abs(target.id);
			if (f > $gameParty.battleMembers().length) {
				// if no follower exists - don't do it!
				return false;
			} else {
				return $gamePlayer._followers.follower(f - 2);
			};
		};
	} else if (target.id.contains("a")) {
		// Target an actor - check if the actor is in the followers
		const actor = $gameActors.actor(Number(target.id.replace("a","")));
		actorIndex = actor.index();
		if (actorIndex < 0 || actorIndex > $gameParty.battleMembers().length) {
			return false;
		} else {
			const ind = actorIndex - 1;
			return ind < 0 ? $gamePlayer : $gamePlayer._followers.follower(ind);
		};
	};
};

Galv.Mstyle.buildTempPopData = function(target) {
	this.tempPopData = {}; // reset temp data
	this.tempPopData.array = target.extra || []; // array of extra data
	this.processTempPopData();
}

Galv.Mstyle.processTempPopData = function() {
	let data = this.tempPopData.array
	this.tempPopData.yo = Number(data[0]) || 0;
	this.tempPopData.windowskin = data[1] || "";
	this.tempPopData.windowarrow = data[2] || "";
	// Add more data here if needed
};

Galv.Mstyle.refreshMessageWindows = function() {
	if (SceneManager._scene._messageWindow) SceneManager._scene._messageWindow.refreshGraphics();
	if (SceneManager._scene._nameWindow) SceneManager._scene._nameBoxWindow.refreshGraphics();
};

Galv.Mstyle.zoomOffset = function(v1,v2) {
	return (v1-v2) - (v1-v2) * $gameScreen.zoomScale();
};


// GAME SYSTEM
//-----------------------------------------------------------------------------

Galv.Mstyle.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	Galv.Mstyle.Game_System_initialize.call(this);
	this.buildMStyles();
};

Game_System.prototype.buildMStyles = function() {
	const windowskin = 'Window';
	const arrow = Galv.Mstyle.arrow;
	this._mStyles = [
		// default message window settings [0]
		{windowskin: windowskin},
		// pop message settings [1]
		{windowskin: windowskin,arrowGraphic: arrow},
	];
};

Game_System.prototype.updateMStyles = function(args) {
	// update the message style settings
	this._mStyles[args.index] = args;
};


// INTERPRETER
//-----------------------------------------------------------------------------

Galv.Mstyle.Game_Interpreter_command101 = Game_Interpreter.prototype.command101;
Game_Interpreter.prototype.command101 = function(params) {
	const ispop = this._list[this._index + 1].parameters[0].match(/\\pop/i);
	if (ispop) {
		// Is a pop message
		Galv.Mstyle.thisEvent = this._eventId;
		Galv.Mstyle.target = Galv.Mstyle.setTarget(Galv.Mstyle.checkTarget(this._list[this._index + 1].parameters[0]));

		if (Galv.Mstyle.target == false) {
			while (this.nextEventCode() === 401) {  // Text data
				this._index++;
			};
			return false;
		};
	} else {
		// Not a pop message
		Galv.Mstyle.thisEvent = null;
		Galv.Mstyle.target = null;
	};
	return Galv.Mstyle.Game_Interpreter_command101.call(this,params);
};


// WINDOW MESSAGE
//-----------------------------------------------------------------------------

Galv.Mstyle.Window_Message_initialize = Window_Message.prototype.initialize;
Window_Message.prototype.initialize = function(rect) {
	Galv.Mstyle.Window_Message_initialize.call(this,rect);
	Galv.Mstyle.screenXOffset = (Graphics.width - Graphics.boxWidth) / 2;
	Galv.Mstyle.screenYOffset = (Graphics.height - Graphics.boxHeight) / 2;
	this.createWindowTail();
};

Window_Message.prototype.refreshGraphics = function() {
	this.loadWindowskin();
	this.contents.clear();
	this.updateTone();
	this.changeWindowDimensions();
    this.createContents();
	this.openness = 0;
	this.createWindowTail();
};

Window_Message.prototype.loadWindowskin = function() {
	Window_Base.prototype.loadPopMessageWindowskin.call(this);
};

Galv.Mstyle.Window_Message_updateClose = Window_Message.prototype.updateClose;
Window_Message.prototype.updateClose = function() {
	if (Galv.Mstyle.refreshOnClose && this.isClosed()) {
		Galv.Mstyle.refreshOnClose = false;
		Galv.Mstyle.refreshMessageWindows();
    }
	Galv.Mstyle.Window_Message_updateClose.call(this);
};

Window_Message.prototype.createWindowTail = function() {
	const arrowName = Galv.Mstyle.tempPopData.windowarrow ? Galv.Mstyle.tempPopData.windowarrow : $gameSystem._mStyles[1].arrowGraphic;
	if (this._tailSprite) {
		if (this._tailSprite.name != arrowName) {
			this.removeChild(this._tailSprite); // if arrow graphic has changed, remove the sprite to rebuild it.
		} else {
			return; // no need to rebuild the sprite below.
		}
	}
	this._tailSprite = new Sprite();
	this._tailSprite.bitmap = ImageManager.loadSystem(arrowName);
	this._tailSprite.opacity = 0;
	this._tailSprite.anchor.x = 0.5;
	this._tailSprite.name = arrowName;
	this.addChild(this._tailSprite);
};

Galv.Mstyle.Window_Message_startMessage = Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function() {
	Galv.Mstyle.Window_Message_startMessage.call(this);
	this.startPopMessageStuff();
};

Window_Message.prototype.startPopMessageStuff = function() {
	this.loadWindowskin(); // load windowskin in case it was changed with plugin command
	this._nameBoxWindow.loadWindowskin();
	this.createWindowTail();
	this.changeWindowDimensions();
	this.refreshDimmerBitmap();
	this.setPopSettings();
	this.createWindowTail();
}

Galv.Mstyle.Window_Message_updatePlacement = Window_Message.prototype.updatePlacement;
Window_Message.prototype.updatePlacement = function() {
	if (Galv.Mstyle.target) {
		this.pTarget = Galv.Mstyle.target;
		this.updateFloatPlacement();
	} else {
		this.pTarget = null;
		this.changeWindowDimensions();
		Galv.Mstyle.Window_Message_updatePlacement.call(this);
	};
};

Galv.Mstyle.Window_Message_terminateMessage = Window_Message.prototype.terminateMessage;
Window_Message.prototype.terminateMessage = function() {
	Galv.Mstyle.Window_Message_terminateMessage.call(this);
	this.pTarget = null;
	Galv.Mstyle.target = null;
	Galv.Mstyle.thisEvent = null;
};

Galv.Mstyle.Window_Message_update = Window_Message.prototype.update;
Window_Message.prototype.update = function() {
	Galv.Mstyle.Window_Message_update.call(this);
	this.updateFloatPlacement();
};

Window_Message.prototype.setPopSettings = function() {
	// Invert bottom and top if setting is true
	if (Galv.Mstyle.invertPos) {
		if ($gameMessage._positionType == 2) {
			$gameMessage._positionType = 0;
		} else if ($gameMessage._positionType == 0) {
			$gameMessage._positionType = 2;
		}
	};
	
	// Initial yOffset value
	switch ($gameMessage._positionType) {
		case 1: // MIDDLE
			this.yOffset = -(this.height / 2);
			break;
		case 2: // BOTTOM
			this.yOffset = 15;
			break;
	};
};

Window_Message.prototype.updateFloatPlacement = function() {
	if (this.pTarget == null) return this._tailSprite.opacity = 0; // If not a floating message, hide tailsprite and stop function
	if (this.openness < 255) this._tailSprite.opacity = 0; // hide tail sprite when not fully open

	// init pos X,Y
	let zx = this.pTarget.screenX() - Galv.Mstyle.screenXOffset;
	let zy = this.pTarget.screenY() - Galv.Mstyle.screenYOffset;
	
	// compensate for zoomed screen
	const zoomX = Galv.Mstyle.zoomOffset(Graphics.boxWidth / 2,zx);
	const zoomY = Galv.Mstyle.zoomOffset(Graphics.boxHeight / 2,zy);
	
	let posX = zx - this.width / 2 + zoomX;
	let posY = zy + this.yOffset + Galv.Mstyle.tempPopData.yo + zoomY;
	
	// set posX
	if (posX + this.width > Graphics.boxWidth) {
		posX = Graphics.boxWidth - this.width;
	} else if (posX < 0) {
		posX = 0;
	};
	this.x = posX;
	this._nameBoxWindow.x = this.x;
	
	// set posY
	const nameBoxOffset = this._nameBoxWindow._name ? this._nameBoxWindow.height : 0;
	
	if (posY + this.height > Graphics.height) {
		// If window would go off bottom of screen
		const maxY = Graphics.height - this.height;
		posY = Math.min(maxY,this.pTarget.screenY() - Galv.Mstyle.yOffset - this.height);
		this.tailPos = 0;
	} else if (posY - nameBoxOffset < 0) {
		// If window would go off top of screen
		posY = Math.max(this.pTarget.screenY() + 15,0); // position box under when it hits top of screen
		this.tailPos = 2;
	} else {
		this.tailPos = $gameMessage._positionType;
	};
	
	if ($gameMessage._positionType == 1) this.tailPos = 1; // if set to middle, no tail.
	
	this.y = posY;
	this._nameBoxWindow.y = posY - nameBoxOffset;
	
	// Update other stuff
	this.updateOtherMsgWindows();
	this.updateTailSprite();
};

Window_Message.prototype.updateOtherMsgWindows = function() {
	this.updateFloatGoldWindow();
	this.updateFloatChoiceWindow();
};

Window_Message.prototype.updateFloatGoldWindow = function() {
	if (!this._goldWindow) return;
	this._goldWindow.y = this._nameBoxWindow.y < this._goldWindow.height ? Graphics.boxHeight - this._goldWindow.height : 0;
};

Window_Message.prototype.updateFloatChoiceWindow = function() {
	const positionType = $gameMessage.choicePositionType();
	const setY = this.y + this.height;
	if (setY + this._choiceListWindow.height > Graphics.height) {
		// If choice window goes off bottom of screen.
		this._choiceListWindow.y = this.y - this._choiceListWindow.height;
	} else {
		this._choiceListWindow.y = setY;
	}
    switch (positionType) {
    case 0: // left
        this._choiceListWindow.x = this.x;
        break;
    case 1: // middle
        this._choiceListWindow.x = this.x + (this.width / 2) - this._choiceListWindow.width / 2;
        break;
    case 2: // right
        this._choiceListWindow.x = this.x + this.width - this._choiceListWindow.width;
        break;
    };
};

Window_Message.prototype.updateTailSprite = function() {
	if (this.openness > 200) {
		if (this.tailPos == 1) { // MID
			this._tailSprite.opacity = 0;
		} else if (this.tailPos == 2) { // BOT
			this._tailSprite.y = 2;
			this._tailSprite.scale.y = -1;
			this._tailSprite.opacity += 50;
		} else if (this.tailPos == 0) { // TOP
			this._tailSprite.scale.y = 1;
			this._tailSprite.y = this.height - 2;
			this._tailSprite.opacity += 50;
		};
	};

	// compensate for zoomed screen
	const screenX = this.pTarget.screenX() - Galv.Mstyle.screenXOffset;
	const zoomX = Galv.Mstyle.zoomOffset(Graphics.boxWidth / 2,screenX); 
	this._tailSprite.x = screenX - this.x + zoomX;
};

Galv.Mstyle.Window_Message_newLineX = Window_Message.prototype.newLineX;
Window_Message.prototype.newLineX = function(textState) {
	const padding = !$gameMessage.faceName() ? Galv.Mstyle.padding[3] : 0;
	return Galv.Mstyle.Window_Message_newLineX.call(this, textState) + padding;
};

Galv.Mstyle.Window_Message_newPage = Window_Message.prototype.newPage;
Window_Message.prototype.newPage = function(textState) {
	Galv.Mstyle.Window_Message_newPage.call(this,textState);
	textState.y += Galv.Mstyle.padding[0];
};

Window_Message.prototype.galvExtraWidths = function() {
	return 0; // For compatibility
};

Window_Message.prototype.galvExtraHeights = function() {
	return 0; // For compatibility
};

Window_Message.prototype.changeWindowDimensions = function() {
	if (this.pTarget != null) {
		Galv.Mstyle.testActive = true;
		let w = 0;
		let h = 0;
		const faceoffset = $gameMessage.faceName() ? ImageManager.faceWidth + 25 : 0;
		const xO = $gameMessage.faceName() ? faceoffset : 8;

		// Calc text width
		for (let i = 0; i < $gameMessage._texts.length; i++) {
			let lineWidth = this.testWidthEx($gameMessage._texts[i]);
			if (w < lineWidth) w = lineWidth;
		};
		w = w + $gameSystem.windowPadding() * 2 + xO + Galv.Mstyle.padding[3] + Galv.Mstyle.padding[1]; // padding!
		w += this.galvExtraWidths();
		this.width = Math.min(Graphics.boxWidth,w); // can't be wider than the screen!
		
		// Calc minimum lines
		let minFaceHeight = 0;
		if ($gameMessage._faceName) minFaceHeight = ImageManager.faceHeight + $gameSystem.windowPadding() * 2;
		
		// Calc text height
		let textState = { index: 0 };
		let extraFontHeight = 0;
		const lines = $gameMessage._texts

		// Dodgy way to modify text line height if the \{ \} text codes are used.
		for (let i = 0; i < lines.length; i++) {
			let up = (lines[i].match(/\\{/g) || []).length;
			let down = (lines[i].match(/\\}/g) || []).length;
			
			// Height
			extraFontHeight += extraFontHeight + ((up - down));
		}
		extraFontHeight *= 24;
				
		// Escape characters from text
		textState.text = this.convertEscapeCharacters($gameMessage.allText());
		

		// Build actual height from everything
		const allLineHeight = this.calcTextHeight(textState,true);
		const height = allLineHeight + $gameSystem.windowPadding() * 2 + extraFontHeight;
		const minHeight = this.fittingHeight($gameMessage._texts.length);
		this.height = Math.max(height,minHeight,minFaceHeight);
		this.height += Galv.Mstyle.padding[0] + Galv.Mstyle.padding[2];
		this.height += this.galvExtraHeights();
		this.yOffset = -Galv.Mstyle.yOffset - this.height;
		
		Galv.Mstyle.testActive = false;
		this.otherMStyleCommands(); // stop certain things happening when drawing the text that was used for determining size.
	} else { // if this.pTarget is null
		// normal message window
		this.yOffset = 0;
		this.width = this.windowWidth();
		this.height = this.fittingHeight(4) + Galv.Mstyle.padding[0] + Galv.Mstyle.padding[2];
		this.x = (Graphics.boxWidth - this.width) / 2;
	};
};

Galv.Mstyle.Window_Message_processEscapeCharacter = Window_Message.prototype.processEscapeCharacter;
Window_Message.prototype.processEscapeCharacter = function(code, textState) {
	// if only testing the text for sizes, don't process the characters that pause, etc.
	if (Galv.Mstyle.testActive) return Window_Base.prototype.processEscapeCharacter.call(this, code, textState); 
	Galv.Mstyle.Window_Message_processEscapeCharacter.call(this,code,textState);
}

Window_Message.prototype.otherMStyleCommands = function() {
};

Window_Message.prototype.windowWidth = function() {
	return Graphics.boxWidth;
};

Window_Message.prototype.testWidthEx = function(text) {
	return this.textSizeEx(text).width;
};

Galv.Mstyle.Window_Message__refreshPauseSign = Window_Message.prototype._refreshPauseSign;
Window_Message.prototype._refreshPauseSign = function() {
	Galv.Mstyle.Window_Message__refreshPauseSign.call(this);
	// indicator graphic to let user know they need to press a button
	let x = 0;
	let y = 0;
	const oX = Galv.Mstyle.indPos[1];
	const oY = Galv.Mstyle.indPos[2];
	
	this._pauseSignSprite.anchor.y = 0.5;
	this._pauseSignSprite.anchor.x = 0.5;
	
	const pos = Galv.Mstyle.indPos[0];
	
	switch (pos) {
		case 1:
			x = oX;
			y = this._height + oY;
			break;
		case 2:
			x = this._width / 2 + oX;
			y = this._height + oY;
			break;
		case 3:
			x = this.width + oX;
			y = this._height + oY;
			break;
		case 4:
			x = oX;
			y = this.height / 2 + oY;
			break;
		case 6:
			x = this.width + oX;
			y = this.height / 2 + oY;
			break;
		case 7:
			x = oX;
			y = oY;
			break;
		case 8:
			x = this._width / 2 + oX;
			y = oY;
			break;
		case 9:
			x = this.width + oX;
			y = oY;
			break;
	}
	this._pauseSignSprite.move(x,y);
};

Galv.Mstyle.Window_Message_convertEscapeCharacters = Window_Message.prototype.convertEscapeCharacters;
Window_Message.prototype.convertEscapeCharacters = function(text) {
    text = Galv.Mstyle.Window_Message_convertEscapeCharacters.call(this,text);
	text = text.replace(/\x1bpop\[[^\]]*\]/gi, ""); // Remove it if different characters are present!
    return text;
};


// WINDOW NAMEBOX
//-----------------------------------------------------------------------------

Window_NameBox.prototype.loadWindowskin = function() {
	Window_Base.prototype.loadPopMessageWindowskin.call(this);
};


// WINDOW BASE
//-----------------------------------------------------------------------------

Window_Base.prototype.loadPopMessageWindowskin = function() {
	if (Galv.Mstyle.target) {
		// use the pop settings
		const skin = Galv.Mstyle.tempPopData.windowskin ? Galv.Mstyle.tempPopData.windowskin : $gameSystem._mStyles[1].windowskin;
		return this.windowskin = ImageManager.loadSystem(skin);
	} else {
		// use the default settings
		return this.windowskin = ImageManager.loadSystem($gameSystem._mStyles[0].windowskin);
	}
};