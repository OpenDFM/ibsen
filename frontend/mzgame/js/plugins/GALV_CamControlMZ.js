//-----------------------------------------------------------------------------
//  Galv's Cam Control MZ
//-----------------------------------------------------------------------------
//  For: RPGMAKER MV
//  GALV_CamControlMZ.js
//-----------------------------------------------------------------------------
//  2020-11-23 - Version 1.7 - Added 'wait for camera' plugin command
//  2020-11-21 - Version 1.6 - Fixed speed not working when targeting player
//  2020-09-14 - Version 1.5 - Disabled battle zooming due to conflicts
//  2020-09-11 - Version 1.4 - Fixed bugs with save/loading data
//  2020-09-10 - Version 1.3 - Added zooming functionality
//  2020-09-07 - Version 1.2 - Minor code tweaks but no actual changes.
//  2020-09-01 - Version 1.1 - Minor code tweaks due to even position issue.
//  2020-08-26 - Version 1.0 - release
//-----------------------------------------------------------------------------
//  Terms can be found at:
//  galvs-scripts.com
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.Galv_CamControl = true;

var Galv = Galv || {};          // Galv's main object
Galv.CC = Galv.CC || {};        // This plugin object
Galv.CC.pluginName = "GALV_CamControlMZ";

//-----------------------------------------------------------------------------
/*:
 * @plugindesc (v.1.7) Allows greater control over where the game camera is focused. View documentation for plugin commands.
 * @url http://galvs-scripts.com
 * @target MZ
 * @author Galv
 *
 * @param useZoom
 * @text Enable Zoom Functions
 * @type boolean
 * @desc Make this false if you are using another zoom plugin so they don't conflict
 * @default true
 *
 * @param bZoom
 * @text Default Battle Zoom
 * @desc The zoom scale battle will begin at.
 * Default: 1 (100%)
 * @default 1
 *
 *
 * @command focusCharacter
 * @text Focus Character
 * @desc Set the camera's focus to a character
 *
 * @arg charId
 * @default 0
 * @text Character Id
 * @desc Target event id for camera focus or use 0 for player
 *
 * @arg speed
 * @default 800
 * @text Scroll Speed
 * @desc The speed in which the camera scrolls to the target (higher is slower)
 *
 *
 * @command focusXY
 * @text Focus Map Tile
 * @desc Set the camera's focus to a map tile's X,Y position
 *
 * @arg posX
 * @default 0
 * @text X Position
 * @desc The tile's X position
 *
 * @arg posY
 * @default 0
 * @text Y Position
 * @desc The tile's Y position
 *
 * @arg speed
 * @default 800
 * @text Scroll Speed
 * @desc The speed in which the camera scrolls to the target (higher is slower)
 *
 *
 * @command disable
 * @text Disable Focus
 * @desc Remove the camera focus and back to default camera on player. Do this to use Scroll Map event commands
 *
 * @command waitForCam
 * @text Wait For Camera
 * @desc Use after declaring a target to wait for the camera to reach the target before doing next event command
 *
 *
 * @command zoom
 * @text Zoom
 * @desc Zoom the center of the screen to a specified scale
 *
 * @arg zScale
 * @default 1
 * @text Zoom Scale
 * @desc 1 = 100%. 2.5 = 250%, etc.
 *
 * @arg zDuration
 * @default 60
 * @text Zoom Duration
 * @desc The amount of frames it takes to zoom into the selected scale
 *
 * @help
 *   Galv's Cam Control MZ
 * ----------------------------------------------------------------------------
 * This plugin creates a sliding movement for the camera as well as allows you
 * to set the target position of it to wherever required. (Player, event, xy)
 *
 * ----------------------------------------------------------------------------
 *   PLUGIN COMMANDS
 * ----------------------------------------------------------------------------
 *   Focus Character              // Set camera focus to a character.
 *                                // 0 for player, higher numbers for event ids
 *                                // Higher speed is slower camera
 *
 *   Focus Map Tile               // Set camera focus to an event.
 *                                // As above but instead of a character target
 *                                // you can set x,y tile position on the map
 *                                // Higher speed is slower camera
 *
 *
 *   Disable Focus                // Sets the focus on player and disables the
 *                                // sliding motion. (RPGMaker default)
 *                                // Using any command above will enable again
 *
 *   Wait For Camera              // Waits for the camera to stop moving before
 *                                // executing the next event command. Caution
 *                                // if using a moving target that never stops
 *
 *   Zoom                         // Set a zoom scale to zoom in and out
 *                                // Duration is many frames the zoom takes
 *
 * NOTES: 
 * - Not recommended to use speeds that are too fast.
 * - v# to use a variable's value in these options, where # is the variable id.
 * - Zooming out does not create more map so might be best to zoom in only
 * - Zooming only zooms to the center of the screen, so if your screen is at 
 *   the edge of the map, it won't zoom on the target. If you need to do this,
 *   increase the size of your map so the camera isn't at the edge.
 */

