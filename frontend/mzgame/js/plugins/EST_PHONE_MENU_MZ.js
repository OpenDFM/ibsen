/*:
@plugindesc Phone Menu Engine
<EST PHONE MENU MZ>
@author Estriole
@target MZ

@param mainSettings
@text Main Settings
@desc Settings for the phone

@param folderPath
@desc folder inside img/ where you place the phone files
@type string
@default system/cellphone/
@parent mainSettings

@param phoneIMG
@desc Image name of the Phone base
@type string
@default phone
@parent mainSettings

@param phoneBG
@desc Image name of the Phone background
@type string
@default background
@parent mainSettings

@param rescueBG
@desc Image name for rescuing when BG not exist
@type string
@default background
@parent mainSettings

@param alertMethod
@text Rescue Alert Method
@desc When rescuing the image... how you want to be warned...
@type select
@option console.log()
@option alert()
@default console.log()
@parent mainSettings

@param phoneReplaceMenu
@text Phone as SceneMenu.
@desc If set to true... this will open Scene_Phone instead of Scene_Menu
when opening menu from map / event.
@type boolean
@default true
@parent mainSettings

@param phonePosSettings
@text Phone Position Settings
@parent mainSettings

@param phoneXpos
@desc Position X of the phone
@type number
@default 250
@parent phonePosSettings

@param phoneYpos
@desc Position Y of the phone
@type number
@default 20
@parent phonePosSettings

@param phoneBGXoffset
@desc offset x coordinate of the Phone Background
@type number
@default 7
@parent phonePosSettings

@param phoneBGYoffset
@desc offset y coordinate of the Phone Background
@type number
@default 10
@parent phonePosSettings

@param phoneBGWidth
@desc Width of the Phone Background (in pixel)
@type number
@default 241
@parent phonePosSettings

@param phoneBGHeight
@desc Height of the Phone Background (in pixel)
@type number
@default 529
@parent phonePosSettings

@param phoneContent
@text Phone Content
@desc content of the phone menu

@param phoneCommandSettings
@text Phone Command Settings
@desc Set your menu title, condition to be included, condition to be enabled, and what script execute when chosen.
@type struct<phoneCommandSettings>[]
@parent phoneContent
@default ["{\"Command\":\"Item\",\"Script\":\"SceneManager.push(Scene_PhoneAddonItem);\",\"includeCond\":\"\",\"enableCond\":\"\"}","{\"Command\":\"Skill\",\"Script\":\"$gameSystem._phoneActorSelectionType = \\\"Skill\\\";\\nSceneManager.push(Scene_PhoneAddonActorSelection);\",\"includeCond\":\"\",\"enableCond\":\"\"}","{\"Command\":\"Equip\",\"Script\":\"$gameSystem._phoneActorSelectionType = \\\"Equip\\\";\\nSceneManager.push(Scene_PhoneAddonActorSelection);\",\"includeCond\":\"\",\"enableCond\":\"\"}","{\"Command\":\"Status\",\"Script\":\"$gameSystem._phoneActorSelectionType = \\\"Status\\\";\\nSceneManager.push(Scene_PhoneAddonActorSelection);\",\"includeCond\":\"\",\"enableCond\":\"\"}","{\"Command\":\"Formation\",\"Script\":\"SceneManager.push(Scene_PhoneAddonFormation);\",\"includeCond\":\"\",\"enableCond\":\"$gameParty.size() >= 2 && $gameSystem.isFormationEnabled();\"}","{\"Command\":\"Call\",\"Script\":\"$gameSystem._phoneActorSelectionType = \\\"Talk\\\";\\nSceneManager.push(Scene_PhoneAddonActorSelection);\",\"includeCond\":\"\",\"enableCond\":\"\"}","{\"Command\":\"Option\",\"Script\":\"SceneManager.push(Scene_PhoneAddonOptions);\",\"includeCond\":\"\",\"enableCond\":\"\"}","{\"Command\":\"Save\",\"Script\":\"SceneManager.push(Scene_PhoneAddonSave);\",\"includeCond\":\"\",\"enableCond\":\"$gameSystem._saveEnabled == true\"}","{\"Command\":\"Game End\",\"Script\":\"SceneManager.push(Scene_PhoneAddonGameEnd);\",\"includeCond\":\"\",\"enableCond\":\"\"}"]

@param rescueIcon
@text rescueCommand
@desc Rescue Command Image when icon command didn't have image 
(ex: still in Development)
@type string
@default rescue_icon
@parent phoneContent

@param phoneMaxCols
@text Menu Max Cols
@desc How many column your icon command
@type number
@default 4
@parent phoneContent

@param phoneMaxRows
@text Menu Max Rows
@desc How many rows your icon command
@type number
@default 6
@parent phoneContent

@param phoneItemHeight
@text Menu Command Height (in pixel)
@desc Height of your icon command (can be the same with your image size or add some for title below it)
@type number
@default 80
@parent phoneContent

@param phoneCenterIcon
@text Center Icon Command
@desc true => command icon image centered
@type boolean
@default true
@parent phoneContent

@param phoneImgWidth
@text Command Image Width
@desc your icon image Width in pixel. will be calculated for centering the icon
@type number
@default 46
@parent phoneContent

@param phoneDrawTitles
@text Phone Draw Titles
@desc true => draw command title, false => if your image already clear what it do
@type boolean
@default true
@parent phoneContent

@param phoneDynamicIcon
@text Phone Dynamic Icon
@desc true => highlight icon... change iconimg + "_select" suffix
@type boolean
@default false
@parent phoneContent

@param phoneHideCursor
@text Phone Hide Cursor
@desc true => the cursor highlight will not shown... (combine with Dynamic Icon)
@type boolean
@default false
@parent phoneContent

@param advancedSettings
@text Advanced Settings

@param phoneCustomFunction
@text Custom Function
@desc Custom function you can define to included inside the Phone Scene. can be called with this.yourFunction() later.
@type multiline_string[]
@parent advancedSettings
@default ["EST.PhoneMenu.picturesFeature = function(){\n  $gameVariables.setValue(2, 333);\n  alert(\"entering function pictures feature\");\n  if(this._phoneCommand) this._phoneCommand.activate();\n};","EST.PhoneMenu.callScene = function(sceneClass, page, index){\n $gameTemp._phoneLastIcon = index || 0;\n $gameTemp._phoneLastPage = page || 0; \n SceneManager.push(sceneClass);\n};","EST.PhoneMenu.whatEverFunction= function (id){\n  //do something here you want\n};"]

@command callPhone
@text Call Scene_Phone
@desc adding new phone command.

@command changePhoneIMG
@text Change Phone Image
@desc Changing the phone image

@arg imgName
@text ImageName
@desc Name of your Image files (without .png)
@type string
@default 

@command changePhoneBG
@text Change Phone Background Image
@desc Changing the phone background image

@arg imgName
@text ImageName
@desc Name of your Image files (without .png)
@type string
@default 

@command phoneReplaceMenu
@text Phone Replace Menu
@desc Scene_Phone replace Scene_Menu or not?.

@arg value
@text Phone as SceneMenu.
@desc If set to true... this will open Scene_Phone instead of Scene_Menu
when opening menu from map / event.
@type boolean
@default true

@command addPhoneCommand
@text Add Phone Command
@desc adding new phone command.

@arg Command
@text Command Title
@desc The name of the command. the image will also use this as filename.
@type string

@arg Script
@text Script
@desc Script that executed when choosing that command.
@type multiline_string

@arg includeCond
@text Include Condition
@desc Condition so this command included. left it blank if you want it always include
@type multiline_string

@arg enableCond
@text Enable Condition
@desc Condition so this command enabled. left it blank if you want it always enabled
@type multiline_string

@command modPhoneCommand
@text Modify Phone Command
@desc Modify existing phone command.

@arg Command
@text Command Title
@desc The name of the command. the image will also use this as filename.
@type string

@arg Script
@text Script
@desc Script that executed when choosing that command.
@type multiline_string

@arg includeCond
@text Include Condition
@desc Condition so this command included. left it blank if you want it always include
@type multiline_string

@arg enableCond
@text Enable Condition
@desc Condition so this command enabled. left it blank if you want it always enabled
@type multiline_string


*/

