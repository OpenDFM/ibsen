/*:
@plugindesc Basic Menu ADDON for EST_PHONE_MENU_MZ.js 
<EST PHONE ADDON BASICMENU>
@author Estriole
@target MZ
@base EST_PHONE_MENU_MZ
@orderAfter EST_PHONE_MENU_MZ

@param phoneItemSettings
@text Phone Item Settings

@param phoneItemHelpY
@text Help Window Y Offset
@desc Help Window Y Offset
@type number
@parent phoneItemSettings
@default 8

@param phoneItemCommandY
@text ItemType Window Y Offset
@desc ItemType Window Y Offset
@type number
@parent phoneItemSettings
@default 64

@param phoneItemListY
@text ItemList Window Y Offset
@desc ItemList Window Y Offset
@type number
@parent phoneItemSettings
@default 180

@param phoneItemActorY
@text Actor Selection Window Y Offset
@desc Actor Selection Window Y Offset
@type number
@parent phoneItemSettings
@default 180

@param phoneItemGaugeWidth
@text Gauge Width
@desc Width of the Item Window Gauge
@type number
@parent phoneItemSettings
@default 120

@param phoneSkillSettings
@text Phone Skill Settings

@param phoneSkillActorBG
@text Use Actor Background
@desc if true will use actor background for phone skill scene
@type boolean
@parent phoneSkillSettings
@default true

@param phoneSkillGaugeWidth
@text Gauge Width 1
@desc Width of the Gauge at Actor Selection
@type number
@parent phoneSkillSettings
@default 128

@param phoneSkillStatusGaugeWidth
@text Gauge Width 2
@desc Width of the Skill User Status Gauge
@type number
@parent phoneSkillSettings
@default 88


@param phoneSkillHelpY
@text Help Window Y Offset
@desc Help Window Y Offset
@type number
@parent phoneSkillSettings
@default 8

@param phoneSkillCommandY
@text SkillType Window Y Offset
@desc SkillType Window Y Offset
@type number
@parent phoneSkillSettings
@default 64

@param phoneSkillStatusY
@text Status Window Y Offset
@desc Status Window Y Offset
@type number
@parent phoneSkillSettings
@default 64

@param phoneSkillListY
@text SkillList Window Y Offset
@desc SkillList Window Y Offset
@type number
@parent phoneSkillSettings
@default 240

@param phoneSkillActorY
@text Actor Selection Window Y Offset
@desc Actor Selection Window Y Offset
@type number
@parent phoneSkillSettings
@default 240

@param phoneEquipSettings
@text Phone Equip Settings

@param phoneEquipActorBG
@text Use Actor Background
@desc if true will use actor background for phone equip scene
@type boolean
@parent phoneEquipSettings
@default true

@param phoneEquipGaugeWidth
@text Gauge Width
@desc Width of the Equip Window Gauge
@type number
@parent phoneEquipSettings
@default 128

@param phoneEquipHelpY
@text Help Window Y Offset
@desc Help Window Y Offset
@type number
@parent phoneEquipSettings
@default 8

@param phoneEquipStatusY
@text Status Window Y Offset
@desc Status Window Y Offset
@type number
@parent phoneEquipSettings
@default 56

@param phoneEquipCommandY
@text Command Window Y Offset
@desc Command Window Y Offset
@type number
@parent phoneEquipSettings
@default 8

@param phoneEquipSlotY
@text Slot Window Y Offset
@desc Slot Window Y Offset
@type number
@parent phoneEquipSettings
@default 90

@param phoneEquipItemY
@text Item Window Y Offset
@desc Item Window Y Offset
@type number
@parent phoneEquipSettings
@default 315

@param phoneStatusSettings
@text Phone Status Settings

@param phoneStatusActorBG
@text Use Actor Background
@desc if true will use actor background for phone status
@type boolean
@parent phoneStatusSettings
@default true

@param phoneStatusMaxLevelText
@text Max Level Text
@desc Text to show when actor level maxed
@type string
@parent phoneStatusSettings
@default Max Level

@param expGaugeColor1
@text Exp Gauge Color 1
@desc Color 1 of the Exp Gauge gradient
@type number
@parent phoneStatusSettings
@default 27

@param expGaugeColor2
@text Exp Gauge Color 2
@desc Color 2 of the Exp Gauge gradient
@type number
@parent phoneStatusSettings
@default 17

@param phoneStatusItemHeight
@text Status Content Height
@desc Height of the Status Window Content
@type number
@parent phoneStatusSettings
@default 480

@param phoneStatusGaugeWidth
@text Gauge Width
@desc Width of the Status Window Gauge
@type number
@parent phoneStatusSettings
@default 205

@param phoneStatusLineManager
@text --- Line Draw Manager ---
@parent phoneStatusSettings

@param statusActorNameLine
@text Actor Name Line
@desc In Phone Status... Which line the actor name drawn?
@type number
@parent phoneStatusLineManager
@default 0

@param statusActorLvLine
@text Actor Level Line
@desc In Phone Status... Which line the actor level drawn?
@type number
@parent phoneStatusLineManager
@default 3

@param statusActorClassLine
@text Actor Class Line
@desc In Phone Status... Which line the actor class drawn?
@type number
@parent phoneStatusLineManager
@default 4

@param statusActorStatesLine
@text Actor States Line
@desc In Phone Status... Which line the actor inflicted states drawn?
@type number
@parent phoneStatusLineManager
@default 5

@param statusActorGaugeLine
@text Actor HPMPTP Line
@desc In Phone Status... Which line the actor gauges drawn? (this takes almost 4 lines)
@type number
@parent phoneStatusLineManager
@default 6

@param statusActorExpLine
@text Actor EXP Line
@desc In Phone Status... Which line the actor EXP gauges drawn? (takes almost 2 lines)
@type number
@parent phoneStatusLineManager
@default 9

@param statusActorAtkLine
@text Actor Atk Line
@desc In Phone Status... Which line the actor Atk  drawn?
@type number
@parent phoneStatusLineManager
@default 11

@param statusActorDefLine
@text Actor Def Line
@desc In Phone Status... Which line the actor Def  drawn?
@type number
@parent phoneStatusLineManager
@default 12

@param statusActorMatkLine
@text Actor Matk Line
@desc In Phone Status... Which line the actor Matk  drawn?
@type number
@parent phoneStatusLineManager
@default 13

@param statusActorMdefLine
@text Actor Mdef Line
@desc In Phone Status... Which line the actor Mdef  drawn?
@type number
@parent phoneStatusLineManager
@default 14

@param statusActorAgiLine
@text Actor Agi Line
@desc In Phone Status... Which line the actor Agi  drawn?
@type number
@parent phoneStatusLineManager
@default 15

@param statusActorLukLine
@text Actor Luk Line
@desc In Phone Status... Which line the actor Luk  drawn?
@type number
@parent phoneStatusLineManager
@default 16

@param statusActorProfLine
@text Actor Profile Line
@desc In Phone Status... Which line the actor Profile drawn? (inf lines)(recommended last)
@type number
@parent phoneStatusLineManager
@default 17

@param phoneOptionSettings
@text Phone Options Settings

@param phoneOptionY
@text Option Window Y Offset
@desc Option Window Y Offset
@type number
@parent phoneOptionSettings
@default 8

@param phoneLoadSettings
@text Phone Load Settings

@param phoneReplaceLoad
@text PhoneLoad as SceneLoad.
@desc If set to true... this will open Scene_PhoneAddonLoad instead of Scene_Load
@type boolean
@default true
@parent phoneLoadSettings

@param phoneLoadCommonEvent
@text Onload Common Event
@desc When loading savefile from phone. execute this common event (set to 0 to not call any common event)
@type number
@min 0
@parent phoneLoadSettings
@default 0

@help
 ■ Information      ╒══════════════════════════╛
 EST - PHONE ADDON - BASIC MENU
 Version: 1.2
 By Estriole
 File name: EST_PHONE_ADDON_BASICMENU.js

 ■ Introduction     ╒══════════════════════════╛
 This plugin is addon to EST - PHONE MENU MZ
​ this plugin recreate all the basic menu to fits the phone scene

 ■ Features         ╒══════════════════════════╛
 - all basic menu in phone screen

  ■ Changelog       ╒══════════════════════════╛
 v1.0 2020.10.22           Finish making the plugin
 v1.1 2020.10.25           fix the bug with skill gauge width in skill user status
                           and actor selection
 v1.2 2021.01.30           remove the hardcoded lv and exp text... now use database term
                           add plugin parameter Max Level Text... so user can change it.

 ■ Plugin Download ╒══════════════════════════╛
 https://www.dropbox.com/s/6bquiq3d6emoreo/EST_PHONE_ADDON_BASICMENU.js?dl=0 
  
 ■ Screenshots ╒══════════════════════════╛
 Coming Soon

 ■ Demo ╒══════════════════════════╛
 https://www.dropbox.com/sh/vhf1jhpydfr3vne/AACXtmj85frlI81AAmAcK50Ha?dl=0
 click download to download the entire folder.   

 ■ How to use       ╒══════════════════════════╛
  1. Install EST_PHONE_MENU_MZ.js (required)
  2. Install this plugin BELOW it
  3. open the EST_PHONE_MENU_MZ plugin parameter and search
  for Phone Command Settings parameter.
  add your menu command there.
  
  this is what you should put on the 'Script' parameter
  for that menu command.

  Item Scene
  SceneManager.push(Scene_PhoneAddonItem);

  Skill Scene
  $gameSystem._phoneActorSelectionType = "Skill";
  SceneManager.push(Scene_PhoneAddonActorSelection);

  Equip Scene
  $gameSystem._phoneActorSelectionType = "Equip";
  SceneManager.push(Scene_PhoneAddonActorSelection);

  Status Scene
  $gameSystem._phoneActorSelectionType = "Status";
  SceneManager.push(Scene_PhoneAddonActorSelection);
  
  Formation Scene
  SceneManager.push(Scene_PhoneAddonFormation);

  Options Scene
  SceneManager.push(Scene_PhoneAddonOptions);

  Save Scene
  SceneManager.push(Scene_PhoneAddonSave);

  Load Scene
  SceneManager.push(Scene_PhoneAddonLoad);

  Game End Scene
  SceneManager.push(Scene_PhoneAddonGameEnd);

  4> you can also make when pressing continue / load
  in title screen... instead of calling Scene_Load
  will use the phone version...
  change the "PhoneLoad as SceneLoad" parameter to true.

 ■ Dependencies     ╒══════════════════════════╛
 EST_PHONE_MENU_MZ.js
 place this plugin BELOW it.

 ■ Compatibility    ╒══════════════════════════╛
 MZ is new engine... so i cannot say for sure. 
 but it should be compatible with most things.

 ■ Parameters       ╒══════════════════════════╛
  !Phone Item Settings
    >> Help Window Y Offset
      ~ Help Window Y Offset

    >> ItemType Window Y Offset
      ~ ItemType Window Y Offset

    >> ItemList Window Y Offset
      ~ ItemList Window Y Offset

    >> Actor Selection Window Y Offset
      ~ Actor Selection Window Y Offset
    >> Gauge Width
      ~ Width of the Item Window Gauge

  !Phone Skill Settings
    >> Use Actor Background
      ~ if true will use actor background for phone skill scene

    >> Gauge Width 1
      ~ Width of the Gauge in Actor Selection

    >> Gauge Width 2
      ~ Width of the Skill User Status Gauge

    >> Help Window Y Offset
      ~ Help Window Y Offset

    >> SkillType Window Y Offset
      ~ SkillType Window Y Offset

    >> Status Window Y Offset
      ~ Status Window Y Offset

    >> SkillList Window Y Offset
      ~ SkillList Window Y Offset

    >> Actor Selection Window Y Offset
      ~ Actor Selection Window Y Offset

  !Phone Equip Settings
    >> Use Actor Background
      ~ if true will use actor background for phone equip scene
    >> Gauge Width
      ~ Width of the Equip Window Gauge
    >> Help Window Y Offset
      ~ Help Window Y Offset
    >> Status Window Y Offset
      ~ Status Window Y Offset
    >> Command Window Y Offset
      ~ Command Window Y Offset
    >> Slot Window Y Offset
      ~ Slot Window Y Offset
    >> Item Window Y Offset
      ~ Item Window Y Offset

  !Phone Status Settings
    >> Use Actor Background
      ~ if true will use actor background for phone status
    >> Max Level Text
      ~ Text to show when actor level maxed
    >> Exp Gauge Color 1
      ~ Color 1 of the Exp Gauge gradient
    >> Exp Gauge Color 2
      ~ Color 2 of the Exp Gauge gradient
    >> Status Content Height
      ~ Height of the Status Window Content
    >> Gauge Width
      ~ Width of the Status Window Gauge
    >> Actor Name Line
      ~ In Phone Status... Which line the actor name drawn?
    >> Actor Level Line
      ~ In Phone Status... Which line the actor level drawn?
    >> Actor Class Line
      ~ In Phone Status... Which line the actor class drawn?
    >> Actor States Line
      ~ In Phone Status... Which line the actor inflicted states drawn?
    >> Actor HPMPTP Line
      ~ In Phone Status... Which line the actor gauges drawn? (this takes almost 4 lines)
    >> Actor EXP Line
      ~ In Phone Status... Which line the actor EXP gauges drawn? (takes almost 2 lines)
    >> Actor Atk Line
      ~ In Phone Status... Which line the actor Atk  drawn?
    >> Actor Def Line
      ~ In Phone Status... Which line the actor Def  drawn?
    >> Actor Matk Line
      ~ In Phone Status... Which line the actor Matk  drawn?
    >> Actor Mdef Line
      ~ In Phone Status... Which line the actor Mdef  drawn?
    >> Actor Agi Line
      ~ In Phone Status... Which line the actor Agi  drawn?
    >> Actor Luk Line
      ~ In Phone Status... Which line the actor Luk  drawn?
    >> Actor Profile Line
      ~ In Phone Status... Which line the actor Profile drawn? (inf lines)(recommended last)
  
  !Phone Options Settings
    >> Option Window Y Offset
      ~ Option Window Y Offset
  
  !Phone Load Settings
    >> PhoneLoad as SceneLoad.
      ~ If set to true... this will open Scene_PhoneAddonLoad instead of Scene_Load
    >> Onload Common Event
      ~ When loading savefile from phone. execute this common event (set to 0 to not call any common event)

 ■ License          ╒══════════════════════════╛
 Free to use in all project (except the one containing pornography)
 as long as i credited (ESTRIOLE). 

 ■ Extra Credit ╒══════════════════════════╛

 ■ Support          ╒══════════════════════════╛
 While I'm flattered and I'm glad that people have been sharing and 
 asking support for scripts in other RPG Maker communities, I would 
 like to ask that you please avoid posting my scripts outside of where 
 I frequent because it would make finding support and fixing bugs 
 difficult for both of you and me.
   
 If you're ever looking for support, I can be reached at the following:
 [ http://forums.rpgmakerweb.com/ ]
 pm me : estriole

 also support to compatibility with VisuStella is not possible.
 because their code is obfuscated thus cannot be read by human.
 if there's incompatibility... please ask VisuStella Team.

 ■ Donate  ╒══════════════════════════╛
 If you want to support my work you can donate here
 https://paypal.me/Estriole

 ■ Author's Notes   ╒══════════════════════════╛
 None

*/
var EST = EST || {};
EST.PhoneMenu = EST.PhoneMenu || {};
EST.PhoneMenu.addonName=document.currentScript.src.split('/').slice(-1)[0].slice(0,-3).replace(/\%20/g," ");