//-----------------------------------------------------------------------------
//  CODE STUFFS
//-----------------------------------------------------------------------------

// PLUGIN COMMANDS
//-----------------------------------------------------------------------------

PluginManager.registerCommand(Galv.CC.pluginName, "focusCharacter", args => {
	if ($gameMap.waitForCam && $gameMap.camIsMoving) return;
	const type = Galv.CC.getValue(args.charId) > 0 ? ["event"] : ["player"];
	const settings = type.concat(Object.values(args));
    Galv.CC.camControl(settings);  // Send an array of the setting values
});

PluginManager.registerCommand(Galv.CC.pluginName, "focusXY", args => {
	if ($gameMap.waitForCam && $gameMap.camIsMoving) return;
	const settings = Object.values(args);
    Galv.CC.camControl(settings);  // Send an array of the setting values
});

PluginManager.registerCommand(Galv.CC.pluginName, "disable", args => {
    Galv.CC.camControl(["disable"]);  // Send an array of the setting values
});

PluginManager.registerCommand(Galv.CC.pluginName, "waitForCam", args => {
    $gameMap._interpreter.waitForCam();
});




// PLUGIN FUNCTIONS
//-----------------------------------------------------------------------------

Galv.CC.camControl = function(args) {
	let key = args[0].toLowerCase();
	let speed = 800;
	let target = $gamePlayer;

	switch (key) {
		case "player":
			if (args[2]) speed = Galv.CC.getValue(args[2]);
			break;
		case "event":
			let eId = Galv.CC.getValue(args[1]);
			target = $gameMap.event(eId);
			if (args[2]) speed = Galv.CC.getValue(args[2]);
			break;
		case "disable":
			$gameMap.camTarget = $gamePlayer;
			$gameMap.camNorm = true;
			$gameMap.savedCamTarget = null;
			return;
		default:
			let px = Galv.CC.getValue(args[0]);
			let py = Galv.CC.getValue(args[1]);
			if (args[2]) speed = Galv.CC.getValue(args[2]);
			target = {
				x: px,
				y: py,
				_realX: px,
				_realY: py,
				screenX: Game_CharacterBase.prototype.screenX,
				screenY: function() {
					let th = $gameMap.tileHeight();
					return Math.round(this.scrolledY() * th + th);
				},
				scrolledX: Game_CharacterBase.prototype.scrolledX,
				scrolledY: Game_CharacterBase.prototype.scrolledY
			};
	};
	$gameMap.camTargetSet(target,speed);
	$gameMap.savedCamTarget = args;
};


// OTHER
//-----------------------------------------------------------------------------

Galv.CC.getValue = function(string) {
	if (string[0].toLowerCase() === "v") {
		// Use variable
		let varId = Number(string.replace("v",""));
		return $gameVariables.value(varId);
	} else {
		return Number(string);
	};
};


// GAME MAP
//-----------------------------------------------------------------------------

// OVERWRITE
Game_Map.prototype.displayX = function() {return Math.ceil(this._displayX * Galv.CC.size) / Galv.CC.size};
Game_Map.prototype.displayY = function() {return Math.ceil(this._displayY * Galv.CC.size) / Galv.CC.size};

Galv.CC.Game_Map_initialize = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function() {
	Galv.CC.size = this.tileWidth();
	this._camWidth = Graphics.width / 2;
	this._camHeight = Graphics.height / 2;
	Galv.CC.Game_Map_initialize.call(this);
};

Galv.CC.Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
	this.zoom = this.zoom || new PIXI.Point(1,1);
	if (!this.camNorm) {
		this.camTargetSet($gamePlayer,800);
		this.savedCamTarget = ["player"];
	};
	Galv.CC.Game_Map_setup.call(this,mapId);
};

