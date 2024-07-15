//-----------------------------------------------------------------------------
//  Galv's Basic Event Shadows
//-----------------------------------------------------------------------------
//  For: RPGMAKER MZ
//  GALV_CharacterShadowsMZ.js
//-----------------------------------------------------------------------------
//  2020-09-11 - Version 1.0 - release
//-----------------------------------------------------------------------------
// Terms can be found at:
// galvs-scripts.com
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.Galv_BasicEventShadows = true;

var Galv = Galv || {};        // Galv's main object
Galv.BES = Galv.BES || {};    // Plugin object
Galv.BES.pluginName = "GALV_CharacterShadowsMZ";

//-----------------------------------------------------------------------------
/*:
 * @plugindesc (v.1.0) Display shadows under the player or events on the map.
 * @url http://galvs-scripts.com
 * @target MZ
 * @author Galv
 *
 * @param sImage
 * @text Shadow Image
 * @desc The image file used from /img/system/ folder.
 * @default Shadow1
 *
 * @param sOffset
 * @text Shadow Offset
 * @desc Pixel offset of the shadows
 * @default 5
 *
 * @command playerShadows
 * @text Player Shadows
 * @desc Change if the player shadows are visible or not
 *
 * @arg pStatus
 * @text Enable
 * @type boolean
 * @default true
 * @desc true to enable player shadows, false to disable them
 *
 * @command eventShadows
 * @text Event Shadows
 * @desc Change if the event shadows are visible or not
 *
 * @arg eStatus
 * @text Enable
 * @type boolean
 * @default true
 * @desc true to enable event shadows, false to disable them
 *
 * @help
 *   Galv's Character Shadows
 * ----------------------------------------------------------------------------
 * This plugin allows you to add shadows to events and player characters on the
 * map. These shadows can be enabled and disabled in the following ways:
 *
 * ----------------------------------------------------------------------------
 *  EVENT SHADOWS
 * ----------------------------------------------------------------------------
 *
 *      <shadow>
 *
 * By putting this tag in an event's "Note" field, the event will always have
 * a shadow, no matter what page the event uses as long as the event page has
 * a graphic in it.
 *
 * Alternatively, you can put this tag in a "Comment" anywhere on an event
 * page. As long as the event page conditions are active, the shadow will be
 * drawn. If the tag is not on a page, no shadow is drawn.
 *
 * ----------------------------------------------------------------------------
 *  PLAYER SHADOWS - SCRIPT CALL
 * ----------------------------------------------------------------------------
 * There are plugin commands available for the below script calls. Both will do
 * the same function, you can choose which to use.
 *
 *       Galv.BES.pShadows(true);     // turn shadows on for player actors
 *       Galv.BES.pShadows(false);    // turn shadows off for player actors
 *
 *       Galv.BES.eShadows(true);     // turn shadows on for all events
 *       Galv.BES.eShadows(false);    // turn shadows off for all events
 *
 * These are used in "Script" event command. It turns shadows on and off for
 * all player characters or all events.
 * ----------------------------------------------------------------------------
 */

//-----------------------------------------------------------------------------
//  CODE STUFFS
//-----------------------------------------------------------------------------

Galv.BES.img = PluginManager.parameters(Galv.BES.pluginName)["sImage"];
Galv.BES.os = Number(PluginManager.parameters(Galv.BES.pluginName)["sOffset"]);

Galv.BES.pShadows = function(status) {
	$gameSystem._playerShadow = status;
	SceneManager._scene._spriteset.doActorShadows();
};

Galv.BES.eShadows = function(status) {
	$gameSystem._eventShadows = status;
	SceneManager._scene._spriteset.doEventShadows();
};

PluginManager.registerCommand(Galv.BES.pluginName, "playerShadows", args => {
	let status = args.pStatus == "true";
	Galv.BES.pShadows(status);
});

PluginManager.registerCommand(Galv.BES.pluginName, "eventShadows", args => {
	let status = args.eStatus == "true";
	Galv.BES.eShadows(status);
});


// Game_System
//-----------------------------------------------------------------------------

Galv.BES.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	Galv.BES.Game_System_initialize.call(this);
	this._playerShadow = true;
	this._eventShadows = true;
};


// Scene and Spriteset Map
//-----------------------------------------------------------------------------

Galv.BES.Spriteset_Map_hideCharacters = Spriteset_Map.prototype.hideCharacters;
Spriteset_Map.prototype.hideCharacters = function() {
	for (let sprite in this._bshadowSprites) {
		this._bshadowSprites[sprite].hide();
	};
    Galv.BES.Spriteset_Map_hideCharacters.call(this);
};


Galv.BES.Spriteset_Map_createCharacters = Spriteset_Map.prototype.createCharacters;
Spriteset_Map.prototype.createCharacters = function() {
	Galv.BES.Spriteset_Map_createCharacters.call(this);
	this.createCharacterShadows();
};

Spriteset_Map.prototype.createCharacterShadows = function() {
	this._bshadowSprites = {};
	this.doEventShadows();
	this.doActorShadows();
};