//merge addon parameter to main phone parameter
EST.PhoneMenu.AddonParam = PluginManager.parameters(EST.PhoneMenu.addonName);
Object.assign(EST.PhoneMenu.Parameters, EST.PhoneMenu.AddonParam);

//addon status parameter
EST.PhoneMenu.Parameters.phoneStatusActorBG = JSON.parse(EST.PhoneMenu.Parameters.phoneStatusActorBG); 
EST.PhoneMenu.Parameters.expGaugeColor1 = Number(EST.PhoneMenu.Parameters.expGaugeColor1);
EST.PhoneMenu.Parameters.expGaugeColor2 = Number(EST.PhoneMenu.Parameters.expGaugeColor2);
EST.PhoneMenu.Parameters.statusActorNameLine = Number(EST.PhoneMenu.Parameters.statusActorNameLine);
EST.PhoneMenu.Parameters.statusActorLvLine = Number(EST.PhoneMenu.Parameters.statusActorLvLine);
EST.PhoneMenu.Parameters.statusActorClassLine = Number(EST.PhoneMenu.Parameters.statusActorClassLine);
EST.PhoneMenu.Parameters.statusActorStatesLine = Number(EST.PhoneMenu.Parameters.statusActorStatesLine);
EST.PhoneMenu.Parameters.statusActorGaugeLine = Number(EST.PhoneMenu.Parameters.statusActorGaugeLine);
EST.PhoneMenu.Parameters.statusActorExpLine = Number(EST.PhoneMenu.Parameters.statusActorExpLine);
EST.PhoneMenu.Parameters.statusActorAtkLine = Number(EST.PhoneMenu.Parameters.statusActorAtkLine);
EST.PhoneMenu.Parameters.statusActorDefLine = Number(EST.PhoneMenu.Parameters.statusActorDefLine);
EST.PhoneMenu.Parameters.statusActorMatkLine = Number(EST.PhoneMenu.Parameters.statusActorMatkLine);
EST.PhoneMenu.Parameters.statusActorMdefLine = Number(EST.PhoneMenu.Parameters.statusActorMdefLine);
EST.PhoneMenu.Parameters.statusActorAgiLine = Number(EST.PhoneMenu.Parameters.statusActorAgiLine);
EST.PhoneMenu.Parameters.statusActorLukLine = Number(EST.PhoneMenu.Parameters.statusActorLukLine);
EST.PhoneMenu.Parameters.statusActorProfLine = Number(EST.PhoneMenu.Parameters.statusActorProfLine);

EST.PhoneMenu.Parameters.phoneStatusItemHeight = Number(EST.PhoneMenu.Parameters.phoneStatusItemHeight);
EST.PhoneMenu.Parameters.phoneStatusGaugeWidth = Number(EST.PhoneMenu.Parameters.phoneStatusGaugeWidth);

// //addon equip parameter
EST.PhoneMenu.Parameters.phoneEquipActorBG = JSON.parse(EST.PhoneMenu.Parameters.phoneEquipActorBG); 
EST.PhoneMenu.Parameters.phoneEquipHelpY = Number(EST.PhoneMenu.Parameters.phoneEquipHelpY); 
EST.PhoneMenu.Parameters.phoneEquipStatusY = Number(EST.PhoneMenu.Parameters.phoneEquipStatusY); 
EST.PhoneMenu.Parameters.phoneEquipCommandY = Number(EST.PhoneMenu.Parameters.phoneEquipCommandY); 
EST.PhoneMenu.Parameters.phoneEquipSlotY = Number(EST.PhoneMenu.Parameters.phoneEquipSlotY); 
EST.PhoneMenu.Parameters.phoneEquipItemY = Number(EST.PhoneMenu.Parameters.phoneEquipItemY); 
EST.PhoneMenu.Parameters.phoneEquipGaugeWidth = Number(EST.PhoneMenu.Parameters.phoneEquipGaugeWidth); 

// addon skill parameter
EST.PhoneMenu.Parameters.phoneSkillActorBG = JSON.parse(EST.PhoneMenu.Parameters.phoneSkillActorBG); 
EST.PhoneMenu.Parameters.phoneSkillHelpY = Number(EST.PhoneMenu.Parameters.phoneSkillHelpY); 
EST.PhoneMenu.Parameters.phoneSkillCommandY = Number(EST.PhoneMenu.Parameters.phoneSkillCommandY); 
EST.PhoneMenu.Parameters.phoneSkillStatusY = Number(EST.PhoneMenu.Parameters.phoneSkillStatusY); 
EST.PhoneMenu.Parameters.phoneSkillActorY = Number(EST.PhoneMenu.Parameters.phoneSkillActorY); 
EST.PhoneMenu.Parameters.phoneSkillListY = Number(EST.PhoneMenu.Parameters.phoneSkillListY); 
EST.PhoneMenu.Parameters.phoneSkillGaugeWidth = Number(EST.PhoneMenu.Parameters.phoneSkillGaugeWidth); 
EST.PhoneMenu.Parameters.phoneSkillStatusGaugeWidth = Number(EST.PhoneMenu.Parameters.phoneSkillStatusGaugeWidth); 

// addon item parameter
EST.PhoneMenu.Parameters.phoneItemHelpY = Number(EST.PhoneMenu.Parameters.phoneItemHelpY); 
EST.PhoneMenu.Parameters.phoneItemCommandY = Number(EST.PhoneMenu.Parameters.phoneItemCommandY); 
EST.PhoneMenu.Parameters.phoneItemActorY = Number(EST.PhoneMenu.Parameters.phoneItemActorY); 
EST.PhoneMenu.Parameters.phoneItemListY = Number(EST.PhoneMenu.Parameters.phoneItemListY); 
EST.PhoneMenu.Parameters.phoneItemGaugeWidth = Number(EST.PhoneMenu.Parameters.phoneItemGaugeWidth); 

// addon option parameter
EST.PhoneMenu.Parameters.phoneOptionY = Number(EST.PhoneMenu.Parameters.phoneOptionY); 

// addon load parameter
EST.PhoneMenu.Parameters.phoneReplaceLoad = JSON.parse(EST.PhoneMenu.Parameters.phoneReplaceLoad); 
EST.PhoneMenu.Parameters.phoneLoadCommonEvent = Number(EST.PhoneMenu.Parameters.phoneLoadCommonEvent); 

// adding parameters to scene and window phone
Scene_Phone.prototype = Object.assign(Scene_Phone.prototype, EST.PhoneMenu);
Window_PhoneCommand.prototype = Object.assign(Window_PhoneCommand.prototype, EST.PhoneMenu);