Game_Map.prototype.camTargetSet = function(target,speed) {
	this.camIsMoving = true;
    this.camTarget = target;
    this.camNorm = false;
    this.camSpeed = speed || 800;
};

Galv.CC.Game_Map_updateScroll = Game_Map.prototype.updateScroll;
Game_Map.prototype.updateScroll = function() {
	if (this.camNorm) return Galv.CC.Game_Map_updateScroll.call(this);

	this._scrollRest = 0;
    const cw = this._camWidth;
    const ch = this._camHeight;
	const screenX = this.camTarget.screenX() * this.zoom.x;
	const screenY = this.camTarget.screenY() * this.zoom.y;
	let sx = Math.abs(screenX - cw) / this.camSpeed;
	let sy = Math.abs(screenY - ch) / this.camSpeed;

	if (sx < 0.01) (sx = 0);
	if (sy < 0.01) (sy = 0);

	this.camIsMoving = $gameMap.waitForCam ? sx + sy != 0 : false;

	if (screenY < ch) {
      this.scrollUp(sy);
	} else if (screenY > ch) {
      this.scrollDown(sy);
	};
	
    if (screenX < cw) {
      this.scrollLeft(sx);
	} else if (screenX > cw) {
      this.scrollRight(sx);
	};
};


//  GAME INTERPRETER
//-----------------------------------------------------------------------------

Game_Interpreter.prototype.waitForCam = function() {
    if ($gameMap.camIsMoving) {
		$gameMap.waitForCam = true;
		this.wait(1);
		this._index--;
	} else {
		$gameMap.waitForCam = false;
	}
    return true;
};


// SCENE MAP
//-----------------------------------------------------------------------------

Galv.CC.Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
Scene_Map.prototype.onMapLoaded = function() {
	Galv.CC.Scene_Map_onMapLoaded.call(this);
	if (!$gameMap.camNorm) {
		$gameMap.savedCamTarget = $gameMap.savedCamTarget || ["player"];
		Galv.CC.camControl($gameMap.savedCamTarget);
	};
};


// GAME PLAYER
//-----------------------------------------------------------------------------

Galv.CC.Game_Player_updateScroll = Game_Player.prototype.updateScroll;
Game_Player.prototype.updateScroll = function(lastScrolledX, lastScrolledY) {
	if ($gameMap.camNorm) return Galv.CC.Game_Player_updateScroll.call(this,lastScrolledX, lastScrolledY);
};

Galv.CC.Game_Player_center = Game_Player.prototype.center;
Game_Player.prototype.center = function(x, y) {
	if ($gameMap.camTarget == $gamePlayer || $gameMap.camNorm) {
    	return Galv.CC.Game_Player_center.call(this,x,y);
	};
};


Game_Player.prototype.centerX = function() {
    return ((Graphics.width / $gameMap.tileWidth() - $gameMap.zoom.x) / 2.0) / $gameMap.zoom.x;
};

Game_Player.prototype.centerY = function() {
    return ((Graphics.height / $gameMap.tileHeight() - 1.75 * $gameMap.zoom.y) / 2.0) / $gameMap.zoom.y;
};


//-----------------------------------------------------------------------------
//  ZOOM FUNCTIONALITY
//-----------------------------------------------------------------------------

PluginManager.registerCommand(Galv.CC.pluginName, "zoom", args => {
	const scale = Galv.CC.getValue(args.zScale);
	const duration = Math.max(Galv.CC.getValue(args.zDuration),1);
	Galv.CC.zoom(scale,duration);
});

Galv.CC.battleScale = Number(PluginManager.parameters(Galv.CC.pluginName)["bZoom"]);
Galv.CC.useZoom = PluginManager.parameters(Galv.CC.pluginName)["useZoom"] == 'true';
Galv.CC.halfWidth = 0;
Galv.CC.halfHeight = 0;

Galv.CC.zoom = function(scale,duration) {
	if (!Galv.CC.useZoom) return;
	const x = Galv.CC.halfWidth;
	const y = Galv.CC.halfHeight + 12;
	$gameScreen.startZoom(x,y,scale,duration);
};

