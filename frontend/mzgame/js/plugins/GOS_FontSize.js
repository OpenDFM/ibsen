/*:
* @plugindesc Change font sizing (make it 'x' smaller and 'y' bigger)
* @author GamesOfShadows
* @help
* With this plugin (for RPGmaker MV & MZ) you can change the font sizing.
* So you can make your text 'x' smaller and 'y' bigger using \} and \{.
* 
* - I'm using a different font, so it looked weird when I used '\}' or '\{'.
* Also I didn't liked the steps (I think they are way to big).
* 
* - To change the default font size in MZ, go to
* "Database" -> "System 2" and change the "Font size".
* 
* ------------------------------------------------------------
* 
* - Plugin-Commands (MV) - Change the settings later ingame:
* 
* makeFontBigger x
* 
* makeFontSmaller x
* 
* maxFontSize x
* 
* minFontSize x
* 
* defaultFontSize x
*
* resetFontSize
* 
* (replace x with a number)
* 
* Example: makeFontBigger 5
* 
* - Plugin-Commands (MZ) - Change the settings later ingame:
* Same as MV, but without entering the commands.
* You have to select them and just input the values.
* 
* ------------------------------------------------------------
* 
* PS: I'm still "beginner" to something "advanced" regarding JS.
* If there are problems with a plugin,
* I will probably NOT be able to solve them!
* 
* ------------------------------------------------------------
* 
* Version: 1.0
* 
* - You can do everything you want with this plugin
* - You can use it commercially
* - You DON'T need to credit me
* 
* It's just a short & simple plugin. ^^
* 
* @target MV
* 
* @param makeFontBigger
* @text Make font bigger
* @desc Size / value by which to increase the font size (\{)
* @type number
* @default 2
* 
* @param makeFontSmaller
* @text Make font smaller
* @desc Size / value by which to decrease the font size (\})
* @type number
* @default 2
* 
* @param maxFontSize
* @text Max. font size
* @desc Max. size of the font (\{)
* @type number
* @default 100
* 
* @param minFontSize
* @text Min. font size
* @desc Min. size of the font (\})
* @type number
* @default 8
* 
* @param defaultFontSize
* @text Default font size (MV only)
* @desc Set the default font size (MV only)!
* For MZ: "Database" -> "System 2", edit "Font size"
* @type number
* @default 28
* 
* @target MZ
* 
* @command change_FontSizeSettings
* @text Change Plugin-Settings
* @desc If you change the font you can use this to adjust the settings
* 
* @arg change_makeFontBigger
* @text makeFontBigger
* @desc Input a Number
* @type number
* @default 2
* 
* @arg change_makeFontSmaller
* @text makeFontSmaller
* @desc Input a Number
* @type number
* @default 2
* 
* @arg change_maxFontSize
* @text maxFontSize
* @desc Input a Number
* @type number
* @default 100
* 
* @arg change_minFontSize
* @text minFontSize
* @desc Input a Number
* @type number
* @default 8
* 
* @arg change_defaultFontSize
* @text defaultFontSize
* @desc Input a Number
* @type number
* @default 26
* 
* @command reset_defaultFontSize
* @text Reset default font size
* @desc If you want to use the default font size you set in the database / "system 2"
*/