//wrapper
(function($){
//THE BASIC MENU ADDONS
//start actor selection for skill, equip, status, talk
Scene_PhoneAddonActorSelection = function() {
    this.initialize(...arguments);
};
Scene_PhoneAddonActorSelection.prototype = Object.create(Scene_PhoneAddonBase.prototype);
Scene_PhoneAddonActorSelection.prototype.constructor = Scene_PhoneAddonActorSelection;

Scene_PhoneAddonActorSelection.prototype.createContents = function(){
    var wx = this.Parameters.phoneXpos + this.Parameters.phoneBGXoffset;
    var wy = this.Parameters.phoneYpos + this.Parameters.phoneBGYoffset + 15;
    var ww = this.Parameters.phoneBGWidth;
    var wh = this.Parameters.phoneBGHeight -15;
    this._phoneCommand = new Window_PhoneAddonSelection(new Rectangle(wx,wy,ww,wh),this._page);
    this._phoneCommand.setHandler("ok", this.onPhoneOK.bind(this));
    this._phoneCommand.setHandler("cancel", this.onPhoneCancel.bind(this));
    this._phoneCommand.refresh();
    this.addChild(this._phoneCommand);
};
Scene_PhoneAddonActorSelection.prototype.onPhoneCancel = function() {
  if ($gameMap._interpreter.isRunning()) return this._phoneCommand.activate();
  SoundManager.playCancel();
  $gameTemp._phoneLastIcon = null;
  $gameTemp._phoneLastPage = null;
  SceneManager.pop(); 
};

Scene_PhoneAddonActorSelection.prototype.onPhoneOK = function() {
    var type = $gameSystem._phoneActorSelectionType;
    $gameSystem._phoneMenuActor = this._phoneCommand._index;
    switch (type){
        case ("Skill"):
        SceneManager.push(Scene_PhoneAddonSkill);   
        break;
        case ("Equip"):
        SceneManager.push(Scene_PhoneAddonEquip)
        break;
        case ("Status"):
        SceneManager.push(Scene_PhoneAddonStatus)       
        break;
        case ("Talk"):
        var actorId = $gameParty.members()[$gameSystem._phoneMenuActor]._actorId;
        var actor = $dataActors[actorId];
        if (!actor) return this._phoneCommand.activate();
        if (!actor.note.match(/<phoneTalkCE:(.*)>/im)) return this._phoneCommand.activate();
        var ce = Number(actor.note.match(/<phoneTalkCE:(.*)>/im)[1]);
        $gameTemp.reserveCommonEvent(ce);
        break;
    };
};

Window_PhoneAddonSelection = function() {
    this.initialize(...arguments);
};
Window_PhoneAddonSelection.prototype = Object.create(Window_PhoneAddonBase.prototype);
Window_PhoneAddonSelection.prototype.constructor = Window_PhoneAddonSelection;

Window_PhoneAddonSelection.prototype.makeCommandList = function(){
    for(actor of $gameParty.members()){
      this.addCommand(actor, actor.name());
    };
};

//patch for scene interpreter
Window_PhoneAddonSelection.prototype.processCursorMove = function(){
  if ($gameMap._interpreter.isRunning()) return this.activate();
  Window_PhoneAddonBase.prototype.processCursorMove.call(this);
};
Window_PhoneAddonSelection.prototype.processHandling = function(){
  if ($gameMap._interpreter.isRunning()) return this.activate();
  Window_PhoneAddonBase.prototype.processHandling.call(this);
};
Window_PhoneAddonSelection.prototype.processTouch = function(){
  if ($gameMap._interpreter.isRunning()) return this.activate();
  Window_PhoneAddonBase.prototype.processTouch.call(this);
};

Window_PhoneAddonSelection.prototype.drawItem = function(index){
    const rect = this.itemRect(index);
    const align = "left";
    var faceName = this._list[index].name.faceName();
    var faceIndex = this._list[index].name.faceIndex();
    this.drawFace(faceName,faceIndex,rect.x,rect.y, 144, rect.height);
    this.resetTextColor();
    this.changePaintOpacity(this.isCommandEnabled(index));
    this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
    this.drawText(TextManager.levelA+" "+this._list[index].name.level, rect.x + 144-24, rect.y+this.lineHeight(), rect.width, align);    
};

Window_PhoneAddonSelection.prototype.commandName = function(index){
    return this._list[index].name.name();
};

Window_PhoneAddonSelection.prototype.itemHeight = function() {
    return 82;
};

Window_PhoneAddonSelection.prototype.processWheelScroll = function() {
    if (this.isWheelScrollEnabled() && this.isTouchedInsideFrame()) {
        const threshold = 20;
        if (TouchInput.wheelY >= threshold) {
            this.smoothScrollDown(1);
        }
        if (TouchInput.wheelY <= -threshold) {
            this.smoothScrollUp(1);
        }
    }
};
//end addon actor selection

//start item
Scene_PhoneAddonItem = function() {
    this.initialize(...arguments);
};
Scene_PhoneAddonItem.prototype = Object.create(Scene_PhoneAddonBase.prototype);
Scene_PhoneAddonItem.prototype.constructor = Scene_PhoneAddonItem;

Scene_PhoneAddonItem.prototype.createContents = function(){
  var par = this.Parameters;
  var wx = par.phoneXpos + par.phoneBGXoffset;
  var wy = par.phoneYpos + par.phoneBGYoffset + 15;
  var ww = par.phoneBGWidth;
  var wh = par.phoneBGHeight -15;
  // this.createHelpWindow();
  this._helpWindow = new Window_PhoneHelp(new Rectangle(wx,wy + par.phoneItemHelpY,ww,90));
  this._helpWindow.refresh();
  this.addChild(this._helpWindow);
  // this.createSkillTypeWindow();
  this._phoneCommand = new Window_PhoneItemCategory(new Rectangle(wx, wy + par.phoneItemCommandY, ww, 112));
  this._phoneCommand.setHelpWindow(this._helpWindow);
  this._phoneCommand.setHandler("ok", this.onCategoryOk.bind(this));
  this._phoneCommand.setHandler("cancel", this.onCategoryCancel.bind(this));
  this.addChild(this._phoneCommand);
  // this.createItemWindow();
  this._itemWindow = new Window_PhoneItemList(new Rectangle(wx,wy + par.phoneItemListY,ww,wh - par.phoneItemListY));
  this._itemWindow.setHelpWindow(this._helpWindow);
  this._itemWindow.setHandler("ok", this.onItemOk.bind(this));
  this._itemWindow.setHandler("cancel", this.onItemCancel.bind(this));
  this._phoneCommand.setItemWindow(this._itemWindow);
  this.addChild(this._itemWindow);
   if (!this._phoneCommand.needsSelection()) {
     this._itemWindow.y -= this._phoneCommand.height;
     this._itemWindow.height += this._phoneCommand.height;
     this._phoneCommand.hide();
     this._phoneCommand.deactivate();
     this.onCategoryOk();
   };
  this._actorWindow = new Window_PhoneItemActor(new Rectangle(wx, wy + par.phoneItemActorY,ww,wh - par.phoneItemActorY));
  this._actorWindow.setHandler("ok", this.onActorOk.bind(this));
  this._actorWindow.setHandler("cancel", this.onActorCancel.bind(this));
  this._actorWindow.refresh();
  this._actorWindow.hide();
  this.addChild(this._actorWindow);
  // //activating
  this._phoneCommand.activate();
};

Scene_PhoneAddonItem.prototype.onCategoryOk = function() {
    this._itemWindow.activate();
    this._itemWindow.selectLast();
};
Scene_PhoneAddonItem.prototype.onCategoryCancel = function() {
    this.popScene();
};

Scene_PhoneAddonItem.prototype.onItemOk = function() {
    $gameParty.setLastItem(this.item());
    this.determineItem();
};

Scene_PhoneAddonItem.prototype.determineItem = function() {
    const action = new Game_Action(this.user());
    const item = this.item();
    action.setItemObject(item);
    if (action.isForFriend()) {
        this.showActorWindow();
        this._actorWindow.selectForItem(this.item());
    } else {
        this.useItem();
        this.activateItemWindow();
    }
};

Scene_PhoneAddonItem.prototype.showActorWindow = function() {
    this._itemWindow.hide();
    this._actorWindow.refresh();
    this._actorWindow.show();
    this._actorWindow.activate();
};

Scene_PhoneAddonItem.prototype.hideActorWindow = function() {
    this._itemWindow.show();
    this._actorWindow.hide();
    this._actorWindow.deactivate();
};

Scene_PhoneAddonItem.prototype.item = function() {
    return this._itemWindow.item();
};

Scene_PhoneAddonItem.prototype.onItemCancel = function() {
    if (this._phoneCommand.needsSelection()) {
        this._itemWindow.deselect();
        this._phoneCommand.activate();
    } else {
        this.popScene();
    }
};

Scene_PhoneAddonItem.prototype.onActorOk = function() {
    if (this.canUse()) {
        this.useItem();
    } else {
        SoundManager.playBuzzer();
    }
};

Scene_PhoneAddonItem.prototype.canUse = function() {
    const user = this.user();
    return user && user.canUse(this.item()) && this.isItemEffectsValid();
};

Scene_PhoneAddonItem.prototype.isItemEffectsValid = function() {
    const action = new Game_Action(this.user());
    action.setItemObject(this.item());
    return this.itemTargetActors().some(target => action.testApply(target));
};

Scene_PhoneAddonItem.prototype.itemTargetActors = function() {
    const action = new Game_Action(this.user());
    action.setItemObject(this.item());
    if (!action.isForFriend()) {
        return [];
    } else if (action.isForAll()) {
        return $gameParty.members();
    } else {
        return [$gameParty.members()[this._actorWindow.index()]];
    }
};

Scene_PhoneAddonItem.prototype.onActorCancel = function() {
    this.hideActorWindow();
    this.activateItemWindow();
};

Scene_PhoneAddonItem.prototype.activateItemWindow = function() {
    this._itemWindow.refresh();
    this._itemWindow.activate();
};

Scene_PhoneAddonItem.prototype.playSeForItem = function() {
    SoundManager.playUseItem();
};

Scene_PhoneAddonItem.prototype.useItem = function() {
    this.playSeForItem();
    this.user().useItem(this.item());
    this.applyItem();
    this.checkGameover();
    this._actorWindow.refresh();
    this._itemWindow.redrawCurrentItem();
};

Scene_PhoneAddonItem.prototype.applyItem = function() {
    const action = new Game_Action(this.user());
    action.setItemObject(this.item());
    for (const target of this.itemTargetActors()) {
        for (let i = 0; i < action.numRepeats(); i++) {
            action.apply(target);
        }
    }
    action.applyGlobal();
};

Scene_PhoneAddonItem.prototype.user = function() {
    const members = $gameParty.movableMembers();
    const bestPha = Math.max(...members.map(member => member.pha));
    return members.find(member => member.pha === bestPha);
};

Window_PhoneItemCategory = function() {
    this.initialize(...arguments);
};
Window_PhoneItemCategory.prototype = Object.create(Window_ItemCategory.prototype);
Window_PhoneItemCategory.prototype.constructor = Window_PhoneItemCategory;

Window_PhoneItemCategory.prototype.initialize = function(rect) {
    Window_ItemCategory.prototype.initialize.call(this, rect);
    this.opacity = 0;
    this.contents.fontSize = 18;
};
Window_PhoneItemCategory.prototype.maxCols = function(rect) {
    return 2;
};

Window_PhoneItemList = function() {
    this.initialize(...arguments);
};
Window_PhoneItemList.prototype = Object.create(Window_ItemList.prototype);
Window_PhoneItemList.prototype.constructor = Window_PhoneItemList;
Window_PhoneItemList.prototype.initialize = function(rect) {
    Window_ItemList.prototype.initialize.call(this, rect);
    this.opacity = 0;
    this.contents.fontSize = 18;
};
Window_PhoneItemList.prototype.maxCols = function(rect) {
    return 1;
};

Window_PhoneItemActor = function() {
    this.initialize(...arguments);
};
Window_PhoneItemActor.prototype = Object.create(Window_MenuActor.prototype);
Window_PhoneItemActor.prototype.constructor = Window_PhoneItemActor;

Window_PhoneItemActor.prototype.initialize = function(rect) {
    Window_MenuActor.prototype.initialize.call(this, rect);
    this.opacity = 0;
};

Window_PhoneItemActor.prototype.drawItem = function(index) {
    this.drawPendingItemBackground(index);
    this.drawItemImage(index);
    this.drawItemStatus(index);
};

Window_PhoneItemActor.prototype.drawFace = function(
    faceName, faceIndex, x, y, width, height
) {
    width = width || ImageManager.faceWidth;
    height = height || ImageManager.faceHeight;
    const bitmap = ImageManager.loadFace(faceName);
    const pw = ImageManager.faceWidth;
    const ph = ImageManager.faceHeight;
    const sw = Math.min(width, pw);
    const sh = Math.min(height, ph);
    const dx = Math.floor(x + Math.max(width - pw, 0) / 2);
    const dy = Math.floor(y + Math.max(height - ph, 0) / 2);
    const sx = (faceIndex % 4) * pw + (pw - sw) / 2;
    const sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
    this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy, sw/2, sh/2);
};

Window_PhoneItemActor.prototype.drawItemStatus = function(index) {
    const actor = this.actor(index);
    const rect = this.itemRect(index);
    const x = rect.x;
    const y = rect.y - 72 + 8;
    this.drawActorSimpleStatus(actor, x, y);
};

Window_PhoneItemActor.prototype.refresh = function() {
    for(ic of this._innerChildren){ic.hide()};
    Window_MenuActor.prototype.refresh.call(this);
};

Window_PhoneItemActor.prototype.drawActorSimpleStatus = function(actor, x, y) {
    const lineHeight = this.lineHeight();
    const x2 = x + 144/2 + 4;
    this.contents.fontSize = 14;
    this.drawActorName(actor, x, y + lineHeight * 2.25);
    this.drawActorIcons(actor, x, y + lineHeight * 3, this.itemRect(this._index).width);
    this.placeBasicGauges(actor, x2, y + 64 - 8);
};

Window_PhoneItemActor.prototype.drawActorIcons = function(actor, x, y, width) {
    width = width || 144;
    const iconWidth = ImageManager.iconWidth/2;
    const icons = actor.allIcons().slice(0, Math.floor(width / iconWidth));
    let iconX = x;
    for (const icon of icons) {
        this.drawIcon(icon, iconX, y + 2);
        iconX += iconWidth;
    }
};

Window_PhoneItemActor.prototype.drawIcon = function(iconIndex, x, y) {
    const bitmap = ImageManager.loadSystem("IconSet");
    const pw = ImageManager.iconWidth;
    const ph = ImageManager.iconHeight;
    const sx = (iconIndex % 16) * pw;
    const sy = Math.floor(iconIndex / 16) * ph;
    this.contents.blt(bitmap, sx, sy, pw, ph, x, y, pw/2, ph/2);
};

Window_PhoneItemActor.prototype.placeBasicGauges = function(actor, x, y) {
    this.placeGauge(actor, "hp", x, y);
    this.placeGauge(actor, "mp", x, y + this.gaugeLineHeight());
    if ($dataSystem.optDisplayTp) {
        this.placeGauge(actor, "tp", x, y + this.gaugeLineHeight() * 2);
    }
};

Window_PhoneItemActor.prototype.gaugeLineHeight = function() {
    return 14;
};

Window_PhoneItemActor.prototype.placeGauge = function(actor, type, x, y) {
    const key = "actor%1-gauge-%2".format(actor.actorId(), type);
    const sprite = this.createInnerSprite(key, Sprite_GaugePhoneItem);
    sprite.setup(actor, type);
    sprite.move(x, y);
    sprite.show();
};

//patch for scene interpreter
Window_PhoneItemActor.prototype.processCursorMove = function(){
  if ($gameMap._interpreter.isRunning()) return this.activate();
  Window_MenuActor.prototype.processCursorMove.call(this);
};
Window_PhoneItemActor.prototype.processHandling = function(){
  if ($gameMap._interpreter.isRunning()) return this.activate();
  Window_MenuActor.prototype.processHandling.call(this);
};
Window_PhoneItemActor.prototype.processTouch = function(){
  if ($gameMap._interpreter.isRunning()) return this.activate();
  Window_MenuActor.prototype.processTouch.call(this);
};

// gauge width modification for phone scene
Sprite_GaugePhoneItem = function() {
    this.initialize(...arguments);
}

Sprite_GaugePhoneItem.prototype = Object.create(Sprite_Gauge.prototype);
Sprite_GaugePhoneItem.prototype.constructor = Sprite_GaugePhoneItem;

Sprite_GaugePhoneItem.prototype.gaugeX = function() {
    return 20;
};

Sprite_GaugePhoneItem.prototype.bitmapWidth = function() {
    return EST.PhoneMenu.Parameters.phoneItemGaugeWidth;
    // plan for plugin parameter -> phone status gauge width
};

Sprite_GaugePhoneItem.prototype.drawValue = function() {
    const currentValue = this.currentValue();
    const maxValue = this.currentMaxValue();
    const width = this.bitmapWidth();
    const height = this.bitmapHeight();
    this.setupValueFont();
    this.bitmap.fontSize = 10;
    this.bitmap.drawText(currentValue +"/"+ maxValue, 0, 0, width, height, "right");
};

Sprite_GaugePhoneItem.prototype.drawLabel = function() {
    const label = this.label();
    const x = this.labelOutlineWidth() / 2;
    const y = this.labelY();
    const width = this.bitmapWidth();
    const height = this.bitmapHeight();
    this.setupLabelFont();
    this.bitmap.fontSize = 14;
    this.bitmap.paintOpacity = this.labelOpacity();
    this.bitmap.drawText(label, x, y, width, height, "left");
    this.bitmap.paintOpacity = 255;
};
//end item

//start skill
Scene_PhoneAddonSkill = function() {
    this.initialize(...arguments);
};
Scene_PhoneAddonSkill.prototype = Object.create(Scene_PhoneAddonBase.prototype);
Scene_PhoneAddonSkill.prototype.constructor = Scene_PhoneAddonSkill;

Scene_PhoneAddonSkill.prototype.createPhoneBackground = function() {
  var actorIndex = this.actor()._actorId;
  this._phone = new Sprite(ImageManager.loadBitmap("img/"+this.Parameters.folderPath,$gameSystem.phoneIMG));
  $gameTemp._storingPhoneWindow = this;
  var filename = this.Parameters.phoneSkillActorBG ? "Actor_"+actorIndex : $gameSystem.phoneBG; 
  var bitmap = ImageManager.loadBitmap("img/"+this.Parameters.folderPath,filename);
  bitmap.addLoadListener(function(){
    if ($gameTemp._storingPhoneWindow) $gameTemp._storingPhoneWindow._phoneNeedRedraw = true;
    });    
  this._phoneBG = new Sprite(bitmap);
  this._phone.x = this.Parameters.phoneXpos;
  this._phone.y = this.Parameters.phoneYpos;
  this._phoneBG.x = this._phone.x + this.Parameters.phoneBGXoffset;
  this._phoneBG.y = this._phone.y + this.Parameters.phoneBGYoffset;
  this.addChild(this._phoneBG);
};

Scene_PhoneAddonSkill.prototype.createContents = function(){
  var par = this.Parameters;
  var wx = par.phoneXpos + par.phoneBGXoffset;
  var wy = par.phoneYpos + par.phoneBGYoffset + 15;
  var ww = par.phoneBGWidth;
  var wh = par.phoneBGHeight -15;
  // this.createHelpWindow();
  this._helpWindow = new Window_PhoneHelp(new Rectangle(wx,wy + par.phoneSkillHelpY,ww,90));
  this._helpWindow.refresh();
  this.addChild(this._helpWindow);
  // this.createSkillTypeWindow();
  this._phoneCommand = new Window_PhoneSkillType(new Rectangle(wx + ww/2,wy + par.phoneSkillCommandY, ww/2, 144 + 8));
  this._phoneCommand.setHelpWindow(this._helpWindow);
  this._phoneCommand.setHandler("skill", this.commandSkill.bind(this));
  this._phoneCommand.setHandler("cancel", this.commandCancel.bind(this));
  this._phoneCommand.setHandler("pagedown", this.nextActor.bind(this));
  this._phoneCommand.setHandler("pageup", this.previousActor.bind(this));
  this.addChild(this._phoneCommand);
  // this.createStatusWindow();
  this._statusWindow = new Window_PhoneSkillStatus(new Rectangle(wx,wy + par.phoneSkillStatusY , ww/2, 144 + 8));
  this.addChild(this._statusWindow);
  // this.createItemWindow();
  this._itemWindow = new Window_PhoneSkillList(new Rectangle(wx,wy + par.phoneSkillListY,ww,wh - par.phoneSkillListY));
  this._itemWindow.setHelpWindow(this._helpWindow);
  this._itemWindow.setHandler("ok", this.onItemOk.bind(this));
  this._itemWindow.setHandler("cancel", this.onItemCancel.bind(this));
  this._phoneCommand.setSkillWindow(this._itemWindow);
  this.addChild(this._itemWindow);
  this._actorWindow = new Window_PhoneSkillActor(new Rectangle(wx, wy + par.phoneSkillActorY,ww,wh - par.phoneSkillActorY));
  this._actorWindow.setHandler("ok", this.onActorOk.bind(this));
  this._actorWindow.setHandler("cancel", this.onActorCancel.bind(this));
  this._actorWindow.hide();
  this.addChild(this._actorWindow);
  this.refreshActor();  
  //activating
  this._phoneCommand.activate();
};

Scene_PhoneAddonSkill.prototype.commandSkill = function(){
    this._itemWindow.activate();
    this._itemWindow.selectLast();
};

Scene_PhoneAddonSkill.prototype.commandCancel = function(){
    this.popScene();
};

Scene_PhoneAddonSkill.prototype.nextActor = function(){
  $gameSystem._phoneMenuActor = Math.min($gameParty.members().length-1 , $gameSystem._phoneMenuActor + 1);
  this.updateActor();
  this.onActorChange();
  this._phoneCommand._phoneNeedRedraw = true;
  this._phoneCommand.activate();
};

Scene_PhoneAddonSkill.prototype.previousActor = function(){
  $gameSystem._phoneMenuActor = Math.max(0,$gameSystem._phoneMenuActor - 1);
  this.updateActor();
  this.onActorChange();
  this._phoneCommand._phoneNeedRedraw = true;
  this._phoneCommand.activate();
};

Scene_PhoneAddonSkill.prototype.onActorChange = function() {
    Scene_PhoneAddonBase.prototype.onActorChange.call(this);
    this.refreshActor();
    this._itemWindow.deselect();
    this._actorWindow.deselect();
    this._phoneCommand.activate();
};

Scene_PhoneAddonSkill.prototype.onItemOk = function(){
    this.actor().setLastMenuSkill(this.item());
    this.determineItem();    
};
Scene_PhoneAddonSkill.prototype.item = function(){
    return this._itemWindow.item();    
};
Scene_PhoneAddonSkill.prototype.determineItem = function() {
    const action = new Game_Action(this.user());
    const item = this.item();
    action.setItemObject(item);
    if (action.isForFriend()) {
        this.showActorWindow();
        this._actorWindow.selectForItem(this.item());
    } else {
        this.useItem();
        this.activateItemWindow();
    }
};
Scene_PhoneAddonSkill.prototype.user = function(){
    return this.actor();
};
Scene_PhoneAddonSkill.prototype.showActorWindow = function(){
    this._itemWindow.hide();
    this._actorWindow.show();
    this._actorWindow.activate();    
};
Scene_PhoneAddonSkill.prototype.activateItemWindow = function(){
    this._itemWindow.refresh();
    this._itemWindow.activate();    
};
Scene_PhoneAddonSkill.prototype.hideActorWindow = function(){
    this._actorWindow.hide();
    this._actorWindow.deactivate();    
    this._itemWindow.show();
};
Scene_PhoneAddonSkill.prototype.useItem = function(){
    this.playSeForItem();
    this.user().useItem(this.item());
    this.applyItem();
    this.checkGameover();
    this._actorWindow.refresh();    
};
Scene_PhoneAddonSkill.prototype.playSeForItem = function(){
    SoundManager.playUseItem();    
};
Scene_PhoneAddonSkill.prototype.onItemCancel = function(){
    this._itemWindow.deselect();
    this._phoneCommand.activate();    
};
Scene_PhoneAddonSkill.prototype.applyItem = function() {
    const action = new Game_Action(this.user());
    action.setItemObject(this.item());
    for (const target of this.itemTargetActors()) {
        for (let i = 0; i < action.numRepeats(); i++) {
            action.apply(target);
        }
    }
    action.applyGlobal();
};

Scene_PhoneAddonSkill.prototype.itemTargetActors = function() {
    const action = new Game_Action(this.user());
    action.setItemObject(this.item());
    if (!action.isForFriend()) {
        return [];
    } else if (action.isForAll()) {
        return $gameParty.members();
    } else {
        return [$gameParty.members()[this._actorWindow.index()]];
    }
};

Scene_PhoneAddonSkill.prototype.onActorOk = function(){
    if (this.canUse()) {
        this.useItem();
        this._statusWindow.refresh();
    } else {
        SoundManager.playBuzzer();
    }    
};
Scene_PhoneAddonSkill.prototype.canUse = function(){
    const user = this.user();
    return user && user.canUse(this.item()) && this.isItemEffectsValid();    
};
Scene_PhoneAddonSkill.prototype.isItemEffectsValid = function(){
    const action = new Game_Action(this.user());
    action.setItemObject(this.item());
    return this.itemTargetActors().some(target => action.testApply(target));    
};
Scene_PhoneAddonSkill.prototype.onActorCancel = function(){
    this._statusWindow.refresh();
    this.hideActorWindow();
    this.activateItemWindow();
};

Scene_PhoneAddonSkill.prototype.refreshActor = function() {
    const actor = this.actor();
    this._phoneCommand.setActor(actor);
    this._statusWindow.setActor(actor);
    this._itemWindow.setActor(actor);
};

Scene_PhoneAddonSkill.prototype.redrawPhone = function(){
  var actorIndex = this.actor()._actorId;
  if (this.Parameters.phoneSkillActorBG) this._phoneBG.bitmap = ImageManager.loadBitmap("img/"+this.Parameters.folderPath,"Actor_"+actorIndex);
  this._phoneCommand._phoneNeedRedraw = false;
};

Scene_PhoneAddonSkill.prototype.actor = function() {
  return $gameParty.members()[$gameSystem._phoneMenuActor]  
};

// skill windows
Window_PhoneSkillType = function() {
    this.initialize(...arguments);
};
Window_PhoneSkillType.prototype = Object.create(Window_SkillType.prototype);
Window_PhoneSkillType.prototype.constructor = Window_PhoneSkillType;

Window_PhoneSkillType.prototype.initialize = function(rect) {
    Window_SkillType.prototype.initialize.call(this, rect);
    this.contents.fontSize = 18;
    this.opacity = 0;
};

Window_PhoneSkillType.prototype.processWheelScroll = function() {
    if (this.isWheelScrollEnabled() && this.isTouchedInsideFrame()) {
        const threshold = 20;
        if (TouchInput.wheelY >= threshold) {
            SceneManager._scene.nextActor();
        }
        if (TouchInput.wheelY <= -threshold) {
            SceneManager._scene.previousActor();
        }
    }
};

Window_PhoneSkillStatus = function() {
    this.initialize(...arguments);
};
Window_PhoneSkillStatus.prototype = Object.create(Window_SkillStatus.prototype);
Window_PhoneSkillStatus.prototype.constructor = Window_PhoneSkillStatus;

Window_PhoneSkillStatus.prototype.initialize = function(rect) {
    Window_SkillStatus.prototype.initialize.call(this, rect);
    this.opacity = 0;
};

Window_PhoneSkillStatus.prototype.refresh = function() {
    for(ic of this._innerChildren){ic.hide()};
    Window_StatusBase.prototype.refresh.call(this);
    this.contents.fontSize = 18;
    if (this._actor) {
        const x = this.colSpacing() / 2;
        const h = this.innerHeight;
        const y = h / 2 - this.lineHeight() * 1.5;
        // this.drawActorFace(this._actor, x + 1, 0, 144, h);
        this.drawActorSimpleStatus(this._actor, x, y);
    }
};

Window_PhoneSkillStatus.prototype.drawActorSimpleStatus = function(actor, x, y) {
    const lineHeight = this.lineHeight();
    const x2 = x + 140;
    this.drawActorName(actor, x, y);
    this.placeBasicGauges(actor, x, y + lineHeight);
};

Window_PhoneSkillStatus.prototype.placeGauge = function(actor, type, x, y) {
    const key = "actor%1-gauge-%2".format(actor.actorId(), type);
    const sprite = this.createInnerSprite(key, Sprite_GaugePhoneSkillStatus);
    sprite.setup(actor, type);
    sprite.move(x, y);
    sprite.show();
};

// gauge width modification for phone scene
Sprite_GaugePhoneSkill = function() {
    this.initialize(...arguments);
}

Sprite_GaugePhoneSkill.prototype = Object.create(Sprite_Gauge.prototype);
Sprite_GaugePhoneSkill.prototype.constructor =Sprite_GaugePhoneSkill;

Sprite_GaugePhoneSkill.prototype.bitmapWidth = function() {
    return EST.PhoneMenu.Parameters.phoneSkillGaugeWidth;
};

Sprite_GaugePhoneSkill.prototype.gaugeX = function() {
    return 20;
};

Sprite_GaugePhoneSkill.prototype.drawValue = function() {
    const currentValue = this.currentValue();
    const maxValue = this.currentMaxValue();
    const width = this.bitmapWidth();
    const height = this.bitmapHeight();
    this.setupValueFont();
    this.bitmap.fontSize = 10;
    this.bitmap.drawText(currentValue +"/"+ maxValue, 0, 0, width, height, "right");
};

Sprite_GaugePhoneSkill.prototype.drawLabel = function() {
    const label = this.label();
    const x = this.labelOutlineWidth() / 2;
    const y = this.labelY();
    const width = this.bitmapWidth();
    const height = this.bitmapHeight();
    this.setupLabelFont();
    this.bitmap.fontSize = 14;
    this.bitmap.paintOpacity = this.labelOpacity();
    this.bitmap.drawText(label, x, y, width, height, "left");
    this.bitmap.paintOpacity = 255;
};

// gauge width modification for phone scene
Sprite_GaugePhoneSkillStatus = function() {
    this.initialize(...arguments);
}

Sprite_GaugePhoneSkillStatus.prototype = Object.create(Sprite_GaugePhoneSkill.prototype);
Sprite_GaugePhoneSkillStatus.prototype.constructor =Sprite_GaugePhoneSkillStatus;

Sprite_GaugePhoneSkillStatus.prototype.bitmapWidth = function() {
    return EST.PhoneMenu.Parameters.phoneSkillStatusGaugeWidth;
};

Window_PhoneSkillList = function() {
    this.initialize(...arguments);
};
Window_PhoneSkillList.prototype = Object.create(Window_SkillList.prototype);
Window_PhoneSkillList.prototype.constructor = Window_PhoneSkillList;

Window_PhoneSkillList.prototype.initialize = function(rect) {
    Window_SkillList.prototype.initialize.call(this, rect);
    this.contents.fontSize = 18;
    this.opacity = 0;
};
Window_PhoneSkillList.prototype.maxCols = function(rect) {
    return 1;
};

Window_PhoneSkillActor = function() {
    this.initialize(...arguments);
};
Window_PhoneSkillActor.prototype = Object.create(Window_MenuActor.prototype);
Window_PhoneSkillActor.prototype.constructor = Window_PhoneSkillActor;

Window_PhoneSkillActor.prototype.initialize = function(rect) {
    Window_MenuActor.prototype.initialize.call(this, rect);
    this.opacity = 0;
};

Window_PhoneSkillActor.prototype.refresh = function() {
    for(ic of this._innerChildren){ic.hide()};
    Window_MenuActor.prototype.refresh.call(this);
};

Window_PhoneSkillActor.prototype.drawItem = function(index) {
    this.drawPendingItemBackground(index);
    this.drawItemImage(index);
    this.drawItemStatus(index);
};

Window_PhoneSkillActor.prototype.drawFace = function(
    faceName, faceIndex, x, y, width, height
) {
    width = width || ImageManager.faceWidth;
    height = height || ImageManager.faceHeight;
    const bitmap = ImageManager.loadFace(faceName);
    const pw = ImageManager.faceWidth;
    const ph = ImageManager.faceHeight;
    const sw = Math.min(width, pw);
    const sh = Math.min(height, ph);
    const dx = Math.floor(x + Math.max(width - pw, 0) / 2);
    const dy = Math.floor(y + Math.max(height - ph, 0) / 2);
    const sx = (faceIndex % 4) * pw + (pw - sw) / 2;
    const sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
    this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy, sw/2, sh/2);
};