/*~struct~phoneCommandSettings:
@param Command
@text Command Title
@desc The name of the command. the image will also use this as filename.
@type string

@param Script
@text Script
@desc Script that executed when choosing that command.
@type multiline_string

@param includeCond
@text Include Condition
@desc Condition so this command included. left it blank if you want it always include
@type multiline_string

@param enableCond
@text Enable Condition
@desc Condition so this command enabled. left it blank if you want it always enabled
@type multiline_string

*/

/*~struct~phoneInclude:
@param Command
@text Command
@type string

@param Condition
@text Condition
@type string
*/

/*~struct~phoneEnable:
@param Command
@text Command
@type string

@param Condition
@text Condition
@type string
*/

/*~struct~phoneScript:
@param Command
@text Command
@type string

@param Script
@text Script
@type multiline_string
*/

/*~struct~phoneCustomFunction:
@param Function
@text Function Name
@type string

@param Content
@text Content
@type multiline_string
*/

/*
@help
 ■ Information      ╒══════════════════════════╛
 EST - PHONE MENU MZ
 Version: 1.1
 By Estriole
 File name: .js

 ■ Introduction     ╒══════════════════════════╛
 This plugin is Menu Engine Plugin. Which mean we
 can set our own Menu Command... what happen when
 we click on those Command... this Menu Engine also
 build with Phone as it's template... but this Menu
 Engine could also work using other form of Menu. 

 ■ Features         ╒══════════════════════════╛
 - fully customizeable Menu Engine
 - Customizeable Graphic Menu
 - Simulate Phone as Menu (if using existing template)
 - Customize what you want when clicking the command
 - Custom include / enable command
 - rescue image when image missing (or when you have not made it yet)
 - ability to swap command image to selected version when hovered.
 - MOSTLY WORKING common event execute inside the scene

  ■ Changelog       ╒══════════════════════════╛
   v1.1 2020.11.22           > Minor RegEx Fix to recognize more than one space in 
                             filename when rescuing images.
                             > failsafe when user save the plugin as different name
   v1.0 2020.10.22           > Finish the plugins

 ■ Plugin Download ╒══════════════════════════╛
 https://www.dropbox.com/s/4gv3tq6fxusgf4k/EST_PHONE_MENU_MZ.js?dl=0

 addon:
 EST_PHONE_ADDON_BASICMENU.js
 add basic menu scene that FITS on the phone
 https://www.dropbox.com/s/6bquiq3d6emoreo/EST_PHONE_ADDON_BASICMENU.js?dl=0

 ■ Screenshots ╒══════════════════════════╛
 Coming Soon

 ■ Demo ╒══════════════════════════╛
 https://www.dropbox.com/sh/vhf1jhpydfr3vne/AACXtmj85frlI81AAmAcK50Ha?dl=0
 click download to download the entire folder.   

 ■ How to use       ╒══════════════════════════╛
 1> install the plugin 
 2> set the plugin parameters (see ■ Parameter below for more info)
 also setup your menu command there.
    a> first set the folder path where you will put the images
    b> set the phone image, phoneBG image, and rescueBG image
    c> add the menu command (with all the condition and script when chosen)

    [optional] only if you're using your own image...
    d> set PhoneXpos, PhoneYpos, phoneBGXoffset, phoneBGYoffset value
    e> set your phoneBGWidth and PhoneBGHeight
    this is required because image loaded asynchronously.
    f> set your command image pixel size
    this is required because image loaded asynchronously.

 3> place the all the phone image in the folder you specify at Plugin parameter
 make sure to at least place the phoneIMG image, rescueBG image, rescueCommand image
 the rest of the image you can add gradually when you working on your project.
 4> your phone menu engine is now working.
 5> you can also set the Scene_Phone to replace Scene_Menu in plugin parameter
 6> you can also set the Scene_PhoneAddonLoad to replace Scene_Load in plugin parameter

 still confused? check the demo instead.

 you can also use plugin commands to modify few things... check the plugin command
 section for more info.

 ■ Dependencies     ╒══════════════════════════╛
 none

 ■ Compatibility    ╒══════════════════════════╛
 MZ is new engine... so i cannot say for sure. 
 but it should be compatible with most things.

 ■ Parameters       ╒══════════════════════════╛
 !Main Settings
  >> folderPath
    ~ folder inside img/ where you place the phone files

  >> phoneIMG
    ~ Image name of the Phone base

  >> phoneBG
    ~ Image name of the Phone background

  >> rescueBG
    ~ Image name for rescuing when BG not exist

  >> Rescue Alert Method
      When rescuing the image... how you want to be warned...
        @option console.log() -> write on console
        @option alert() -> throw alert

  >> Phone as SceneMenu.
    ~ If set to true... this will open Scene_Phone instead of Scene_Menu
      when opening menu from map / event.

 !Phone Position Settings
  >> phoneXpos
    ~ Position X of the phone

  >> phoneYpos
    ~ Position Y of the phone

  >> phoneBGXoffset
    ~ offset x coordinate of the Phone Background
      
  >> phoneBGYoffset
    ~ offset y coordinate of the Phone Background

  >> phoneBGWidth
    ~ Width of the Phone Background (in pixel)

  >> phoneBGHeight
    ~ Height of the Phone Background (in pixel)

 !Phone Content
  >> Phone Command Settings
    ~ Set your menu title, condition to be included, condition to be enabled,
      and what script execute when chosen.
        it's a list of struck that you can add easily.
        + Command Title -> The name of the command. the image will also use this name.
        + Script -> Script that executed when choosing that command.
        + Include Condition -> Condition so this command included. left it blank if 
                               you want it always include
        + Enable Condition -> Condition so this command enabled. left it blank if you
                               want it always enabled

  >> rescueCommand
    ~ Rescue Command Image when icon command didn't have image 
      (ex: still in Development)

  >> Menu Max Cols
    ~ How many column your command menu

  >> Menu Max Rows
    ~ How many rows your icon command

  >> Menu Command Height
    ~ Height of your icon command (can be the same with your image size or add 
      some space for title below it)

  >> Center Icon Command
    ~ true => command icon image centered. requires to fill the command size parameter below.

  >> Command Image Width
    ~ your icon image Width in pixel. will be calculated for centering the icon

  >> Phone Draw Titles
    ~ true => draw command title, false => if your image already clear what the command do

  >> Phone Dynamic Icon
    ~ true => when highlight command. will change to "_select" version of it.

  >> Phone Hide Cursor
    ~ true => the cursor highlight will not shown... (combine with Dynamic Icon)

 !advancedSettings
  >> Custom Function
    ~ Custom function you can define to included inside the Phone Scene. 
    can be called with this.yourFunction() later.
 
 ■ Plugin Commands       ╒══════════════════════════╛
  >> Call Scene_Phone
    ~ calling Scene_Phone.

  >> Change Phone Image
    ~ Changing the phone image
      + ImageName: Name of your Image files (without .png)

  >> Change Phone Background Image
    ~ Changing the phone background image
      + ImageName: Name of your Image files (without .png)

  >> Phone Replace Menu
    ~ Scene_Phone replace Scene_Menu or not?.
      + Phone as SceneMenu: If set to true... this will open Scene_Phone instead of Scene_Menu

  >> Add Phone Command
    ~ adding new phone command.
      + Command Title: The name of the command. the image will also use this as filename.
      + Script: Script that executed when choosing that command.
      + Include Condition: Condition so this command included. left it blank if you want it always include
      + Enable Condition: Condition so this command enabled. left it blank if you want it always enabled

  >> Modify Phone Command
    ~ Modify existing phone command.
      + Command Title: The name of the command. the image will also use this as filename.
      + Script: Script that executed when choosing that command.
      + Include Condition: Condition so this command included. left it blank if you want it always include
      + Enable Condition: Condition so this command enabled. left it blank if you want it always enabled

 ■ License          ╒══════════════════════════╛
 Free to use in all project (except the one containing pornography)
 as long as i credited (ESTRIOLE). 

 ■ Extra Credit ╒══════════════════════════╛
 None

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
EST.PhoneMenu.pluginName=document.currentScript.src.split('/').slice(-1)[0].slice(0,-3).replace(/\%20/g," ");

//plugin commands
PluginManager.registerCommand(EST.PhoneMenu.pluginName, "callPhone", args => {
  SceneManager.push(Scene_Phone);
});

PluginManager.registerCommand(EST.PhoneMenu.pluginName, "phoneReplaceMenu", args => {
  $gameSystem.phoneReplaceMenu = JSON.parse(args["value"]);
});

PluginManager.registerCommand(EST.PhoneMenu.pluginName, "changePhoneIMG", args => {
  $gameSystem.phoneIMG = args["imgName"];
});

PluginManager.registerCommand(EST.PhoneMenu.pluginName, "changePhoneBG", args => {
  $gameSystem.phoneBG = args["imgName"];
});

PluginManager.registerCommand(EST.PhoneMenu.pluginName, "addPhoneCommand", args => {
 $gameSystem.initPhoneMenu();
 if($gameSystem._phoneIconTitles.includes(args["Command"])) return console.log("Command Already Exist");
 $gameSystem._phoneIconTitles.push(args["Command"])
 $gameSystem._phoneInclude[args["Command"]] = args["includeCond"]; 
 $gameSystem._phoneEnabled[args["Command"]] = args["enableCond"];
 $gameSystem._phoneScript[args["Command"]] = args["Script"];
});

PluginManager.registerCommand(EST.PhoneMenu.pluginName, "modPhoneCommand", args => {
 $gameSystem.initPhoneMenu();
 if(!$gameSystem._phoneIconTitles.includes(args["Command"])) return console.log("Command Did Not Exist");
 $gameSystem._phoneInclude[args["Command"]] = args["includeCond"]; 
 $gameSystem._phoneEnabled[args["Command"]] = args["enableCond"];
 $gameSystem._phoneScript[args["Command"]] = args["Script"];
});

//parsing the plugin parameters
//main setting parameter
EST.PhoneMenu.Parameters = PluginManager.parameters(EST.PhoneMenu.pluginName);
EST.PhoneMenu.Parameters.phoneXpos = Number(EST.PhoneMenu.Parameters.phoneXpos);
EST.PhoneMenu.Parameters.phoneYpos = Number(EST.PhoneMenu.Parameters.phoneYpos);
EST.PhoneMenu.Parameters.phoneZpos = Number(EST.PhoneMenu.Parameters.phoneZpos);
EST.PhoneMenu.Parameters.phoneBGXoffset = Number(EST.PhoneMenu.Parameters.phoneBGXoffset);
EST.PhoneMenu.Parameters.phoneBGYoffset = Number(EST.PhoneMenu.Parameters.phoneBGYoffset);
EST.PhoneMenu.Parameters.phoneBGZoffset = Number(EST.PhoneMenu.Parameters.phoneBGZoffset);
EST.PhoneMenu.Parameters.phoneBGWidth = Number(EST.PhoneMenu.Parameters.phoneBGWidth);
EST.PhoneMenu.Parameters.phoneBGHeight = Number(EST.PhoneMenu.Parameters.phoneBGHeight);

//phone content parameter
EST.PhoneMenu.Parameters.phoneMaxCols = Number(EST.PhoneMenu.Parameters.phoneMaxCols);
EST.PhoneMenu.Parameters.phoneMaxRows = Number(EST.PhoneMenu.Parameters.phoneMaxRows);
EST.PhoneMenu.Parameters.phoneItemHeight = Number(EST.PhoneMenu.Parameters.phoneItemHeight);
EST.PhoneMenu.Parameters.phoneCenterIcon = JSON.parse(EST.PhoneMenu.Parameters.phoneCenterIcon);
EST.PhoneMenu.Parameters.phoneImgWidth = Number(EST.PhoneMenu.Parameters.phoneImgWidth);
EST.PhoneMenu.Parameters.phoneDrawTitles = JSON.parse(EST.PhoneMenu.Parameters.phoneDrawTitles);
EST.PhoneMenu.Parameters.phoneDynamicIcon = JSON.parse(EST.PhoneMenu.Parameters.phoneDynamicIcon);
EST.PhoneMenu.Parameters.phoneHideCursor = JSON.parse(EST.PhoneMenu.Parameters.phoneHideCursor);
EST.PhoneMenu.Parameters.phoneReplaceMenu = JSON.parse(EST.PhoneMenu.Parameters.phoneReplaceMenu); 

//phone command setting parsing to 4 different container
EST.PhoneMenu.Parameters.iconTitles = [];
EST.PhoneMenu.Parameters.phoneCommandSettings = JSON.parse(EST.PhoneMenu.Parameters.phoneCommandSettings);
if(EST.PhoneMenu.Parameters.phoneCommandSettings){
  for (const [i,cmd] of EST.PhoneMenu.Parameters.phoneCommandSettings.entries()){
    EST.PhoneMenu.Parameters.phoneCommandSettings[i] = JSON.parse(cmd);
    EST.PhoneMenu.Parameters.iconTitles.push(EST.PhoneMenu.Parameters.phoneCommandSettings[i].Command);
  };
  EST.PhoneMenu.Parameters.phoneInclude = EST.PhoneMenu.Parameters.phoneCommandSettings.reduce(
  (o, i) => Object.assign(o, {[i.Command]: i.includeCond }), {});
  EST.PhoneMenu.Parameters.phoneEnable = EST.PhoneMenu.Parameters.phoneCommandSettings.reduce(
  (o, i) => Object.assign(o, {[i.Command]: i.enableCond }), {});
  EST.PhoneMenu.Parameters.phoneScript = EST.PhoneMenu.Parameters.phoneCommandSettings.reduce(
  (o, i) => Object.assign(o, {[i.Command]: i.Script }), {});
};

// adding custom function to the EST.PhoneMenu (which later passed on the scene phone and window phone)
EST.PhoneMenu.Parameters.phoneCustomFunction = JSON.parse(EST.PhoneMenu.Parameters.phoneCustomFunction);
if(EST.PhoneMenu.Parameters.phoneCustomFunction){
	for (cmd of EST.PhoneMenu.Parameters.phoneCustomFunction){
		try{
		  eval(cmd);
		}catch(e){
          console.log("phoneCustomFunction Error\nCheck Entry: "+cmd);
		}
	};	
};

//wrapper function
(function($){
//Add some Game_System function
Game_System.prototype.initPhoneMenu = function(){
	this._phoneIconTitles = this._phoneIconTitles || EST.PhoneMenu.Parameters.iconTitles;
	this._phoneInclude = this._phoneInclude || EST.PhoneMenu.Parameters.phoneInclude; 
	this._phoneEnabled = this._phoneEnabled || EST.PhoneMenu.Parameters.phoneEnable;
	this._phoneScript = this._phoneScript || EST.PhoneMenu.Parameters.phoneScript; 	
};

Game_System.prototype.fullPhoneMenu = function(){
	this.initPhoneMenu();
	list = [];
	for (cmd of this._phoneIconTitles){
		if(!this._phoneInclude[cmd]) list.push(cmd);
		if(this._phoneInclude[cmd] && eval(this._phoneInclude[cmd])) list.push(cmd);
	};
	return list;
};

Game_System.prototype.phoneMenu = function(page){
	page = page || 0;
	list = this.fullPhoneMenu();
	max = EST.PhoneMenu.Parameters.phoneMaxCols * EST.PhoneMenu.Parameters.phoneMaxRows;
    listpage = list.slice(page * max,page * max + max);
    return listpage;
};

Game_System.prototype.phonePageMax = function(){
	list = this.fullPhoneMenu();
	max = EST.PhoneMenu.Parameters.phoneMaxCols * EST.PhoneMenu.Parameters.phoneMaxRows;	
    pagemax = Math.ceil(list.length / max);                           
    return pagemax;
};

Object.defineProperties(Game_System.prototype, {
    phoneIMG: {
        get: function() {
        	return this._phoneIMG = this._phoneIMG || EST.PhoneMenu.Parameters.phoneIMG || "phone";
        },

        set: function(value){
        	this._phoneIMG = value;
        },
        configurable: true        
    }
});

Object.defineProperties(Game_System.prototype, {
    phoneBG: {
        get: function() {
        	return this._phoneBG = this._phoneBG || EST.PhoneMenu.Parameters.phoneBG || "background";
        },

        set: function(value){
        	this._phoneBG = value;
        },
        configurable: true        
    }
});

Object.defineProperties(Game_System.prototype, {
    phoneReplaceMenu: {
        get: function() {
        	return this._phoneReplaceMenu = this._phoneReplaceMenu || EST.PhoneMenu.Parameters.phoneReplaceMenu;
        },

        set: function(value){
        	this._phoneReplaceMenu = value;
        },
        configurable: true        
    }
});

//creating the Scene_Phone + including all EST.PhoneMenu parameter and function
Scene_Phone = function() {
    this.initialize(...arguments);
};
Scene_Phone.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Phone.prototype.constructor = Scene_Phone;
Scene_Phone.prototype = Object.assign(Scene_Phone.prototype, EST.PhoneMenu);

Scene_Phone.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);	
};

Scene_Phone.prototype.create = function() {
  Scene_MenuBase.prototype.create.call(this);
  this.addMapLayer();
	this.createPhoneBackground();
	this._page = $gameTemp._phoneLastPage || 0;
  this.createContents();
  this.addPhoneCoverLayer();
  this.picPatch();
  this.weatherPatch();
	this.createAllMessageWindow(); //scene interpreter patch
};

Scene_Phone.prototype.addMapLayer = function() {
  if(SceneManager.isPreviousScene(Scene_Title)) return; //patch for load scene
  this._map = new Spriteset_Map();
  this.addChild(this._map);
};

Scene_Phone.prototype.addPhoneCoverLayer = function() {
  this.addChild(this._phone);
};

Scene_Phone.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
    this.updateMapLayer();
    if(this._phoneCommand) this._phoneCommand.refresh();
};

Scene_Phone.prototype.updateMapLayer = function() {
  if(SceneManager.isPreviousScene(Scene_Title)) return; //patch for load scene
  if(this._map) this._map.update();
};

Scene_Phone.prototype.picPatch = function() {
  if(SceneManager.isPreviousScene(Scene_Title)) return; //patch for load scene
  for (pic of this._map._pictureContainer.children){
    this.addChild(pic);//scene interpreter pictures layer patch
  }
}
Scene_Phone.prototype.weatherPatch = function() {
  if(SceneManager.isPreviousScene(Scene_Title)) return; //patch for load scene
  for (ch of this._map.children){
    if(ch.width == 0) continue;
    this.addChild(ch);//scene interpreter map weather layer patch
  }
}

Scene_Phone.prototype.createPhoneBackground = function() {
	this._phone = new Sprite(ImageManager.loadBitmap("img/"+this.Parameters.folderPath,$gameSystem.phoneIMG));
	this._phoneBG = new Sprite(ImageManager.loadBitmap("img/"+this.Parameters.folderPath,$gameSystem.phoneBG));
	this._phone.x = this.Parameters.phoneXpos;
	this._phone.y = this.Parameters.phoneYpos;
	this._phoneBG.x = this._phone.x + this.Parameters.phoneBGXoffset;
	this._phoneBG.y = this._phone.y + this.Parameters.phoneBGYoffset;
	this.addChild(this._phoneBG);
};

Scene_Phone.prototype.createContents = function(){
  var wx = this.Parameters.phoneXpos + this.Parameters.phoneBGXoffset;
  var wy = this.Parameters.phoneYpos + this.Parameters.phoneBGYoffset + 15;
  var ww = this.Parameters.phoneBGWidth;
  var wh = this.Parameters.phoneBGHeight -15;
  this._phoneCommand = new Window_PhoneCommand(new Rectangle(wx,wy,ww,wh),this._page);
  this._phoneCommand.setHandler("ok", this.onPhoneMenuOk.bind(this));
  this._phoneCommand.setHandler("cancel", this.onPhoneMenuCancel.bind(this));
  this._phoneCommand.refresh();
  this.addChild(this._phoneCommand);
  if($gameTemp._phoneLastIcon) this._phoneCommand.select($gameTemp._phoneLastIcon);
};

Scene_Phone.prototype.update = function(){
	Scene_MenuBase.prototype.update.call(this);
  this.updatePhoneSpriteSetMap();
  this.updateMapLayer();
	this.updateInterpreter(); //scene interpreter patch
	if (this._phoneCommand && this._phoneCommand._phoneNeedRedraw) {
	  this.redrawPhone();
	};
	if(Imported && Imported["LvMZAnimatedFaces"]){//compatibility patch with LvMZAnimatedFace
	  if ($gameMessage.hasText() && $gameMessage.animatedFace()) this._messageWindow.updateFaceAnimation();
	};
};

Scene_Phone.prototype.redrawPhone = function(){ //redraw phone
  this._phoneCommand.refresh();
  this._phoneCommand._phoneNeedRedraw = false;
};

Scene_Phone.prototype.updatePhoneSpriteSetMap = function(){
  if(SceneManager.isPreviousScene(Scene_Title)) return;
  $gameMap.update(this.isActive());
  $gameScreen.update(this.isActive());
  $gamePlayer.update(false);
  $gameTimer.update(this.isActive());
};
//scene interpreter patch
//interpreter part
Scene_Phone.prototype.updateInterpreter = function(){
  if(SceneManager.isPreviousScene(Scene_Title)) return;
    if ($gameMap._interpreter) {
        if (!$gameMap._interpreter.isRunning()) {
            $gameMap._interpreter.setup(this.list());
        }
        $gameMap._interpreter.update();
    }	
};

Scene_Phone.prototype.list = function(){
  if($gameTemp._commonEventQueue && $gameTemp._commonEventQueue.length >0){
    return new Game_CommonEvent($gameTemp._commonEventQueue.pop()).list();
  };
  return [];
};

//if the command script did not change scene
Scene_Phone.prototype.backToPhone = function(){ 
  this._phoneCommand.activate();
};

//easier call common event using this.callCommonEvent(x)
Scene_Phone.prototype.callCommonEvent = function(id){
  $gameTemp.reserveCommonEvent(id);
  this.backToPhone();
};

//message part
Scene_Phone.prototype.isMessageWindowClosing = function() {
    return this._messageWindow.isClosing();
};

Scene_Phone.prototype.createAllMessageWindow = function() {
    this.createMessageWindow();
    this.createScrollTextWindow();
    this.createGoldWindow();
    this.createNameBoxWindow();
    this.createChoiceListWindow();
    this.createNumberInputWindow();
    this.createEventItemWindow();
    this.associateWindows();
};

Scene_Phone.prototype.createMessageWindow = function() {
    const rect = this.messageWindowRect();
    this._messageWindow = new Window_Message(rect);
    this.addChild(this._messageWindow);
};

Scene_Phone.prototype.messageWindowRect = function() {
    const ww = Graphics.boxWidth;
    const wh = this.calcWindowHeight(4, false) + 8;
    const wx = (Graphics.boxWidth - ww) / 2;
    const wy = 0;
    return new Rectangle(wx, wy, ww, wh);
};

Scene_Phone.prototype.createScrollTextWindow = function() {
    const rect = this.scrollTextWindowRect();
    this._scrollTextWindow = new Window_ScrollText(rect);
    this.addChild(this._scrollTextWindow);
};

Scene_Phone.prototype.scrollTextWindowRect = function() {
    const wx = 0;
    const wy = 0;
    const ww = Graphics.boxWidth;
    const wh = Graphics.boxHeight;
    return new Rectangle(wx, wy, ww, wh);
};

Scene_Phone.prototype.createGoldWindow = function() {
    const rect = this.goldWindowRect();
    this._goldWindow = new Window_Gold(rect);
    this._goldWindow.openness = 0;
    this.addChild(this._goldWindow);
};

Scene_Phone.prototype.goldWindowRect = function() {
    const ww = this.mainCommandWidth();
    const wh = this.calcWindowHeight(1, true);
    const wx = Graphics.boxWidth - ww;
    const wy = 0;
    return new Rectangle(wx, wy, ww, wh);
};

Scene_Phone.prototype.createNameBoxWindow = function() {
    this._nameBoxWindow = new Window_NameBox();
    this.addChild(this._nameBoxWindow);
};

Scene_Phone.prototype.createChoiceListWindow = function() {
    this._choiceListWindow = new Window_ChoiceList();
    this.addChild(this._choiceListWindow);
};

Scene_Phone.prototype.createNumberInputWindow = function() {
    this._numberInputWindow = new Window_NumberInput();
    this.addChild(this._numberInputWindow);
};

Scene_Phone.prototype.createEventItemWindow = function() {
    const rect = this.eventItemWindowRect();
    this._eventItemWindow = new Window_EventItem(rect);
    this.addChild(this._eventItemWindow);
};

Scene_Phone.prototype.eventItemWindowRect = function() {
    const wx = 0;
    const wy = 0;
    const ww = Graphics.boxWidth;
    const wh = this.calcWindowHeight(4, true);
    return new Rectangle(wx, wy, ww, wh);
};

Scene_Phone.prototype.associateWindows = function() {
    const messageWindow = this._messageWindow;
    messageWindow.setGoldWindow(this._goldWindow);
    messageWindow.setNameBoxWindow(this._nameBoxWindow);
    messageWindow.setChoiceListWindow(this._choiceListWindow);
    messageWindow.setNumberInputWindow(this._numberInputWindow);
    messageWindow.setEventItemWindow(this._eventItemWindow);
    this._nameBoxWindow.setMessageWindow(messageWindow);
    this._choiceListWindow.setMessageWindow(messageWindow);
    this._numberInputWindow.setMessageWindow(messageWindow);
    this._eventItemWindow.setMessageWindow(messageWindow);
};
//end scene interpreter patch

Scene_Phone.prototype.waitForInterpreter = function(){
	this.update();
};
Scene_Phone.prototype.onPhoneMenuCancel = function(){
  SoundManager.playCancel();
  $gameTemp._phoneLastIcon = null;
  $gameTemp._phoneLastPage = null;
  SceneManager.pop(); 
};
Scene_Phone.prototype.onPhoneMenuOk = function(){
	$gameTemp._phoneLastIcon = this._phoneCommand._index;
	$gameTemp._phoneLastPage = this._phoneCommand._page;
	if(this.Parameters.phoneScript[this._phoneCommand.currentData()["name"]]) var chk = this.Parameters.phoneScript[this._phoneCommand.currentData()["name"]] || null;
	if(!chk) alert("EST_PHONE_MENU_MZ\nThis command script did not have script");
	if(!chk) this._phoneCommand.activate();
	if(chk) eval(chk);
	this._phoneNeedRedraw = true;
	this._phoneCommand.needRedraw = true;
};

//creating the Window_PhoneCommand + include all EST.PhoneMenu parameter and function
Window_PhoneCommand = function() {
    this.initialize(...arguments);
};
Window_PhoneCommand.prototype = Object.create(Window_MenuCommand.prototype);
Window_PhoneCommand.prototype.constructor = Window_PhoneCommand;
Window_PhoneCommand.prototype = Object.assign(Window_PhoneCommand.prototype, EST.PhoneMenu);

//try new approach Window_PhoneCommand
Window_PhoneCommand.prototype.initialize = function(rect) {
    Window_MenuCommand.prototype.initialize.call(this, rect);
    this._page = 0;
    this.opacity = 0;
    this._canRepeat = false;
    this.selectLast();
};

Window_PhoneCommand.prototype.makeCommandList = function() {
    this.addMainCommands();
};

Window_PhoneCommand.prototype.addMainCommands = function() {
  var enabled = true;
    for (cmd of $gameSystem.phoneMenu(this._page)){
      try{
        enabled = this.Parameters.phoneEnable[cmd] == undefined ? true : eval(this.Parameters.phoneEnable[cmd]);
      }catch(e){
        enabled = true;
      };
      this.addCommand(cmd, cmd, enabled);
    };
};

Window_PhoneCommand.prototype.maxCols = function() {
	return this.Parameters.phoneMaxCols || 4;
};

Window_PhoneCommand.prototype.itemHeight = function() {
	return this.Parameters.phoneItemHeight;
};

Window_PhoneCommand.prototype.itemPadding = function() {
	return 0;
};

Window_PhoneCommand.prototype.rowSpacing = function() {
	return 10;
};

Window_PhoneCommand.prototype.drawBackgroundRect = function(rect) {
	Window_MenuCommand.prototype.drawBackgroundRect.call(this, rect);
	this.contentsBack.paintOpacity = 0;
};

Window_PhoneCommand.prototype.drawItem = function(index) {
    const rect = this.itemLineRect(index);
    const align = this.itemTextAlign();
    this.resetTextColor();
    this.changePaintOpacity(this.isCommandEnabled(index));
    this.drawIcons(this.commandName(index), rect, align, index);
};

Window_PhoneCommand.prototype.drawIcons = function(cmd, rect, align, index) {
	// swapping image if selected
	var suff = "";
	if(this.Parameters.phoneDynamicIcon && this._index == index) suff = "_select";
	//centering icon
	var cx = 0;
	if(this.Parameters.phoneCenterIcon) cx = (this.itemWidth() - (this._padding * 2 / this.maxCols()) - this.Parameters.phoneImgWidth)/2;
	//load bitmap
  const bitmap = ImageManager.loadBitmap("img/"+this.Parameters.folderPath,cmd + suff);
  $gameTemp._storingPhoneWindow = this;
  bitmap.addLoadListener(function(){
   	if ($gameTemp._storingPhoneWindow) $gameTemp._storingPhoneWindow._phoneNeedRedraw = true;
  });
  const pw = rect.width;
  const ph = rect.height;
  const sw = pw;
  const sh = this.itemHeight();
  const dx = rect.x; 
  const dy = 0 + (sh*Math.floor(index/this.maxCols()));
  const sx = 0 - cx;
  const sy = -4;

  this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy);
  if(this.Parameters.phoneDrawTitles){
    this.contents.fontSize = 12;
    this.contents.drawText(cmd, sx + dx, sy + dy + 46, pw, this.lineHeight(), align);
    this.resetFontSettings();
	};
};

Window_PhoneCommand.prototype.refreshBitmapLoaded = function(obj) {
    obj._phoneNeedRedraw;
};

//patch for scene interpreter
Window_PhoneCommand.prototype.processCursorMove = function(){
  if (!SceneManager.isPreviousScene(Scene_Title) && $gameMap._interpreter.isRunning()) return this.activate();
  Window_MenuCommand.prototype.processCursorMove.call(this);
};
Window_PhoneCommand.prototype.processHandling = function(){
  if (!SceneManager.isPreviousScene(Scene_Title) && $gameMap._interpreter.isRunning()) return this.activate();
  Window_MenuCommand.prototype.processHandling.call(this);
};
Window_PhoneCommand.prototype.processTouch = function(){
  if (!SceneManager.isPreviousScene(Scene_Title) && $gameMap._interpreter.isRunning()) return this.activate();
  Window_MenuCommand.prototype.processTouch.call(this);
};
//end patch for scene interpreter

Window_PhoneCommand.prototype._updateCursor = function() {
	Window_MenuCommand.prototype._updateCursor.call(this);
	if (this.Parameters.phoneHideCursor)this._cursorSprite.visible = false;
};

Window_PhoneCommand.prototype.areMainCommandsEnabled = function() {
    return $gameParty.exists();
};

Window_PhoneCommand.prototype.isFormationEnabled = function() {
    return $gameParty.size() >= 2 && $gameSystem.isFormationEnabled();
};

Window_PhoneCommand.prototype.isOptionsEnabled = function() {
    return true;
};

Window_PhoneCommand.prototype.isSaveEnabled = function() {
    return !DataManager.isEventTest() && $gameSystem.isSaveEnabled();
};

Window_PhoneCommand.prototype.isGameEndEnabled = function() {
    return true;
};

Window_PhoneCommand.prototype.processOk = function() {
    if (this.constructor == Window_PhoneCommand) $gameTemp._phoneLastIcon = this._index;
    Window_MenuCommand.prototype.processOk.call(this);
};

Window_PhoneCommand.prototype.selectLast = function() {
    $gameTemp._phoneLastIcon ? this.select($gameTemp._phoneLastIcon) : this.select(0);
};

Window_PhoneCommand.prototype.cursorPagedown = function(cDown) {
	if (this._page + 1 == $gameSystem.phonePageMax()) return;
    this._page = Math.min($gameSystem.phonePageMax()-1, this._page + 1);
	if(cDown) {
	 this.refresh(); 
	 var chk = this._index - this.Parameters.phoneMaxCols * (this.Parameters.phoneMaxRows - 1);
	 this.select(Math.min(0 + chk, this._list.length - 1));
	 return;
	};
	this.select(0);
    this.refresh();
};

Window_PhoneCommand.prototype.cursorPageup = function(cUp) {
    this._page = Math.max(0, this._page - 1);
    if(cUp){
      this.refresh()
	  this.select(this._list.length - this.Parameters.phoneMaxCols + this._index);
	  return;
    }; 
	this.select(0);
    this.refresh();
};

Window_PhoneCommand.prototype.cursorUp = function() {
  var chk = this.Parameters.phoneMaxCols - 1;
  if (this._index <= chk & this._page !== 0) return this.cursorPageup(true);
  Window_MenuCommand.prototype.cursorUp.call(this);	
  this.refresh();
};

Window_PhoneCommand.prototype.cursorLeft = function() {
  Window_MenuCommand.prototype.cursorLeft.call(this);	
  this.refresh();
};

Window_PhoneCommand.prototype.cursorRight = function() {
  Window_MenuCommand.prototype.cursorRight.call(this);	
  this.refresh();
};

Window_PhoneCommand.prototype.cursorDown = function() {
  var chk = this.Parameters.phoneMaxCols * (this.Parameters.phoneMaxRows - 1);
  if(this._index >= chk) return this.cursorPagedown(true);
  Window_MenuCommand.prototype.cursorDown.call(this);	
  this.refresh();
};

Window_PhoneCommand.prototype.onTouchSelect = function(trigger) {
  Window_MenuCommand.prototype.onTouchSelect.call(this,trigger);	
  this.refresh();
};

Window_PhoneCommand.prototype.processWheelScroll = function() {
    if (this.isWheelScrollEnabled() && this.isTouchedInsideFrame()) {
        const threshold = 20;
        if (TouchInput.wheelY >= threshold) {
            this.cursorPagedown();
        }
        if (TouchInput.wheelY <= -threshold) {
            this.cursorPageup();
        }
    }
};

// method to redirect to rescue image if included inside the 
$.ImageManager_throwLoadError = ImageManager.throwLoadError;
ImageManager.throwLoadError = function(bitmap) {
	var alertMethod = EST.PhoneMenu.Parameters.alertMethod;
	var regex = new RegExp("img\/"+ EST.PhoneMenu.Parameters.folderPath +"(.*)\.png");
	var urlfilename = bitmap.url.match(regex);
  if(urlfilename) urlfilename[1] = urlfilename[1].replace(/\%20/g," ");
	if(urlfilename && EST.PhoneMenu.Parameters.iconTitles.includes(urlfilename[1])){
	  var rescueMessage = "Missing Icon Files :"+urlfilename[1]+".png\nThis will be rescued with rescue image";
	  bitmap._url = "img\/"+ EST.PhoneMenu.Parameters.folderPath + EST.PhoneMenu.Parameters.rescueIcon +"\.png";
	  bitmap._loadingState = "rescued";
	  if (alertMethod == "console.log()"){
	  	console.log(rescueMessage)
	  	return bitmap.retry(bitmap);
	  };
	  throw ["LoadError", rescueMessage, bitmap.retry.bind(bitmap)];
	}; 
	if(bitmap.url.match("_select")){
	  var rescueMessage = "Missing Icon Select Files :"+urlfilename[1]+".png\nThis will be rescued with non select Icon";
	  bitmap._url = bitmap._url.replace("_select","");
	  if (alertMethod == "console.log()"){
	  	console.log(rescueMessage)
	  	return bitmap.retry(bitmap);
	  };
	  throw ["LoadError", rescueMessage, bitmap.retry.bind(bitmap)];				
	}
	if(urlfilename){
	  var rescueMessage = "Missing Background Files Actor_"+urlfilename[1]+".png\nThis will be rescued with rescue image";
	  bitmap._url = "img\/"+ EST.PhoneMenu.Parameters.folderPath +EST.PhoneMenu.Parameters.rescueBG+"\.png";
	  bitmap._loadingState = "rescued";
	  if (alertMethod == "console.log()"){
	  	console.log(rescueMessage)
	  	return bitmap.retry(bitmap);
	  };
	  throw ["LoadError", rescueMessage, bitmap.retry.bind(bitmap)];		
	};
	$.ImageManager_throwLoadError.call(this,bitmap);
};

//hijack menu
$.SceneManager_push_hijackMenu = SceneManager.push;
SceneManager.push = function(sceneClass) {
  if ($gameSystem.phoneReplaceMenu && sceneClass == Scene_Menu) sceneClass = Scene_Phone;
  $.SceneManager_push_hijackMenu.call(this,sceneClass);
};

// creating superclass for phone addon
//creating the scene addons base
Scene_PhoneAddonBase = function() {
    this.initialize(...arguments);
};
Scene_PhoneAddonBase.prototype = Object.create(Scene_Phone.prototype);
Scene_PhoneAddonBase.prototype.constructor = Scene_PhoneAddonBase;
Scene_PhoneAddonBase.prototype.createContents = function(){
};

//creating the window addon base
Window_PhoneAddonBase = function() {
    this.initialize(...arguments);
};
Window_PhoneAddonBase.prototype = Object.create(Window_PhoneCommand.prototype);
Window_PhoneAddonBase.prototype.constructor = Window_PhoneAddonBase;

Window_PhoneAddonBase.prototype.updateHelp = function() {
this.setHelpWindowItem(this.item());
};
Window_PhoneAddonBase.prototype.selectLast = function() {
this.select(0);
};
Window_PhoneAddonBase.prototype.maxCols = function(index){
return 1;
};
Window_PhoneAddonBase.prototype._updateCursor = function() {
  Window_MenuCommand.prototype._updateCursor.call(this);
};
Window_PhoneAddonBase.prototype.cursorLeft = function() {
  Window_MenuCommand.prototype.cursorLeft.call(this);	
};
Window_PhoneAddonBase.prototype.cursorRight = function() {
  Window_MenuCommand.prototype.cursorRight.call(this);	
};
Window_PhoneAddonBase.prototype.cursorUp = function() {
  Window_MenuCommand.prototype.cursorUp.call(this);	
};
Window_PhoneAddonBase.prototype.cursorDown = function() {
  Window_MenuCommand.prototype.cursorDown.call(this);	
};
Window_PhoneAddonBase.prototype.cursorPagedown = function() {};
Window_PhoneAddonBase.prototype.cursorPageup = function() {};
Window_PhoneAddonBase.prototype.makeCommandList = function(){};
Window_PhoneAddonBase.prototype.commandName = function(index){};
Window_PhoneAddonBase.prototype.drawItem = function(index){};

})(EST.PhoneMenu);