(() => {
	const pluginName = "GOS_FontSize";
	var GOS_makeFontBigger = Number(PluginManager.parameters(pluginName).makeFontBigger);
	var GOS_makeFontSmaller = Number(PluginManager.parameters(pluginName).makeFontSmaller);
	var GOS_maxFontSize = Number(PluginManager.parameters(pluginName).maxFontSize);
	var GOS_minFontSize = Number(PluginManager.parameters(pluginName).minFontSize);
	var GOS_defaultFontSize = Number(PluginManager.parameters(pluginName).defaultFontSize);
	
	Window_Base.prototype.makeFontBigger = function() {
		if (this.contents.fontSize <= GOS_maxFontSize) {
			this.contents.fontSize += GOS_makeFontBigger;
		};
	};

	Window_Base.prototype.makeFontSmaller = function() {
		if (this.contents.fontSize >= GOS_minFontSize) {
			this.contents.fontSize -= GOS_makeFontSmaller;
		};
	};

	if (Utils.RPGMAKER_NAME == "MV") {
		Window_Base.prototype.standardFontSize = function() {
			return GOS_defaultFontSize;
		};
	};

//Plugin Commands (MZ)
	if (Utils.RPGMAKER_NAME == "MZ") {
		PluginManager.registerCommand(pluginName, "change_FontSizeSettings", args => {
			GOS_makeFontBigger = Number(args.change_makeFontBigger);
			GOS_makeFontSmaller = Number(args.change_makeFontSmaller);
			GOS_maxFontSize = Number(args.change_maxFontSize);
			GOS_minFontSize = Number(args.change_minFontSize);
			GOS_defaultFontSize = Number(args.change_defaultFontSize);
			
			Window_Base.prototype.makeFontBigger = function() {
				if (this.contents.fontSize <= GOS_maxFontSize) {
					this.contents.fontSize += GOS_makeFontBigger;
				};
			};
			
			Window_Base.prototype.makeFontSmaller = function() {
				if (this.contents.fontSize >= GOS_minFontSize) {
					this.contents.fontSize -= GOS_makeFontSmaller;
				};
			};
			
			Game_System.prototype.mainFontSize = function() {
				return GOS_defaultFontSize;
			};
		});
		PluginManager.registerCommand(pluginName, "reset_defaultFontSize", args => {
			GOS_defaultFontSize = Number($dataSystem.advanced.fontSize);
			Game_System.prototype.mainFontSize = function() {
				return $dataSystem.advanced.fontSize;
			};
		});
	};

//Plugin Commands (MV)
	if (Utils.RPGMAKER_NAME == "MV") {
		var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
		Game_Interpreter.prototype.pluginCommand = function(command, args) {
			_Game_Interpreter_pluginCommand.call(this, command, args);
			
			if (command === 'makeFontBigger') {
				if (args.length >= 1) {
					GOS_makeFontBigger = Number(args[0]);
					Window_Base.prototype.makeFontBigger = function() {
						if (this.contents.fontSize <= GOS_maxFontSize) {
							this.contents.fontSize += GOS_makeFontBigger;
						};
					};
				};
			} else if (command === 'makeFontSmaller') {
				if (args.length >= 1) {
					GOS_makeFontSmaller = Number(args[0]);
					Window_Base.prototype.makeFontSmaller = function() {
						if (this.contents.fontSize >= GOS_minFontSize) {
							this.contents.fontSize -= GOS_makeFontSmaller;
						};
					};
				};
			} else if (command === 'maxFontSize') {
				if (args.length >= 1) {
					GOS_maxFontSize = Number(args[0]);
					Window_Base.prototype.makeFontBigger = function() {
						if (this.contents.fontSize <= GOS_maxFontSize) {
							this.contents.fontSize += GOS_makeFontBigger;
						};
					};
				};
			} else if (command === 'minFontSize') {
				if (args.length >= 1) {
					GOS_minFontSize = Number(args[0]);
					Window_Base.prototype.makeFontSmaller = function() {
						if (this.contents.fontSize >= GOS_minFontSize) {
							this.contents.fontSize -= GOS_makeFontSmaller;
						};
					};
				};
			} else if (command === 'defaultFontSize') {
				if (args.length >= 1) {
					GOS_defaultFontSize = Number(args[0]);
					Window_Base.prototype.standardFontSize = function() {
						return GOS_defaultFontSize;
					};
				};
			} else if (command === 'resetFontSize') {
				GOS_defaultFontSize = 28;
				Window_Base.prototype.standardFontSize = function() {
					return 28;
				};
			};
		};
	};
})();