Window_PhoneSkillActor.prototype.drawItemStatus = function(index) {
    const actor = this.actor(index);
    const rect = this.itemRect(index);
    const x = rect.x;
    const y = rect.y - 72 + 8;
    this.drawActorSimpleStatus(actor, x, y);
};

Window_PhoneSkillActor.prototype.drawActorSimpleStatus = function(actor, x, y) {
    const lineHeight = this.lineHeight();
    const x2 = x + 144/2 + 4;
    this.contents.fontSize = 14;
    this.drawActorName(actor, x, y + lineHeight * 2.25);
    this.drawActorIcons(actor, x, y + lineHeight * 3, this.itemRect(this._index).width);
    this.placeBasicGauges(actor, x2, y + 64 - 8);
};

Window_PhoneSkillActor.prototype.drawActorIcons = function(actor, x, y, width) {
    width = width || 144;
    const iconWidth = ImageManager.iconWidth/2;
    const icons = actor.allIcons().slice(0, Math.floor(width / iconWidth));
    let iconX = x;
    for (const icon of icons) {
        this.drawIcon(icon, iconX, y + 2);
        iconX += iconWidth;
    }
};

Window_PhoneSkillActor.prototype.drawIcon = function(iconIndex, x, y) {
    const bitmap = ImageManager.loadSystem("IconSet");
    const pw = ImageManager.iconWidth;
    const ph = ImageManager.iconHeight;
    const sx = (iconIndex % 16) * pw;
    const sy = Math.floor(iconIndex / 16) * ph;
    this.contents.blt(bitmap, sx, sy, pw, ph, x, y, pw/2, ph/2);
};