Galv.CC.saveZoomData = function() {
	$gameSystem._savedZoom.x = $gameScreen._zoomX;
	$gameSystem._savedZoom.xTarget = $gameScreen._zoomXTarget;
	$gameSystem._savedZoom.y = $gameScreen._zoomY;
	$gameSystem._savedZoom.yTarget = $gameScreen._zoomYTarget;
	$gameSystem._savedZoom.scale = $gameScreen._zoomScale;
	$gameSystem._savedZoom.scaleTarget = $gameScreen._zoomScaleTarget;
	$gameSystem._savedZoom.duration = $gameScreen._zoomDuration;
};


//  GAME SYSTEM
//-----------------------------------------------------------------------------

Galv.CC.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	Galv.CC.halfWidth = Math.floor(Graphics.width / 2);
	Galv.CC.halfHeight = Math.floor(Graphics.height / 2);
	this.buildSavedZoom();
	Galv.CC.Game_System_initialize.call(this);
};

Game_System.prototype.buildSavedZoom = function() {
	const cx = Galv.CC.halfWidth;
	const cy = Galv.CC.halfHeight
	this._savedZoom = {
		x: cx,
		y: cy,
		xTarget: cx,
		yTarget: cy,
		scale: 1,
		scaleTarget: 1,
		duration: 0
	}
};


//  GAME SCREEN
//-----------------------------------------------------------------------------

if (Galv.CC.useZoom) {
// Overwrite
Galv.CC.Game_Screen_startZoom = Game_Screen.prototype.startZoom;
Game_Screen.prototype.startZoom = function(x, y, scale, duration) {
	if ($gameParty.inBattle()) return Galv.CC.Game_Screen_startZoom.call(this,x, y, scale, duration); // don't use in battle
	this._zoomXTarget = Math.min(Graphics.width,Math.max(x,0));
	this._zoomYTarget = Math.min(Graphics.height,Math.max(y,0));
	this._zoomScaleTarget = scale < 0 ? this._zoomScale : scale;
	this._zoomDuration = duration || 60;
};

Galv.CC.Game_Screen_clearZoom = Game_Screen.prototype.clearZoom;
Game_Screen.prototype.clearZoom = function() {
	if ($gameSystem._savedZoom) {
		this._zoomX = $gameSystem._savedZoom.x;
		this._zoomXTarget = $gameSystem._savedZoom.xTarget;
		this._zoomY = $gameSystem._savedZoom.y;
		this._zoomYTarget = $gameSystem._savedZoom.yTarget;
		this._zoomScale = $gameSystem._savedZoom.scale;
		this._zoomScaleTarget = $gameSystem._savedZoom.scaleTarget;
		this._zoomDuration = $gameSystem._savedZoom.duration;
		return;
	}
	Galv.CC.Game_Screen_clearZoom.call(this);
};

Galv.CC.Game_Screen_onBattleStart = Game_Screen.prototype.onBattleStart;
Game_Screen.prototype.onBattleStart = function() {
	Galv.CC.saveZoomData();
	Galv.CC.dontSave = true;
	Galv.CC.Game_Screen_onBattleStart.call(this);
};

Game_Screen.prototype.resetBattleZoom = function() {
	this._zoomX = Galv.CC.halfWidth;
	this._zoomXTarget = Galv.CC.halfWidth;
	this._zoomY = Galv.CC.halfHeight;
	this._zoomYTarget = Galv.CC.halfHeight;
	this._zoomScale = Galv.CC.battleScale;
	this._zoomScaleTarget = Galv.CC.battleScale;
	this._zoomDuration = 0;
};


//  SCENE MAP
//-----------------------------------------------------------------------------

Galv.CC.Scene_Map_start = Scene_Map.prototype.start;
Scene_Map.prototype.start = function() {
	$gameScreen.clearZoom();
	Galv.CC.Scene_Map_start.call(this);
};

Galv.CC.Scene_Map_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
	if (!Galv.CC.dontSave) Galv.CC.saveZoomData();
	Galv.CC.Scene_Map_terminate.call(this);
};


//  SCENE BATTLE
//-----------------------------------------------------------------------------

Galv.CC.Scene_Battle_start = Scene_Battle.prototype.start;
Scene_Battle.prototype.start = function() {
	$gameScreen.resetBattleZoom();
	Galv.CC.Scene_Battle_start.call(this);
};

Galv.CC.Scene_Battle_terminate = Scene_Battle.prototype.terminate;
Scene_Battle.prototype.terminate = function() {
	Galv.CC.dontSave = false;
	Galv.CC.Scene_Battle_terminate.call(this);
};
}; // End if Galv.CC.useZoom