Spriteset_Map.prototype.doEventShadows = function() {
	$gameMap.events().forEach(function(event) {
		if ($gameSystem._eventShadows) {
        	this.createBShadow(event._eventId,event);
		} else {
			this.destroyBShadow(event._eventId,event);
		};
    }, this);
};

Spriteset_Map.prototype.doActorShadows = function() {
	if ($gameSystem._playerShadow) { // add
		let fols = $gamePlayer.followers()._data;
		for (let i = 0; i < fols.length; i++) {
			fols[i]._shadow = true;
			this.createBShadow("f" + i + 1,fols[i]);
		};
		$gamePlayer._shadow = true;
		this.createBShadow("f0",$gamePlayer);
	} else { // Remove
		let fols = $gamePlayer.followers()._data;
		for (let i = 0; i < fols.length; i++) {
			fols[i]._shadow = false;
			this.destroyBShadow("f" + i + 1,fols[i]);
		};
		$gamePlayer._shadow = false;
		this.destroyBShadow("f0",$gamePlayer);
	};
};

Spriteset_Map.prototype.createBShadow = function(id,character) {
	if (!character) return;
	if (!this._bshadowSprites[id] && character._shadow) {
		this._bshadowSprites[id] = new Sprite_BasicShadow(character);
		this._tilemap.addChild(this._bshadowSprites[id]);
		character._shadSprite = true;
	};
};

Spriteset_Map.prototype.destroyBShadow = function(id,character) {
	if (!id) return;
	if (this._bshadowSprites[id]) {
		this._tilemap.removeChild(this._bshadowSprites[id]);
		delete(this._bshadowSprites[id]);
		if (character) character._shadSprite = false;
	};
};


Spriteset_Map.prototype.destroyAllBShadows = function() {
	let fols = $gamePlayer.followers()._data;
	for (let i = 0; i < fols.length; i++) {
		fols[i]._shadow = false;
		this.destroyBShadow("f" + i + 1,fols[i]);
	};
	$gamePlayer._shadow = false;
	this.destroyBShadow("f0",$gamePlayer);
	
	$gameMap.events().forEach(function(event) {
			this.destroyBShadow(event._eventId,event);
    }, this);
};


// Game_Event
//-----------------------------------------------------------------------------

Galv.BES.Game_Event_refresh = Game_Event.prototype.refresh;
Game_Event.prototype.refresh = function() {
	Galv.BES.Game_Event_refresh.call(this);
	this.doShadows();
};

Game_Event.prototype.doShadows = function() {
	if (!$gameSystem._eventShadows) {
		if (SceneManager._scene._spriteset) SceneManager._scene._spriteset.destroyBShadow(this._eventId);
		return;
	};
	if (this.event().note.contains("<shadow>") && this._characterName != "") {
		this._shadow = true;
	} else {
		// check if page has shadow
		const page = this.page();
		let shadow = false;
		if (page) {
			for (let i = 0; i < page.list.length; i++) {
				if (page.list[i].code == 108 && page.list[i].parameters[0].contains("<shadow>")) {
					shadow = true;
				};
			};
		};
		if (shadow) {
			this._shadow = true;
			if (SceneManager._scene._spriteset)	SceneManager._scene._spriteset.createBShadow(this._eventId,this);
		} else {
			this._shadow = false;
			if (SceneManager._scene._spriteset)	SceneManager._scene._spriteset.destroyBShadow(this._eventId);
			this._shadSprite = false;
		};
	};
};

Galv.BES.Game_Event_erase = Game_Event.prototype.erase;
Game_Event.prototype.erase = function() {
	this._shadow = false;
	if (SceneManager._scene._spriteset)	SceneManager._scene._spriteset.destroyBShadow(this._eventId);
	this._shadSprite = false;
    Galv.BES.Game_Event_erase.call(this);
};


// Sprite_BasicShadow
//-----------------------------------------------------------------------------

function Sprite_BasicShadow() {
    this.initialize.apply(this, arguments);
}

Sprite_BasicShadow.prototype = Object.create(Sprite.prototype);
Sprite_BasicShadow.prototype.constructor = Sprite_BasicShadow;

Sprite_BasicShadow.prototype.initialize = function(character) {
    Sprite.prototype.initialize.call(this);
    this.setCharacter(character);
};

Sprite_BasicShadow.prototype.setCharacter = function(character) {
	this._character = character;
	this.bitmap = ImageManager.loadSystem(Galv.BES.img);
	this.anchor.x = 0.5;
	this.anchor.y = 1;
};

Sprite_BasicShadow.prototype.update = function() {
    this.x = this._character.screenX();
   	this.y = this._character.screenY() + this._character.jumpHeight() + Galv.BES.os;
    this.z = this._character.screenZ() - 1;
	if (this._character._characterName == "" || this._character._transparent) {
		this.opacity = 0;
	} else {
		this.opacity = this._character._opacity
	};
};