Window_PhoneSkillActor.prototype.placeBasicGauges = function(actor, x, y) {
    this.placeGauge(actor, "hp", x, y);
    this.placeGauge(actor, "mp", x, y + this.gaugeLineHeight());
    if ($dataSystem.optDisplayTp) {
        this.placeGauge(actor, "tp", x, y + this.gaugeLineHeight() * 2);
    }
};

Window_PhoneSkillActor.prototype.gaugeLineHeight = function() {
    return 14;
};

Window_PhoneSkillActor.prototype.placeGauge = function(actor, type, x, y) {
    const key = "actor%1-gauge-%2".format(actor.actorId(), type);
    const sprite = this.createInnerSprite(key, Sprite_GaugePhoneSkill);
    sprite.setup(actor, type);
    sprite.move(x, y);
    sprite.show();
};

//patch for scene interpreter
Window_PhoneSkillActor.prototype.processCursorMove = function(){
  if ($gameMap._interpreter.isRunning()) return this.activate();
  Window_MenuActor.prototype.processCursorMove.call(this);
};
Window_PhoneSkillActor.prototype.processHandling = function(){
  if ($gameMap._interpreter.isRunning()) return this.activate();
  Window_MenuActor.prototype.processHandling.call(this);
};
Window_PhoneSkillActor.prototype.processTouch = function(){
  if ($gameMap._interpreter.isRunning()) return this.activate();
  Window_MenuActor.prototype.processTouch.call(this);
};
//end skill

//start equip
Scene_PhoneAddonEquip = function() {
    this.initialize(...arguments);
};
Scene_PhoneAddonEquip.prototype = Object.create(Scene_PhoneAddonBase.prototype);
Scene_PhoneAddonEquip.prototype.constructor = Scene_PhoneAddonEquip;

Scene_PhoneAddonEquip.prototype.createPhoneBackground = function() {
  var actorIndex = this.actor()._actorId;
  this._phone = new Sprite(ImageManager.loadBitmap("img/"+this.Parameters.folderPath,$gameSystem.phoneIMG));
  $gameTemp._storingPhoneWindow = this;
  var filename = this.Parameters.phoneEquipActorBG ? "Actor_"+actorIndex : $gameSystem.phoneBG; 
  var bitmap = ImageManager.loadBitmap("img/"+this.Parameters.folderPath,filename);
  bitmap.addLoadListener(function(){
    if ($gameTemp._storingPhoneWindow) $gameTemp._storingPhoneWindow._phoneNeedRedraw = true;
    });    
  this._phoneBG = new Sprite(bitmap);
  this._phone.x = this.Parameters.phoneXpos;
  this._phone.y = this.Parameters.phoneYpos;
  this._phoneBG.x = this._phone.x + this.Parameters.phoneBGXoffset;
  this._phoneBG.y = this._phone.y + this.Parameters.phoneBGYoffset;
  this.addChild(this._phoneBG);
};

Scene_PhoneAddonEquip.prototype.createContents = function(){
  var par = this.Parameters;
  var wx = par.phoneXpos + par.phoneBGXoffset;
  var wy = par.phoneYpos + par.phoneBGYoffset + 15;
  var ww = par.phoneBGWidth;
  var wh = par.phoneBGHeight -15;
  //help window
  this._helpWindow = new Window_PhoneHelp(new Rectangle(wx,wy+par.phoneEquipHelpY,ww,90));
  this._helpWindow.refresh();  
  this.addChild(this._helpWindow);
  this._helpWindow.hide();
  //status window
  this._statusWindow = new Window_PhoneEquipStatus(new Rectangle(wx,wy+par.phoneEquipStatusY,ww,wh));
  this.addChild(this._statusWindow);
  //command window
  this._phoneCommand = new Window_PhoneEquipCommand(new Rectangle(wx,wy+par.phoneEquipCommandY,ww,90));
  this._phoneCommand.setHelpWindow(this._helpWindow);
  this._phoneCommand.setHandler("equip", this.commandEquip.bind(this));
  this._phoneCommand.setHandler("optimize", this.commandOptimize.bind(this));
  this._phoneCommand.setHandler("clear", this.commandClear.bind(this));
  this._phoneCommand.setHandler("cancel", this.popScene.bind(this));
  this._phoneCommand.setHandler("pagedown", this.nextActor.bind(this));
  this._phoneCommand.setHandler("pageup", this.previousActor.bind(this));
  this.addChild(this._phoneCommand); 
  //create slot
  this._slotWindow = new Window_PhoneEquipSlot(new Rectangle(wx,wy+par.phoneEquipSlotY,ww,wh-par.phoneEquipSlotY));
  this._slotWindow.setHandler("ok", this.onPhoneOK.bind(this));
  this._slotWindow.setHandler("cancel", this.onPhoneCancel.bind(this));
  this._slotWindow.refresh();
  this._slotWindow.setActor(this.actor());  
  this._slotWindow.setHelpWindow(this._helpWindow);
  this._slotWindow.setStatusWindow(this._statusWindow);
  this.addChild(this._slotWindow);
  //create item list
  this._itemWindow = new Window_PhoneEquipItem(new Rectangle(wx,wy+par.phoneEquipItemY,ww,wh-par.phoneEquipItemY));
  this._itemWindow.setStatusWindow(this._statusWindow);
  this._itemWindow.setHelpWindow(this._helpWindow);  
  this._itemWindow.setHandler("ok", this.onEquipOK.bind(this));
  this._itemWindow.setHandler("cancel", this.onEquipCancel.bind(this));
  this._itemWindow.hide();
  this._slotWindow.setItemWindow(this._itemWindow);
  this.addChild(this._itemWindow);
  this.refreshActor();
  //activating
  this._phoneCommand.activate();
};

Scene_PhoneAddonEquip.prototype.actor = function() {
  return $gameParty.members()[$gameSystem._phoneMenuActor]  
};

Scene_PhoneAddonEquip.prototype.commandEquip = function() {
    this._slotWindow.activate();
    this._slotWindow.select(0);
};
Scene_PhoneAddonEquip.prototype.commandOptimize = function() {
    SoundManager.playEquip();
    this.actor().optimizeEquipments();
    this._statusWindow.refresh();
    this._slotWindow.refresh();
    this._phoneCommand.activate();
};
Scene_PhoneAddonEquip.prototype.commandClear = function() {
    SoundManager.playEquip();
    this.actor().clearEquipments();
    this._statusWindow.refresh();
    this._slotWindow.refresh();
    this._phoneCommand.activate();
};
Scene_PhoneAddonEquip.prototype.popScene = function() {
    SceneManager.pop();
};
Scene_PhoneAddonEquip.prototype.nextActor = function() {
  $gameSystem._phoneMenuActor = Math.min($gameParty.members().length-1 , $gameSystem._phoneMenuActor + 1);
  this.updateActor();
  this.onActorChange();
  this._phoneCommand._phoneNeedRedraw = true;
  this._phoneCommand.activate();
};
Scene_PhoneAddonEquip.prototype.previousActor = function() {
  $gameSystem._phoneMenuActor = Math.max(0,$gameSystem._phoneMenuActor - 1);
  this.updateActor();
  this.onActorChange();
  this._phoneCommand._phoneNeedRedraw = true;
  this._phoneCommand.activate();
};

Scene_PhoneAddonEquip.prototype.redrawPhone = function(){
  var actorIndex = this.actor()._actorId;
  if (this.Parameters.phoneEquipActorBG) this._phoneBG.bitmap = ImageManager.loadBitmap("img/"+this.Parameters.folderPath,"Actor_"+actorIndex);
  this._phoneCommand.refresh();
  this._statusWindow.refresh();
  this._slotWindow.refresh();
  this._itemWindow.refresh();
  this._helpWindow.refresh();
  this._phoneCommand._phoneNeedRedraw = false;
};


Scene_PhoneAddonEquip.prototype.onPhoneOK = function() {
    this._slotWindow.hide();
    this._phoneCommand.hide();
    this._itemWindow.refresh();
    this._itemWindow.show();
    this._itemWindow.activate();
    this._itemWindow.select(0);
    this._helpWindow.refresh();
    this._helpWindow.show();
    this._statusWindow.refresh();
    // this._statusWindow.show();
};
Scene_PhoneAddonEquip.prototype.onPhoneCancel = function() {
    this._slotWindow.deselect();
    this._phoneCommand.activate();
};

Scene_PhoneAddonEquip.prototype.onEquipOK = function() {
    SoundManager.playEquip();
    this.executeEquipChange();
    this.hideItemWindow();
    this._slotWindow.refresh();
    this._itemWindow.refresh();
    this._statusWindow.refresh();
};

Scene_PhoneAddonEquip.prototype.executeEquipChange = function() {
    const actor = this.actor();
    const slotId = this._slotWindow.index();
    const item = this._itemWindow.item();
    actor.changeEquip(slotId, item);
};

Scene_PhoneAddonEquip.prototype.onEquipCancel = function() {
    this.hideItemWindow();
};

Scene_PhoneAddonEquip.prototype.refreshActor = function() {
    const actor = this.actor();
    this._statusWindow.setActor(actor);
    this._slotWindow.setActor(actor);
    this._itemWindow.setActor(actor);
};

Scene_PhoneAddonEquip.prototype.executeEquipChange = function() {
    const actor = this.actor();
    const slotId = this._slotWindow.index();
    const item = this._itemWindow.item();
    actor.changeEquip(slotId, item);
};

Scene_PhoneAddonEquip.prototype.onActorChange = function() {
    Scene_PhoneAddonBase.prototype.onActorChange.call(this);
    this.refreshActor();
    this._itemWindow.hide();
    this._itemWindow.deselect();
    this._slotWindow.select(0);
    this._slotWindow.activate();
    this._phoneCommand.activate();
};

Scene_PhoneAddonEquip.prototype.onItemOk = function() {
    SoundManager.playEquip();
    this.executeEquipChange();
    this.hideItemWindow();
    this._slotWindow.refresh();
    this._itemWindow.refresh();
    this._statusWindow.refresh();
};

Scene_PhoneAddonEquip.prototype.executeEquipChange = function() {
    const actor = this.actor();
    const slotId = this._slotWindow.index();
    const item = this._itemWindow.item();
    actor.changeEquip(slotId, item);
};

Scene_PhoneAddonEquip.prototype.onItemCancel = function() {
    this.hideItemWindow();
};

Scene_PhoneAddonEquip.prototype.onActorChange = function() {
    Scene_MenuBase.prototype.onActorChange.call(this);
    this.refreshActor();
    this.hideItemWindow();
};

Scene_PhoneAddonEquip.prototype.hideItemWindow = function() {
    this._slotWindow.show();
    this._phoneCommand.show();
    this._slotWindow.activate();
    this._itemWindow.hide();
    this._itemWindow.deselect();
    this._helpWindow.hide();
};

Window_PhoneEquipSlot = function() {
    this.initialize(...arguments);
};
Window_PhoneEquipSlot.prototype = Object.create(Window_EquipSlot.prototype);
Window_PhoneEquipSlot.prototype.constructor =Window_PhoneEquipSlot;

Window_PhoneEquipSlot.prototype.initialize = function(rect) {
    Window_EquipSlot.prototype.initialize.call(this, rect);
    this.opacity = 0;
};

Window_PhoneEquipSlot.prototype.drawItem = function(index) {
    if (this._actor) {
        const slotName = this.actorSlotName(this._actor, index);
        const item = this.itemAt(index);
        const slotNameWidth = this.slotNameWidth();
        const rect = this.itemLineRect(index);
        const itemWidth = rect.width;
        this.changeTextColor(ColorManager.systemColor());
        this.changePaintOpacity(this.isEnabled(index));
        this.drawText(slotName, rect.x, rect.y - (rect.height/2), slotNameWidth, rect.height);
        this.drawItemName(item, rect.x, rect.y + (rect.height/2), itemWidth);
        this.changePaintOpacity(true);
    }
};
Window_PhoneEquipSlot.prototype.slotNameWidth = function() {
    return 100;
};
Window_PhoneEquipSlot.prototype.itemHeight = function() {
    return 80;
};

//patch for scene interpreter
Window_PhoneEquipSlot.prototype.processCursorMove = function(){
  if ($gameMap._interpreter.isRunning()) return this.activate();
  Window_EquipSlot.prototype.processCursorMove.call(this);
};
Window_PhoneEquipSlot.prototype.processHandling = function(){
  if ($gameMap._interpreter.isRunning()) return this.activate();
  Window_EquipSlot.prototype.processHandling.call(this);
};
Window_PhoneEquipSlot.prototype.processTouch = function(){
  if ($gameMap._interpreter.isRunning()) return this.activate();
  Window_EquipSlot.prototype.processTouch.call(this);
};

Window_PhoneEquipItem = function() {
    this.initialize(...arguments);
}
Window_PhoneEquipItem.prototype = Object.create(Window_EquipItem.prototype);
Window_PhoneEquipItem.prototype.constructor = Window_PhoneEquipItem;
Window_PhoneEquipItem.prototype.initialize = function(rect) {
    Window_EquipItem.prototype.initialize.call(this, rect);
    this.contents.fontSize = 18;
    this.opacity = 0;
};

//patch for scene interpreter
Window_PhoneEquipItem.prototype.processCursorMove = function(){
  if ($gameMap._interpreter.isRunning()) return this.activate();
  Window_EquipItem.prototype.processCursorMove.call(this);
};
Window_PhoneEquipItem.prototype.processHandling = function(){
  if ($gameMap._interpreter.isRunning()) return this.activate();
  Window_EquipItem.prototype.processHandling.call(this);
};
Window_PhoneEquipItem.prototype.processTouch = function(){
  if ($gameMap._interpreter.isRunning()) return this.activate();
  Window_EquipItem.prototype.processTouch.call(this);
};

Window_PhoneEquipStatus = function() {
    this.initialize(...arguments);
}

Window_PhoneEquipStatus.prototype = Object.create(Window_EquipStatus.prototype);
Window_PhoneEquipStatus.prototype.constructor = Window_PhoneEquipStatus;

Window_PhoneEquipStatus.prototype.initialize = function(rect) {
    Window_EquipStatus.prototype.initialize.call(this, rect);
    this.opacity = 0;
};

Window_PhoneEquipStatus.prototype.refresh = function() {
    this.contents.clear();
    for(ic of this._innerChildren){ic.hide()};    
    if (this._actor) {
        const nameRect = this.itemLineRect(0);
        this.contents.fontSize = 18;
        this.drawActorSimpleStatus(this._actor, this.itemPadding(), 0, EST.PhoneMenu.phoneBGWidth - this.itemPadding()*2);
        if(SceneManager._scene._phoneCommand.visible) return;
        this.drawAllParams();
        this.drawHPMPdiff();
    }
};

Window_PhoneEquipStatus.prototype.drawAllParams = function() {
    for (let i = 0; i < 6; i++) {
        const x = this.itemPadding();
        const y = this.paramY(i) + 3 * this.lineHeight();
        this.drawItem(x, y, 2 + i);
    }
};

Window_PhoneEquipStatus.prototype.drawHPMPdiff = function() {
    if (!this._actor) return;
    if (!this._tempActor) return;
    const x = this.itemPadding();
    const y = 0 + this.lineHeight() * 1;
    var hpdiff = this._tempActor.mhp - this._actor.mhp;
    var mpdiff = this._tempActor.mmp - this._actor.mmp;
    this.changeTextColor(ColorManager.systemColor());
    this.drawText("\u2192", this.paramX() + this.paramWidth(), y , this.rightArrowWidth(), "center");
    this.drawText("\u2192", this.paramX() + this.paramWidth(), y + this.lineHeight() , this.rightArrowWidth(), "center");
    this.changeTextColor(ColorManager.paramchangeTextColor(hpdiff));    
    this.drawText(this._tempActor.mhp, x , y , EST.PhoneMenu.Parameters.phoneBGWidth - 36, "right");
    this.changeTextColor(ColorManager.paramchangeTextColor(mpdiff));    
    this.drawText(this._tempActor.mmp, x , y + this.lineHeight() , EST.PhoneMenu.Parameters.phoneBGWidth - 36, "right");
};

Window_PhoneEquipStatus.prototype.lineHeight = function() {
    return 24;
};

Window_PhoneEquipStatus.prototype.drawActorSimpleStatus = function(actor, x, y) {
    const lineHeight = this.lineHeight();
    const x2 = x + 140;
    this.drawActorName(actor, x, y);
    if(SceneManager._scene._phoneCommand.visible) return;
    this.placeBasicGauges(actor, x, y + lineHeight);
};

Window_PhoneEquipStatus.prototype.placeGauge = function(actor, type, x, y) {
    const key = "actor%1-gauge-%2".format(actor.actorId(), type);
    const sprite = this.createInnerSprite(key, Sprite_GaugePhoneEquip);
    sprite.setup(actor, type);
    sprite.move(x, y);
    sprite.show();
};

// gauge width modification for equip scene
Sprite_GaugePhoneEquip = function() {
    this.initialize(...arguments);
}

Sprite_GaugePhoneEquip.prototype = Object.create(Sprite_Gauge.prototype);
Sprite_GaugePhoneEquip.prototype.constructor = Sprite_GaugePhoneEquip;

Sprite_GaugePhoneEquip.prototype.drawValue = function() {
    const currentValue = this.currentValue();
    const maxValue = this.currentMaxValue();
    const width = this.bitmapWidth();
    const height = this.bitmapHeight();
    this.setupValueFont();
    this.bitmap.fontSize = 14;
    this.bitmap.drawText(currentValue +"/"+ maxValue, 0, 0, width, height, "right");
};

Sprite_GaugePhoneEquip.prototype.bitmapWidth = function() {
    return EST.PhoneMenu.Parameters.phoneEquipGaugeWidth;
};
Window_PhoneEquipStatus.prototype.paramY = function(index) {
    return Math.floor(this.lineHeight() * (index + 1.5));
};
Window_PhoneEquipStatus.prototype.paramX = function() {
    const itemPadding = this.itemPadding();
    const rightArrowWidth = this.rightArrowWidth();
    const paramWidth = this.paramWidth();
    return this.innerWidth - itemPadding - paramWidth * 2 - rightArrowWidth;
};

Window_PhoneHelp = function() {
    this.initialize(...arguments);
}
Window_PhoneHelp.prototype = Object.create(Window_Help.prototype);
Window_PhoneHelp.prototype.constructor = Window_PhoneHelp;
Window_PhoneHelp.prototype.initialize = function(rect) {
    Window_Help.prototype.initialize.call(this, rect);
    this.opacity = 0;
    this.contents.fontSize = 16;
    this.contents.fontBold = true;
};
Window_PhoneHelp.prototype.refresh = function() {
    const rect = this.baseTextRect();
    this.contents.clear();
    this.drawBackgroundRect(rect);
    const align = "left";
    var line = 0;
    txts = this.convertEscapeCharacters(this._text);
    txts = txts.split(/\n|\\n/);
    for(txt of txts){
      if (!txt) continue;
      this.drawText(txt, rect.x, 0 + this.lineHeight() * line, rect.width, align);
      line++;
    };
};
Window_PhoneHelp.prototype.lineHeight = function() {
    return 20;
};

Window_PhoneHelp.prototype.drawBackgroundRect = function(rect) {
    const c1 = ColorManager.itemBackColor1();
    const c2 = ColorManager.itemBackColor2();
    const x = rect.x;
    const y = rect.y;
    const w = rect.width;
    const h = rect.height - 24;
    this.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);
    this.contentsBack.strokeRect(x, y, w, h, c1);
    this.contentsBack.paintOpacity = 0;
};

Window_PhoneEquipCommand = function() {
    this.initialize(...arguments);
}
Window_PhoneEquipCommand.prototype = Object.create(Window_EquipCommand.prototype);
Window_PhoneEquipCommand.prototype.constructor = Window_PhoneEquipCommand;
Window_PhoneEquipCommand.prototype.initialize = function(rect) {
    Window_EquipCommand.prototype.initialize.call(this, rect);
    this.opacity = 0;
};

Window_PhoneEquipCommand.prototype.processWheelScroll = function() {
    if (this.isWheelScrollEnabled() && this.isTouchedInsideFrame()) {
        const threshold = 20;
        if (TouchInput.wheelY >= threshold) {
            SceneManager._scene.nextActor();
        }
        if (TouchInput.wheelY <= -threshold) {
            SceneManager._scene.previousActor();
        }
    }
};

//end equip

//start status
Scene_PhoneAddonStatus = function() {
    this.initialize(...arguments);
};
Scene_PhoneAddonStatus.prototype = Object.create(Scene_PhoneAddonBase.prototype);
Scene_PhoneAddonStatus.prototype.constructor = Scene_PhoneAddonStatus;

Scene_PhoneAddonStatus.prototype.createPhoneBackground = function() {
  var actorIndex = this.actor()._actorId;
  this._phone = new Sprite(ImageManager.loadBitmap("img/"+this.Parameters.folderPath,$gameSystem.phoneIMG));
  $gameTemp._storingPhoneWindow = this;
  var filename = this.Parameters.phoneStatusActorBG ? "Actor_"+actorIndex : $gameSystem.phoneBG; 
  var bitmap = ImageManager.loadBitmap("img/"+this.Parameters.folderPath,filename);
  bitmap.addLoadListener(function(){
    if ($gameTemp._storingPhoneWindow) $gameTemp._storingPhoneWindow._phoneNeedRedraw = true;
  });    
  this._phoneBG = new Sprite(bitmap);
  this._phone.x = this.Parameters.phoneXpos;
  this._phone.y = this.Parameters.phoneYpos;
  this._phoneBG.x = this._phone.x + this.Parameters.phoneBGXoffset;
  this._phoneBG.y = this._phone.y + this.Parameters.phoneBGYoffset;
  this.addChild(this._phoneBG);
};

Scene_PhoneAddonStatus.prototype.actor = function() {
  return $gameParty.members()[$gameSystem._phoneMenuActor];  
}

Scene_PhoneAddonStatus.prototype.createContents = function(){
    var wx = this.Parameters.phoneXpos + this.Parameters.phoneBGXoffset;
    var wy = this.Parameters.phoneYpos + this.Parameters.phoneBGYoffset + 15;
    var ww = this.Parameters.phoneBGWidth;
    var wh = this.Parameters.phoneBGHeight -15;
    this._phoneCommand = new Window_PhoneAddonStatus(new Rectangle(wx,wy,ww,wh),this._page);
    this._phoneCommand.setHandler("ok", this.onPhoneOK.bind(this));
    this._phoneCommand.setHandler("cancel", this.onPhoneCancel.bind(this));
    this._phoneCommand.refresh();
    this.addChild(this._phoneCommand);
};

Scene_PhoneAddonStatus.prototype.onPhoneOK = function() {
  this._phoneCommand.activate();
  if ($gameMap._interpreter.isRunning()) return;
  var actor = $dataActors[this.actor()._actorId];
  if (!actor) return;
  if (!actor.note.match(/<phoneStatusCE:(.*)>/im)) return;
  var ce = Number(actor.note.match(/<phoneStatusCE:(.*)>/im)[1]);
  $gameTemp.reserveCommonEvent(ce);
};

Scene_PhoneAddonStatus.prototype.onPhoneCancel = function() {
  if ($gameMap._interpreter.isRunning()) return this._phoneCommand.activate();
  SoundManager.playCancel();
  $gameTemp._phoneLastIcon = null;
  $gameTemp._phoneLastPage = null;
  SceneManager.pop();   
};
Scene_PhoneAddonStatus.prototype.redrawPhone = function(){
  var actorIndex = this.actor()._actorId;
  if (this.Parameters.phoneStatusActorBG) this._phoneBG.bitmap = ImageManager.loadBitmap("img/"+this.Parameters.folderPath,"Actor_"+actorIndex);
  this._phoneCommand.refresh();
  this._phoneCommand._phoneNeedRedraw = false;
};

Window_PhoneAddonStatus = function() {
    this.initialize(...arguments);
};
Window_PhoneAddonStatus.prototype = Object.create(Window_PhoneAddonBase.prototype);
Window_PhoneAddonStatus.prototype.constructor = Window_PhoneAddonStatus;

Window_PhoneAddonStatus.prototype.makeCommandList = function(){
    var actor = this.actor(); 
    this.addCommand(actor, actor.name());
};
Window_PhoneAddonStatus.prototype.actor = function(){
  return $gameParty.members()[$gameSystem._phoneMenuActor]  
};

Window_PhoneAddonStatus.prototype._updateCursor = function() {
    Window_PhoneAddonBase.prototype._updateCursor.call(this);
    this._cursorSprite.visible = false;
};


Window_PhoneAddonStatus.prototype.drawItem = function(index){
  const rect = this.itemRect(index);
  const align = "left";
  var actor = this._list[index].name;
  var par = this.Parameters;
  this.resetTextColor();
  this.changePaintOpacity(this.isCommandEnabled(index));
  //name of the actor
  this.contents.fontSize = 18;
  this.drawText(actor.name(), rect.x, + this.lineHeight() * par.statusActorNameLine, rect.width, align);
  //Lv text with system color
  this.changeTextColor(ColorManager.systemColor());
  this.drawText(TextManager.levelA, rect.x, rect.y + this.lineHeight()*par.statusActorLvLine, rect.width, align);
  this.resetTextColor();
  //lv value of the actor
  this.drawText(actor.level, rect.x+40, rect.y+this.lineHeight()*par.statusActorLvLine, rect.width, align);
  //actor current class
  this.drawText(actor.currentClass().name, rect.x, rect.y+this.lineHeight()*par.statusActorClassLine, rect.width, align);
  //draw actor states
  this.drawActorIcons(actor, rect.x, rect.y + this.lineHeight()*par.statusActorStatesLine, rect.width);    
  //draw hp mp tp
  this.placeBasicGauges(actor, rect.x, rect.y + 10 + this.lineHeight()*par.statusActorGaugeLine, rect.width);
  //draw exp gauge
  this.drawExpGauge(actor, rect.x, rect.y + this.lineHeight()*par.statusActorExpLine, rect.width);
  //draw parameter
  this.drawActorParam(actor, rect.x, rect.y+ this.lineHeight()*par.statusActorAtkLine, rect.width, 2);
  this.drawActorParam(actor, rect.x, rect.y+ this.lineHeight()*par.statusActorDefLine, rect.width, 3);
  this.drawActorParam(actor, rect.x, rect.y+ this.lineHeight()*par.statusActorMatkLine, rect.width, 4);
  this.drawActorParam(actor, rect.x, rect.y+ this.lineHeight()*par.statusActorMdefLine, rect.width, 5);
  this.drawActorParam(actor, rect.x, rect.y+ this.lineHeight()*par.statusActorAgiLine, rect.width, 6);
  this.drawActorParam(actor, rect.x, rect.y+ this.lineHeight()*par.statusActorLukLine, rect.width, 7);
  //draw actor profile
  this.drawActorProfile(actor, rect.x, rect.y + this.lineHeight()*par.statusActorProfLine, rect.width, "center");
  this.resetFontSettings();
};

Window_PhoneAddonStatus.prototype.drawActorProfile = function(actor, x, y, width, align) {
    this.contents.fontSize = 12;
    this.contents.fontBold = true;
    var line = 0;
    var txts = actor.profile()
    txts = this.convertEscapeCharacters(txts);
    txts = txts.split(/\n|\\n/);
    for(txt of txts){
        if (!txt) continue;
        this.drawText(txt, x, y + this.lineHeight() * line, width, align);
        line++;
    }
    this.resetFontSettings();
    this.contents.fontBold = false;
};

Window_PhoneAddonStatus.prototype.drawActorParam = function(actor, x, y, width, paramId){
  ///disini    
  this.contents.fontSize = 18;    
  this.changeTextColor(ColorManager.systemColor());
  this.drawText(TextManager.param(paramId), x, y, width, "left");
  this.resetTextColor();
  this.drawText(actor.param(paramId), x + 144, y, 60, "right");
};

Window_PhoneAddonStatus.prototype.drawExpGauge = function(actor, x, y, width){
    var maxExp= (actor.expForLevel(actor._level+1) - actor.expForLevel(actor._level));
    var levelExp= maxExp - actor.nextRequiredExp();
    var rate = actor.maxLevel() == actor._level ? 1 : levelExp / maxExp;
    var fillW = Math.floor(width * rate);
    var gaugeY = y + this.lineHeight() - 8;
    var color1 = ColorManager.textColor(this.Parameters.expGaugeColor1); 
    var color2 = ColorManager.textColor(this.Parameters.expGaugeColor2);
    this.contents.fillRect(x, gaugeY, width, this.lineHeight(), ColorManager.gaugeBackColor());
    this.contents.gradientFillRect(x, gaugeY, fillW, this.lineHeight(), color1, color2);    
    this.contents.fontSize = 18;    
    if(actor.maxLevel() == actor._level) return this.drawText(this.Parameters.phoneStatusMaxLevelText,x,gaugeY,width,"center");
    this.drawText(TextManager.expA+ " " + levelExp + " / " + maxExp, x, gaugeY, width, "center");
  this.resetFontSettings();
};

Window_PhoneAddonStatus.prototype.lineHeight = function(){
    return 24;
};

Window_PhoneAddonStatus.prototype.drawActorIcons = function(actor, x, y, width) {
    width = width || 144;
    const iconWidth = ImageManager.iconWidth;
    const icons = actor.allIcons().slice(0, Math.floor(width / iconWidth));
    let iconX = x;
    for (const icon of icons) {
        this.drawIcon(icon, iconX, y + 2);
        iconX += iconWidth;
    }
};

Window_PhoneAddonStatus.prototype.commandName = function(index){
    return this._list[index].name.name();
};

Window_PhoneAddonStatus.prototype.itemHeight = function() {
  return this.Parameters.phoneStatusItemHeight
    //bisa jadi plugin parameter juga ini
    return 480;
};

Window_PhoneAddonStatus.prototype.refresh = function() {
    for(ic of this._innerChildren){ic.hide()};
    Window_PhoneAddonBase.prototype.refresh.call(this);
};

Window_PhoneAddonStatus.prototype.placeBasicGauges = function(actor, x, y) {
    this.placeGauge(actor, "hp", x, y);
    this.placeGauge(actor, "mp", x, y + this.gaugeLineHeight());
    if ($dataSystem.optDisplayTp) {
        this.placeGauge(actor, "tp", x, y + this.gaugeLineHeight() * 2);
    }
};

Window_PhoneAddonStatus.prototype.placeGauge = function(actor, type, x, y) {
    const key = "actor%1-gauge-%2".format(actor.actorId(), type);
    const sprite = this.createInnerSprite(key, Sprite_GaugePhoneStatus);
    sprite.setup(actor, type);
    sprite.move(x, y);
    sprite.show();
};

Window_PhoneAddonStatus.prototype.createInnerSprite = function(key, spriteClass) {
    const dict = this._additionalSprites || {};
    if (dict[key]) {
        return dict[key];
    } else {
        const sprite = new spriteClass();
        dict[key] = sprite;
        this.addInnerChild(sprite);
        return sprite;
    }
};

Window_PhoneAddonStatus.prototype.cursorPagedown = function() {
  $gameSystem._phoneMenuActor = Math.min($gameParty.members().length-1 , $gameSystem._phoneMenuActor + 1);
  this._phoneNeedRedraw = true;
  this.refresh();
};
Window_PhoneAddonStatus.prototype.cursorPageup = function() {
  $gameSystem._phoneMenuActor = Math.max(0,$gameSystem._phoneMenuActor - 1);
  this._phoneNeedRedraw = true;
  this.refresh();
};
Window_PhoneAddonStatus.prototype.cursorLeft = function() {
  this.cursorPageup()
  Window_PhoneAddonBase.prototype.cursorLeft.call(this);    
};
Window_PhoneAddonStatus.prototype.cursorRight = function() {
  this.cursorPagedown()
  Window_PhoneAddonBase.prototype.cursorRight.call(this);   
};
Window_PhoneAddonStatus.prototype.cursorUp = function() {
  this.cursorPageup()
  Window_PhoneAddonBase.prototype.cursorUp.call(this);  
};

Window_PhoneAddonStatus.prototype.cursorDown = function() {
  this.cursorPagedown()
  Window_PhoneAddonBase.prototype.cursorDown.call(this);    
};

Window_PhoneAddonStatus.prototype.gaugeLineHeight = function() {
    return 24;
};
// gauge width modification for phone scene
Sprite_GaugePhoneStatus = function() {
    this.initialize(...arguments);
}

Sprite_GaugePhoneStatus.prototype = Object.create(Sprite_Gauge.prototype);
Sprite_GaugePhoneStatus.prototype.constructor = Sprite_GaugePhoneStatus;

Sprite_GaugePhoneStatus.prototype.bitmapWidth = function() {
    return EST.PhoneMenu.Parameters.phoneStatusGaugeWidth;
};

Sprite_GaugePhoneStatus.prototype.drawValue = function() {
    const currentValue = this.currentValue();
    const maxValue = this.currentMaxValue();
    const width = this.bitmapWidth();
    const height = this.bitmapHeight();
    this.setupValueFont();
    this.bitmap.fontSize = 16;
    this.bitmap.drawText(currentValue +"/"+ maxValue, 0, 0, width, height, "right");
};
//end status

//start formation
Scene_PhoneAddonFormation = function() {
    this.initialize(...arguments);
};
Scene_PhoneAddonFormation.prototype = Object.create(Scene_PhoneAddonBase.prototype);
Scene_PhoneAddonFormation.prototype.constructor = Scene_PhoneAddonFormation;

Scene_PhoneAddonFormation.prototype.createContents = function(){
    var par = this.Parameters;
    var wx = par.phoneXpos + par.phoneBGXoffset;
    var wy = par.phoneYpos + par.phoneBGYoffset + 15;
    var ww = par.phoneBGWidth;
    var wh = par.phoneBGHeight -15;
    this._phoneCommand = new Window_PhoneAddonFormation(new Rectangle(wx,wy,ww,wh));
    this._phoneCommand.setHandler("ok", this.onFormationOk.bind(this));
    this._phoneCommand.setHandler("cancel", this.onFormationCancel.bind(this));        
    this._phoneCommand.activate();
    this.addChild(this._phoneCommand);
};

Scene_PhoneAddonFormation.prototype.onFormationOk = function(){
    const index = this._phoneCommand.index();
    const pendingIndex = this._phoneCommand.pendingIndex();
    if (pendingIndex >= 0) {
        $gameParty.swapOrder(index, pendingIndex);
        this._phoneCommand.setPendingIndex(-1);
        this._phoneCommand.redrawItem(index);
        this.estActorEventPatch();
    } else {
        this._phoneCommand.setPendingIndex(index);
    }
    this._phoneCommand.activate();
};

Scene_PhoneAddonFormation.prototype.estActorEventPatch = function(){
  if(!EST || !EST.ActorEvent) return;
  $gameMap.events().forEach(function(ev){
    if(ev && ev.page()) {
      if(ev) ev.setupEventActorGraphic();
    }
  });
};

Scene_PhoneAddonFormation.prototype.onFormationCancel = function(){
    if (this._phoneCommand.pendingIndex() >= 0) {
        this._phoneCommand.setPendingIndex(-1);
        this._phoneCommand.activate();
    } else {
        SceneManager.pop();
    }};

Window_PhoneAddonFormation = function() {
    this.initialize(...arguments);
};
Window_PhoneAddonFormation.prototype = Object.create(Window_MenuStatus.prototype);
Window_PhoneAddonFormation.prototype.constructor = Window_PhoneAddonFormation;

Window_PhoneAddonFormation.prototype.initialize = function(rect) {
    Window_MenuStatus.prototype.initialize.call(this, rect);
    this.opacity = 0;
    this._formationMode = true;
};

Window_PhoneAddonFormation.prototype.drawItem = function(index) {
    this.drawPendingItemBackground(index);
    this.drawItemImage(index);
    this.drawItemStatus(index);
};

Window_PhoneAddonFormation.prototype.drawPendingItemBackground = function(index) {
    if (index === this._pendingIndex) {
        const rect = this.itemRect(index);
        const color = ColorManager.pendingColor();
        this.changePaintOpacity(false);
        this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
        this.changePaintOpacity(true);
    }
};

Window_PhoneAddonFormation.prototype.drawFace = function(
    faceName, faceIndex, x, y, width, height
) {
    width = width || ImageManager.faceWidth;
    height = height || ImageManager.faceHeight;
    const bitmap = ImageManager.loadFace(faceName);
    const pw = ImageManager.faceWidth;
    const ph = ImageManager.faceHeight;
    const sw = Math.min(width, pw);
    const sh = Math.min(height, ph);
    const dx = Math.floor(x + Math.max(width - pw, 0) / 2);
    const dy = Math.floor(y + Math.max(height - ph, 0) / 2);
    const sx = (faceIndex % 4) * pw + (pw - sw) / 2;
    const sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
    this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy, sw/2, sh/2);
};

Window_PhoneAddonFormation.prototype.drawItemStatus = function(index) {
    const actor = this.actor(index);
    const rect = this.itemRect(index);
    const x = rect.x;
    const y = rect.y + rect.height / 2 - this.lineHeight() * 1.5;
    this.drawActorSimpleStatus(actor, x, y);
};

Window_PhoneAddonFormation.prototype.drawActorSimpleStatus = function(actor, x, y) {
    const lineHeight = this.lineHeight();
    const x2 = x + 144/2 + 4;
    this.contents.fontSize = 14;
    this.drawActorName(actor, x, y + lineHeight * 1.5);
    this.drawActorLevel(actor, x, y + lineHeight * 2.25);
    this.drawActorIcons(actor, x, y + lineHeight * 3, this.itemRect(this._index).width);
    this.drawActorClass(actor, x2, y - lineHeight * 1);
    this.placeBasicGauges(actor, x2, y);
};

Window_PhoneAddonFormation.prototype.drawActorLevel = function(actor, x, y) {
    this.changeTextColor(ColorManager.systemColor());
    this.drawText(TextManager.levelA, x, y, 48);
    this.resetTextColor();
    this.drawText(actor.level, x, y, 36, "right");
};

Window_PhoneAddonFormation.prototype.drawActorIcons = function(actor, x, y, width) {
    width = width || 144;
    const iconWidth = ImageManager.iconWidth/2;
    const icons = actor.allIcons().slice(0, Math.floor(width / iconWidth));
    let iconX = x;
    for (const icon of icons) {
        this.drawIcon(icon, iconX, y + 2);
        iconX += iconWidth;
    }
};

Window_PhoneAddonFormation.prototype.drawIcon = function(iconIndex, x, y) {
    const bitmap = ImageManager.loadSystem("IconSet");
    const pw = ImageManager.iconWidth;
    const ph = ImageManager.iconHeight;
    const sx = (iconIndex % 16) * pw;
    const sy = Math.floor(iconIndex / 16) * ph;
    this.contents.blt(bitmap, sx, sy, pw, ph, x, y, pw/2, ph/2);
};

Window_PhoneAddonFormation.prototype.lineHeight = function() {
    return 24;
};
//end formation

//start options
Scene_PhoneAddonOptions = function() {
    this.initialize(...arguments);
};
Scene_PhoneAddonOptions.prototype = Object.create(Scene_PhoneAddonBase.prototype);
Scene_PhoneAddonOptions.prototype.constructor = Scene_PhoneAddonOptions;

Scene_PhoneAddonOptions.prototype.createContents = function(){
    var par = this.Parameters;
    var wx = par.phoneXpos + par.phoneBGXoffset;
    var wy = par.phoneYpos + par.phoneBGYoffset + 15;
    var ww = par.phoneBGWidth;
    var wh = par.phoneBGHeight -15;
    this._phoneCommand = new Window_PhoneAddonOptions(new Rectangle(wx,wy+par.phoneOptionY,ww,wh));
    this._phoneCommand.setHandler("cancel", this.popScene.bind(this));
    this.addChild(this._phoneCommand);
};

Window_PhoneAddonOptions = function() {
    this.initialize(...arguments);
};
Window_PhoneAddonOptions.prototype = Object.create(Window_Options.prototype);
Window_PhoneAddonOptions.prototype.constructor = Window_PhoneAddonOptions;

Window_PhoneAddonOptions.prototype.initialize = function(rect) {
    Window_Options.prototype.initialize.call(this, rect);
    this.opacity = 0;
};
// end options

//start save
Scene_PhoneAddonSave = function() {
    this.initialize(...arguments);
};
Scene_PhoneAddonSave.prototype = Object.create(Scene_PhoneAddonBase.prototype);
Scene_PhoneAddonSave.prototype.constructor = Scene_PhoneAddonSave;

Scene_PhoneAddonSave.prototype.createContents = function(){
    DataManager.loadAllSavefileImages();
    var par = this.Parameters;
    var wx = par.phoneXpos + par.phoneBGXoffset;
    var wy = par.phoneYpos + par.phoneBGYoffset + 15;
    var ww = par.phoneBGWidth;
    var wh = par.phoneBGHeight -15;

    const rect = this.helpWindowRect();
    this._helpWindow = new Window_PhoneHelp(new Rectangle(wx, wy+8, ww, 96));
    this.addChild(this._helpWindow);
    this._phoneCommand = new Window_PhoneAddonSave(new Rectangle(wx,wy + 96,ww,wh-96));
    this._phoneCommand.setHandler("ok", this.onSavefileOk.bind(this));
    this._phoneCommand.setHandler("cancel", this.popScene.bind(this));
    this._phoneCommand.setMode(this.mode(), this.needsAutosave());
    this._phoneCommand.selectSavefile(this.firstSavefileId());
    this._phoneCommand.refresh();
    this.addChild(this._phoneCommand);
    this._helpWindow.setText(this.helpWindowText());
};

Scene_PhoneAddonSave.prototype.savefileId = function() {
    return this._phoneCommand.savefileId();
};

Scene_PhoneAddonSave.prototype.isSavefileEnabled = function(savefileId) {
    return this._phoneCommand.isEnabled(savefileId);
};

Scene_PhoneAddonSave.prototype.mode = function() {
    return "save";
};

Scene_PhoneAddonSave.prototype.needsAutosave = function() {
    return $gameSystem.isAutosaveEnabled();
};

Scene_PhoneAddonSave.prototype.activateListWindow = function() {
    this._phoneCommand.activate();
};

Scene_PhoneAddonSave.prototype.helpWindowText = function() {
    return TextManager.saveMessage;
};

Scene_PhoneAddonSave.prototype.firstSavefileId = function() {
    return $gameSystem.savefileId();
};

Scene_PhoneAddonSave.prototype.onSavefileOk = function() {
    const savefileId = this.savefileId();
    if (this.isSavefileEnabled(savefileId)) {
        this.executeSave(savefileId);
    } else {
        this.onSaveFailure();
    }
};

Scene_PhoneAddonSave.prototype.executeSave = function(savefileId) {
    $gameSystem.setSavefileId(savefileId);
    $gameSystem.onBeforeSave();
    DataManager.saveGame(savefileId)
        .then(() => this.onSaveSuccess())
        .catch(() => this.onSaveFailure());
};

Scene_PhoneAddonSave.prototype.onSaveSuccess = function() {
    SoundManager.playSave();
    this.popScene();
};

Scene_PhoneAddonSave.prototype.onSaveFailure = function() {
    SoundManager.playBuzzer();
    this.activateListWindow();
};


Window_PhoneAddonSave = function() {
    this.initialize(...arguments);
};
Window_PhoneAddonSave.prototype = Object.create(Window_SavefileList.prototype);
Window_PhoneAddonSave.prototype.constructor = Window_PhoneAddonSave;

Window_PhoneAddonSave.prototype.initialize = function(rect) {
    Window_SavefileList.prototype.initialize.call(this, rect);
    this.contents.fontSize = 18;
    this.opacity = 0;
};

Window_PhoneAddonSave.prototype.drawContents = function(info, rect) {
    const bottom = rect.y;
    const lineHeight = this.lineHeight();
    this.drawPartyCharacters(info, rect.x + 16, bottom + 8 + lineHeight);
    this.drawPlaytime(info, rect.x, rect.y, rect.width);
};

Window_PhoneAddonSave.prototype.drawPartyCharacters = function(info, x, y) {
    if (info.characters) {
        let characterX = x;
        for (const data of info.characters) {
            this.drawCharacter(data[0], data[1], characterX, y);
            characterX += 24;
        }
    }
};

Window_PhoneAddonSave.prototype.drawCharacter = function(
    characterName, characterIndex, x, y
) {
    const bitmap = ImageManager.loadCharacter(characterName);
    const big = ImageManager.isBigCharacter(characterName);
    const pw = bitmap.width / (big ? 3 : 12);
    const ph = bitmap.height / (big ? 4 : 8);
    const n = big ? 0: characterIndex;
    const sx = ((n % 4) * 3 + 1) * pw;
    const sy = Math.floor(n / 4) * 4 * ph;
    this.contents.blt(bitmap, sx, sy, pw, ph, x, y, pw/2, ph/2);
};

//end save

//start game end
Scene_PhoneAddonGameEnd = function() {
    this.initialize(...arguments);
};
Scene_PhoneAddonGameEnd.prototype = Object.create(Scene_PhoneAddonBase.prototype);
Scene_PhoneAddonGameEnd.prototype.constructor = Scene_PhoneAddonGameEnd;

Scene_PhoneAddonGameEnd.prototype.createContents = function(){
    var wx = this.Parameters.phoneXpos + this.Parameters.phoneBGXoffset;
    var wy = this.Parameters.phoneYpos + this.Parameters.phoneBGYoffset + 15;
    var ww = this.Parameters.phoneBGWidth;
    var wh = this.Parameters.phoneBGHeight -15;
    this._phoneCommand = new Window_PhoneAddonGameEnd(new Rectangle(wx,wy,ww,wh));
    this._phoneCommand.setHandler("toTitle", this.commandToTitle.bind(this));
    this._phoneCommand.setHandler("shutDown", this.commandShutDown.bind(this));
    this._phoneCommand.setHandler("cancel", this.popScene.bind(this));
    this._phoneCommand.refresh();
    this.addChild(this._phoneCommand);
};

Scene_PhoneAddonGameEnd.prototype.commandToTitle = function() {
    this.fadeOutAll();
    SceneManager.goto(Scene_Title);
    Window_TitleCommand.initCommandPosition();
};

Scene_PhoneAddonGameEnd.prototype.commandShutDown = function() {
    this.fadeOutAll();
    SceneManager.exit();
};

Window_PhoneAddonGameEnd = function() {
    this.initialize(...arguments);
};
Window_PhoneAddonGameEnd.prototype = Object.create(Window_PhoneAddonBase.prototype);
Window_PhoneAddonGameEnd.prototype.constructor = Window_PhoneAddonGameEnd;

Window_PhoneAddonGameEnd.prototype.makeCommandList = function(){
    this.addCommand(TextManager.toTitle, "toTitle");
    this.addCommand("Shutdown", "shutDown");
    this.addCommand(TextManager.cancel, "cancel");
};

Window_PhoneAddonGameEnd.prototype.drawItem = function(index){
    Window_Command.prototype.drawItem.call(this, index);
};

Window_PhoneAddonGameEnd.prototype.commandName = function(index){
    return this._list[index].name;
};
//end game end

//start load
Scene_PhoneAddonLoad = function() {
    this.initialize(...arguments);
};
Scene_PhoneAddonLoad.prototype = Object.create(Scene_PhoneAddonBase.prototype);
Scene_PhoneAddonLoad.prototype.constructor = Scene_PhoneAddonLoad;

Scene_PhoneAddonLoad.prototype.initialize = function() {
    Scene_PhoneAddonBase.prototype.initialize.call(this);
    this._loadSuccess = false;
};

Scene_PhoneAddonLoad.prototype.terminate = function() {
    Scene_PhoneAddonBase.prototype.terminate.call(this);
    if (this._loadSuccess) {
        $gameSystem.onAfterLoad();
    }
};

Scene_PhoneAddonLoad.prototype.createContents = function(){
    DataManager.loadAllSavefileImages();
    var par = this.Parameters;
    var wx = par.phoneXpos + par.phoneBGXoffset;
    var wy = par.phoneYpos + par.phoneBGYoffset + 15;
    var ww = par.phoneBGWidth;
    var wh = par.phoneBGHeight -15;

    const rect = this.helpWindowRect();
    this._helpWindow = new Window_PhoneHelp(new Rectangle(wx, wy+8, ww, 96));
    this.addChild(this._helpWindow);
    this._phoneCommand = new Window_PhoneAddonSave(new Rectangle(wx,wy + 96,ww,wh-96));
    this._phoneCommand.setHandler("ok", this.onSavefileOk.bind(this));
    this._phoneCommand.setHandler("cancel", this.popScene.bind(this));
    this._phoneCommand.setMode(this.mode(), this.needsAutosave());
    this._phoneCommand.selectSavefile(this.firstSavefileId());
    this._phoneCommand.refresh();
    this.addChild(this._phoneCommand);
    this._helpWindow.setText(this.helpWindowText());
};

Scene_PhoneAddonLoad.prototype.savefileId = function() {
    return this._phoneCommand.savefileId();
};

Scene_PhoneAddonLoad.prototype.isSavefileEnabled = function(savefileId) {
    return this._phoneCommand.isEnabled(savefileId);
};

Scene_PhoneAddonLoad.prototype.mode = function() {
    return "load";
};

Scene_PhoneAddonLoad.prototype.needsAutosave = function() {
    return $gameSystem.isAutosaveEnabled();
};

Scene_PhoneAddonLoad.prototype.activateListWindow = function() {
    this._phoneCommand.activate();
};

Scene_PhoneAddonLoad.prototype.helpWindowText = function() {
    return TextManager.loadMessage;
};

Scene_PhoneAddonLoad.prototype.firstSavefileId = function() {
    return DataManager.latestSavefileId();
};

Scene_PhoneAddonLoad.prototype.onSavefileOk = function() {
    const savefileId = this.savefileId();
    if (this.isSavefileEnabled(savefileId)) {
        this.executeLoad(savefileId);
    } else {
        this.onLoadFailure();
    }
};

Scene_PhoneAddonLoad.prototype.executeLoad = function(savefileId) {
    DataManager.loadGame(savefileId)
        .then(() => this.onLoadSuccess())
        .catch(() => this.onLoadFailure());
};

Scene_PhoneAddonLoad.prototype.onLoadSuccess = function() {
    SoundManager.playLoad();
    this.fadeOutAll();
    this.reloadMapIfUpdated();
    SceneManager.goto(Scene_Map);
    this._loadSuccess = true;
};

Scene_PhoneAddonLoad.prototype.onLoadFailure = function() {
    SoundManager.playBuzzer();
    this.activateListWindow();
};

Scene_PhoneAddonLoad.prototype.reloadMapIfUpdated = function() {
    if ($gameSystem.versionId() !== $dataSystem.versionId) {
        const mapId = $gameMap.mapId();
        const x = $gamePlayer.x;
        const y = $gamePlayer.y;
        $gamePlayer.reserveTransfer(mapId, x, y);
        $gamePlayer.requestMapReload();
    }
};

// Window_PhoneAddonLoad = function() {
//     this.initialize(...arguments);
// };
// Window_PhoneAddonLoad.prototype = Object.create(Window_SavefileList.prototype);
// Window_PhoneAddonLoad.prototype.constructor = Window_PhoneAddonLoad;

// Window_PhoneAddonLoad.prototype.initialize = function(rect) {
//     Window_SavefileList.prototype.initialize.call(this, rect);
//     this.contents.fontSize = 18;
//     this.opacity = 0;
// };

// Window_PhoneAddonLoad.prototype.drawContents = function(info, rect) {
//     const bottom = rect.y;
//     const lineHeight = this.lineHeight();
//     this.drawPartyCharacters(info, rect.x + 16, bottom + 8 + lineHeight);
//     this.drawPlaytime(info, rect.x, rect.y, rect.width);
// };

// Window_PhoneAddonLoad.prototype.drawPartyCharacters = function(info, x, y) {
//     if (info.characters) {
//         let characterX = x;
//         for (const data of info.characters) {
//             this.drawCharacter(data[0], data[1], characterX, y);
//             characterX += 24;
//         }
//     }
// };

// Window_PhoneAddonLoad.prototype.drawCharacter = function(
//     characterName, characterIndex, x, y
// ) {
//     const bitmap = ImageManager.loadCharacter(characterName);
//     const big = ImageManager.isBigCharacter(characterName);
//     const pw = bitmap.width / (big ? 3 : 12);
//     const ph = bitmap.height / (big ? 4 : 8);
//     const n = big ? 0: characterIndex;
//     const sx = ((n % 4) * 3 + 1) * pw;
//     const sy = Math.floor(n / 4) * 4 * ph;
//     this.contents.blt(bitmap, sx, sy, pw, ph, x, y, pw/2, ph/2);
// };

//hijack load
$.SceneManager_push_hijackLoad = SceneManager.push;
SceneManager.push = function(sceneClass) {
  if (EST.PhoneMenu.Parameters.phoneReplaceLoad && sceneClass == Scene_Load) sceneClass = Scene_PhoneAddonLoad; 
  $.SceneManager_push_hijackLoad.call(this,sceneClass);
};

//onload common event
$.Game_System_onAfterLoad_onloadCE = Game_System.prototype.onAfterLoad;
Game_System.prototype.onAfterLoad = function() {
  $.Game_System_onAfterLoad_onloadCE.call(this);
  var ce = EST.PhoneMenu.Parameters.phoneLoadCommonEvent
  if (ce > 0) $gameTemp.reserveCommonEvent(ce);
};

//end load
})(EST.PhoneMenu);