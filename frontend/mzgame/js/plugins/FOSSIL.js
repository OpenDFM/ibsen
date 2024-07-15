/*:
 * @plugindesc Fossil is an interoperability layer for RMMZ, designed to make MV plugins work in MZ. 
 * So far, we support over 300 plugins.  You can help!
 * @author FOSSIL TEAM
 * @target MZ  

 * @command useOldPlugin
 * @text 'Enter MV plugin commands'
 * @desc 'They're back! Enter them the same way you used to.'

 * @arg OldPluginCommand
 * @text
 * @ desc Identical to MV's commands.

 * @help FOSSIL goes at the start, before all other plugins.

Fixing Old Software / Special Interoperability Layer (FOSSIL) Version 1.0.12

FOSSIL is an interoperability plugin.  
The purpose of this layer is to expand the use and usefulness of RPG MAKER 
MV plugins, by allowing them to work in RPG MAKER MZ projects.

So far we have interoperability with these MV plugins.  They seem to run 
with FOSSIL the same way they did in stock MV, free from all but a few 
little aesthetic glitches.  

To invoke old plugin commands, either use the built in OldPluginCommand 
plugin command, or put oldCommand('whateverthecommandwas') in a script.

///////////////////////////////////////////////////////////////////////
==Fully Functional==  
(Alphabetical by plugin maker, then roughly by plugin order)
///////////////////////////////////////////////////////////////////////
-ALOE_ConditionalChoices

-Astfgl's QTEWindow
-Astfgl's QTEAddonSPW

-DreamX_AutoEquipOnEmpty
-DreamX_BattleSE
-DreamX_BattlerDeathEval
-DreamX_CaptureEnemies
-DreamX_ChangeSound
-DreamX_ChoiceHelp
-DreamX_Close
-DreamX_CollapseAnimation
-DreamX_CollisionExceptions
-DreamX_ExtendedActionButton
-DreamX_EXT_EventChasePlayer
-DreamX_EnemyStateOverlays
-DreamX_FollowerOptions
-DreamX_GoldVariance
-DreamX_RandomPrefixesSuffixes
-DreamX_TouchSurpriseBattles

*FROG_Core
-FROG_Magic
-FROG_RaceCore
-FROG_SkillTypeDupeFix
*FROG_TalentCore
-FROG_TriggerDistance

-GALV_Questlog
-GALV_TimedMessagePopups
-GALV_RollCredits
-GALV_CharacterFrames
-GALV_CFStepSE
-GALV_CharacterAnimations
-GALV_DiagonalMovement
-GALV_PrizeWheel
-GALV_VariableBar

-Gimmer_MirrorMirrorOnTheWall
-Gimmer_WibblyWobbly

-HIME_BattleWeather
-HIME_GuestFollowers Note: plugin commands ONLY work with oldCommand()
-HIME_MenuMusic Note: plugin commands ONLY work with oldCommand()
-HIME_HiddenShopGoods
-HIME_ScopeCore
-HIME_ScopeChangeRules
-HIME_EquipSlotsCore
-HIME_EnemyReinforcements
-HIME_RandomEncounterEvents
-HIME_EnemyLevels
-HIME_EnemyClasses
-HIME_EnemyEquips
-HIME_SideviewActorEnemies
-HIME_MoreEnemyDrops
-HIME_FormulaEffects

-Irina_AutoMessageColor

-Jay_BattleVAManager
-Jay_FocusedSoundEffects

-JK_MailSystem

-KMS_SpiralEncount
-KMS_WaterMapEffect
-KMS_Minimap

-KNT_Editor note: if icons don't load, open&close the status menu. 
//No need to edit core files here, Fossil handles loading pixi-filters

-MechPen_FollowerSpace

-mjshi's RuneSkills
-mjshi's ChainCommand QTE plugin
-mjshi's MatchCardLottery Minigame
-mjshi's StatPolygon
-mjshi's Wuxing Minigame

-MOG_ActionName
-MOG_BattleResult
-MOG_BossHp
-MOG_ComboCounter
-MOG_CharacterMotion
-MOG_DizzyEffect
-MOG_EventIndicators
-MOG_EventText
-MOG_TreasurePopup
-MOG_Weather_EX
-MOG_CharPoses
*MOG_ChronoEngine
-MOG_ChronoATBHud
-MOG_ChronoEnemyHp
-MOG_ChronoToolHud
-MOG_ChronoCT
-MOG_Compass
-MOG_EventSensor
-MOG_PickupThrow
-MOG_TimeSystem
-MOG_TimeSystemHud
-MOG_ActorHud
-MOG_BattleHud
-MOG_GoldHud
-MOG_VariableHud
-MOG_CharParticles
-MOG_MenuParticles
-MOG_CharShatterEffect
-MOG_DestinationPointer
-MOG_MenuCursor

-Olivia_AntiPlayerStress

-Pv_BattleCommandCustomizer
-Pv_ParticleCore (just add Pixi-particles to library folder, FOSSIL handles import)
-Pv_SkillCategories

-Reval's Animated Enemies

-SE_Core
-SE_EventChance
-SE_DashStamina
-SE_Minimap

-Shaz_TileChanger
-Shaz_SaveEventPosition

-SRD_SummonCore
-SRD_ReplaceSummons
-SRD_ShakingText 
-SRD_ActorSelect

-STV_BeastBook
-STV_MonsterCards

-UNCO_AmmunitionSystem
-UNCO_X_Crafting

*VE_Basic Module
-VE_ActionConditions
-VE_ActionStates
-VE_ActionStrengthen
-VE_ArrowCursor
-VE_BattleAdvantage
-VE_CharacterFrames
-VE_ChargeActions
-VE_DirectCommands
-VE_CommandReplace
-VE_CooperationSkills
-VE_CounterActions
-VE_CriticalHitEffects
-VE_DiagonalMovement
-VE_EquipSet
-VE_EnemySkill
-VE_FollowUpSkills
-VE_Masters
-VE_MateriaSystem
-VE_PassiveStates 
-VE_SpritesInWindows

-VLUE Game Time MV 1.1c
-VLUE questsystem

*WAY_Core
-WAY_StorageSystem
-WAY_OptionsMenuCustomActions
-WAY_VerticalScreenShake
-WAY_CustomOnEquipEval
-WAY_CustomOnDeathEval
-WAY_Achievements
-WAY_YEP_TurnOrderDisplay

-YEP_AdvancedSwVar
-YEP_BaseParamControl
-YEP_ClassBaseParam
*YEP_ClassChangeCore
-YEP_X_Subclass
-YEP_ExtraParamFormula
*YEP_MainMenuManager
*YEP_MessageCore 
-YEP_X_ExtMesPack1 
-YEP_X_ExtMesPack2 
-YEP_MessageEvalText 
-YEP_X_MessageMacros1
-YEP_SelfSwVar
-YEP_SpecialParamFormula
*YEP_SaveCore
-YEP_X_NewGamePlus
*YEP_BattleEngineCore (Note: Battle system must be 'turn-based' in System 1)
-YEP_X_ActionSeqPack1
-YEP_X_ActionSeqPack2
-YEP_X_ActionSeqPack3
-YEP_X_AnimatedSVEnemies
*YEP_X_BattleSysATB note: now works Moghunter's MOG_ATB_Gauge (MZ ver)
-YEP_X_VisualATBGauge
*YEP_X_BattleSysCTB note: now works Moghunter's MOG_ATB_Gauge (MZ ver)
*YEP_X_BattleSysSTB
-YEP_X_CounterControl
-YEP_X_InBattleStatus
-YEP_X_TurnOrderDisplay
-YEP_X_VisualHpGauge
-YEP_X_WeakEnemyPoses
-YEP_Z_ActionBeginEnd
-YEP_AbsorptionBarrier
*YEP_BattleAICore
-YEP_X_ActorAutoBattleAI
-YEP_BattleBGMControl
-YEP_BattleSelectCursor
*YEP_BuffsStatesCore
-YEP_X_ExtDoT
-YEP_X_StateCategories
-YEP_X_VisualStateFX
-YEP_Z_StateProtection
*YEP_DamageCore
-YEP_X_ArmorScaling
-YEP_X_CriticalControl
-YEP_Z_CriticalSway
*YEP_ElementCore
-YEP_ExtraEnemyDrops
-YEP_ForceAdvantage
-YEP_HitAccuracy
-YEP_HitDamageSounds
-YEP_LevelUpGrowthEffects
-YEP_LifeSteal
-YEP_OverkillBonus
*YEP_TargetCore (Tell me if you have odd interactions with action sequences)
-YEP_X_AreaOfEffect
-YEP_X_SelectionControl	
-YEP_Taunt
-YEP_VictoryAftermath
-YEP_X_AftermathLevelUp
-YEP_WeatherInBattle
*YEP_ItemCore
-YEP_X_AttachAugments
-YEP_X_ItemDisassemble
-YEP_X_ItemDiscard
-YEP_X_ItemCategories
-YEP_X_ItemPictureImg
-YEP_X_ItemRename
-YEP_X_ItemRequirements
-YEP_X_ItemUpgradeSlots
-YEP_ItemSynthesis
*YEP_ShopMenuCore
-YEP_X_CondShopPrices
-YEP_HideShowItems
-YEP_X_MoreCurrencies
*YEP_SkillCore
-YEP_X_LimitedSkillUses
-YEP_MultiTypeSkills
-YEP_PartyLimitGauge
-YEP_X_SkillCooldowns
-YEP_X_SkillCostItems
-YEP_Z_SkillRewards
-YEP_InstantCast
-YEP_SkillLearnSystem 
-YEP_SkillMasteryLevels
*YEP_EquipCore
-YEP_X_ChangeBattleEquip
-YEP_X_EquipCustomize
-YEP_EquipRequirements
-YEP_WeaponAnimation
-YEP_WeaponUnleash
*YEP_StatusMenuCore
-YEP_X_ActorVariables
-YEP_X_BattleStatistics
-YEP_X_MoreStatusPages
-YEP_X_ProfileStatusPage
*YEP_AutoPassiveStates
-YEP_X_PassiveAuras
-YEP_Z_PassiveCases
*YEP_EnemyLevels
-YEP_X_DifficultySlider
-YEP_X_EnemyBaseParam
-YEP_X_MapEnemyLevels
-YEP_EnhancedTP
-YEP_X_MoreTPModes
*YEP Equip Battle Skills
-YEP_X_EBSAllowedTypes
-YEP_X_EquipSkillTiers
-YEP_JobPoints
-YEP_PartySystem
-YEP_X_ActorPartySwitch
-YEP_RepelLureEncounters
-YEP_RowFormation
-YEP_StatAllocation
-YEP_StealSnatch
*YEP_MoveRouteCore
-YEP_X_ExtMovePack1
-YEP_FloorDamage
-YEP_QuestJournal
-YEP_X_MapQuestWindow
*YEP_OptionsCore
-YEP_AnimateTilesOption
-YEP_EventChasePlayer
-YEP_X_EventChaseStealth
-YEP_EventClickTrigger
-YEP_EventCopier
-YEP_EventEncounterAid
-YEP_EventHitboxResize
-YEP_EventMiniLabel
-YEP_EventMorpher
-YEP_EventProximityActivate
-YEP_EventRegionTrigger
-YEP_EventSpawner
-YEP_EventSpriteOffset
-YEP_EventStepAniOpt
-YEP_EventTimerControl
-YEP_IconsOnEvents
-YEP_BaseTroopEvents
-YEP_ButtonCommonEvents
*YEP_CommonEventMenu
-YEP_X_CEMSetupPack1
-YEP_X_CEMSetupPack2
-YEP_CreditsPage
-YEP_DashToggle
-YEP_DynamicTitleImages
-YEP_ExternalLinks
-YEP_FootstepSounds
-YEP_GabWindow
*YEP_GridFreeDoodads
-YEP_X_ExtDoodadPack1
-YEP_HelpFileAccess
-YEP_IconBalloons
-YEP_KeyNameEntry
-YEP_KeyNumberInput
-YEP_KeyboardConfig
-YEP_MainMenuVar
-YEP_MapGoldWindow
-YEP_MapSelectEquip
-YEP_MapSelectSkill
-YEP_MapStatusWindow
-YEP_MusicMenu
-YEP_PictureSpriteSheets
-YEP_PatchNotes
-YEP_PictureCommonEvents
-YEP_RegionEvents
-YEP_RegionRestrictions
-YEP_X_VehicleRestrictions
-YEP_SaveEventLocations
-YEP_ScaleSprites
-YEP_SlipperyTiles
-YEP_SmartJump
-YEP_StopMapMovement
-YEP_SwapEnemies

///////////////////////////////////////////////////////////////////////
==Almost Functional with UI issues==
///////////////////////////////////////////////////////////////////////
-YEP_X_ItemDurability (there's no obvious spot to show the durability stat)

///////////////////////////////////////////////////////////////////////
==Special Cases==
///////////////////////////////////////////////////////////////////////
-none ATM.

///////////////////////////////////////////////////////////////////////
Mobile and Web Deployment Note:
///////////////////////////////////////////////////////////////////////
FOSSIL creates a 'FOSSILindex.html' file at runtime, and switches to use it
instead of the original index.html. This works seamlessly in both playtest
and deploy on my computer. However, it is possible this might not be
possible in web or mobile environments (I can't test it). However, if you
just rename an existing FOSSILindex.html to index.html it'll bypass the
html creation step and proceed onwards. 

If you want to edit the index.html yourself directly, just replace

'main.js'

with

'plugin/FOSSIL.js'

Basically I replace 'main.js' in index.html with 'FOSSIL.js' so I can 
control when plugins are added.

///////////////////////////////////////////////////////////////////////
Terms of use:
///////////////////////////////////////////////////////////////////////
All unique code in FOSSIL is licensed under a 
Creative Commons Attribution-ShareAlike 4.0 International License.  The 
remainder is taken from RPG Maker MV and RPG Maker MZ, and is covered under 
the appropriate licenses. No code from any existing plugin was used. 
Credit Restart, 'FOSSIL' or 'FOSSIL Team', and link back to the github 
or the forum thread.

In order to improve clarity, I am officially stating that the 'CC-BY-SA' 
only requires that code directly derived from FOSSIL be also put under a 
'CC-BY-SA' license.  Any other assets in your game, (such as code, art, 
et cetera) as well as your game as a whole are *not* considered to be 
'derivative works' for this purpose.

*/
 
 //instead of mucking around with plugin order, this will inject the code to precisely where it needs to go
//...hopefully.
var Fossil =Fossil || {}
Fossil.version='1.0.12'

//outer block testing scriptUrls exists so Fossil can act as a replacement for main.js
//don't futz with it
var Imported = Imported || {};
Imported.Fossil=true;


//These are fixes that go before any and all plugins.  
//Things like re-adding MV functions that do not exist in MZ
fossilStaticFixes = function(){

	Fossil.isPlaytest=Utils.isOptionValid('test');
	Fossil.chattyOutput=Fossil.isPlaytest;
	//if Fossil.chattyOutput is on, every patch will give a console.log message
	//telling you it has executed.
	//this is useful because the traceback on the console.log gives you the 
	//VM location that it's being run in in chrome.
	//turning this off means that FOSSIL won't say anything.
	if(Fossil.chattyOutput)
	{
		console.log('Static PreFixes are here');
	}

	Fossil.log=function(inputText){
		if(Fossil.chattyOutput)
		{
			console.log.call(this,inputText)
		}
	}


	//custom plugin command for compatibility
	 
	oldCommand = function (oldPluginCommand)
	{
		//command356 is still in, just depreciated.  Use that code to invoke.
		const args = oldPluginCommand.split(" ");
		const command = args.shift();
		
		//use the game map one if it exists.
		if($gameMap._interpreter)
		{
			Fossil.Interpreter=$gameMap._interpreter
		}
		
		if(!Fossil.Interpreter)
		{
			//we need to have this be persistent since sometimes people put stuff into the interpreter.
			Fossil.Interpreter = new Game_Interpreter()
		}
		//initial params (unused in mz).
		Fossil.Interpreter._params=[]
		//apparently some MV people like to just read the whole parameter list raw, so add it back.
		Fossil.Interpreter._params[0]=oldPluginCommand.trim();
		Fossil.Interpreter.pluginCommand(command, args);
		return true;
		
	}

	PluginManager.registerCommand('FOSSIL', 'useOldPlugin' , args => {
		const oldPluginCommand = String(args.OldPluginCommand );
		oldCommand(oldPluginCommand)
	});
	 
	 
	////////////////////////////////////
	// Generic Functions and Properties That MV Plugins Want
	////////////////////////////////////
	//set up our real rpgmaker version.
	Utils.MZ_VERSION= Utils.RPGMAKER_VERSION;
	//also set up our fake RPGMaker version
	//this will be a very high number because (A)
	//we are more advanced than any existing MV version
	//and (B) we'll have a fingerprint if someone wants to check if fossil is screwing with it
	if(Utils.MZ_VERSION<'1.2.1')
	{
		if(Fossil.chattyOutput)
		{
			console.log("Your MZ version is less than 1.2.1.  Fossil was designed for 1.2.1, and gauges and other things may break on older versions of MZ.")
		}
	}
	Utils.FAKE_VERSION='13.3.7';
	//1337 seems fake enough.
	/**
	 * Taken from MV.
	 * Test this browser support passive event feature
	 * 
	 * @static
	 * @method isSupportPassiveEvent
	 * @return {Boolean} this browser support passive event or not
	 */
	Utils.isSupportPassiveEvent = function() {
		if (typeof Utils._supportPassiveEvent === "boolean") {
			return Utils._supportPassiveEvent;
		}
		// test support passive event
		// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
		var passive = false;
		var options = Object.defineProperty({}, "passive", {
			get: function() { passive = true; }
		});
		window.addEventListener("test", null, options);
		Utils._supportPassiveEvent = passive;
		return passive;
	}
	/**
	 * taken from rpg_core
	 * Makes a CSS color string from RGB values.
	 *
	 * @static
	 * @method rgbToCssColor
	 * @param {Number} r The red value in the range (0, 255)
	 * @param {Number} g The green value in the range (0, 255)
	 * @param {Number} b The blue value in the range (0, 255)
	 * @return {String} CSS color string
	 */
	Utils.rgbToCssColor = function(r, g, b) {
		r = Math.round(r);
		g = Math.round(g);
		b = Math.round(b);
		return 'rgb(' + r + ',' + g + ',' + b + ')';
	};


	
	//if we are running MZ we have webgl.
	Graphics.hasWebGL=function(){return true}
	Graphics.isWebGL=function(){return true}
	//alias these again.
	Graphics.BLEND_NORMAL = PIXI.BLEND_MODES["NORMAL"];
	Graphics.BLEND_ADD = PIXI.BLEND_MODES["ADD"];
	Graphics.BLEND_MULTIPLY = PIXI.BLEND_MODES["MULTIPLY"];
	Graphics.BLEND_SCREEN = PIXI.BLEND_MODES["SCREEN"];

	//this looks like it just need to return an arbitrary unique positive integer
	//this is a MV function that I've just ported over.
	Utils._id = 1;
	Utils.generateRuntimeId = function(){
		return Utils._id++;
	};


	//Storagemanager now takes filenames instead of indexes.  Turn it into the proper format if it was not passed in right.
		
	StorageManager.remove = function(saveName) {
		saveName=Fossil.convertFileIdToFileNameIfItWasNotPassedInRight(saveName)
		if (this.isLocalMode()) {
			return this.removeLocalFile(saveName);
		} else {
			return this.removeForage(saveName);
		}
	};

	StorageManager.saveZip = function(saveName, zip) {
		saveName=Fossil.convertFileIdToFileNameIfItWasNotPassedInRight(saveName)
		if (this.isLocalMode()) {
			return this.saveToLocalFile(saveName, zip);
		} else {
			return this.saveToForage(saveName, zip);
		}
	};

	StorageManager.loadZip = function(saveName) {
		saveName=Fossil.convertFileIdToFileNameIfItWasNotPassedInRight(saveName)
		if (this.isLocalMode()) {
			return this.loadFromLocalFile(saveName);
		} else {
			return this.loadFromForage(saveName);
		}
	};

	StorageManager.exists = function(saveName) {
		saveName=Fossil.convertFileIdToFileNameIfItWasNotPassedInRight(saveName)
		if (this.isLocalMode()) {
			return this.localFileExists(saveName);
		} else {
			return this.forageExists(saveName);
		}
	};

	Fossil.convertFileIdToFileNameIfItWasNotPassedInRight=function(maybeFileName)
	{
		if(typeof(maybeFileName)=='string')
		{
			return maybeFileName
		}else{
			return DataManager.makeSavename(maybeFileName)
		}
	}


	//alter the 'executeCommand' function so it stores the parameters taken in as an argument into ._params
	//rmmv code expects to see a ._params, so hardcoding this here will save a ton of one-off fixes.
	Game_Interpreter.prototype.executeCommand = function() {
		const command = this.currentCommand();
		if (command) {
			if(command.parameters)
			{
				this._params = command.parameters
			}
			this._indent = command.indent;
			const methodName = "command" + command.code;
			if (typeof this[methodName] === "function") {
				if (!this[methodName](command.parameters)) {
					return false;
				}
			}
			this._index++;
		} else {
			this.terminate();
		}
		return true;
	};



	//alter our buttondata in order to include an option for no button type being provided
	//as MV doesn't provide this information.  Value is a guess but seems to work.
	Sprite_Button.prototype.buttonData = function() {
		const buttonTable = {
			undefined: {x:0 , w:2},
			cancel: { x: 0, w: 2 },
			pageup: { x: 2, w: 1 },
			pagedown: { x: 3, w: 1 },
			down: { x: 4, w: 1 },
			up: { x: 5, w: 1 },
			down2: { x: 6, w: 1 },
			up2: { x: 7, w: 1 },
			ok: { x: 8, w: 2 },
			menu: { x: 10, w: 1 }
		};
		return buttonTable[this._buttonType];
	};

	//In RMMZ state icons scale with enemies
	//in RMMV they do not
	//due to the state icons being a larger bitmap with a small visible frame, 
	//rounding errors mean that if you scale a sprite, you get an irritating 
	//frame around your 'invisible' state icon. 
	//this fixes that, and also makes state icons stop scaling with enemies in general.
	Fossil.fixSprite_Enemy_updateBitmapStateIcon =   Sprite_Enemy.prototype.updateBitmap;
	Sprite_Enemy.prototype.updateBitmap = function() 
	{
		Fossil.fixSprite_Enemy_updateBitmapStateIcon.call(this);
		if(this._enemy.stateIcons().length==0)
		{
			//the frame still shows up even when scaling is implemented, 
			//possibly due to subpixel rounding.
			//if you can't make it stay still, just make it vanish
			this.children[0].visible=false;
		}else{
			//prevent the state icon from scaling with enemies.
			this.children[0].visible=true;
			this.children[0].scale.y = 1/this.scale.y;
			this.children[0].scale.x = 1/this.scale.x;
		}
		
	}
	//we can't just grab the animation duration in RMMZ the way we do in RMMV
	//because effekseer doesn't let us just grab animation.frames.length
	//so we have this horrible hack where we check for the last sound or the end
	//of the last flash instead.
	//if you want to extend an animation, 
	//just set a flash of duration 1 frame at the end point
	Fossil.guessAnimationEnd = function (animation)
	{
		//take in either the animation ID or the animation object.
		if(typeof(animation)=='number')
		{
			animation=$dataAnimations[animation]
		}
		var flashEnd=0;
		var soundEnd =0;
		var flashList =animation.flashTimings;
		if(flashList && flashList.length)
		{
			var flashEnd = flashList[flashList.length-1].frame+flashList[flashList.length-1].duration;
		}
		var soundList = animation.soundTimings;
		//I can't tell how long a sound is so let's say 10 frames arbitrarily.
		if (soundList && soundList.length)
		{
			soundEnd = soundList[soundList.length-1].frame+10 ;
		}
		
		return Math.max(flashEnd,soundEnd,1);
	}

	//if a plugin is trying to find an animation's duration using animation.frames.length
	//direct it to our best guess.
	//we need to add a .frames.length property to each animation
	Fossil.onLoadMainDatabase=DataManager.onLoad;
	DataManager.onLoad = function(object) {
		Fossil.onLoadMainDatabase.apply(this,arguments)
		
		if($dataAnimations==object)
		{
			for (var index=1;index<$dataAnimations.length;index++)
			{
				if ($dataAnimations[index])
				{
					if(!!$dataAnimations[index].frames)
					{
						//old logic from the isMVAnimation function
						$dataAnimations[index]._isMVAnimation=true;
					}else{
						//make a fake frames array of the proper length
						$dataAnimations[index].frames=[]
						$dataAnimations[index].frames.length=Math.max(Math.ceil(Fossil.guessAnimationEnd($dataAnimations[index])),1)
						for (let frameNum=0;frameNum<$dataAnimations[index].frames.length;frameNum++)
						{
							$dataAnimations[index].frames[frameNum]=[0,0,0,0,0,0,0,0]
						}
						$dataAnimations[index]._isMVAnimation=false;
					}
				}

			}
		}
	}
	//rewrite since we did the check earlier.
	Spriteset_Base.prototype.isMVAnimation = function(animation) {
		if(typeof(animation._isMVAnimation)=="undefined")
		{
			//if this animation is being passed in differently than using $dataAnimations
			//(like if someone has a $dataAnimationsMV thing they created)
			//then fall back to the original code.
			return !!animation.frames;
		}else{
			return animation._isMVAnimation;
		}
	};

	//Making custom gauges is more difficult in MZ, because they default is hard-coded to be
	//only for a few specific battler stats.
	//I am making a custom gauge class (which other people can use if they want), which 
	//can reference an arbitary expression for the maxval and targetval


	/* 
	//example in a window
	this.placeFossilGauge('testGauge','$gamePlayer.x','$gameMap.width()','xcoord',50,50,300,50)
	//this will monitor the game player's x position, out of how many tiles across the map is.

	// If you put in the string 'rate' as the maxExpression
	// then it will just use currentExpression as a numerical value (so 0.5 = half full)
	// the target param gets stored into this._target
	*/

	Window_Base.prototype.placeFossilGauge = function(gaugeID, currentExpression, maxExpression,label,x,y,width,height,target) {

		const newGauge = this.fossilCreateInnerSprite(gaugeID, Fossil_Sprite_Gauge);
		newGauge.setup(currentExpression, maxExpression,target)
		newGauge.setupSize(x,y,width,height)
		newGauge._label = label;
		newGauge.show()
		newGauge.drawGauge();
		return newGauge;
	};

	//create a generic inner sprite for window_base, allowing us to put gauges in any window
	Window_Base.prototype.fossilCreateInnerSprite = function(key, spriteClass) {
		this._additionalSprites=this._additionalSprites||{};
		return Window_StatusBase.prototype.createInnerSprite.apply(this,arguments)
	};

	function Fossil_Sprite_Gauge() {
		this.initialize(...arguments);
	}

	Fossil_Sprite_Gauge.prototype = Object.create(Sprite_Gauge.prototype);
	Fossil_Sprite_Gauge.prototype.constructor = Fossil_Sprite_Gauge;

	Fossil_Sprite_Gauge.prototype.initialize = function(rect) {
		if(rect)
		{
			this._barlength=rect.width;
			this._thickness=rect.height;
			this.move(rect.x,rect.y)
		}
		Sprite_Gauge.prototype.initialize.call(this);
		this.initMembers();
		this.createBitmap();
		this.autoHide=false;
		this.autoHideTimer=-1;
		
	};

	Fossil_Sprite_Gauge.prototype.setup = function(currentExpression, maxExpression,target) {
		this._target=target||this;//target yourself if you don't have anyone to play with
		this._currentExpression=currentExpression;
		this._maxExpression=maxExpression;
		this._value = this.currentValue();
		this._maxValue = this.currentMaxValue();
		this.updateBitmap();
	};


	Fossil_Sprite_Gauge.prototype.setupSize = function(x,y,barlength,thickness) {
		if(barlength){this._barlength=barlength};
		if(thickness){this._thickness=thickness};
		this.move(x,y)
		this.createBitmap();//push our change in thickness
	};

	Fossil_Sprite_Gauge.prototype.update = function() {
		Sprite.prototype.update.call(this);
		//fossil gauges are persistent, rmmv gauges are not
		//if we are being called by a rmmv function, we can set our 
		//gauge to self-destruct after a frame
		if (this.autoHide)
		{
			if(this.autoHideTimer<=0)
			{
				this.hide();
			}else{
				this.show()
			}
			
			this.autoHideTimer--;
		}
		
		this.updateBitmap();
	};

	//commment this out, but leave for injection
	Fossil_Sprite_Gauge.prototype.updateFlashing = function() {
	}

	Fossil_Sprite_Gauge.prototype.bitmapWidth = function() {
		return this._barlength||128;
	};

	Fossil_Sprite_Gauge.prototype.bitmapHeight = function() {
		return this._thickness+12||24;
	};

	Fossil_Sprite_Gauge.prototype.gaugeHeight = function() {
		return this._thickness||12;
	};

	Fossil_Sprite_Gauge.prototype.gaugeX = function() {
		if (this._label === "" || this.hideLabelText) {
			return 0;
		} else {
			return this.measureLabelWidth() + 6;
		}
	};

	Fossil_Sprite_Gauge.prototype.drawGauge = function() {	
		const gaugeX = this.gaugeX();
		const gaugeY = this.bitmapHeight() - this.gaugeHeight();
		const gaugewidth = this.bitmapWidth() - gaugeX;
		const gaugeHeight = this.gaugeHeight()+500;
		this.drawGaugeRect(gaugeX, gaugeY, gaugewidth, gaugeHeight);
	};

	Fossil_Sprite_Gauge.prototype.isValid = function() {
		if (this._currentExpression && this._maxExpression) {
			return true;
		}
		return false;
	};

	Fossil_Sprite_Gauge.prototype.gaugeColor1 = function() {
		if (this._gaugeColor1)
		{
			//if we have a string, assume that it's a hex color.
			if(typeof(this._gaugeColor1)=='string')
			{
				return(this._gaugeColor1) 
			}
			return ColorManager.textColor(this._gaugeColor1)
		}
		return ColorManager.normalColor();
	};

	Fossil_Sprite_Gauge.prototype.gaugeColor2 = function() {
		if (this._gaugeColor2)
		{
			//if we have a string, assume that it's a hex color.
			if(typeof(this._gaugeColor2)=='string')
			{
				return(this._gaugeColor2) 
			}
			return ColorManager.textColor(this._gaugeColor2)
		}
		return ColorManager.normalColor();
	};

	Fossil_Sprite_Gauge.prototype.valueColor = function() {
		if (this._valueColor)
		{
			//if we have a string, assume that it's a hex color.
			if(typeof(this._valueColor)=='string')
			{
				return(this._valueColor) 
			}
			return ColorManager.textColor(this._valueColor)
		}
		return ColorManager.normalColor();
		
	};



	Fossil_Sprite_Gauge.prototype.currentValue = function() {
		if (this._maxExpression == 'rate')
		{
			return this._currentExpression
		}
		if (this._currentExpression) {
			
			return eval(this._currentExpression)
		}
		return NaN;
	};

	Fossil_Sprite_Gauge.prototype.currentMaxValue = function() {
		if (this._maxExpression == 'rate')
		{
			return 1;
		}
		if (this._maxExpression)
		{
			return eval(this._maxExpression)
		}
		
		return NaN;
	};

	//just return the label property.
	Fossil_Sprite_Gauge.prototype.label = function() {
		return this._label || "";
	};


	Fossil_Sprite_Gauge.prototype.drawValue = function() {
		if(!this.hideValueText)
		{
			Sprite_Gauge.prototype.drawValue.apply(this);
		}
	};


	Fossil_Sprite_Gauge.prototype.drawLabel = function() {
		if(!this.hideLabelText)
		{
			Sprite_Gauge.prototype.drawLabel.apply(this);
		}
		
	};

	//reimplement the drawgauge from RMMV using our new fossil gauge
	//note: yes, RMMZ has a 'drawGauge' function, but it's attached to the Sprite_Gauge object.
	//don't get them confused
	Window_Base.prototype.drawGauge = function(x, y, width, rate, color1, color2) {
		//I am going to gamble and bet that nobody draws multiple different gauges
		//of the exact same x y coordinates and width
		//with the exact same object.  Maybe I'm wrong, but we can deal with that when it comes up
		//so I think it's fine for our key to be this
		
		//EDIT: it came up in YEP_OptionsCore.  Wow.
		//inefficient but since nothing is going on in that window it's not gonna cause a 
		//huge problem if we delete old gauges each time.
		gaugeID=[this.constructor.name.toString(),x,y,width].toString()

		//this will be something like "Window_VictoryExp,184,38,416"
		label ='';//no label
		[x,y]=this.FossilTweakGaugeByPlugin(x,y)

		var fillW = Math.floor(width * rate);
		var gaugeY = y + this.lineHeight() - 20;
		var newGauge=this.placeFossilGauge(gaugeID, rate,'rate',label,x,gaugeY,width,12)
		newGauge._gaugeColor1 = color1;
		newGauge._gaugeColor2 = color2;
		newGauge.hideValueText = true;
		newGauge.hideLabelText=true;
		newGauge.drawGauge();

	};

	//helper function to do all our fine positioning, on a per-window basis.
	Window_Base.prototype.FossilTweakGaugeByPlugin=function(x,y)
	{
		if(this.constructor.name=="Window_VictoryExp")
		{
			x=x-32;
		}
		if(this.constructor.name=="Window_PartyLimitGauge")
		{
			
			y=y-24;
		}
		if(this.constructor.name=="Window_VisualHPGauge")
		{
			y=y-12;
		}

		return [x,y]
	}

	//now let's reimplement the old RMMV draw actor hp/mp/tp functions with our new gauge

	Window_Base.prototype.drawActorHp = function(actor, x, y, width) {
		width = width || 186;
		var color1 = this.hpGaugeColor1();
		var color2 = this.hpGaugeColor2();
		var actorName="";
		if(actor.isEnemy())
		{
			actorName="enemy"+actor.name();
		}else{
			actorName="actor"+actor.actorId().toString()
		}
		
		var gaugeID = actorName+'hpbar'
		var newGauge = this.placeFossilGauge(gaugeID, 'this._target.hp','this._target.mhp',TextManager.hpA,x,y,width,12,actor)
		newGauge._gaugeColor1=color1;
		newGauge._gaugeColor2=color2;
		newGauge._valueColor2 = ColorManager.hpColor(actor);	
		newGauge.drawLabel();
		newGauge.drawValue();
	};

	Window_Base.prototype.drawActorMp = function(actor, x, y, width) {
		width = width || 186;
		var color1 = this.mpGaugeColor1();
		var color2 = this.mpGaugeColor2();
		var actorName="";
		if(actor.isEnemy())
		{
			actorName="enemy"+actor.name();
		}else{
			actorName="actor"+actor.actorId().toString()
		}
		
		var gaugeID = actorName+'mpbar'
		var newGauge = this.placeFossilGauge(gaugeID, 'this._target.mp','this._target.mmp',TextManager.mpA,x,y,width,12,actor)
		newGauge._gaugeColor1=color1;
		newGauge._gaugeColor2=color2;
		newGauge._valueColor2 = ColorManager.mpCostColor(actor);
		newGauge.drawLabel();
		newGauge.drawValue();
	};
	Window_Base.prototype.drawActorTp = function(actor, x, y, width) {
		width = width || 186;
		var color1 = this.tpGaugeColor1();
		var color2 = this.tpGaugeColor2();
		var actorName="";
		if(actor.isEnemy())
		{
			actorName="enemy"+actor.name();
		}else{
			actorName="actor"+actor.actorId().toString()
		}
		
		var gaugeID = actorName+'tpbar'
		var newGauge = this.placeFossilGauge(gaugeID, 'this._target.tp','this._target.maxTp()',TextManager.tpA,x,y,width,12,actor)
		
		newGauge._gaugeColor1=color1;
		newGauge._gaugeColor2=color2;
		newGauge._valueColor2 = ColorManager.tpCostColor(actor);
		newGauge.drawLabel();
		newGauge.drawValue();
	};

	//text handling tweak; in rmmv putting in no text would have no width.
	Fossil.measureTextUndefinedZero=Bitmap.prototype.measureTextWidth;
	Bitmap.prototype.measureTextWidth = function(text) {
		if (text === undefined)
		{
			return 0;
		}
		return Fossil.measureTextUndefinedZero.apply(this,arguments)
	};

	//similarly, don't choke if we're given no text to work with.  Just turn it into an empty string.
	Fossil.convertEscapeUndefined=Window_Base.prototype.convertEscapeCharacters;
	Window_Base.prototype.convertEscapeCharacters = function(text) {
		if (text === undefined)
		{
			return '';
		}
		return Fossil.convertEscapeUndefined.apply(this,arguments)
	};



	/*
	////////////////////////////////////////////////////////////
		 Window Handling Code
	\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

	*/
	//several MV plugins want to know this.
	Window_Base.prototype.standardBackOpacity = function() {
		return 192;
	};
	// RMMZ puts color information into ColorManager.textColor() instead.
	//so let's redirect any calls to the old windowbase solution to the new location
	Window_Base.prototype.textColor = function(n) {
		return ColorManager.textColor(n);
	}

	//tell it the standard font size is our system font.
	Window_Base.prototype.standardFontSize=function(){
		return $gameSystem.mainFontSize()
	}
	//get the standard font face
	Window_Base.prototype.standardFontFace=function(){
		return $gameSystem.mainFontFace()
	}

	//preemptive function redirections.
	Window_ShopNumber.prototype.itemY = function() {
		return this.itemNameY();
	};

	Window_ShopNumber.prototype.priceY = function() {
		return this.totalPriceY();
	};

	//and here's a big block redirecting all those specific color picks.
	Window_Base.prototype.crisisColor = function() { return ColorManager.crisisColor() }
	Window_Base.prototype.ctGaugeColor1 = function() { return ColorManager.ctGaugeColor1() }
	Window_Base.prototype.ctGaugeColor2 = function() { return ColorManager.ctGaugeColor2() }
	Window_Base.prototype.deathColor = function() { return ColorManager.deathColor() }
	Window_Base.prototype.gaugeBackColor = function() { return ColorManager.gaugeBackColor() }
	Window_Base.prototype.hpGaugeColor1 = function() { return ColorManager.hpGaugeColor1() }
	Window_Base.prototype.hpGaugeColor2 = function() { return ColorManager.hpGaugeColor2() }
	Window_Base.prototype.mpCostColor = function() { return ColorManager.mpCostColor() }
	Window_Base.prototype.mpGaugeColor1 = function() { return ColorManager.mpGaugeColor1() }
	Window_Base.prototype.mpGaugeColor2 = function() { return ColorManager.mpGaugeColor2() }
	Window_Base.prototype.normalColor = function() { return ColorManager.normalColor() }
	Window_Base.prototype.pendingColor = function() { return ColorManager.pendingColor() }
	Window_Base.prototype.powerDownColor = function() { return ColorManager.powerDownColor() }
	Window_Base.prototype.powerUpColor = function() { return ColorManager.powerUpColor() }
	Window_Base.prototype.systemColor = function() { return ColorManager.systemColor() }
	Window_Base.prototype.tpCostColor = function() { return ColorManager.tpCostColor() }
	Window_Base.prototype.tpGaugeColor1 = function() { return ColorManager.tpGaugeColor1() }
	Window_Base.prototype.tpGaugeColor2 = function() { return ColorManager.tpGaugeColor2() }
	Window_Base.prototype.paramchangeTextColor= function(change) {return ColorManager.paramchangeTextColor(change)}
	Window_Base.prototype.hpColor = function(actor) { return ColorManager.hpColor(actor) }
	Window_Base.prototype.mpColor = function(actor) { return ColorManager.mpColor(actor) }
	Window_Base.prototype.tpColor = function(actor) { return ColorManager.tpColor(actor) }


	/*
	This was in MV but isn't in MZ.  
	 */
	WindowLayer.prototype.move = function(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	};

	//change names to work.
	Window_Scrollable.prototype.scrollDown=Window_Scrollable.prototype.smoothScrollDown
	Window_Scrollable.prototype.scrollUp=Window_Scrollable.prototype.smoothScrollUp
	//dummy out a RMMV function that isn't present, isn't needed, and isn't spelled right
	Window_Base.prototype.updateButtonsVisiblity = function(){}

	//tell it to fetch face images in advance using the existing function
	Window_Base.prototype.reserveFaceImages=Window_StatusBase.prototype.loadFaceImages;

	//MZ uses rectangles instead of multiple numbers being passed in.
	//There's even a special check in the MZ code that checks if you forgot a rectangle.
	//But I figure, hey, why not make it flexible?  That way legacy code will still work. :)
	
	//put in an if(true) to make this foldable 
	if(true)
	{
	var rectFixWindowBase= Window_Base.prototype.initialize;
	Window_Base.prototype.initialize = function(rect) {
		
		if(arguments.length>0)
		{
			//if we have arguments that are missing in a weird order
			//(like having width and height but no x and y
			//then we should initialize them to 0.
			if (arguments[0]==undefined)
			{
				arguments[0]=0;
			}
			if (arguments[1]==undefined)
			{
				arguments[1]=0;
			}
			if (arguments[2]==undefined)
			{
				arguments[2]=0;
			}
			if (arguments[3]==undefined)
			{
				arguments[3]=0;
			}
			
		}else{
			//if arguments are zero length, throw a warning and set them to all be 0.
			if (Utils.isOptionValid('test'))
			{
				console.log('You created a window without defining the size!')
			}
			arguments=[0,0,0,0]
		}
			
		if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowBase.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(this._backupRect) //if we don't have a rectangle now, and backed up one earlier, use that one.
			{
				rect=this._backupRect;
				this._backupRect=undefined;
				rectFixWindowBase.call(this,rect)
				return;
			}
			
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||400,  arguments[3]||Graphics.boxHeight);
			rectFixWindowBase.call(this,rect)
		}
		
		//account for another MV->MZ rename.  
		this._windowFrameSprite=this._frameSprite
		this._windowContentsSprite=this._contentsSprite
	};

	var rectFixWindowSelectable= Window_Selectable.prototype.initialize;
	Window_Selectable.prototype.initialize = function(rect) {
		if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code 
		{
			rectFixWindowSelectable.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV. :)
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||400,  arguments[3]||Graphics.boxHeight);
			rectFixWindowSelectable.call(this,rect)
		}
		
	};
	//we have to do this each time for each window class :(
	var rectFixWindowCommand= Window_Command.prototype.initialize;
	Window_Command.prototype.initialize = function(rect) {
		
		if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowCommand.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			
			
			var rectA=new Rectangle(0,0,0,0);
			//Window_Command is inherited from a lot of individual plugin windows.
			//handle case-by-case window sizes here.
			//I may have to refactor this later but this seems okay for now.
			
			switch(this.constructor.name)
			{
				case "Window_ItemActionCommand":
				case "Window_ItemDiscardConfirm":
				if(SceneManager._scene.itemWindowRect)
				{
					rectA=SceneManager._scene.itemWindowRect();
					rectA.height = (this.windowHeight ? this.windowHeight() : rectA.height)
				}
				break;

				default:
			}
				
				
				
			
			
			var rect = new Rectangle(
			arguments[0]||rectA.x, 
			arguments[1]||rectA.y, 
			arguments[2]||rectA.width ||(this.windowWidth ? this.windowWidth() : 0)  ||400,  
			arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight
			);
			rectFixWindowCommand.call(this,rect)
			//if we guessed at the number of rows as MV plugin, then we need to resize.
			if(this._FossilGuessedVisibleRows && this._list)
			{
				this.move(this.x,this.y,this.width,this.fittingHeight(this.numVisibleRows()))
				this._FossilGuessedVisibleRows=false;
			}
		}


	};


	var rectFixWindowMenuCommand= Window_MenuCommand.prototype.initialize;
	Window_MenuCommand.prototype.initialize = function(rect) {
		
		if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowMenuCommand.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			
			
			var rectA=new Rectangle(0,0,0,0);
			
			if(SceneManager._scene.commandWindowRect)
			{
				rectA=SceneManager._scene.commandWindowRect();
			}

			var rect = new Rectangle(
			arguments[0]||rectA.x, 
			arguments[1]||rectA.y, 
			arguments[2]||rectA.width ||(this.windowWidth ? this.windowWidth() : 0)  ||400,  
			arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight
			);
			rectFixWindowMenuCommand.call(this,rect)
			
		}
		
	};

	var rectFixWindowSkillList= Window_SkillList.prototype.initialize;
	Window_SkillList.prototype.initialize = function(rect) {
		if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowSkillList.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			
			//SRD initializes this tiny and then resizes it, which doesn't work anymore.
			//because the options size doesn't get set beyond the first entry.
			//do the reverse instead - start it big, then trust it to resize down.
			if(this.constructor.name == 'Window_SkillExtend')
			{
				arguments[3]=800;
			}
			
			
			var rect = new Rectangle(
			arguments[0], 
			arguments[1], 
			arguments[2]||(this.windowWidth ? this.windowWidth() : 0)||400,
			arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight
			);
			rectFixWindowSkillList.call(this,rect)
		}

	};

	var rectFixWindowEquipCommand= Window_EquipCommand.prototype.initialize;
	Window_EquipCommand.prototype.initialize = function(rect) {
		
		if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowEquipCommand.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
			rectFixWindowEquipCommand.call(this,rect)
			
		}
		
	};

	var rectFixWindowSkillStatus= Window_SkillStatus.prototype.initialize;
	Window_SkillStatus.prototype.initialize = function(rect) {
		
		if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowSkillStatus.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
			rectFixWindowSkillStatus.call(this,rect)
			
		}
		
	};

	var rectFixWindowStatusBase= Window_StatusBase.prototype.initialize;
	Window_StatusBase.prototype.initialize = function(rect) {
		
		if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowStatusBase.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
			rectFixWindowStatusBase.call(this,rect)
			
		}
		
	};

	var rectFixWindowBattleStatus= Window_BattleStatus.prototype.initialize;
	Window_BattleStatus.prototype.initialize = function(rect) {
		
		if(arguments.length)
		{
			if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixWindowBattleStatus.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
				rectFixWindowBattleStatus.call(this,rect)
				
			}
		}else{
			//0 length arguments, we lost it.
			//call from our current scene using the Scene_Menu prototype 
			//(in case we end up calling this from outside a menu scene)
			var rectA= Scene_Battle.prototype.statusWindowRect.call(SceneManager._scene);
			rectFixWindowBattleStatus.call(this,rectA);
		}
		
	};

	var rectFixWindowItemList= Window_ItemList.prototype.initialize;
	Window_ItemList.prototype.initialize = function(rect) {
		
		if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowItemList.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
			rectFixWindowItemList.call(this,rect)
			
		}
		
	};

	var rectFixWindowEquipSlot= Window_EquipSlot.prototype.initialize;
	Window_EquipSlot.prototype.initialize = function(rect) {
		
		if (arguments.length>0 && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowEquipSlot.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			var rectA=new Rectangle(0,0,0,0);
			if (SceneManager._scene.slotWindowRect)
			{
				rectA=SceneManager._scene.slotWindowRect(); //pick the defaults.
			}
			var rect = new Rectangle(
			(typeof(arguments[0]) == undefined? rectA.x : arguments[0])||0,
			(typeof(arguments[1]) == undefined? rectA.y : arguments[1])||0,
			arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  
			arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight
			);
			rectFixWindowEquipSlot.call(this,rect)
			
		}
		
	};

	var rectFixWindowEquipItem= Window_EquipItem.prototype.initialize;
	Window_EquipItem.prototype.initialize = function(rect) {
		
		if (arguments.length && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowEquipItem.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			
			var rectA=new Rectangle(0,0,0,0);
			if (SceneManager._scene.itemWindowRect)
			{
				rectA=SceneManager._scene.itemWindowRect(); //pick the defaults.
			}
			
			var rect = new Rectangle(
			typeof(arguments[0]) == undefined? rectA.x : arguments[0],
			typeof(arguments[1]) == undefined? rectA.y : arguments[1],
			arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
			arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
			
			rectFixWindowEquipItem.call(this,rect)
			
		}
		
	};

	var rectFixWindowGold= Window_Gold.prototype.initialize;
	Window_Gold.prototype.initialize = function(rect) {
		
		if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowGold.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			var rectA=new Rectangle(0,0,0,0);
			if (SceneManager._scene.goldWindowRect)
			{
				rectA=SceneManager._scene.goldWindowRect(); //pick the defaults.
			}
			var rect = new Rectangle(
			typeof(arguments[0]) == undefined? rectA.x : arguments[0],
			typeof(arguments[1]) == undefined? rectA.y : arguments[1],
			arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,
			arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
			
			rectFixWindowGold.call(this,rect)
			
		}
		
	};


	var rectFixWindowHelp= Window_Help.prototype.initialize;
	Window_Help.prototype.initialize = function(rect) {
		
		if ((arguments[0]!==undefined) && (arguments[0].constructor.name=='Rectangle')) // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowHelp.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle. Could be help window inheriting from something that isn't updating, or it could just be RMMV behavior (it takes one number indicating how many lines of text there are)")
			}
			//RMMV passes this in with a single argument, which is how many lines of text
			//there are
			var rectA=new Rectangle(0,0,0,0);
			if (SceneManager._scene.helpWindowRect)
			{
				rectA=SceneManager._scene.helpWindowRect(); //pick the defaults.
			}
			var rect = new Rectangle(
			0||rectA.x, 
			0||rectA.y, 
			rectA.width||Graphics.boxWidth||(this.windowWidth ? this.windowWidth() : 0) ||400, 
			//in RMMV the height in lines is passed as a param.
			this.fittingHeight(arguments[0]||2)||rectA.height||Graphics.boxHeight);
			
			rectFixWindowHelp.call(this,rect)
			
		}
		
	};

	var rectFixWindowTitleCommand= Window_TitleCommand.prototype.initialize;
	Window_TitleCommand.prototype.initialize = function(rect) {
		if (arguments.length==0)
		{//RMMV doesn't take arguments for the title command window.
	/* 		var x = (Graphics.boxWidth - this.width) / 2;
			var y = Graphics.boxHeight - this.height - 96;
			var width=240;
			var height=this.fittingHeight(this.numVisibleRows())
			var rect = new Rectangle(x,y,width,height); */
			const rect=SceneManager._scene.commandWindowRect(); //pick the defaults.

			rectFixWindowTitleCommand.call(this,rect)
			return;
		}
		if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowTitleCommand.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			var rectA=new Rectangle(0,0,0,0);
			if (SceneManager._scene.commandWindowRect)
			{
				rectA=SceneManager._scene.commandWindowRect(); //pick the defaults.
			}
			var rect = new Rectangle(
			typeof(arguments[0]) == undefined? rectA.x : arguments[0],
			typeof(arguments[1]) == undefined? rectA.y : arguments[1],
			arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
			arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight);
			

			rectFixWindowTitleCommand.call(this,rect)
			
		}
		
	};


	var rectFixWindowBattleSkill= Window_BattleSkill.prototype.initialize;
	Window_BattleSkill.prototype.initialize = function(rect) {
		
		if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowBattleSkill.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			var rectA=new Rectangle(0,0,0,0);
			if (SceneManager._scene.skillWindowRect)
			{
				rectA=SceneManager._scene.skillWindowRect(); //pick the defaults.
			}
			var rect = new Rectangle(
			typeof(arguments[0]) == undefined? rectA.x : arguments[0],
			typeof(arguments[1]) == undefined? rectA.y : arguments[1],
			arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
			arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight);
			
			rectFixWindowBattleSkill.call(this,rect)
			
		}
		
	};

	var rectFixWindowBattleItem= Window_BattleItem.prototype.initialize;
	Window_BattleItem.prototype.initialize = function(rect) {
		
		if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowBattleItem.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			
			var rectA=new Rectangle(0,0,0,0);
			if (SceneManager._scene.itemWindowRect)
			{
				rectA=SceneManager._scene.itemWindowRect(); //pick the defaults.
			}
			var rect = new Rectangle(
			typeof(arguments[0]) == undefined? rectA.x : arguments[0],
			typeof(arguments[1]) == undefined? rectA.y : arguments[1],
			arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
			arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight);
			
			rectFixWindowBattleItem.call(this,rect)
			
		}
		
	};

	var rectFixWindowMenuActor= Window_MenuActor.prototype.initialize;
	Window_MenuActor.prototype.initialize = function(rect) {
		
		if (arguments.length && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowMenuActor.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			
			var rectA=new Rectangle(0,0,0,0);
			if (SceneManager._scene.actorWindowRect)
			{
				rectA=SceneManager._scene.actorWindowRect(); //pick the defaults.
			}
			if (Imported.YEP_ShopMenuCore && this.constructor.name =="Window_MenuActor")
			{	//load faces
				this._additionalSprites = {};
				this.loadFaceImages();
				rectA=Scene_Menu.prototype.statusWindowRect()
			}
			var rect = new Rectangle(
			typeof(arguments[0]) == undefined? rectA.x : arguments[0],
			typeof(arguments[1]) == undefined? rectA.y : arguments[1],
			arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
			arguments[3]||rectA.height||Graphics.boxHeight||400
			);
			
			rectFixWindowMenuActor.call(this,rect)
			
		}
		


		
	};

	var rectFixWindowShopBuy= Window_ShopBuy.prototype.initialize;
	Window_ShopBuy.prototype.initialize = function(rect) {
		
		if (arguments.length && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowShopBuy.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			
			var rectA=new Rectangle(0,0,0,0);
			if (SceneManager._scene.buyWindowRect)
			{
				rectA=SceneManager._scene.buyWindowRect(); //pick the defaults.
			}
			
			if(Imported.YEP_ShopMenuCore)
			{
				rectA.width=SceneManager._scene._dummyWindow.width
				rectA.height=SceneManager._scene._dummyWindow.height
			}
			var rect = new Rectangle(
			typeof(arguments[0]) == undefined? rectA.x : arguments[0],
			typeof(arguments[1]) == undefined? rectA.y : arguments[1],
			rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
			rectA.height||Graphics.boxHeight||400
			);
			
			//set up our goods since MV set it up here.
			this._shopGoods=this._shopGoods||arguments[3]
			
			rectFixWindowShopBuy.call(this,rect)
			
		}
		
	};

	var rectFixWindowShopSell= Window_ShopSell.prototype.initialize;
	Window_ShopSell.prototype.initialize = function(rect) {
		
		if (arguments.length && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowShopSell.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			
			var rectA=new Rectangle(0,0,0,0);
			if (SceneManager._scene.sellWindowRect)
			{
				rectA=SceneManager._scene.sellWindowRect(); //pick the defaults.
			}
			if(Imported.YEP_ShopMenuCore)
			{
				rectA.width=SceneManager._scene._dummyWindow.width
				rectA.height=SceneManager._scene._dummyWindow.height
			}
			var rect = new Rectangle(
			typeof(arguments[0]) == undefined? rectA.x : arguments[0],
			typeof(arguments[1]) == undefined? rectA.y : arguments[1],
			rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
			rectA.height||Graphics.boxHeight||400
			);
			
			rectFixWindowShopSell.call(this,rect)
			
		}
		
	};

	var rectFixWindowShopStatus= Window_ShopStatus.prototype.initialize;
	Window_ShopStatus.prototype.initialize = function(rect) {
		
		if (arguments.length && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowShopStatus.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			
			var rectA=new Rectangle(0,0,0,0);
			if (SceneManager._scene.actorWindowRect)
			{
				rectA=SceneManager._scene.actorWindowRect(); //pick the defaults.
			}
			var rect = new Rectangle(
			typeof(arguments[0]) == undefined? rectA.x : arguments[0],
			typeof(arguments[1]) == undefined? rectA.y : arguments[1],
			arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
			arguments[3]||rectA.height||Graphics.boxHeight||400
			);
			
			rectFixWindowShopStatus.call(this,rect)
			
		}
		
	};

	var rectFixWindowBattleEnemy= Window_BattleEnemy.prototype.initialize;
	Window_BattleEnemy.prototype.initialize = function(rect) {
		
		if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowBattleEnemy.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			//seeing if this might be a better option for defaults.  Just check what it was set to earlier.
			var rectA=new Rectangle(0,0,0,0);
			if (SceneManager._scene.enemyWindowRect)
			{
				rectA=SceneManager._scene.enemyWindowRect(); //spawn the defaults.
			}
			var rect = new Rectangle(
			(typeof(arguments[0]) == undefined? rectA.x : arguments[0])||0,
			(typeof(arguments[1]) == undefined? rectA.y : arguments[1])||0,
			arguments[2]||rectA.width||400,  
			arguments[3]||rectA.height|400
			)
			rectFixWindowBattleEnemy.call(this,rect)	
		}	
	};


	var rectFixWindowHorzCommand= Window_HorzCommand.prototype.initialize;
	Window_HorzCommand.prototype.initialize = function(rect) {
		
		if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowHorzCommand.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			var rect = new Rectangle(
			arguments[0], 
			arguments[1], 
			arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  
			arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight);
			
			rectFixWindowHorzCommand.call(this,rect)
			
		}
		
	};

	var rectFixWindowShopCommand= Window_ShopCommand.prototype.initialize;
	Window_ShopCommand.prototype.initialize = function(rect) {
			
		if((typeof(arguments[0])!='undefined' ) && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowShopCommand.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			//MV calls it with 
			//Window_ShopCommand(this._goldWindow.x, this._purchaseOnly);
			//which is width,purchaseonly
			//so we'll init with our MZ initialization
			//sadly yanfly does order differently so we have to hardcode this call for the shop core
			var rectA = new Rectangle();
			if(Fossil.pluginNameList.contains('YEP_ShopMenuCore'))
			{
				//copypaste the code out of rmmv_scenes
				const wx = 0;
				const wy = SceneManager._scene.mainAreaTop();
				const ww = arguments[0]||this.windowWidth();
				const wh = this.fittingHeight(this.numVisibleRows());//SceneManager._scene.calcWindowHeight(1, true);
				rectA = new Rectangle(wx, wy, ww, wh);
			}else{
				rectA = SceneManager._scene.commandWindowRect();		
				rectA.width=arguments[0]||rectA.width;
			}
			rectFixWindowShopCommand.call(this,rectA)
			//then we will set the purchaseonly.
			this._purchaseOnly = arguments[1];
		}
	};






	var rectFixWindowActorCommand= Window_ActorCommand.prototype.initialize;
	Window_ActorCommand.prototype.initialize = function(rect) {
			if(arguments.length>0)
		{
			//if we have arguments that are missing in a weird order
			//(like having width and height but no x and y
			//then we should initialize them to 0.
			if (arguments[0]==undefined)
			{
				arguments[0]=0;
			}
			if (arguments[1]==undefined)
			{
				arguments[1]=0;
			}
			if (arguments[2]==undefined)
			{
				arguments[2]=0;
			}
			if (arguments[3]==undefined)
			{
				arguments[3]=0;
			}
			
		}else{
			//if arguments are zero length, throw a warning and set them to all be 0.
			if (Utils.isOptionValid('test'))
			{
				console.log('You created a window without defining the size!')
			}
			arguments=[0,0,0,0]
		}
		if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowActorCommand.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			var rect = new Rectangle(
			arguments[0], 
			arguments[1], 
			arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  
			arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight);
			
			rectFixWindowActorCommand.call(this,rect)
			
		}
		
	};

	}//end of window rectangle section (and the if(true) that folds it)



	//
	//////////////////////////////////////////////////////////////
		//GAME INTERPRETER COMMAND PARAMETER FIXES
	//////////////////////////////////////////////////////////////
	//
	//another big ugly block.  This tests for (almost) every game interpreter command
	//and checks to see if parameters were passed in.  if not, it uses the backup from _params.
	//wrapped in an if(true) to make it fold.
	if(true)
	{
		Fossil.setParamsForcommand101 = Game_Interpreter.prototype.command101;
		Game_Interpreter.prototype.command101 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand101.call(this,params);}
		Fossil.setParamsForcommand102 = Game_Interpreter.prototype.command102;
		Game_Interpreter.prototype.command102 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand102.call(this,params);}
		Fossil.setParamsForcommand103 = Game_Interpreter.prototype.command103;
		Game_Interpreter.prototype.command103 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand103.call(this,params);}
		Fossil.setParamsForcommand104 = Game_Interpreter.prototype.command104;
		Game_Interpreter.prototype.command104 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand104.call(this,params);}
		Fossil.setParamsForcommand105 = Game_Interpreter.prototype.command105;
		Game_Interpreter.prototype.command105 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand105.call(this,params);}
		Fossil.setParamsForcommand117 = Game_Interpreter.prototype.command117;
		Game_Interpreter.prototype.command117 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand117.call(this,params);}
		Fossil.setParamsForcommand119 = Game_Interpreter.prototype.command119;
		Game_Interpreter.prototype.command119 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand119.call(this,params);}
		Fossil.setParamsForcommand121 = Game_Interpreter.prototype.command121;
		Game_Interpreter.prototype.command121 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand121.call(this,params);}
		Fossil.setParamsForcommand122 = Game_Interpreter.prototype.command122;
		Game_Interpreter.prototype.command122 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand122.call(this,params);}
		Fossil.setParamsForcommand123 = Game_Interpreter.prototype.command123;
		Game_Interpreter.prototype.command123 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand123.call(this,params);}
		Fossil.setParamsForcommand124 = Game_Interpreter.prototype.command124;
		Game_Interpreter.prototype.command124 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand124.call(this,params);}
		Fossil.setParamsForcommand125 = Game_Interpreter.prototype.command125;
		Game_Interpreter.prototype.command125 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand125.call(this,params);}
		Fossil.setParamsForcommand126 = Game_Interpreter.prototype.command126;
		Game_Interpreter.prototype.command126 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand126.call(this,params);}
		Fossil.setParamsForcommand127 = Game_Interpreter.prototype.command127;
		Game_Interpreter.prototype.command127 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand127.call(this,params);}
		Fossil.setParamsForcommand128 = Game_Interpreter.prototype.command128;
		Game_Interpreter.prototype.command128 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand128.call(this,params);}
		Fossil.setParamsForcommand129 = Game_Interpreter.prototype.command129;
		Game_Interpreter.prototype.command129 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand129.call(this,params);}
		Fossil.setParamsForcommand132 = Game_Interpreter.prototype.command132;
		Game_Interpreter.prototype.command132 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand132.call(this,params);}
		Fossil.setParamsForcommand133 = Game_Interpreter.prototype.command133;
		Game_Interpreter.prototype.command133 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand133.call(this,params);}
		Fossil.setParamsForcommand134 = Game_Interpreter.prototype.command134;
		Game_Interpreter.prototype.command134 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand134.call(this,params);}
		Fossil.setParamsForcommand135 = Game_Interpreter.prototype.command135;
		Game_Interpreter.prototype.command135 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand135.call(this,params);}
		Fossil.setParamsForcommand136 = Game_Interpreter.prototype.command136;
		Game_Interpreter.prototype.command136 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand136.call(this,params);}
		Fossil.setParamsForcommand137 = Game_Interpreter.prototype.command137;
		Game_Interpreter.prototype.command137 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand137.call(this,params);}
		Fossil.setParamsForcommand138 = Game_Interpreter.prototype.command138;
		Game_Interpreter.prototype.command138 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand138.call(this,params);}
		Fossil.setParamsForcommand139 = Game_Interpreter.prototype.command139;
		Game_Interpreter.prototype.command139 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand139.call(this,params);}
		Fossil.setParamsForcommand140 = Game_Interpreter.prototype.command140;
		Game_Interpreter.prototype.command140 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand140.call(this,params);}
		Fossil.setParamsForcommand201 = Game_Interpreter.prototype.command201;
		Game_Interpreter.prototype.command201 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand201.call(this,params);}
		Fossil.setParamsForcommand202 = Game_Interpreter.prototype.command202;
		Game_Interpreter.prototype.command202 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand202.call(this,params);}
		Fossil.setParamsForcommand203 = Game_Interpreter.prototype.command203;
		Game_Interpreter.prototype.command203 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand203.call(this,params);}
		Fossil.setParamsForcommand204 = Game_Interpreter.prototype.command204;
		Game_Interpreter.prototype.command204 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand204.call(this,params);}
		Fossil.setParamsForcommand205 = Game_Interpreter.prototype.command205;
		Game_Interpreter.prototype.command205 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand205.call(this,params);}
		Fossil.setParamsForcommand211 = Game_Interpreter.prototype.command211;
		Game_Interpreter.prototype.command211 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand211.call(this,params);}
		Fossil.setParamsForcommand212 = Game_Interpreter.prototype.command212;
		Game_Interpreter.prototype.command212 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand212.call(this,params);}
		Fossil.setParamsForcommand213 = Game_Interpreter.prototype.command213;
		Game_Interpreter.prototype.command213 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand213.call(this,params);}
		Fossil.setParamsForcommand216 = Game_Interpreter.prototype.command216;
		Game_Interpreter.prototype.command216 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand216.call(this,params);}
		Fossil.setParamsForcommand223 = Game_Interpreter.prototype.command223;
		Game_Interpreter.prototype.command223 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand223.call(this,params);}
		Fossil.setParamsForcommand224 = Game_Interpreter.prototype.command224;
		Game_Interpreter.prototype.command224 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand224.call(this,params);}
		Fossil.setParamsForcommand225 = Game_Interpreter.prototype.command225;
		Game_Interpreter.prototype.command225 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand225.call(this,params);}
		Fossil.setParamsForcommand230 = Game_Interpreter.prototype.command230;
		Game_Interpreter.prototype.command230 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand230.call(this,params);}
		Fossil.setParamsForcommand231 = Game_Interpreter.prototype.command231;
		Game_Interpreter.prototype.command231 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand231.call(this,params);}
		Fossil.setParamsForcommand232 = Game_Interpreter.prototype.command232;
		Game_Interpreter.prototype.command232 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand232.call(this,params);}
		Fossil.setParamsForcommand233 = Game_Interpreter.prototype.command233;
		Game_Interpreter.prototype.command233 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand233.call(this,params);}
		Fossil.setParamsForcommand234 = Game_Interpreter.prototype.command234;
		Game_Interpreter.prototype.command234 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand234.call(this,params);}
		Fossil.setParamsForcommand235 = Game_Interpreter.prototype.command235;
		Game_Interpreter.prototype.command235 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand235.call(this,params);}
		Fossil.setParamsForcommand236 = Game_Interpreter.prototype.command236;
		Game_Interpreter.prototype.command236 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand236.call(this,params);}
		Fossil.setParamsForcommand241 = Game_Interpreter.prototype.command241;
		Game_Interpreter.prototype.command241 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand241.call(this,params);}
		Fossil.setParamsForcommand242 = Game_Interpreter.prototype.command242;
		Game_Interpreter.prototype.command242 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand242.call(this,params);}
		Fossil.setParamsForcommand245 = Game_Interpreter.prototype.command245;
		Game_Interpreter.prototype.command245 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand245.call(this,params);}
		Fossil.setParamsForcommand246 = Game_Interpreter.prototype.command246;
		Game_Interpreter.prototype.command246 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand246.call(this,params);}
		Fossil.setParamsForcommand249 = Game_Interpreter.prototype.command249;
		Game_Interpreter.prototype.command249 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand249.call(this,params);}
		Fossil.setParamsForcommand250 = Game_Interpreter.prototype.command250;
		Game_Interpreter.prototype.command250 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand250.call(this,params);}
		Fossil.setParamsForcommand261 = Game_Interpreter.prototype.command261;
		Game_Interpreter.prototype.command261 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand261.call(this,params);}
		Fossil.setParamsForcommand281 = Game_Interpreter.prototype.command281;
		Game_Interpreter.prototype.command281 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand281.call(this,params);}
		Fossil.setParamsForcommand282 = Game_Interpreter.prototype.command282;
		Game_Interpreter.prototype.command282 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand282.call(this,params);}
		Fossil.setParamsForcommand283 = Game_Interpreter.prototype.command283;
		Game_Interpreter.prototype.command283 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand283.call(this,params);}
		Fossil.setParamsForcommand284 = Game_Interpreter.prototype.command284;
		Game_Interpreter.prototype.command284 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand284.call(this,params);}
		Fossil.setParamsForcommand285 = Game_Interpreter.prototype.command285;
		Game_Interpreter.prototype.command285 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand285.call(this,params);}
		Fossil.setParamsForcommand301 = Game_Interpreter.prototype.command301;
		Game_Interpreter.prototype.command301 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand301.call(this,params);}
		Fossil.setParamsForcommand302 = Game_Interpreter.prototype.command302;
		Game_Interpreter.prototype.command302 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand302.call(this,params);}
		Fossil.setParamsForcommand303 = Game_Interpreter.prototype.command303;
		Game_Interpreter.prototype.command303 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand303.call(this,params);}
		Fossil.setParamsForcommand311 = Game_Interpreter.prototype.command311;
		Game_Interpreter.prototype.command311 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand311.call(this,params);}
		Fossil.setParamsForcommand312 = Game_Interpreter.prototype.command312;
		Game_Interpreter.prototype.command312 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand312.call(this,params);}
		Fossil.setParamsForcommand313 = Game_Interpreter.prototype.command313;
		Game_Interpreter.prototype.command313 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand313.call(this,params);}
		Fossil.setParamsForcommand314 = Game_Interpreter.prototype.command314;
		Game_Interpreter.prototype.command314 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand314.call(this,params);}
		Fossil.setParamsForcommand315 = Game_Interpreter.prototype.command315;
		Game_Interpreter.prototype.command315 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand315.call(this,params);}
		Fossil.setParamsForcommand316 = Game_Interpreter.prototype.command316;
		Game_Interpreter.prototype.command316 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand316.call(this,params);}
		Fossil.setParamsForcommand317 = Game_Interpreter.prototype.command317;
		Game_Interpreter.prototype.command317 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand317.call(this,params);}
		Fossil.setParamsForcommand318 = Game_Interpreter.prototype.command318;
		Game_Interpreter.prototype.command318 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand318.call(this,params);}
		Fossil.setParamsForcommand319 = Game_Interpreter.prototype.command319;
		Game_Interpreter.prototype.command319 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand319.call(this,params);}
		Fossil.setParamsForcommand320 = Game_Interpreter.prototype.command320;
		Game_Interpreter.prototype.command320 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand320.call(this,params);}
		Fossil.setParamsForcommand321 = Game_Interpreter.prototype.command321;
		Game_Interpreter.prototype.command321 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand321.call(this,params);}
		Fossil.setParamsForcommand322 = Game_Interpreter.prototype.command322;
		Game_Interpreter.prototype.command322 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand322.call(this,params);}
		Fossil.setParamsForcommand323 = Game_Interpreter.prototype.command323;
		Game_Interpreter.prototype.command323 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand323.call(this,params);}
		Fossil.setParamsForcommand324 = Game_Interpreter.prototype.command324;
		Game_Interpreter.prototype.command324 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand324.call(this,params);}
		Fossil.setParamsForcommand325 = Game_Interpreter.prototype.command325;
		Game_Interpreter.prototype.command325 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand325.call(this,params);}
		Fossil.setParamsForcommand326 = Game_Interpreter.prototype.command326;
		Game_Interpreter.prototype.command326 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand326.call(this,params);}
		Fossil.setParamsForcommand331 = Game_Interpreter.prototype.command331;
		Game_Interpreter.prototype.command331 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand331.call(this,params);}
		Fossil.setParamsForcommand332 = Game_Interpreter.prototype.command332;
		Game_Interpreter.prototype.command332 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand332.call(this,params);}
		Fossil.setParamsForcommand333 = Game_Interpreter.prototype.command333;
		Game_Interpreter.prototype.command333 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand333.call(this,params);}
		Fossil.setParamsForcommand334 = Game_Interpreter.prototype.command334;
		Game_Interpreter.prototype.command334 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand334.call(this,params);}
		Fossil.setParamsForcommand335 = Game_Interpreter.prototype.command335;
		Game_Interpreter.prototype.command335 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand335.call(this,params);}
		Fossil.setParamsForcommand336 = Game_Interpreter.prototype.command336;
		Game_Interpreter.prototype.command336 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand336.call(this,params);}
		Fossil.setParamsForcommand337 = Game_Interpreter.prototype.command337;
		Game_Interpreter.prototype.command337 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand337.call(this,params);}
		Fossil.setParamsForcommand339 = Game_Interpreter.prototype.command339;
		Game_Interpreter.prototype.command339 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand339.call(this,params);}
		Fossil.setParamsForcommand342 = Game_Interpreter.prototype.command342;
		Game_Interpreter.prototype.command342 = function(params) {if(!params){params=this._params};return Fossil.setParamsForcommand342.call(this,params);}

	}


	/*
	///////////////////////////////////////////////////////////

	\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

	*/

	//RMMV put drawActorName into Window_Base.  
	//RMMZ only puts it into Window_StatusBase.  hook into the new version.

	Window_Base.prototype.drawActorCharacter = function(actor, x, y) {	Window_StatusBase.prototype.drawActorCharacter.apply(this,arguments) }
	Window_Base.prototype.drawActorClass = function(actor, x, y, width) {	Window_StatusBase.prototype.drawActorClass.apply(this,arguments) }
	Window_Base.prototype.drawActorFace = function( actor, x, y, width, height){	Window_StatusBase.prototype.drawActorFace.apply(this,arguments)}
	Window_Base.prototype.drawActorIcons = function(actor, x, y, width) {	Window_StatusBase.prototype.drawActorIcons.apply(this,arguments) }
	Window_Base.prototype.drawActorLevel = function(actor, x, y) {	Window_StatusBase.prototype.drawActorLevel.apply(this,arguments) }
	Window_Base.prototype.drawActorName = function(actor, x, y, width) {	Window_StatusBase.prototype.drawActorName.apply(this,arguments) }
	Window_Base.prototype.drawActorNickname = function(actor, x, y, width) {	Window_StatusBase.prototype.drawActorNickname.apply(this,arguments) }


	Window_BattleEnemy.prototype.windowWidth = function() {
		return Graphics.boxWidth - 192;
	};

	Window_BattleEnemy.prototype.windowHeight = function() {
		return this.fittingHeight(this.numVisibleRows());
	};

	//there's a similar RMMZ function restricted to Window_ShopNumber, but 
	//it doesn't take in any arguments (it just draws a line based on existing
	//window components.  As such I'm just importing the RMMV function here.
	Window_Status.prototype.drawHorzLine = function(y) {
		var lineY = y + this.lineHeight() / 2 - 1;
		this.contents.paintOpacity = 48;
		this.contents.fillRect(0, lineY, this.contentsWidth(), 2, this.lineColor());
		this.contents.paintOpacity = 255;
	};
	
	Window_Status.prototype.lineColor = function() {
		return this.normalColor();
	};


	//RMMV defaulted width to 312.  I am going to respect that.
	Fossil.FixWindowBaseDrawItemNameWidth=Window_Base.prototype.drawItemName;
	Window_Base.prototype.drawItemName = function(item, x, y, width) {
		width = width || 312;
		Fossil.FixWindowBaseDrawItemNameWidth.apply(this,arguments);
	};


	//scrolling works differently, so translate the old reset scroll into the new idiom.
	Window_Selectable.prototype.resetScroll = function() {
		this.scrollTo(0, 0);
	};

	//another function that isn't used anymore, kept in because sometimes it gets checked.
	Window_Selectable.prototype.isCursorVisible = function() {
		return true; //am gonna trust RMMZ to keep the cursor visible.
	};

	//define the old RMMV isContentsArea using MZ's definitions. 
	Window_Selectable.prototype.isContentsArea=function(x,y){return this.innerRect.contains(x, y)};

	//hook the old slot system into the new
	Window_EquipSlot.prototype.slotName = function(index) {
		return this.actorSlotName(this._actor,index)
	};


	var fixnewLineX= Window_Message.prototype.newLineX
	Window_Message.prototype.newLineX = function(textState) 
	{
		//textstate is now a passed-in argument instead of a property.
		var textState = textState || this._textState;
		return fixnewLineX.apply(this,arguments)
	};


	Window_Command.prototype.windowWidth = function() {
		return 240;
	};

	Window_Gold.prototype.windowWidth = function() {
		return 240;
	};

	Window_ActorCommand.prototype.windowWidth = function() {
		return 192;
	};

	Window_ActorCommand.prototype.numVisibleRows = function() {
		return 4;
	};

	Window_Gold.prototype.windowHeight = function() {
		return this.fittingHeight(1);
	};

	Window_Command.prototype.windowHeight = function() {
		return this.fittingHeight(this.numVisibleRows());
	};

	//The MV code for rectangular text areas is now 'with padding' instead of 'for text'
	Window_Selectable.prototype.itemRectForText = function(index) {
		return this.itemRectWithPadding(index)
	};


	//Inherit a bunch of magic numbers, and define ones that weren't used in MZ.  
	// I wish there was a less ugly way to do this :(
	Window_Selectable.prototype.spacing = function() {
		return 48;
	};
	Window_Base.prototype.textPadding = function() {
		return 6;
	};
	Window_Base._iconWidth = ImageManager.iconWidth;
	Window_Base._iconHeight = ImageManager.iconHeight;
	Window_Base._faceWidth = ImageManager.faceWidth
	Window_Base._faceHeight = ImageManager.faceHeight
	Sprite_StateIcon._iconWidth = ImageManager.iconWidth;
	Sprite_StateIcon._iconHeight = ImageManager.iconHeight;

	Window_Base.prototype.standardPadding = function() {
		return 18;
	};


	Window_Command.prototype.normalColor = function() {
		return "#FFFFFF";
	};

	Window_Selectable.prototype.gaugeBackColor = function() {
		return "#000000";
	};


	Window_Command.prototype.numVisibleRows = function() {
		if (!this._list)
		{
			this._FossilGuessedVisibleRows=true;
			return 7;//default to 7 if we don't know how many rows we need.  Might as well hope we're lucky :)
		}
		return Math.ceil(this.maxItems() / this.maxCols());
	};

	Window_HorzCommand.prototype.numVisibleRows = function() {
		if (!this._list)
		{
			return 1;//default to 1 if we don't know how many rows we need, if this is horizontal
		}
		return Math.ceil(this.maxItems() / this.maxCols());
	};


	/**
	 * Copied out of RMMV
	 * 
	 * Sets the x, y, width, and height all at once.
	 *
	 * @method move
	 * @param {Number} x The x coordinate of the window layer
	 * @param {Number} y The y coordinate of the window layer
	 * @param {Number} width The width of the window layer
	 * @param {Number} height The height of the window layer
	 */
	WindowLayer.prototype.move = function(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	//the battlemanager no longer is directly attached to the statuswindow in MZ
	//so when people want to refresh the status window using it, we'll direct them
	//to the new location.
	BattleManager.refreshStatus = function() {
		SceneManager._scene._statusWindow.refresh();
	}


	//RMMZ flags inputting differently so we will make the function do both.
	BattleManager.isInputting = function() {
		return this._inputting || this._phase === 'input';
	};


	/*
		Skill Gauge modifications!

		I am altering the skill gauges so that they can take in item/armor/weapon counts,
		instead of just individual battler stats.
		

	*/


	var SpriteGaugeCurrent = Sprite_Gauge.prototype.currentValue
	Sprite_Gauge.prototype.currentValue = function() {
		if (this._statusType.substring(0,4) == 'item')
		{
			return $gameParty.numItems($dataItems[this._statusType.substring(4)-0]) ;
		}else if (this._statusType.substring(0,5) == 'armor'){
			return $gameParty.numItems($dataArmors[this._statusType.substring(5)-0]) ;
		}else if (this._statusType.substring(0,6) == 'weapon'){
			//this doesn't count equipped stuff, but I don't think you want to burn those for skills anyway.
			return $gameParty.numItems($dataWeapons[this._statusType.substring(6)-0]) ;
		}
		return SpriteGaugeCurrent.apply(this,arguments);
	};

	var SpriteGaugeMax = Sprite_Gauge.prototype.currentMaxValue 
	Sprite_Gauge.prototype.currentMaxValue = function() {
		if (this._statusType.substring(0,4) == 'item')
		{
			//There's no single good answer to the question of how high this maximum should be
			//Saying '99' or other inventorymax value is likely going to end up with the bar 
			//only having a tiny sliver of it full for basically the whole game, and you'll need to squint
			//to see a difference between 0 and 1.
			//
			//Instead, the bar is totally full if you have items left, and totally empty if you don't.
			//
			 return Math.max($gameParty.numItems($dataItems[this._statusType.substring(4)-0]) ,1);
		}else if (this._statusType.substring(0,5) == 'armor'){
			return Math.max($gameParty.numItems($dataArmors[this._statusType.substring(5)-0]) ,1);
		}else if (this._statusType.substring(0,6) == 'weapon'){
			//this doesn't count equipped stuff, but I don't think you want to burn those for skills anyway.
			return Math.max($gameParty.numItems($dataWeapons[this._statusType.substring(6)-0]) ,1);
		}
		return SpriteGaugeMax.apply(this,arguments);
	};

	var SpriteGaugeLabel = Sprite_Gauge.prototype.label

	Sprite_Gauge.prototype.label = function() {
		if (this._statusType.substring(0,4) == 'item')
		{
			return $dataItems[this._statusType.substring(4)-0].name ;
		}else if (this._statusType.substring(0,5) == 'armor'){
			return $dataArmors[this._statusType.substring(5)-0].name ;
		}else if (this._statusType.substring(0,6) == 'weapon'){
			//this doesn't count equipped stuff, but I don't think you want to burn those for skills anyway.
			return $dataWeapons[this._statusType.substring(6)-0].name ;
		}
		return SpriteGaugeLabel.apply(this,arguments);
	};


	/*   

	////////////////////////////////////////////////////////////
		 Sprite Handling Code
	\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

	*/


	//RMMZ arranges sprite types differently than RMMV does.  It doesn't even have a Sprite_Base class.
	//This is actually really handy!  I can copy over the Sprite_Base definition, and use it
	//without any worries.  And since all Sprite_Base things will be RMMV imports, that means
	//that they can be altered without worrying about breaking RMMZ sprites. :)
	//Anyway, here's the Sprite_Base from RMMV.  
	function Sprite_Base() {
		this.initialize.apply(this, arguments);
	}

	Sprite_Base.prototype = Object.create(Sprite.prototype);
	Sprite_Base.prototype.constructor = Sprite_Base;

	Sprite_Base.prototype.initialize = function() {
		Sprite.prototype.initialize.apply(this,arguments);
		this._animationSprites = [];
		this._effectTarget = this;
		this._hiding = false;
	};

	Sprite_Base.prototype.update = function() {
		Sprite.prototype.update.apply(this,arguments);
		this.updateVisibility();
		this.updateAnimationSprites();
	};

	Sprite_Base.prototype.hide = function() {
		this._hiding = true;
		this.updateVisibility();
	};

	Sprite_Base.prototype.show = function() {
		this._hiding = false;
		this.updateVisibility();
	};

	Sprite_Base.prototype.updateVisibility = function() {
		this.visible = !this._hiding;
	};

	Sprite_Base.prototype.updateAnimationSprites = function() {
		if (this._animationSprites.length > 0) {
			var sprites = this._animationSprites.clone();
			this._animationSprites = [];
			for (var i = 0; i < sprites.length; i++) {
				var sprite = sprites[i];
				if (sprite.isPlaying()) {
					this._animationSprites.push(sprite);
				} else {
					//sprite.remove();
					sprite.destroy(); //RMMZ is more hardcore than RMMV
				}
			}
		}
	};

	Sprite_Base.prototype.startAnimation = function(animation, mirror, delay) {
		var sprite = new Sprite_Animation();
		sprite.setup(this._effectTarget, animation, mirror, delay);
		this.parent.addChild(sprite);
		this._animationSprites.push(sprite);
	};

	Sprite_Base.prototype.isAnimationPlaying = function() {
		return this._animationSprites.length > 0;
	};




	//dummy out this function; this is what makes the loading bar move
	//but RMMZ uses a spinner instead!
	Graphics.updateLoading = function() {
	}


	//create empty dummy functions for animations and balloons.
	Sprite_Character.prototype.updateAnimation=function(){}
	Sprite_Character.prototype.setupAnimation=function(){}
	Sprite_Character.prototype.endAnimation=function(){}
	Sprite_Character.prototype.setupBalloon=function(){}
	Sprite_Character.prototype.startBalloon=function(){}
	Sprite_Character.prototype.updateBalloon=function(){this.setupBalloon();}
	Sprite_Character.prototype.endBalloon=function(){}




	//RMMV calls them 'normal' bitmaps, RMMZ doesn't, I guess RMMZ is just abnormal.
	//I am discarding the hue information here because RMMZ does things differently,
	//and more efficiently.
	//If you need a hue shift on a sprite, use a 'this.setHue(hue)' injection instead.
	//sadly, since this is an imagemanager, I can't just stick a setHue in here and solve
	//that issue preemptively. :(
	ImageManager.loadNormalBitmap = function(url, hue) {
		const cache = url.includes("/system/") ? this._system : this._cache;
		if (!cache[url]) {
			cache[url] = Bitmap.load(url);
		}
		return cache[url];

	};
	
	ImageManager.loadEmptyBitmap = function() {
		const cache = this._system
		if (!cache["empty"]) {
			cache["empty"] = new Bitmap()
		}
		return cache["empty"];
	}
	
	// we now 'load' images instead of 'reserve' them.  Do the needful.
	ImageManager.reserveAnimation = ImageManager.loadAnimation;
	ImageManager.reserveBattleback1 = ImageManager.loadBattleback1;
	ImageManager.reserveBattleback2 = ImageManager.loadBattleback2;
	ImageManager.reserveCharacter = ImageManager.loadCharacter;
	ImageManager.reserveEnemy = ImageManager.loadEnemy;
	ImageManager.reserveFace = ImageManager.loadFace;
	ImageManager.reserveParallax = ImageManager.loadParallax;
	ImageManager.reservePicture = ImageManager.loadPicture;
	ImageManager.reserveSvActor = ImageManager.loadSvActor;
	ImageManager.reserveSvEnemy = ImageManager.loadSvEnemy;
	ImageManager.reserveSystem = ImageManager.loadSystem;
	ImageManager.reserveTileset = ImageManager.loadTileset;
	ImageManager.reserveTitle1 = ImageManager.loadTitle1;
	ImageManager.reserveTitle2 = ImageManager.loadTitle2;


	//This rotate hue method from RMMV is very inefficient.
	//However, because some old plugins directly blt images together
	// I'm including it.  Try to avoid using it if possible - you should never
	//need to rotatehue for something that's going into a sprite.
	/**
	 * Rotates the hue of the entire bitmap.
	 *
	 * @method rotateHue
	 * @param {Number} offset The hue offset in 360 degrees
	 */
	Bitmap.prototype.rotateHue = function(offset) {
		function rgbToHsl(r, g, b) {
			var cmin = Math.min(r, g, b);
			var cmax = Math.max(r, g, b);
			var h = 0;
			var s = 0;
			var l = (cmin + cmax) / 2;
			var delta = cmax - cmin;

			if (delta > 0) {
				if (r === cmax) {
					h = 60 * (((g - b) / delta + 6) % 6);
				} else if (g === cmax) {
					h = 60 * ((b - r) / delta + 2);
				} else {
					h = 60 * ((r - g) / delta + 4);
				}
				s = delta / (255 - Math.abs(2 * l - 255));
			}
			return [h, s, l];
		}

		function hslToRgb(h, s, l) {
			var c = (255 - Math.abs(2 * l - 255)) * s;
			var x = c * (1 - Math.abs((h / 60) % 2 - 1));
			var m = l - c / 2;
			var cm = c + m;
			var xm = x + m;

			if (h < 60) {
				return [cm, xm, m];
			} else if (h < 120) {
				return [xm, cm, m];
			} else if (h < 180) {
				return [m, cm, xm];
			} else if (h < 240) {
				return [m, xm, cm];
			} else if (h < 300) {
				return [xm, m, cm];
			} else {
				return [cm, m, xm];
			}
		}

		if (offset && this.width > 0 && this.height > 0) {
			offset = ((offset % 360) + 360) % 360;
			var context = this._context;
			var imageData = context.getImageData(0, 0, this.width, this.height);
			var pixels = imageData.data;
			for (var i = 0; i < pixels.length; i += 4) {
				var hsl = rgbToHsl(pixels[i + 0], pixels[i + 1], pixels[i + 2]);
				var h = (hsl[0] + offset) % 360;
				var s = hsl[1];
				var l = hsl[2];
				var rgb = hslToRgb(h, s, l);
				pixels[i + 0] = rgb[0];
				pixels[i + 1] = rgb[1];
				pixels[i + 2] = rgb[2];
			}
			context.putImageData(imageData, 0, 0);
			//this._setDirty();
		}
	};


	//add this weird follower reversal function from RMMV
	Game_Followers.prototype.reverseEach = function(callback, thisObject) {
		this._data.reverse();
		this._data.forEach(callback, thisObject);
		this._data.reverse();
	};
	Game_Followers.prototype.forEach = function(callback, thisObject) {
		this._data.forEach(callback, thisObject);
	};

	//some plugins try to deal with the pixi tilemap.  Normally this is just pushing a new value to it
	//placeholder to avoid crashing.
	PIXI.tilemap={}
	PIXI.tilemap.TileRenderer={}

	//in MV window.onload was the function that ran right after plugins and started the game.
	// MZ's load process is different, and sadly since classes are immutable you can't 
	// simply patch into main :(

	//ATM I'm putting in an empty window.onload

	 window.onload = function ()
	 {
		//a target for injecting before-title-screen code.
		//or it should be, anyway, once I find a place to hook it in
		//as is, this is where code goes to die. :(
	 }
	 

	//RMMZ expects the 'folder' input to end with a slash  (so "se/")
	//RMMV expects it will need to add a slash itself (so "se")
	//add a slash if there isn't one at the end of the folder name.
	Fossil.FixAudioManagerBufferSlash=AudioManager.createBuffer
	AudioManager.createBuffer = function(folder, name) {
		if(folder && folder[folder.length-1] !== '/')
		{
			folder=folder+'/';
		}
		return Fossil.FixAudioManagerBufferSlash.apply(this,arguments);
	};
		
	//load fonts with the new version
	Graphics.loadFont = function(name, url) {
		//in RMMV font loading includes the /font/ tag, but in MZ it doesn't!  Remove that
		if(url.substring(0,6) == 'fonts/')
		{
			url=url.substring(6);
		}
		
		FontManager.load(name,url);
	}



	Sprite_Animation.prototype.updateFlash = function() {
		if (this._flashDuration > 0) {
			const d = this._flashDuration--;
			this._flashColor[3] *= (d - 1) / d;
			
			if(this._targets && this._targets.length)
			{
				for (const target of this._targets) {
					target.setBlendColor(this._flashColor);
				}
				
			}else{
				
				if(this._target)
				{
					this._target.setBlendColor(this._flashColor)
				}
			}
		}
	};

	Sprite_Animation.prototype.targetSpritePosition = function(sprite) {

		const point = new Point(0, -sprite.height / 2);
		if (this._animation.alignBottom) {
			point.y = 0;
		}
		//sprites don't always have parents in MV.  Those poor orphan sprites ... :(
		if(sprite.parent)
		{
			sprite.updateTransform();
		}
		return sprite.worldTransform.apply(point);
	};

	//this was reassigned to Sprite_Battleback in MZ.
	Spriteset_Battle.prototype.battleback1Bitmap=function()
	{
		return ImageManager.loadBattleback1(Sprite_Battleback.prototype.battleback1Name());
	}

	Spriteset_Battle.prototype.battleback2Bitmap=function()
	{
		return ImageManager.loadBattleback2(Sprite_Battleback.prototype.battleback2Name());
	}

	//make characters be able to request animations again!
	//uses the new ones (obvs)
	Game_CharacterBase.prototype.requestAnimation = function(animationId) {
		$gameTemp.requestAnimation([this], animationId);
	};

	//request balloons.
	Game_CharacterBase.prototype.requestBalloon = function(balloonId) {
		$gameTemp.requestBalloon(this,balloonId);
	};


	Game_Battler.prototype.startAnimation = function (animationId, mirror, delay)
	{
		$gameTemp.requestAnimation([this], animationId);
		
	}

	//MV includes the '.js' in filenames when calling plugins
	//MZ does not.  Check if it's there, and if it is, remove it.
	Fossil.fixPluginManagerLoadScript= PluginManager.loadScript
	PluginManager.loadScript = function(name) {
		if(name.substring(name.length-3)=='.js')
		{
			if (Utils.isOptionValid('test'))
			{
				console.log('trimmed a .js off a plugin call')
			}
			name=name.substring(0,name.length-3)
			
		}
		Fossil.fixPluginManagerLoadScript.call(this,name);
	};



	//RMMZ does this as a transform all at once.
	//RMMV does x and y as different functions.
	//It's inefficient to do it twice, but whatever, it's running a transform
	//twice per click, that's nothing.
	Window_Base.prototype.canvasToLocalX = function(x) {
		const touchPos = new Point(TouchInput.x, TouchInput.y);
		const localPos = this.worldTransform.applyInverse(touchPos);
		return localPos.x;
	};

	Window_Base.prototype.canvasToLocalY = function(y) {
		const touchPos = new Point(TouchInput.x, TouchInput.y);
		const localPos = this.worldTransform.applyInverse(touchPos);
		return localPos.y;
	};


	var addToneToSpritesetBaseInitialize =Spriteset_Base.prototype.initialize
	Spriteset_Base.prototype.initialize = function(){
		addToneToSpritesetBaseInitialize.apply(this,arguments);
		this.createToneChanger();
	}


	//this is a dummy function for injection (mog needs it)
	Spriteset_Base.prototype.createToneChanger = function() {
		//dummy function for injection!
	};

	//this is stored elsewhere in RMMZ so redirect
	Spriteset_Battle.prototype.battleback1Name = function() {
		return Sprite_Battleback.prototype.battleback1Name.apply(this,arguments);
	};

	Spriteset_Battle.prototype.battleback2Name = function() {
		return Sprite_Battleback.prototype.battleback2Name.apply(this,arguments);
	}


	ImageCache={};// The image cache works differently now, so let plugins that want to fiddle around with it play with a toy version :)
	ImageCache.prototype={};


	//There isn't a 'process normal character' function in MZ anymore
	//Add a dummy process normal character in the same place it used to be.  
	//and give it a chance to tell the plugin that we are done processing it (this will need
	//to be added manually)
	var addNormaltoWindowBaseProcessCharacter=Window_Base.prototype.processCharacter;
	Window_Base.prototype.processCharacter = function(textState) {
		//some plugins, like SRD_ShakingText, put in a full alternate character processing
		//version.  Obviously if this happens we end up with text AlTeRnAtInG between print
		//modes which is no good.  So if we need to stop processing this character, stop.
		this.fossilStopProcessingThisCharacter=false;
		this.processNormalCharacter(textState)

		if(!this.fossilStopProcessingThisCharacter)
		{
			addNormaltoWindowBaseProcessCharacter.apply(this,arguments);
		}	
	}

	Window_Base.prototype.processNormalCharacter = function(textState) 
	{
		//dummy for injection
	}


	//MV style window functions
	//if we want to restore look and feel of MV windows we can set functions to be this
	Fossil.MV=Fossil.MV||{};
	Fossil.MV.drawItemBackground = function (){}
	Fossil.MV.itemHeight=function(){return this.lineHeight()}	
	//scootch the cursor down a little bit.
	Fossil.MV.setCursorRect = function(x, y, width, height) {
		y+=2;
		Window.prototype.setCursorRect.apply(this,arguments);
	}


	/////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////
	// Plugin specific PRE overwrites
	/////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////
	//These go at the beginning because if a different plugin makes changes
	//to this core function, we don't want to overwrite those changes.
	//Basically, no plugin-specific positioning, these guys are at the front forever.


	if(Fossil.pluginNameList.contains('YEP_X_ChangeBattleEquip') ||
		Fossil.pluginNameList.contains('YEP_X_ActorPartySwitch') ||
		Fossil.pluginNameList.contains('YEP_RowFormat')
		)
	{
		//we don't want to destroy scenes if we don't want to, so rewrite this function to make sure it will
		//check to see if it needs to hold onto things.
		SceneManager.onBeforeSceneStart = function() {
			if (this._previousScene) {
				if(!this.fossilHoldOnToScene)
				{
					this._previousScene.destroy();
				}
				this._previousScene = null;
			}
			if (Graphics.effekseer) {
				Graphics.effekseer.stopAll();
			}
		}
	};

	if(Fossil.pluginNameList.contains('YEP_BattleEngineCore'))
	{
		//okay this is horrible so let me explain it
		//selectEnemySelection got renamed to startEnemySelection
		//selectActorSelection got renamed to startActorSelection
		
		//we want to splice in the battle engine selection code appropriately.
		//so replace this guy with selectEnemySelection
		//then have selectEnemySelection call startEnemySelection and do nothing
		Scene_Battle.prototype.onSelectAction = function() {
			const action = BattleManager.inputtingAction();
			if (!action.needsSelection()) {
				this.selectNextCommand();
			} else if (action.isForOpponent()) {
				this.selectEnemySelection();
			} else {
				this.selectActorSelection();
			}
		};
		
		Scene_Battle.prototype.selectEnemySelection = function() {
			this.startEnemySelection()
		}
		Scene_Battle.prototype.selectActorSelection = function() {
			this.startActorSelection()
		}
		// Seems to be fixed as per version 0.4, but leaving code here
/* 		// selection help is broken because the interface with MZ changed
		// if enabled it requires target selection for every ability, regardless of
		// whether or not this selection is needed.
		// so for instance guard will ask which ally to use it on, and regardless 
		// of who you say, still apply it to the user
		// this looks like a pain to fix for a minor cosmetic setting.
		// I'm just forcibly turning the plugin parameter off, since it's on by default.
		if(PluginManager.parameters('YEP_BattleEngineCore')['Select Help Window'])
		{
			if (Utils.isOptionValid('test'))
			{
				console.log('Select Help Window option in YEP_BattleEngineCore is not supported.')
				console.log('Fossil has disabled it.')
			}
			PluginManager.parameters('YEP_BattleEngineCore')['Select Help Window']="false";
			
		} */
	}

	if(Fossil.pluginNameList.contains('YEP_X_MoreCurrencies'))
	{
		//yanfly didn't initialize Yanfly.Icon when getting Yanfly.Icon.Gold in this
		//initialize all the Yanfly namespace.
		window.Yanfly = Yanfly || {};
		Yanfly.Param = Yanfly.Param || {};
		Yanfly.Icon = Yanfly.Icon || {};
	}


	if(Fossil.pluginNameList.contains('Gimmer_MirrorMirrorOnTheWall'))
	{
		//give it a shadertilemap to play with - this object doesn't exist in RMMZ but it's basically
		//been subsumed by tilemap.
		
		function ShaderTilemap() {
			Tilemap.apply(this, arguments);
			this.roundPixels = true;
		}
		ShaderTilemap.prototype = Object.create(Tilemap.prototype);
		ShaderTilemap.prototype.constructor = ShaderTilemap;
		//account for the rmmz ._bitmaps vs rmmv .bitmaps on our tilemap.
		Object.defineProperty(ShaderTilemap.prototype, "bitmaps", {
			get: function() {
				return this._bitmaps;
			},
			set: function(value) {
				this._bitmaps = value;
			},
			configurable: true
		});
		
		//give it a useless refreshtileset function
		Tilemap.prototype.refreshTileset = function() {

		};

		
	}

	if(Fossil.pluginNameList.contains('YEP_MessageCore'))
	{
		//I have to overwrite the definition for a message window here
		//so that it respects yanfly's new definitions for size.
		Scene_Message.prototype.messageWindowRect = function() {
			const ww = $gameSystem.messageWidth()||Graphics.boxWidth;
			const wh = this.calcWindowHeight($gameSystem._messageRows||4, false) + 8;
			const wx = (Graphics.boxWidth - ww) / 2;
			const wy = 0;
			return new Rectangle(wx, wy, ww, wh);
		};
	}
	
	
	
	
}



	/////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////
	// PLUGIN SPECIFIC DYNAMIC ADDITIONS: PRE PLUGIN
	/////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////
	//We add these fixes to immediately before the plugin they're attached to, 
	//which should reduce side-effects significantly.

fossilDynamicFixes=function(){
	Fossil.preList=[]
	var preListIndex=0;
	Fossil.postList=[]
	var postListIndex=0;

	//loadPreFix is an important function.
	//
	//It takes in a string or ['an','array','of','strings'] for the first argument
	//and a function for the second argument.
	//
	//if the plugin is in our project, then we add an entry to Fossil.preList
	//This entry is an object with a 'pluginName' property and a 'preFunction' property.
	//the pluginName is the name of the function it our fixes need to be placed immediately before
	//and preFunction contains all the fixes needed.

	//if there is an array of multiple plugin names, we go before ALL of them
	//specifically, immediately before the first of them
	//so if our list is
	// A B C D E F G H
	// and the targetPlugins is ['F','C','G']
	// we would end up putting our fixes here:
	// A B*C D E F G H
	//    ^
	// As 'C' is the earliest of the listed plugins.
	//
	// Note that these fixes only get applied ONCE if you list multiple plugins 
	Fossil.loadPreFix = function(targetPlugins,newFunction)
	{
		if ((targetPlugins==undefined)||(newFunction==undefined))
		{
			console.log('Missing a function or targets when adding a pre plugin fix!')
			return;
		}
		var havePlugin=false;

		//turn it into an array if it isn't one.
		if(typeof(targetPlugins)=='string')
		{
			targetPlugins=[targetPlugins]
		}
		var earliestPlugin=targetPlugins[0];
		
		for(var index=0;index<Fossil.pluginNameList.length;index++)
		{
			for(var targetindex=0;targetindex<targetPlugins.length;targetindex++)
			{
				if (Fossil.pluginNameList.contains(targetPlugins[targetindex]))
				{
					//this is the earliest plugin location.
					earliestPlugin=targetPlugins[targetindex];
					havePlugin=true;
					break;
				}
			}
			
			if(havePlugin)
			{
				break;
			}
		}
		
		if(havePlugin)
		{
			
			//format as array and add to the names list
			Fossil.preList[preListIndex] ={pluginName:earliestPlugin}
			Fossil.preList[preListIndex].preFunction=newFunction;
			preListIndex++;
		}
	}


	//loadPostFix is basically the same as LoadPreFix.
	//ths big difference is (A) fixes are intended to be inserted AFTER the plugin
	//and (B) if you list multiple plugins, it gets added AFTER all of them
	Fossil.loadPostFix = function(targetPlugins,newFunction)
	{
		if ((targetPlugins==undefined)||(newFunction==undefined))
		{
			console.log('Missing a function or targets when adding a post plugin fix!')
			return;
		}
		var havePlugin=false;

		//turn it into an array if it isn't one.
		if(typeof(targetPlugins)=='string')
		{
			targetPlugins=[targetPlugins]
		}
		var latestPlugin=targetPlugins[0];
		
		for(var index=0;index<Fossil.pluginNameList.length;index++)
		{
			for(var targetindex=0;targetindex<targetPlugins.length;targetindex++)
			{
				if (Fossil.pluginNameList.contains(targetPlugins[targetindex]))
				{
					//keep replacing these.  The last one that sticks is the latest plugin location.
					latestPlugin=targetPlugins[targetindex];
					havePlugin=true;
				}
			}
		}
		
		if(havePlugin)
		{
			
			//format as array and add to the names list
			Fossil.postList[postListIndex] ={pluginName:latestPlugin}
			Fossil.postList[postListIndex].postFunction=newFunction;
			postListIndex++;
		}
	}

	//Here's an example of setting up a single plugin with loadPreFix 

	//note that this is actually one big call to loadPreFix
	//the second parameter (our function that backs up the plugin manager commands)
	//extends all the way down.  REMEMBER you need a closing bracket and parenthesis
	//not just a closing bracket.
	Fossil.loadPreFix('WAY_Core',function()
	{
		Fossil.backupPluginManagerCommands=PluginManager._commands;
	})
	//^ see that closing bracket and paren?  That's important not to forget.
	
	//and you can see the other half of the WAY_Core fix
	//the loadPostFix function is exactly the same as loadPreFix
	
	Fossil.loadPostFix('WAY_Core',function()
	{
		PluginManager._commands=Fossil.backupPluginManagerCommands;
	
		Fossil.WAYpluginaddCommand=PluginManager.addCommand;
		PluginManager.addCommand = function (command, actions) 
		{
			var backupPluginManagerCommands=PluginManager._commands;
			PluginManager._commands=Fossil._WAYcommands ||{};
			Fossil.WAYpluginaddCommand.call(this,command,actions);
			Fossil._WAYcommands=PluginManager._commands;
			PluginManager._commands= backupPluginManagerCommands;
		};

		Fossil.WAYplugingetcommand=PluginManager.getCommand;
		PluginManager.getCommand = function (command) 
		{
			var backupPluginManagerCommands=PluginManager._commands;
			PluginManager._commands=Fossil._WAYcommands ||{};
			var newcommand =Fossil.WAYplugingetcommand.call(this,command);
			Fossil._WAYcommands=PluginManager._commands;
			PluginManager._commands= backupPluginManagerCommands;
			return newcommand;
		};
	})

	Fossil.loadPreFix('YEP_BattleEngineCore',function()
	{
		console.log('pre BEC applied')
		//need to pass in the active time since BEC doesn't.
		fixactivetimeBECupdateTurn=BattleManager.updateTurn
		BattleManager.updateTurn = function(timeActive = SceneManager._scene.isTimeActive())
		{
			fixactivetimeBECupdateTurn.call(this,timeActive)
		}
		fixactivetimeBEConTurnEnd=Game_Battler.prototype.onTurnEnd;

		/////Battle_Core
		//MV function, but with the equivalent code from MZ's BattleManager.startInput
		BattleManager.clearActor = function() {
			this._currentActor = null;
		};

		Fossil.backupSprite_BattlerDamagePopup=Sprite_Battler.prototype.setupDamagePopup;
		Fossil.backupdisplayHpDamage=Window_BattleLog.prototype.displayHpDamage;
		Fossil.backupdisplayMpDamage=Window_BattleLog.prototype.displayMpDamage;
		Fossil.backupdisplayTpDamage=Window_BattleLog.prototype.displayTpDamage;

		Fossil.backupSpriteDamageSetup=Sprite_Damage.prototype.setup;
		
		//avoid name collision with yanfly
		BattleManager.updateBattlePhase = BattleManager.updatePhase;
		//fix it here.
		BattleManager.update = function(timeActive) {
			if (!this.isBusy() && !this.updateEvent()) {
				this.updateBattlePhase(timeActive);
			}
			if (this.isTpb()) {
				this.updateTpbInput();
			}
		};
		
		
		if(Fossil.pluginNameList.contains('YEP_X_BattleSysATB'))
		{
			//overwrite the MZ ATB with the BEC ATB
			Game_Battler.prototype.tpbChargeTime = function() {
				return this.atbRate();
			};
			
			Window_StatusBase.prototype.placeTimeGauge = function(actor, x, y) {
					this.placeGauge(actor, "time", x, y);
			};
			
		}
		
		if(Fossil.pluginNameList.contains('YEP_X_BattleSysCTB'))
		{
			//overwrite the MZ ATB with the BEC CTB
			Game_Battler.prototype.tpbChargeTime = function() {
				return this.ctbRate();
			};
			
			Window_StatusBase.prototype.placeTimeGauge = function(actor, x, y) {
					this.placeGauge(actor, "time", x, y);
			};
			
		}

		//setting flags for phase changes
		BattleManager.startEndPhase = function()
		{
			this._enteredEndPhase=true;
		}
		BattleManager.endEndPhase = function()
		{
			this._enteredEndPhase=false;
		}
		BattleManager.clearPerformedBattlers = function()
		{
			this._performedBattlers= [];
		}

		//back up the start and end turn functions so we can revert the BC changes to them.
		MZBattleManagerEndTurn=BattleManager.endTurn;
		MZBattleManagerStartTurn=BattleManager.startTurn;

		//if there are no subjects for an action (as can happen with action sequences)
		// RMMZ chokes because it can't end it.  So let's tell it to just stop if it doesn't
		// have a subject.
		Fossil.fixEndActionBEC=BattleManager.endAction
		BattleManager.endAction = function() 
		{
			if(!this._subject){
				return
			}
			Fossil.fixEndActionBEC.apply(this,arguments)
		}
		
	})

	Fossil.loadPreFix('YEP_X_InBattleStatus',function()
	{
		//move gauges on the in battle status window.
		
		Window_InBattleStatus.prototype.placeGauge = function(actor, type, x, y) 
		{
			const key = "actor%1-gauge-%2".format(actor.actorId(), type);
			const sprite = this.createInnerSprite(key, Sprite_Gauge);
			sprite.setup(actor, type);
			if(this.constructor.name == 'Window_InBattleStatus')
			{
				sprite.move(x-40,y)
			}else{
				sprite.move(x, y);
			}
			sprite.show();
		};


		Window_InBattleStatus.prototype.drawActorClass = function(actor, x, y, width) {
			width = width || 168;
			this.resetTextColor();
			if(this.constructor.name == 'Window_InBattleStatus')
			{
				this.drawText(actor.currentClass().name, x-54, y, width,'right');
			}else{
				this.drawText(actor.currentClass().name, x, y, width);
			}
		};
	})

	Fossil.loadPreFix('SRD_ShakingText',function()
	{
		//undo the weird little textstate++/-- shift SRD does in obtainEscapeCode
		//this will cause problems if SRD_ShakingText isn't the last message parsing plugin before Fossil_Post
		//but we'll cross that bridge when we come to it.
		Fossil.FixSRDShakeTextWindowMessageobtainEscapeCodePre = Window_Message.prototype.obtainEscapeCode;
		Window_Message.prototype.obtainEscapeCode = function(textState)
		{
			textState.index++;
			return Fossil.FixSRDShakeTextWindowMessageobtainEscapeCodePre.apply(this,arguments);
		}
		
	})

	Fossil.loadPreFix('YEP_MainMenuManager',function()
	{
		Fossil.fixWindowCommandMaxItemsCrash=Window_Command.prototype.maxItems;
		Window_Command.prototype.maxItems = function() {
			if (this._list == undefined)
			{
				this.clearCommandList()
				return 1;//we shouldn't have any empty command lists.
			}
			return Fossil.fixWindowCommandMaxItemsCrash.apply(this,arguments)
		};
		
	})

	Fossil.loadPreFix('YEP_JobPoints',function()
	{
		//this got moved from window_base to window_statusbase.
		//since YEP_jobpoints wants to meddle only with Window_Base.prototype.drawActorSimpleStatus
		//set up something in advance.
		Fossil.WSBdrawActorSimpleStatus=Window_StatusBase.prototype.drawActorSimpleStatus;
		Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y) {
			Fossil.WSBdrawActorSimpleStatus.apply(this,arguments)
			//this actually draws the job and does nothing else.
			//use the same params as icon drawing, which means that it draws the job points
			//two lines below the level.
			Window_Base.prototype.drawActorClass.call(this,actor, x, y + this.lineHeight() * 2.5)
		};
		
		
	})

	Fossil.loadPreFix('YEP_MapStatusWindow',function()
	{
		//this blurs the line between Scene_Map and Scene_Battle.
		//hand Scene_Map the needed function
		Scene_Map.prototype.windowAreaHeight = Scene_Battle.prototype.windowAreaHeight;

	})

	Fossil.loadPreFix('YEP_KeyNameEntry',function()
	{
		//copied out of rpg_windows from MV
		Window_ChoiceList.prototype.textWidthEx = function(text) {
			return this.drawTextEx(text, 0, this.contents.height);
		};
	})


	Fossil.loadPreFix('YEP_SaveCore',function()
	{
		//Fossil.backupSceneFileCreateListWindow=Scene_File.prototype.createListWindow;
		
		DataManager.isThisGameFile=DataManager.savefileExists;
		DataManager.loadSavefileInfo =DataManager.savefileInfo;
		
		Window_SavefileList.prototype.drawFileId=Window_SavefileList.prototype.drawTitle;
		//make a fake function that does nothing, since apparently rmmz doesn't do backups?
		StorageManager.cleanBackup=function(){}
	})

	Fossil.loadPreFix('YEP_MessageCore',function()
	{	
		//create a copy of the current namebox definition, so we can undo the changes messagecore
		//makes to it.
		MZ_Window_NameBox=Window_NameBox;
	})

	Fossil.loadPreFix('Pv_ParticleCore',function()
	{
		//import pixi particles
			Fossil.particleScript = document.createElement("script");
			Fossil.particleScript.type = "text/javascript";
			Fossil.particleScript.async = false;
			Fossil.particleScript.defer = true;
			Fossil.particleScript.src='js/libs/pixi-particles.js'
			document.body.appendChild(Fossil.particleScript);
			Fossil.particleScript=undefined;//clean up after ourselves.
			if(Fossil.chattyOutput){console.log('FOSSIL has imported pixi particles')}
	})
	
	

	Fossil.loadPreFix('DTextPicture',function()
	{
		
		var fixHiddenWindowBase= Window_Base.prototype.initialize;
		Window_Base.prototype.initialize = function(rect) {
		
		if(this.constructor.name == 'Window_Hidden')
			{
				PIXI.Container.call(this);
				this.updateBackOpacity=function(){};
				//Window.prototype._createAllParts.call(this);
				const tempCreateContents = this.createContents;
				this.createContents=function(){
					this._contentsSprite=this._windowContentsSprite;
					this._contentsBackSprite=this._windowBackSprite;
					this._frameSprite=this._windowFrameSprite;
					tempCreateContents.apply(this,arguments);
				}
				
				//Window.prototype._createAllParts.call(this);
				//we have to inject here because it's not visible outside.
			}
			fixHiddenWindowBase.apply(this,arguments);
			
		}
		//prevent an infinite loop when it tries to process a new line 
		Fossil.DtextFixNewlineProcess=Window_Base.prototype.processNewLine;
		Window_Base.prototype.processNewLine = function(textState) {
			Fossil.DtextFixNewlineProcess.apply(this,arguments);
			if(this.constructor.name == 'Window_Hidden')
			{
				textState.index++;//it doesn't increment this.
			}
		};
		//this plugin is pretty hard to work with, 
		//and fixing it is a big pain
		//I think I will leave this for later?
	})
	
	Fossil.loadPreFix('MVP_MouseOperation',function()
	{
		//this doesn't get defined in MV at all?  It's a mystery.
		Window_Selectable.prototype.onTouch=function(){}
		Fossil.undoMVPProcessTouchChanges=Window_Selectable.prototype.processTouch;
	})
	
	Fossil.loadPostFix('MVP_MouseOperation',function()
	{
		Window_Selectable.prototype.processTouch=Fossil.undoMVPProcessTouchChanges;
		Fossil.undoMVPProcessTouchChanges=undefined;
		
	})
	
	Fossil.loadPreFix('SRPG_MouseOperation',function()
	{
		Fossil.fixSRPGMouseWheel=TouchInput._onWheel 
		TouchInput._onWheel = function(event) {
			Fossil.fixSRPGMouseWheel.apply(this,arguments);
			if(typeof(this._events)=='undefined')
			{
				this._events = {}
			}
			
			this._events.wheelY=this._newState.wheelY;
			this._events.wheelX=this._newState.wheelX;
		}
	})

	
	//////////////////////////////////////////////////////////////////////
	//PRE CHECK IS NOW COMPLETE
	/////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////
	// PLUGIN SPECIFIC DYNAMIC ADDITIONS: POST PLUGIN
	/////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////
	//We add these plugins immediately AFTER the plugin they're attached to, 
	//which should reduce side-effects.



	//these are the fixes that go all the way at the end, after any other plugins
	//
	Fossil.finalFixes=function()
		{
		//force the help window to the top, for yanfly plugins that assume it'll be there
		Fossil.moveHelpWindowForYEP=Scene_MenuBase.prototype.helpAreaTop;
		Scene_MenuBase.prototype.helpAreaTop= function()
		{

			//this is for YEP_EquipCustomize
			if(this.constructor.name =="Scene_EquipCustomize")
			{
				return 0;
			}
			
			if(Imported.YEP_ShopMenuCore && this.constructor.name == "Scene_Shop")
			{
				return 0;
			}
			
			if(Imported.JKMail && this.constructor.name=="Scene_Mail")
			{
				return 0;
			}
			
			return Fossil.moveHelpWindowForYEP.call(this,arguments);
		}

//probably don't need to remove it, actually, 
//if MV code gets injected it OUGHT to be harmless in most cases.
/* 		//re-remove any legacy animation stuff, as well as anything hooked into it.
		Sprite_Character.prototype.updateAnimation=function(){}
		Sprite_Character.prototype.setupAnimation=function(){}
		Sprite_Character.prototype.endAnimation=function(){}

		if(!Imported.YEP_IconBalloons)
		{
			//and re-remove speech balloons
			Sprite_Character.prototype.setupBalloon=function(){}
			Sprite_Character.prototype.updateBalloon=function(){}
			Sprite_Character.prototype.startBalloon=function(){}
			Sprite_Character.prototype.endBalloon=function(){}
		}
 */
		//hue is now done as a sprite property rather than upon bitmap loading.  This uses the new RMMZ version.
		var updateSpriteBaseHue = Sprite_Base.prototype.initialize
		Sprite_Base.prototype.initialize = function() {
			updateSpriteBaseHue.call(this)
			if(this._data && this._data.hue)
			{
				this.setHue(this._data.hue);
			}
		};

	//incorporate windowfixer
	//these definitions are from version 0.3.01, and are just copypasted with a find-and-replace (rectFix->rectFixFinal) from the window definitions earlier.
		
	//wrapped in an if(true) because it's long, and to disable it easily if people want to.
	if(true){
		var rectFixFinalWindowBase= Window_Base.prototype.initialize;
		Window_Base.prototype.initialize = function(rect) {
			
			if(arguments.length>0)
			{
				//if we have arguments that are missing in a weird order
				//(like having width and height but no x and y
				//then we should initialize them to 0.
				if (arguments[0]==undefined)
				{
					arguments[0]=0;
				}
				if (arguments[1]==undefined)
				{
					arguments[1]=0;
				}
				if (arguments[2]==undefined)
				{
					arguments[2]=0;
				}
				if (arguments[3]==undefined)
				{
					arguments[3]=0;
				}
				
			}else{
				//if arguments are zero length, throw a warning and set them to all be 0.
				if (Utils.isOptionValid('test'))
				{
					console.log('You created a window without defining the size!')
				}
				arguments=[0,0,0,0]
			}
				
			if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowBase.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(this._backupRect) //if we don't have a rectangle now, and backed up one earlier, use that one.
				{
					rect=this._backupRect;
					this._backupRect=undefined;
					rectFixFinalWindowBase.call(this,rect)
					return;
				}
				
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||400,  arguments[3]||Graphics.boxHeight);
				rectFixFinalWindowBase.call(this,rect)
			}

		};

		var rectFixFinalWindowSelectable= Window_Selectable.prototype.initialize;
		Window_Selectable.prototype.initialize = function(rect) {
			if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code 
			{
				rectFixFinalWindowSelectable.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV. :)
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||400,  arguments[3]||Graphics.boxHeight);
				rectFixFinalWindowSelectable.call(this,rect)
			}
			
		};
		//we have to do this each time for each window class :(
		var rectFixFinalWindowCommand= Window_Command.prototype.initialize;
		Window_Command.prototype.initialize = function(rect) {
			
			if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowCommand.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				
				
				var rectA=new Rectangle(0,0,0,0);
				//Window_Command is inherited from a lot of individual plugin windows.
				//handle case-by-case window sizes here.
				//I may have to refactor this later but this seems okay for now.
				
				switch(this.constructor.name)
				{
					case "Window_ItemActionCommand":
					case "Window_ItemDiscardConfirm":
					if(SceneManager._scene.itemWindowRect)
					{
						rectA=SceneManager._scene.itemWindowRect();
						rectA.height = (this.windowHeight ? this.windowHeight() : rectA.height)
					}
					break;

					default:
				}
					
					
					
				
				
				var rect = new Rectangle(
				arguments[0]||rectA.x, 
				arguments[1]||rectA.y, 
				arguments[2]||rectA.width ||(this.windowWidth ? this.windowWidth() : 0)  ||400,  
				arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight
				);
				rectFixFinalWindowCommand.call(this,rect)
				
			}
			
		};

		var rectFixFinalWindowMenuCommand= Window_MenuCommand.prototype.initialize;
		Window_MenuCommand.prototype.initialize = function(rect) {
			
			if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowMenuCommand.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				
				
				var rectA=new Rectangle(0,0,0,0);
				
				if(SceneManager._scene.commandWindowRect)
				{
					rectA=SceneManager._scene.commandWindowRect();
				}

				var rect = new Rectangle(
				arguments[0]||rectA.x, 
				arguments[1]||rectA.y, 
				arguments[2]||rectA.width ||(this.windowWidth ? this.windowWidth() : 0)  ||400,  
				arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight
				);
				rectFixFinalWindowMenuCommand.call(this,rect)
				
			}
			
		};

		var rectFixFinalWindowSkillList= Window_SkillList.prototype.initialize;
		Window_SkillList.prototype.initialize = function(rect) {
			if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowSkillList.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				
				//SRD initializes this tiny and then resizes it, which doesn't work anymore.
				//because the options size doesn't get set beyond the first entry.
				//do the reverse instead - start it big, then trust it to resize down.
				if(this.constructor.name == 'Window_SkillExtend')
				{
					arguments[3]=800;
				}
				
				
				var rect = new Rectangle(
				arguments[0], 
				arguments[1], 
				arguments[2]||(this.windowWidth ? this.windowWidth() : 0)||400,
				arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight
				);
				rectFixFinalWindowSkillList.call(this,rect)
			}

		};

		var rectFixFinalWindowEquipCommand= Window_EquipCommand.prototype.initialize;
		Window_EquipCommand.prototype.initialize = function(rect) {
			
			if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowEquipCommand.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
				rectFixFinalWindowEquipCommand.call(this,rect)
				
			}
			
		};

		var rectFixFinalWindowSkillStatus= Window_SkillStatus.prototype.initialize;
		Window_SkillStatus.prototype.initialize = function(rect) {
			
			if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowSkillStatus.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
				rectFixFinalWindowSkillStatus.call(this,rect)
				
			}
			
		};

		var rectFixFinalWindowStatusBase= Window_StatusBase.prototype.initialize;
		Window_StatusBase.prototype.initialize = function(rect) {
			
			if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowStatusBase.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
				rectFixFinalWindowStatusBase.call(this,rect)
				
			}
			
		};

		var rectFixFinalWindowItemList= Window_ItemList.prototype.initialize;
		Window_ItemList.prototype.initialize = function(rect) {
			
			if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowItemList.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
				rectFixFinalWindowItemList.call(this,rect)
				
			}
			
		};

		var rectFixFinalWindowEquipSlot= Window_EquipSlot.prototype.initialize;
		Window_EquipSlot.prototype.initialize = function(rect) {
			
			if (arguments.length>0 && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowEquipSlot.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				var rectA=new Rectangle(0,0,0,0);
				if (SceneManager._scene.slotWindowRect)
				{
					rectA=SceneManager._scene.slotWindowRect(); //pick the defaults.
				}
				var rect = new Rectangle(
				(typeof(arguments[0]) == undefined? rectA.x : arguments[0])||0,
				(typeof(arguments[1]) == undefined? rectA.y : arguments[1])||0,
				arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  
				arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight
				);
				rectFixFinalWindowEquipSlot.call(this,rect)
				
			}
			
		};

		var rectFixFinalWindowEquipItem= Window_EquipItem.prototype.initialize;
		Window_EquipItem.prototype.initialize = function(rect) {
			
			if (arguments.length && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowEquipItem.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				
				var rectA=new Rectangle(0,0,0,0);
				if (SceneManager._scene.itemWindowRect)
				{
					rectA=SceneManager._scene.itemWindowRect(); //pick the defaults.
				}
				
				var rect = new Rectangle(
				typeof(arguments[0]) == undefined? rectA.x : arguments[0],
				typeof(arguments[1]) == undefined? rectA.y : arguments[1],
				arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
				arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
				
				rectFixFinalWindowEquipItem.call(this,rect)
				
			}
			
		};

		var rectFixFinalWindowGold= Window_Gold.prototype.initialize;
		Window_Gold.prototype.initialize = function(rect) {
			
			if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowGold.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				var rectA=new Rectangle(0,0,0,0);
				if (SceneManager._scene.goldWindowRect)
				{
					rectA=SceneManager._scene.goldWindowRect(); //pick the defaults.
				}
				var rect = new Rectangle(
				typeof(arguments[0]) == undefined? rectA.x : arguments[0],
				typeof(arguments[1]) == undefined? rectA.y : arguments[1],
				arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,
				arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
				
				rectFixFinalWindowGold.call(this,rect)
				
			}
			
		};

		var rectFixFinalWindowHelp= Window_Help.prototype.initialize;
		Window_Help.prototype.initialize = function(rect) {
			
			if ((arguments[0]!==undefined) && (arguments[0].constructor.name=='Rectangle')) // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowHelp.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle. Could be help window inheriting from something that isn't updating, or it could just be RMMV behavior (it takes one number indicating how many lines of text there are)")
				}
				//RMMV passes this in with a single argument, which is how many lines of text
				//there are
				var rectA=new Rectangle(0,0,0,0);
				if (SceneManager._scene.helpWindowRect)
				{
					rectA=SceneManager._scene.helpWindowRect(); //pick the defaults.
				}
				var rect = new Rectangle(
				0||rectA.x, 
				0||rectA.y, 
				rectA.width||Graphics.boxWidth||(this.windowWidth ? this.windowWidth() : 0) ||400, 
				//in RMMV the height in lines is passed as a param.
				this.fittingHeight(arguments[0]||2)||rectA.height||Graphics.boxHeight);
				
				rectFixFinalWindowHelp.call(this,rect)
				
			}
			
		};

		var rectFixFinalWindowTitleCommand= Window_TitleCommand.prototype.initialize;
		Window_TitleCommand.prototype.initialize = function(rect) {
			if (arguments.length==0)
			{//RMMV doesn't take arguments for the title command window.
		/* 		var x = (Graphics.boxWidth - this.width) / 2;
				var y = Graphics.boxHeight - this.height - 96;
				var width=240;
				var height=this.fittingHeight(this.numVisibleRows())
				var rect = new Rectangle(x,y,width,height); */
				const rect=SceneManager._scene.commandWindowRect(); //pick the defaults.

				rectFixFinalWindowTitleCommand.call(this,rect)
				return;
			}
			if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowTitleCommand.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				var rectA=new Rectangle(0,0,0,0);
				if (SceneManager._scene.commandWindowRect)
				{
					rectA=SceneManager._scene.commandWindowRect(); //pick the defaults.
				}
				var rect = new Rectangle(
				typeof(arguments[0]) == undefined? rectA.x : arguments[0],
				typeof(arguments[1]) == undefined? rectA.y : arguments[1],
				arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
				arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight);
				

				rectFixFinalWindowTitleCommand.call(this,rect)
				
			}
			
		};

		var rectFixFinalWindowBattleSkill= Window_BattleSkill.prototype.initialize;
		Window_BattleSkill.prototype.initialize = function(rect) {
			
			if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowBattleSkill.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				var rectA=new Rectangle(0,0,0,0);
				if (SceneManager._scene.skillWindowRect)
				{
					rectA=SceneManager._scene.skillWindowRect(); //pick the defaults.
				}
				var rect = new Rectangle(
				typeof(arguments[0]) == undefined? rectA.x : arguments[0],
				typeof(arguments[1]) == undefined? rectA.y : arguments[1],
				arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
				arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight);
				
				rectFixFinalWindowBattleSkill.call(this,rect)
				
			}
			
		};

		var rectFixFinalWindowBattleItem= Window_BattleItem.prototype.initialize;
		Window_BattleItem.prototype.initialize = function(rect) {
			
			if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowBattleItem.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				
				var rectA=new Rectangle(0,0,0,0);
				if (SceneManager._scene.itemWindowRect)
				{
					rectA=SceneManager._scene.itemWindowRect(); //pick the defaults.
				}
				var rect = new Rectangle(
				typeof(arguments[0]) == undefined? rectA.x : arguments[0],
				typeof(arguments[1]) == undefined? rectA.y : arguments[1],
				arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
				arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight);
				
				rectFixFinalWindowBattleItem.call(this,rect)
				
			}
			
		};

		var rectFixFinalWindowMenuActor= Window_MenuActor.prototype.initialize;
		Window_MenuActor.prototype.initialize = function(rect) {
			
			if (arguments.length && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowMenuActor.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				
				var rectA=new Rectangle(0,0,0,0);
				if (SceneManager._scene.actorWindowRect)
				{
					rectA=SceneManager._scene.actorWindowRect(); //pick the defaults.
				}
				if (Imported.YEP_ShopMenuCore && this.constructor.name =="Window_MenuActor")
				{	//load faces
					this._additionalSprites = {};
					this.loadFaceImages();
					rectA=Scene_Menu.prototype.statusWindowRect()
				}
				var rect = new Rectangle(
				typeof(arguments[0]) == undefined? rectA.x : arguments[0],
				typeof(arguments[1]) == undefined? rectA.y : arguments[1],
				arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
				arguments[3]||rectA.height||Graphics.boxHeight||400
				);
				
				rectFixFinalWindowMenuActor.call(this,rect)
				
			}
			


			
		};

		var rectFixFinalWindowShopBuy= Window_ShopBuy.prototype.initialize;
		Window_ShopBuy.prototype.initialize = function(rect) {
			
			if (arguments.length && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowShopBuy.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				
				var rectA=new Rectangle(0,0,0,0);
				if (SceneManager._scene.buyWindowRect)
				{
					rectA=SceneManager._scene.buyWindowRect(); //pick the defaults.
				}
				
				if(Imported.YEP_ShopMenuCore)
				{
					rectA.width=SceneManager._scene._dummyWindow.width
					rectA.height=SceneManager._scene._dummyWindow.height
				}
				var rect = new Rectangle(
				typeof(arguments[0]) == undefined? rectA.x : arguments[0],
				typeof(arguments[1]) == undefined? rectA.y : arguments[1],
				rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
				rectA.height||Graphics.boxHeight||400
				);
				//set up our goods since MV set it up here.
				this._shopGoods=this._shopGoods||arguments[3]
				
				rectFixFinalWindowShopBuy.call(this,rect)
				
			}
			
		};

		var rectFixFinalWindowShopSell= Window_ShopSell.prototype.initialize;
		Window_ShopSell.prototype.initialize = function(rect) {
			
			if (arguments.length && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowShopSell.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				
				var rectA=new Rectangle(0,0,0,0);
				if (SceneManager._scene.sellWindowRect)
				{
					rectA=SceneManager._scene.sellWindowRect(); //pick the defaults.
				}
				if(Imported.YEP_ShopMenuCore)
				{
					rectA.width=SceneManager._scene._dummyWindow.width
					rectA.height=SceneManager._scene._dummyWindow.height
				}
				var rect = new Rectangle(
				typeof(arguments[0]) == undefined? rectA.x : arguments[0],
				typeof(arguments[1]) == undefined? rectA.y : arguments[1],
				rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
				rectA.height||Graphics.boxHeight||400
				);
				
				rectFixFinalWindowShopSell.call(this,rect)
				
			}
			
		};

		var rectFixFinalWindowShopStatus= Window_ShopStatus.prototype.initialize;
		Window_ShopStatus.prototype.initialize = function(rect) {
			
			if (arguments.length && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowShopStatus.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				
				var rectA=new Rectangle(0,0,0,0);
				if (SceneManager._scene.actorWindowRect)
				{
					rectA=SceneManager._scene.actorWindowRect(); //pick the defaults.
				}
				var rect = new Rectangle(
				typeof(arguments[0]) == undefined? rectA.x : arguments[0],
				typeof(arguments[1]) == undefined? rectA.y : arguments[1],
				arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
				arguments[3]||rectA.height||Graphics.boxHeight||400
				);
				
				rectFixFinalWindowShopStatus.call(this,rect)
				
			}
			
		};

		var rectFixFinalWindowBattleEnemy= Window_BattleEnemy.prototype.initialize;
		Window_BattleEnemy.prototype.initialize = function(rect) {
			
			if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowBattleEnemy.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				//seeing if this might be a better option for defaults.  Just check what it was set to earlier.
				var rectA=new Rectangle(0,0,0,0);
				if (SceneManager._scene.enemyWindowRect)
				{
					rectA=SceneManager._scene.enemyWindowRect(); //spawn the defaults.
				}
				var rect = new Rectangle(
				(typeof(arguments[0]) == undefined? rectA.x : arguments[0])||0,
				(typeof(arguments[1]) == undefined? rectA.y : arguments[1])||0,
				arguments[2]||rectA.width||400,  
				arguments[3]||rectA.height|400
				)
				rectFixFinalWindowBattleEnemy.call(this,rect)	
			}	
		};

		var rectFixFinalWindowHorzCommand= Window_HorzCommand.prototype.initialize;
		Window_HorzCommand.prototype.initialize = function(rect) {
			
			if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowHorzCommand.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				var rect = new Rectangle(
				arguments[0], 
				arguments[1], 
				arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  
				arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight);
				
				rectFixFinalWindowHorzCommand.call(this,rect)
				
			}
			
		};

		var rectFixFinalWindowShopCommand= Window_ShopCommand.prototype.initialize;
		Window_ShopCommand.prototype.initialize = function(rect) {
				
			if((typeof(arguments[0])!='undefined' ) && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowShopCommand.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				//MV calls it with 
				//Window_ShopCommand(this._goldWindow.x, this._purchaseOnly);
				//which is width,purchaseonly
				//so we'll init with our MZ initialization
				//sadly yanfly does order differently so we have to hardcode this call for the shop core
				var rectA = new Rectangle();
				if(Fossil.pluginNameList.contains('YEP_ShopMenuCore'))
				{
					//copypaste the code out of rmmv_scenes
					const wx = 0;
					const wy = SceneManager._scene.mainAreaTop();
					const ww = arguments[0]||this.windowWidth();
					const wh = this.fittingHeight(this.numVisibleRows());//SceneManager._scene.calcWindowHeight(1, true);
					rectA = new Rectangle(wx, wy, ww, wh);
				}else{
					rectA = SceneManager._scene.commandWindowRect();		
					rectA.width=arguments[0]||rectA.width;
				}
				rectFixFinalWindowShopCommand.call(this,rectA)
				//then we will set the purchaseonly.
				this._purchaseOnly = arguments[1];
			}
		};

		var rectFixFinalWindowActorCommand= Window_ActorCommand.prototype.initialize;
		Window_ActorCommand.prototype.initialize = function(rect) {
				if(arguments.length>0)
			{
				//if we have arguments that are missing in a weird order
				//(like having width and height but no x and y
				//then we should initialize them to 0.
				if (arguments[0]==undefined)
				{
					arguments[0]=0;
				}
				if (arguments[1]==undefined)
				{
					arguments[1]=0;
				}
				if (arguments[2]==undefined)
				{
					arguments[2]=0;
				}
				if (arguments[3]==undefined)
				{
					arguments[3]=0;
				}
				
			}else{
				//if arguments are zero length, throw a warning and set them to all be 0.
				if (Utils.isOptionValid('test'))
				{
					console.log('You created a window without defining the size!')
				}
				arguments=[0,0,0,0]
			}
			if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
			{
				rectFixFinalWindowActorCommand.apply(this,arguments) 
			}else{ //if not, I am assuming it is MV.
				if(arguments.length==1)
				{
					console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
				}
				var rect = new Rectangle(
				arguments[0], 
				arguments[1], 
				arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  
				arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight);
				
				rectFixFinalWindowActorCommand.call(this,rect)
				
			}
			
		};
		}
	
	
	}//end of our FINAL fixes.


	Fossil.loadPostFix('FROG_Magic',function()
	{
		Window_StatusBase.prototype.placeBasicGauges = function(actor, x, y) {
			Fossil.tempActorTarget=actor;
			this.placeGauge(actor, "hp", x, y);
			//base the width on the width of the hp gauge.
			var myWidth=this._additionalSprites["actor%1-gauge-%2".format(actor._actorId, "hp")].width;
			//reduce the font a tad so it matches hp
			this.changeFontSize($gameSystem.mainFontSize()-3)
			//move to the right 2 pixels so MP and HP line up.
			this.drawActorMp(actor, x+2, y + this.gaugeLineHeight(),myWidth);
			this.changeFontSize($gameSystem.mainFontSize())
			if ($dataSystem.optDisplayTp) {
				this.placeGauge(actor, "tp", x, y + this.gaugeLineHeight() * 2);
			}
		};
		
		Fossil.relocateDrawActorMp
		
		Window_StatusBase.prototype.drawCurrentAndMax=
		function(actormp, actormmp, x, y, width, mpColor, normalColor)
		{
			//erase the flexible gauge we just made
			var gaugeId=[this.constructor.name.toString(),x,y,width].toString();
			this._additionalSprites[gaugeId].hide();
			
			this._additionalSprites[gaugeId].hideValueText = true;
			this._additionalSprites[gaugeId].hideLabelText=true;
			this._additionalSprites[gaugeId].drawGauge();
			//and replace with the rmmz stock gauge.
			const key = "actor%1-gauge-%2".format(Fossil.tempActorTarget._actorId, "mp");
			this.placeGauge(Fossil.tempActorTarget, "mp", x, y);
			Fossil.tempActorTarget=undefined;
			//hide the label.
			this._additionalSprites[key].label=function(){return ""}
		}
		
	})

	Fossil.loadPostFix('YEP_SkillLearnSystem',function()
	{
		Window_SkillLearnConfirm.prototype.initialize= function(){
			var rectA=SceneManager._scene.helpWindowRect();
			rectA.height = (this.windowHeight ? this.windowHeight() : rectA.height)
			Window_Command.prototype.initialize.call(this,rectA);
			this.openness=0;
		}

		Scene_LearnSkill.prototype.isBottomHelpMode = function() {
			return false;
		};
		
		//Yanfly assumes the help window is at the top (y=0)
		//but this isn't always the case.
		Fossil.fixSceneLearnSkillCommandWindow=Scene_LearnSkill.prototype.createCommandWindow 
		Scene_LearnSkill.prototype.createCommandWindow  = function ()
		{
			const tempHeight=this._helpWindow.height;
			this._helpWindow.height+=this._helpWindow.y;
			Fossil.fixSceneLearnSkillCommandWindow.apply(this,arguments)
			this._helpWindow.height=tempHeight;
		}

		Fossil.fixSceneLearnSkillStatusWindow=Scene_LearnSkill.prototype.createStatusWindow 
		Scene_LearnSkill.prototype.createStatusWindow = function() {
			const tempHeight=this._helpWindow.height
			this._helpWindow.height+=this._helpWindow.y;
			Fossil.fixSceneLearnSkillStatusWindow.apply(this,arguments);
			this._helpWindow.height=tempHeight
		}
	
		//move the help menu to the top.	
		//Scene_LearnSkill.prototype.helpAreaTop = function() {return 0}
		
	})

	Fossil.loadPostFix('MOG_BattleHud',function()
	{
		//command129 now takes in params as argument, it previously used ._params[]
		//do the same thing.
		
		var fixGameInterpretercommand129=Game_Interpreter.prototype.command129;
		Game_Interpreter.prototype.command129 = function() {
			fixGameInterpretercommand129.apply(this,arguments);
			return this.commandReturnWorkaround
		}
		
		var fix_alias_mog_bhud_command129 = _alias_mog_bhud_command129;
		_alias_mog_bhud_command129=function()
		{
			this.commandReturnWorkaround=fix_alias_mog_bhud_command129.call(this,this._params);
		}
	})

	Fossil.loadPostFix('MOG_TreasurePopup',function()
	{

		//same with command 125, 126, 127, and 128
		var fixGameInterpretercommand125MOGTP=Game_Interpreter.prototype.command125;
		Game_Interpreter.prototype.command125 = function() {
			fixGameInterpretercommand125MOGTP.apply(this,arguments);
			return this.commandReturnWorkaround
		}
		
		var fix_mog_treaPopUP_gint_command125 = _mog_treaPopUP_gint_command125;
		_mog_treaPopUP_gint_command125=function()
		{
			this.commandReturnWorkaround=fix_mog_treaPopUP_gint_command125.call(this,this._params);
		}
		
		var fixGameInterpretercommand126MOGTP=Game_Interpreter.prototype.command126;
		Game_Interpreter.prototype.command126 = function() {
			fixGameInterpretercommand126MOGTP.apply(this,arguments);
			return this.commandReturnWorkaround
		}
		var fix_mog_treaPopUP_gint_command126 = _mog_treaPopUP_gint_command126;
		_mog_treaPopUP_gint_command126=function()
		{
			this.commandReturnWorkaround=fix_mog_treaPopUP_gint_command126.call(this,this._params);
		}
		
		//127
			var fixGameInterpretercommand127MOGTP=Game_Interpreter.prototype.command127;
		Game_Interpreter.prototype.command127 = function() {
			fixGameInterpretercommand127MOGTP.apply(this,arguments);
			return this.commandReturnWorkaround
		}
		var fix_mog_treaPopUP_gint_command127 = _mog_treaPopUP_gint_command127;
		_mog_treaPopUP_gint_command127=function()
		{
			this.commandReturnWorkaround=fix_mog_treaPopUP_gint_command127.call(this,this._params);
		}
		
		var fixGameInterpretercommand128MOGTP=Game_Interpreter.prototype.command128;
		Game_Interpreter.prototype.command128 = function() {
			fixGameInterpretercommand128MOGTP.apply(this,arguments);
			return this.commandReturnWorkaround
		}
		
		var fix_mog_treaPopUP_gint_command128 = _mog_treaPopUP_gint_command128;
		_mog_treaPopUP_gint_command128=function()
		{
			this.commandReturnWorkaround=fix_mog_treaPopUP_gint_command128.call(this,this._params);
		}
		
		
		Sprite_Damage.digitHeight = function()
		{
			return this.fontSize();
		}
		Sprite_Damage.digitWidth = function()
		{
			return Math.floor(this.fontSize()*3.0);
		}
		
	})

	Fossil.loadPostFix('MOG_ChronoEngine',function()
	{
		
		var fixGameInterpretercommand212CE=Game_Interpreter.prototype.command212;
		Game_Interpreter.prototype.command212 = function() {
			fixGameInterpretercommand212CE.apply(this,arguments);
			return this.commandReturnWorkaround
		}
		
		var fix_mog_chrono_gint_command212 = _mog_chrono_gint_command212;
		_mog_chrono_gint_command212=function()
		{
			this.commandReturnWorkaround=fix_mog_chrono_gint_command212.call(this,this._params);
		}
		
		var fixGameInterpretercommand205CE=Game_Interpreter.prototype.command205;
		Game_Interpreter.prototype.command205 = function() {
			fixGameInterpretercommand205CE.apply(this,arguments);
			return this.commandReturnWorkaround
		}
		
		var fix_mog_chrono_gint_command205 = _mog_chrono_gint_command205;
		_mog_chrono_gint_command205=function()
		{
			this.commandReturnWorkaround=fix_mog_chrono_gint_command205.call(this,this._params);
		}
			
			//if you don't fix this,
			//you can't talk to events!
		Fossil.fixUpdateNonmoving=Game_Player.prototype.updateNonmoving;
		Game_Player.prototype.updateNonmoving = function(wasMoving,sceneActive) {
			this.fixMogArgs=arguments;
			Fossil.fixUpdateNonmoving.call(this,wasMoving,sceneActive);
		}
		
		Fossil.fix__mog_toolSys_gPlayer_updateNonmoving = _mog_toolSys_gPlayer_updateNonmoving;
		_mog_toolSys_gPlayer_updateNonmoving=function()
		{
			Fossil.fix__mog_toolSys_gPlayer_updateNonmoving.call(this,this.fixMogArgs[0],this.fixMogArgs[1]);
		}

		//add in the item core + chrono engine compatibility fix.
		if(Imported.YEP_ItemCore)
		{
			Fossil.fix_mog_toolSys_gmap_setup = Game_Map.prototype.setup;
			Game_Map.prototype.setup = function(mapId) {
				if ($gameSystem._toolsData.length == 0) {this.dataMapToolClear()}
				Fossil.fix_mog_toolSys_gmap_setup.apply(this,arguments)
			}
					
		}
	})


	//cross compatibility between moghunter's ATB gauge and existing ATB
	//we check
	Fossil.loadPostFix('MOG_ATB_Gauge && !Imported.MOG_ATB',function()
	{

		//mog named this the same thing for both MV and MZ, so check version with a unique function
		if(ATB_Gauge.prototype.needCreateSkillIcon)
		{
			if(Imported.YEP_X_BattleSysATB)
			{
				Fossil.log("Linking MOG_ATB_Gauge with YEP_X_BattleSysATB")
				
				
				Fossil.fixSpriteSetSetupATB = Scene_Battle.prototype.createSpriteset;
				Scene_Battle.prototype.createSpriteset = function() {
					//tell it we're turnbased so we can create the gauge
					var backuptpbcheck = BattleManager.isTpb;
					BattleManager.isTpb = function() 
					{
						return true;
					};
					Fossil.fixSpriteSetSetupATB.call(this);
					BattleManager.isTpb=backuptpbcheck;
				};
				
				//hook into yanfly's ATB tracker instead of stock RMMZ 
				ATB_Gauge.prototype.is_casting = function(battler) {
					return battler.isATBCharging() || battler.atbRate() >= 1;
				};
				ATB_Gauge.prototype.cast_at = function(battler) {
					return battler.atbCharge();  
				};
				ATB_Gauge.prototype.cast_max_at = function(battler) {
					return battler.atbChargeDenom();  
				};
				ATB_Gauge.prototype.atb = function(battler) {
					return battler.atbRate()	
				}
				Fossil.fixATBrefreshIconVisiblity = ATB_Gauge.prototype.refreshIconSkill;
				ATB_Gauge.prototype.refreshIconSkill = function(spriteskill,battler) 
				{
					Fossil.fixATBrefreshIconVisiblity.apply(this,arguments);
					spriteskill.opacity= spriteskill.visible? 255 : 0;
				}
				
				//this updates before actions are taken, rather than after, causing issues.
				//just force it to update every time by clearing the spriteskill.
				//less efficient but works.
				Fossil.forcemoreUpdateSkillRefresh=ATB_Gauge.prototype.updateSkillIcon;
				ATB_Gauge.prototype.updateSkillIcon = function(spriteskill,spriteicon,battler) {
					spriteskill.item=false;
					Fossil.forcemoreUpdateSkillRefresh.apply(this,arguments)
				}; 
				
			
			}else if(Imported.YEP_X_BattleSysCTB){
	/* 			Game_BattlerBase.prototype.isMaxAtb = function() {
					return this.isATBCharging()
				}; */
				
				Fossil.log("Linking MOG_ATB_Gauge with YEP_X_BattleSysCTB")
				
				
				Fossil.fixSpriteSetSetupATB = Scene_Battle.prototype.createSpriteset;
				Scene_Battle.prototype.createSpriteset = function() {
					//tell it we're turnbased so we can create the gauge
					var backuptpbcheck = BattleManager.isTpb;
					BattleManager.isTpb = function() 
					{
						return true;
					};
					Fossil.fixSpriteSetSetupATB.call(this);
					BattleManager.isTpb=backuptpbcheck;
				};
				
				//hook into yanfly's ATB tracker instead of stock RMMZ 
				ATB_Gauge.prototype.is_casting = function(battler) {
					return battler.isCTBCharging() || battler.ctbRate() >= 1;
				};
				ATB_Gauge.prototype.cast_at = function(battler) {
					return battler.ctbCharge();  
				};
				ATB_Gauge.prototype.cast_max_at = function(battler) {
					return battler.ctbChargeDestination();  
				};
				ATB_Gauge.prototype.atb = function(battler) {
					return battler.ctbRate()	
				}
				Fossil.fixATBrefreshIconVisiblity = ATB_Gauge.prototype.refreshIconSkill;
				ATB_Gauge.prototype.refreshIconSkill = function(spriteskill,battler) 
				{
					Fossil.fixATBrefreshIconVisiblity.apply(this,arguments);
					spriteskill.opacity= spriteskill.visible? 255 : 0;
				}
				
				//this updates before actions are taken, rather than after, causing issues.
				//just force it to update every time by clearing the spriteskill.
				//less efficient but works.
				Fossil.forcemoreUpdateSkillRefresh=ATB_Gauge.prototype.updateSkillIcon;
				ATB_Gauge.prototype.updateSkillIcon = function(spriteskill,spriteicon,battler) {
					spriteskill.item=false;
					Fossil.forcemoreUpdateSkillRefresh.apply(this,arguments)
				}; 
				
			
			} 
			
		}else {
			console.log('Mog has a MZ-native version of MOG_ATB_Gauge, use that one instead!')
		}
			
	}
	)

		
	Fossil.loadPostFix('YEP_GridFreeDoodads',function()
	{
		
		//Only tweak the UI of doodads if the UI is loaded and the plugin exists
		//otherwise we crash upon an actual deploy.
		if(!!DoodadManager)
		{

			// inject the fake RPGMAKER_VERSION when it's trying to save, so the doodad function uses the full path.
			// I was hoping that I only had to spoof RPGM version once, but sadly that's not the case :(
			Fossil.saveDoodadFakeVersion=StorageManager.saveDoodadSettings 
			StorageManager.saveDoodadSettings = function() 
			{
				Utils.RPGMAKER_VERSION="1.6.1";
				Fossil.saveDoodadFakeVersion.call(this)
				Utils.RPGMAKER_VERSION=Utils.MZ_VERSION
			}

			//I want to minimize the number of times I interfere with blt, so I'm going to restrict that to
			//times where it's actually necessary
			Fossil.grabHueFromDoodadLoad = ImageManager.loadDoodad
			  ImageManager.loadDoodad = function()
			{
				$gameTemp.lastHue = !!arguments[1];
				return Fossil.grabHueFromDoodadLoad.apply(this,arguments);
				
			}

			Fossil.updateSpriteDoodadSettingsHue = Window_GFD_SettingsHue.prototype.drawDoodadImage 
			Window_GFD_SettingsHue.prototype.drawDoodadImage = function() {
				if($gameTemp.lastHue)
				{
					//this is for the hue selection window.
					//there isn't a good target for injection between when the bitmap gets loaded 
					//and when it gets blted to the window
					//so instead I am overriding blt and forcing it to rotate hue, only in this specific function call
					//then putting it back afterwards.
					var oldblt=Bitmap.prototype.blt;
					Bitmap.prototype.blt = function(source, sx, sy, sw, sh, dx, dy, dw, dh) {
						
						this.rotateHue(-10) // we reuse the same bitmap repeatedly, rotating it 10 degrees each time.
						dw = dw || sw;
						dh = dh || sh;
						try {
							const image = source._canvas || source._image;
							this.context.globalCompositeOperation = "source-over";
							this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
							this._baseTexture.update();
						} catch (e) {
							//
						}
					};

					Fossil.updateSpriteDoodadSettingsHue.apply(this,arguments);
					Bitmap.prototype.blt=oldblt;
					
				}
				else
				{
					Fossil.updateSpriteDoodadSettingsHue.apply(this,arguments);
				}

			} 
		}
	})
	 
	Fossil.loadPostFix('YEP_X_ExtDoodadPack1',function()
	{
		if(!!DoodadManager)
		{
			//while this was a readability issue in the MV version as well
			//the party member names being hard to read is worse in MZ by default
			//this extends the first textbox and scrunches the other ones so they're all legible. 
			var updatePartyWindowTextSize = Window_GFD_SettingsParty.prototype.itemRect 
			Window_GFD_SettingsParty.prototype.itemRect = function() {
				this._textWidth=(this._textWidth-40)||80;
				return updatePartyWindowTextSize.apply(this,arguments)
			}
		}
	 
	})

	Fossil.loadPreFix('KNT_Editor',function()
	{
		//another MV function unused in MZ.
		/**
		 * @static
		 * @method _onPointerDown
		 * @param {PointerEvent} event
		 * @private
		 */
		TouchInput._onPointerDown = function(event) {
			if (event.pointerType === 'touch' && !event.isPrimary) {
				const x = Graphics.pageToCanvasX(event.pageX);
				const y = Graphics.pageToCanvasY(event.pageY);
				if (Graphics.isInsideCanvas(x, y)) {
					// For Microsoft Edge
					this._onCancel(x, y);
					event.preventDefault();
				}
			}
		};
		
		//just ignore cache optimizations.
		ImageManager.reserveBitmap = ImageManager.loadBitmap;
			//import pixi filters
		Fossil.filterScript = document.createElement("script");
		Fossil.filterScript.type = "text/javascript";
		Fossil.filterScript.async = false;
		Fossil.filterScript.defer = true;
		Fossil.filterScript.src='js/libs/pixi-filters.js'
		document.body.appendChild(Fossil.filterScript);
		Fossil.filterScript=undefined;//clean up after ourselves.
		if(Fossil.chattyOutput){console.log('FOSSIL has imported pixi filters')}
		
		
	})
	
	Fossil.loadPostFix('KNT_Editor',function()
	{
		//don't edit any knight stuff on deploy when it doesn't exist.
		if(Knight.EditorHTMLTextInput)
		{
			//this looks for an uppercanvas that doesn't exist.
			Fossil.fixCreateKnightEditorScreenAdjust= Knight.EditorHTMLTextInput.prototype.screenAdjust;	
			Knight.EditorHTMLTextInput.prototype.screenAdjust = function() {
				Graphics._canvas.id = "UpperCanvas";
				Fossil.fixCreateKnightEditorScreenAdjust.apply(this,arguments);
				Graphics._canvas.id = "gameCanvas";
			};
			
			//change padding etc to make these look like MV windows.
			
			Knight.Window_Selectable.prototype.drawItemBackground=Fossil.MV.drawItemBackground;
			Knight.Window_Command.prototype.drawItemBackground=Fossil.MV.drawItemBackground;
			Knight.Window_HorzCommand.prototype.drawItemBackground=Fossil.MV.drawItemBackground;
			Knight.Window_ItemList.prototype.drawItemBackground=Fossil.MV.drawItemBackground;
			Knight.Window_Base.prototype.drawItemBackground=Fossil.MV.drawItemBackground;
			
			Knight.Window_Selectable.prototype.itemHeight=Fossil.MV.itemHeight;
			Knight.Window_Command.prototype.itemHeight=Fossil.MV.itemHeight;
			Knight.Window_HorzCommand.prototype.itemHeight=Fossil.MV.itemHeight;//
			Knight.Window_ItemList.prototype.itemHeight=Fossil.MV.itemHeight;
			Knight.Window_Base.prototype.itemHeight=Fossil.MV.itemHeight;
			
			Knight.Window_Selectable.prototype.setCursorRect=Fossil.MV.setCursorRect;
			Knight.Window_Command.prototype.setCursorRect=Fossil.MV.setCursorRect;
			Knight.Window_HorzCommand.prototype.setCursorRect=Fossil.MV.setCursorRect;
			Knight.Window_ItemList.prototype.setCursorRect=Fossil.MV.setCursorRect;
			Knight.Window_Base.prototype.setCursorRect=Fossil.MV.setCursorRect;

			
			Knight.Window_Selectable.prototype.updatePadding = function() {this.padding = 0;};
			Knight.Window_Command.prototype.updatePadding = function() {this.padding = 0;};
			Knight.Window_HorzCommand.prototype.updatePadding = function() {this.padding = 0;};
			Knight.Window_ItemList.prototype.updatePadding = function() {this.padding = 0;};
			Knight.Window_Base.prototype.updatePadding = function() {this.padding = 0;};

			
			Fossil.fixdoodadDragXNotFound=Spriteset_Map.prototype.doodadDragX
			Spriteset_Map.prototype.doodadDragX=function()
			{
				if(true)
				{
					return Fossil.fixdoodadDragXNotFound.apply(this,arguments)
				}
				
			}
			
			//this happens in MV as well, dragging a doodad in the wrong mode causes a crash.
			Fossil.fixdoodadUpdatePositionCrash=Knight.Editor.KnightEditor.updateDoodadPosition
			Knight.Editor.KnightEditor.updateDoodadPosition=function()
			{
				if(!(this._draggingDoodad&&(this._currentDoodad==null)))
				{
						Fossil.fixdoodadUpdatePositionCrash.apply(this,arguments);
				}
			}

		}
			//it also checks for a nonexistent resourcehandler
			ResourceHandler={};
			ResourceHandler.exists=function(){return false}
		
	})

	Fossil.loadPostFix('YEP_SkillCore',function()
	{

		// Gauge swapping using the MV commands is totally unworkable because 
		// the basic drawactorhp, drawactormp, etc were all removed in RMMZ
		// but, once more, we have a nice opportunity to use the existing 
		// properties stored in the actors, and make it work anyway! :)
		Window_StatusBase.prototype.placeBasicGauges = function(actor, x, y) {
			this.placeGauge(actor, actor.gauge1().toLowerCase()||"hp", x, y);
			this.placeGauge(actor, actor.gauge2().toLowerCase()||"mp", x, y + this.gaugeLineHeight());
			if ($dataSystem.optDisplayTp) {
				this.placeGauge(actor, actor.gauge3().toLowerCase()||"tp", x, y + this.gaugeLineHeight() * 2);
			}
		};
	})
	
	Fossil.loadPostFix('SRPG_core',function()
	{
		//clear gauges after they're rendered
		Fossil.clearSRPGCommandWindowsGauges=Window_SrpgActorCommandStatus.prototype.refresh
		Window_SrpgActorCommandStatus.prototype.refresh=function()
		{
			if(this._additionalSprites)
			{
				Window_StatusBase.prototype.hideAdditionalSprites.call(this);
			}
			//this._additionalSprites = {};
			Fossil.clearSRPGCommandWindowsGauges.apply(this,arguments);
		}
		
		Fossil.clearSRPGStatusWindowsGauges=Window_SrpgStatus.prototype.refresh
		Window_SrpgStatus.prototype.refresh=function()
		{
			if(this._additionalSprites)
			{
				Window_StatusBase.prototype.hideAdditionalSprites.call(this);
			}
			//this._additionalSprites = {};
			Fossil.clearSRPGStatusWindowsGauges.apply(this,arguments);
		}
		Fossil.clearSRPGResultWindowsGauges=Window_SrpgBattleResult.prototype.refresh
		Window_SrpgBattleResult.prototype.refresh=function()
		{
			if(this._additionalSprites)
			{
				Window_StatusBase.prototype.hideAdditionalSprites.call(this);
			}
			//this._additionalSprites = {};
			Fossil.clearSRPGResultWindowsGauges.apply(this,arguments);
		}
		
		
		//shift exp over a tad in the battle result window
		Window_SrpgBattleResult.prototype.drawGauge = function(x, y, width, rate, color1, color2) {
			x=x-76;
			gaugeID=[this.constructor.name.toString(),x,y,width].toString()
			label ='';//no label
			var fillW = Math.floor(width * rate);
			var gaugeY = y + this.lineHeight() - 20;
			var newGauge=this.placeFossilGauge(gaugeID, rate,'rate',label,x,gaugeY,width,12)
			newGauge._gaugeColor1 = color1;
			newGauge._gaugeColor2 = color2;
			newGauge.hideValueText = true;
			newGauge.hideLabelText=true;
			newGauge.drawGauge();

		};
		
		
		
			//change padding etc to make these look like MV windows.
			Window_SrpgStatus.prototype.drawItemBackground=Fossil.MV.drawItemBackground;
			Window_SrpgStatus.prototype.itemHeight=Fossil.MV.itemHeight;
			
			Window_SrpgBattleResult.prototype.drawItemBackground=Fossil.MV.drawItemBackground;
			Window_SrpgBattleResult.prototype.itemHeight=Fossil.MV.itemHeight;
			Window_SrpgBattleResult.prototype.updatePadding = function() {this.padding = 12;};
			Window_ActorCommand.prototype.drawItemBackground=Fossil.MV.drawItemBackground;
			//Window_ActorCommand.prototype.itemHeight=Fossil.MV.itemHeight;
			//Window_ActorCommand.prototype.setCursorRect=Fossil.MV.setCursorRect;
			//Window_ActorCommand.prototype.updatePadding = function() {this.padding = 0;};
			
			//make sure we have a full window size if we leave the scene and return;
			Fossil.FixSRPGVisibleRows = Window_ActorCommand.prototype.numVisibleRows;
				Window_ActorCommand.prototype.numVisibleRows = function() {
					const numVisRows=Fossil.FixSRPGVisibleRows.apply(this,arguments);
					if ($gameSystem.isSRPGMode()) {
						return Math.max(numVisRows,6);
					} else {
						return numVisRows;
					}
				};
			
			
			//in MV the battlelog inherited all the selectable stuff.
			//in mz it only gets window_base.  
			//since so many of these selections are needed, I am just changing the prototype
			//in theory this shouldn't break things too much (since window_selectable 
			//is also derived from window_base, and we aren't overwriting) but who knows?

			//rip out all the properties that exist in window_selectable
			//that don't exist in window_battlelog
			//and stick them in!
			
			 for (var i in Window_Selectable.prototype) 
			{
					if(Window_BattleLog.prototype[i]==undefined)
					{
						Window_BattleLog.prototype[i] = Window_Selectable.prototype[i];
					}
			} 
			
			Window_BattleLog.prototype.scrollBaseY=function(){return 0}
			Window_BattleLog.prototype.scrollBaseX=function(){return 0}
			
 			Window_SrpgBattleStatus.prototype.drawCurrentAndMax =function(){}

	})
	

	Fossil.loadPostFix('YEP_EquipCore',function()
	{
		Scene_Equip.prototype.helpAreaTop=function(){return 0}

		//if we're using equip core, then the help bar is at the top!
		//As mentioned elsewhere, the help bar is half size because of touch controls.
		Scene_Base.prototype.isBottomHelpMode = function() {
		return false;
		}
		
		//due to scrunching caused by the help bar we gotta shrink something.  
		//Command window (and the associated actor window with empty space) seems a good candidate.
		Window_EquipCommand.prototype.numVisibleRows = function() {
			return 3;
		};
	})

	Fossil.loadPostFix('YEP_X_EquipCustomize',function()
	{

		//fix the window Y location
		Fossil.moveEquipCustomizeWindow=Scene_EquipCustomize.prototype.setCustomizedItem;
		Scene_EquipCustomize.prototype.setCustomizedItem = function() 
		{
			//scootch this down.
			Fossil.moveEquipCustomizeWindow.call(this)
			this._itemActionWindow.move
			(
			this._itemActionWindow.x,
			(this._commandWindow.height+this._helpWindow.height),
			this._itemActionWindow.width,
			this._itemActionWindow.height+this._itemActionWindow.y-(this._commandWindow.height+this._helpWindow.height)
			) 
		}

		
	})
	
	Fossil.loadPostFix('YEP_X_VisualStateFX',function()
	{
		//stolen from RMMV and edited to guess how long the animation is.
		Sprite_Animation.prototype.setupDuration = function() {
			this._duration = Fossil.guessAnimationEnd(this._animation) * (this._rate||4) + 1;
		};
		
		Fossil.fixTargetsSpriteAnimation=Sprite_Animation.prototype.setup
		// prettier-ignore
		Sprite_Animation.prototype.setup = function(
			targets, animation, mirror, delay, previous
		) {
			Fossil.fixTargetsSpriteAnimation.apply(this,arguments)
			if(targets && (targets.constructor.name !=='Array'))
			{
				this._targets=[targets]
			}
			this._targets=this._targets||[]
		}
		
				Fossil.fixTargetsSpriteAnimationMV=Sprite_AnimationMV.prototype.setup
		// prettier-ignore
		Sprite_AnimationMV.prototype.setup = function(
			targets, animation, mirror, delay, previous
		) {
			Fossil.fixTargetsSpriteAnimationMV.apply(this,arguments)
			if(targets && (targets.constructor.name !=='Array'))
			{
				this._targets=[targets]
			}
			
			this._targets=this._targets||[]
				
		}
		//we don't have an _effectTarget anymore so...
		Sprite_Battler.prototype.stateEffectTarget = function() {
		  return this.mainSprite();
		};
		Sprite_Enemy.prototype.stateEffectTarget = function() {
		  return this.mainSprite();
		};
		
	
	})

	Fossil.loadPostFix('AnimatedSVEnemies',function()
	{

		//rexal spent a lot of effort setting a battleSprite, then at the last moment
		//RMMZ decides to undo the work.
		//Well, this un-undoes it :)
		var fixGame_EnemybattlerName= Game_Enemy.prototype.battlerName;
		Game_Enemy.prototype.battlerName = function() {
			if(this._battleSprite)
			{
				return this._battleSprite;
			}
			fixGame_EnemybattlerName.call(this)
			
		};
		
		var fixGame_ActorbattlerName= Sprite_Actor.prototype.battlerName;
		Sprite_Actor.prototype.battlerName = function() {
			if(this._battleSprite)
			{
				return this._battleSprite;
			}
			fixGame_ActorbattlerName.call(this)
		};
	})

	Fossil.loadPostFix('Galv_MessageCaptions',function()
	{

		// parameter passing is handled differently between these. 
		// RMMV attaches it to the object, RMMZ passes it as an argument.
		// I also need to make it return true.
		// You know what happens if it doesn't return true?
		//  -Yes
		//  -No
		//
		//  -Yes
		//  -No
		// It makes the game repeat every choice box twice!  How horrifying :o
		var fixGameInterpretercommand101=Game_Interpreter.prototype.command101;
		Game_Interpreter.prototype.command101 = function() {
			fixGameInterpretercommand101.apply(this,arguments);
			return this.commandReturnWorkaround
		}
			
		//now I have to inject the params back into his injection when he calls the original function :o
		var FixGalvMpupGame_Interpreter_command101 =Galv.Mpup.Game_Interpreter_command101;
		Galv.Mpup.Game_Interpreter_command101=function(){
			this.commandReturnWorkaround=FixGalvMpupGame_Interpreter_command101.call(this,this._params)

		}
		//
			
	})

	Fossil.loadPostFix(['QTEAddonSPW','QTEWindow'],function()
	{
		//because the plugin can sample skill sequences of multiple lengths
		// if you set a minimum length to 3
		// and input a skill of length 4
		// then it will have to test ABCD, ABC, and BCD
		// the problem is that it throws a failure report after any of the three
		// in Game_Map.prototype.getSkillMatch 
		//instead of in Game_Map.prototype.trySequence 
		//so I'm gonna change how that works.
		
		Fossil.displayNoMatchBackup=Window_BattleLog.prototype.displayNoMatch;
		Window_BattleLog.prototype.displayNoMatch = function(){}; //suppress this by removing it.
		
		//gonna have to inject into trysequence and getSkillMatch
		//basically I will flag something at the beginning of trysequence saying it found no matches
		//and then have a hidden variable track if getskillmatch ever returned something
		Fossil.QTEtrySequence=Game_Map.prototype.trySequence;
		Game_Map.prototype.trySequence=function(user,target,minInputs,maxInputs) {
			Fossil.weFoundNoQTEMatchesReally=true;
			Fossil.QTEtrySequence.apply(this,arguments);
			if(Fossil.weFoundNoQTEMatchesReally)
			{
				Fossil.displayNoMatchBackup(target);
			}
		}
		
		//track if we found a skill match.
		Fossil.QTEgetSkillMatch=Game_Map.prototype.getSkillMatch
		Game_Map.prototype.getSkillMatch = function(actorId,seq) {
			var tempVal=Fossil.QTEgetSkillMatch.apply(this,arguments);
			if (tempVal !== "no match found")
			{
				Fossil.weFoundNoQTEMatchesReally=false;
			}
			return tempVal
		}
		
	})


	Fossil.loadPostFix('YEP_StatusMenuCore',function()
	{

		//add xp bars 
		Fossil.AddSprite_GaugeCurrentValueXP= Sprite_Gauge.prototype.currentValue;

			
		Sprite_Gauge.prototype.currentValue = function() 
		{
			//if we see a number assume it's a parameter id
			if(typeof(this._statusType)=='number')
			{
				//and return it
				return SceneManager._scene._infoWindow._actor.param(this._statusType) //Math.round(SceneManager._scene._infoWindow.calcParamRate(this._statusType)*this._largestParam)
			}
			if (this._battler) 
			{
				switch (this._statusType) 
				{
					case "xp":
						return Math.floor(100*Window_StatusInfo.prototype.actorCurrentExpRate(this._battler));
					case "xp2":
						return Math.floor(100*Window_StatusInfo.prototype.actorExpRate(this._battler));
				}
			}
			return Fossil.AddSprite_GaugeCurrentValueXP.call(this)
		};

			//doing this as a percent
		Fossil.AddSprite_GaugeCurrentMaxValueXP =Sprite_Gauge.prototype.currentMaxValue;
		Sprite_Gauge.prototype.currentMaxValue = function() 
		{
			if(typeof(this._statusType)=='number')
			{
				//these gauges are relative to the largest parameter
				return SceneManager._scene._infoWindow._largestParam;
			}
			if (this._battler) 
			{

				switch (this._statusType) 
				{
					case "xp":
					case "xp2":
						return 100;
				}
			}
			return Fossil.AddSprite_GaugeCurrentMaxValueXP.call(this);
		};

		Fossil.AddSprite_GaugeLabelXP=Sprite_Gauge.prototype.label;
		Sprite_Gauge.prototype.label = function() 
		{
			if(typeof(this._statusType)=='number')
			{
				//return nothing if the statustype is a number
				return ''
				//if these weren't already labelled you could use this
				/* if ((this._statusType>=0)&&this._statusType<=7)
				{
					return ['mhp','mmp','atk','def','mat','mdf','agi','luk'][this._statusType]
				} */
			} 
			switch (this._statusType) 
			{
				case "xp":
				case "xp2":
					return TextManager.expA + '%';
			}
			return Fossil.AddSprite_GaugeLabelXP.call(this);
		};

		 for (var i in Window_StatusBase.prototype) 
		{

			if(Window_StatusInfo.prototype[i]==undefined)
			{
				Window_StatusInfo.prototype[i] = Window_StatusBase.prototype[i];
			}

		} 
		
		//add the additional sprites as an empty thing since we can't change the prototype
		//directly to statusbase.
		Fossil.fixWindowStatusInfoInitialization = Window_StatusInfo.prototype.initialize
		Window_StatusInfo.prototype.initialize = function()
		{
			this._additionalSprites = {};
			Fossil.fixWindowStatusInfoInitialization.apply(this,arguments)
		}
		
		//replace with a normal xp gauge
		Window_StatusInfo.prototype.placeGauge=Window_StatusBase.prototype.placeGauge
		Window_StatusInfo.prototype.drawExpGauge = function()
		{
			//if we already have an xp gauge, make a new one that's going to be total xp
			if(this._additionalSprites["actor%1-gauge-%2".format(arguments[0].actorId(), "xp")])
			{
				this.placeGauge(arguments[0], "xp2", arguments[2].x, arguments[2].y);
			}else{
				this.placeGauge(arguments[0], "xp", arguments[2].x, arguments[2].y);
			}
		}
		
		Window_StatusInfo.prototype.drawParamGauge = function(dx, dy, dw, paramId)
		{
			this.placeGauge(this._actor,paramId, dx+100, dy);
		}
		
		//tell it to hide sprites like statusbase does.
		var hideSpritesWindow_StatusInfoRefresh = Window_StatusInfo.prototype.refresh;
		Window_StatusInfo.prototype.refresh = function() {
			this.hideAdditionalSprites();
			hideSpritesWindow_StatusInfoRefresh.call(this)
		}
		
	})

	Fossil.loadPostFix('YEP_OptionsCore',function()
	{

		//tell it to redraw the gauges every frame, like in RMMV 
		//(since they can be scrolled up and down this is needed)
		var eraseGaugesdrawAllItems = Window_Selectable.prototype.drawAllItems;
		Window_Selectable.prototype.drawAllItems = function() 
		{
			if ((this.constructor.name == "Window_Options") && this._additionalSprites)
			{
				this._additionalSprites = {};
			}
			eraseGaugesdrawAllItems.apply(this,arguments)
		}
		
		var hideSpritesWindow_OptionsRefresh = Window_Options.prototype.refresh
		Window_Options.prototype.refresh = function() 
		{
			if (this._additionalSprites)
			{
				Window_StatusBase.prototype.hideAdditionalSprites.call(this);
			}
			hideSpritesWindow_OptionsRefresh.apply(this,arguments)
		}
		
		Scene_Options.prototype.helpAreaTop= function(){return 0}

	})

	Fossil.loadPostFix('HO_AchievementSystem',function()
	{
		
		//when we change panes, erase gauges.  
		Fossil.eraseAchievementDataGauges=Window_AchievementData.prototype.updateItem;
		Window_AchievementData.prototype.updateItem = function()
		{
			
			if(!(this._item === this._lastItem) && this._additionalSprites)
			{
				Window_StatusBase.prototype.hideAdditionalSprites.call(this);
				//this._additionalSprites = {};
			}
			Fossil.eraseAchievementDataGauges.call(this);
		}
	})
	

	Fossil.loadPostFix('YEP_SelfSwVar',function()
	{

		//fix a whole lot of command injections
		
		
		var fixGameInterpretercommand111Self=Game_Interpreter.prototype.command111;
		Game_Interpreter.prototype.command111 = function() {
			this._params=arguments[0];
			fixGameInterpretercommand111Self.apply(this,arguments);
			return this.commandReturnWorkaround
		}
		
		var fixYanflySSVGame_Interpreter_command111 = Yanfly.SSV.Game_Interpreter_command111;
		Yanfly.SSV.Game_Interpreter_command111=function()
		{
			this.commandReturnWorkaround=fixYanflySSVGame_Interpreter_command111.call(this,this._params);
		}
		
		var fixGameInterpretercommand121Self=Game_Interpreter.prototype.command121;
		Game_Interpreter.prototype.command121 = function() {
			this._params=arguments[0];
			fixGameInterpretercommand121Self.apply(this,arguments);
			return this.commandReturnWorkaround
		}
		
		var fixYanflySSVGame_Interpreter_command121 = Yanfly.SSV.Game_Interpreter_command121;
		Yanfly.SSV.Game_Interpreter_command121=function()
		{
			this.commandReturnWorkaround=fixYanflySSVGame_Interpreter_command121.call(this,this._params);
		}
		
		var fixGameInterpretercommand122Self=Game_Interpreter.prototype.command122;
		Game_Interpreter.prototype.command122 = function() {
			this._params=arguments[0];
			fixGameInterpretercommand122Self.apply(this,arguments);
			return this.commandReturnWorkaround
		}
		
		var fixYanflySSVGame_Interpreter_command122 = Yanfly.SSV.Game_Interpreter_command122;
		Yanfly.SSV.Game_Interpreter_command122=function()
		{
			this.commandReturnWorkaround=fixYanflySSVGame_Interpreter_command122.call(this,this._params);
		}
		
		var fixGameInterpretercommand201Self=Game_Interpreter.prototype.command201;
		Game_Interpreter.prototype.command201 = function() {
			this._params=arguments[0];
			fixGameInterpretercommand201Self.apply(this,arguments);
			return this.commandReturnWorkaround
		}
		
		var fixYanflySSVGame_Interpreter_command201 = Yanfly.SSV.Game_Interpreter_command201;
		Yanfly.SSV.Game_Interpreter_command201=function()
		{
			this.commandReturnWorkaround=fixYanflySSVGame_Interpreter_command201.call(this,this._params);
		}

		var fixGameInterpretercommand202Self=Game_Interpreter.prototype.command202;
		Game_Interpreter.prototype.command202 = function() {
			this._params=arguments[0];
			fixGameInterpretercommand202Self.apply(this,arguments);
			return this.commandReturnWorkaround
		}
		
		var fixYanflySSVGame_Interpreter_command202 = Yanfly.SSV.Game_Interpreter_command202;
		Yanfly.SSV.Game_Interpreter_command202=function()
		{
			this.commandReturnWorkaround=fixYanflySSVGame_Interpreter_command202.call(this,this._params);
		}
		var fixGameInterpretercommand203Self=Game_Interpreter.prototype.command203;
		Game_Interpreter.prototype.command203 = function() {
			this._params=arguments[0];
			fixGameInterpretercommand203Self.apply(this,arguments);
			return this.commandReturnWorkaround
		}
		
		var fixYanflySSVGame_Interpreter_command203 = Yanfly.SSV.Game_Interpreter_command203;
		Yanfly.SSV.Game_Interpreter_command203=function()
		{
			this.commandReturnWorkaround=fixYanflySSVGame_Interpreter_command203.call(this,this._params);
		}
		
		var fixGameInterpretercommand231Self=Game_Interpreter.prototype.command231;
		Game_Interpreter.prototype.command231 = function() {
			this._params=arguments[0];
			fixGameInterpretercommand231Self.apply(this,arguments);
			return this.commandReturnWorkaround
		}
		
		var fixYanflySSVGame_Interpreter_command231 = Yanfly.SSV.Game_Interpreter_command231;
		Yanfly.SSV.Game_Interpreter_command231=function()
		{
			this.commandReturnWorkaround=fixYanflySSVGame_Interpreter_command231.call(this,this._params);
		}
		
		var fixGameInterpretercommand232Self=Game_Interpreter.prototype.command232;
		Game_Interpreter.prototype.command232 = function() {
			this._params=arguments[0];
			fixGameInterpretercommand232Self.apply(this,arguments);
			return this.commandReturnWorkaround
		}
		
		var fixYanflySSVGame_Interpreter_command232 = Yanfly.SSV.Game_Interpreter_command232;
		Yanfly.SSV.Game_Interpreter_command232=function()
		{
			this.commandReturnWorkaround=fixYanflySSVGame_Interpreter_command232.call(this,this._params);
		}
		
		var fixGameInterpretercommand285Self=Game_Interpreter.prototype.command285;
		Game_Interpreter.prototype.command285 = function() {
			this._params=arguments[0];
			fixGameInterpretercommand285Self.apply(this,arguments);
			return this.commandReturnWorkaround
		}
		
		var fixYanflySSVGame_Interpreter_command285 = Yanfly.SSV.Game_Interpreter_command285;
		Yanfly.SSV.Game_Interpreter_command285=function()
		{
			this.commandReturnWorkaround=fixYanflySSVGame_Interpreter_command285.call(this,this._params);
		}
		
	}) 

	Fossil.loadPostFix('SRD_SummonCore',function()
	{

		Sprite_Summon.prototype.setupIntroAnimation = function(){
			if(this._actor.introAnimation())
			{
				$gameTemp.requestAnimation([this._actor], this._actor.introAnimation());
				this.opacity=0;
			}
			//initialize this so it can start moving.
			if(BattleManager.isTpb())
			{
				this._battler.clearTpbChargeTime();
				this._motion=0;//make a little pose after summoning before animation starts
			}
			SceneManager._scene._statusWindow.refresh();
		}
		
		Sprite_Summon.prototype.updateTransition = function()
		{
			this._summonFrames=this._summonFrames||0;
			
			var flashStart=0;
			var flashEnd=0;
			if(this._actor)
			{
				
					//we can't get animation duration directly, so we'll go with
					//flashing.
				if(this._actor.introAnimation() && $dataAnimations[this._actor.introAnimation()].flashTimings.length)
				{
					var flashList = $dataAnimations[this._actor.introAnimation()].flashTimings;
					flashStart=flashList[flashList.length-1].frame ||0
					flashEnd=flashList[flashList.length-1].duration+flashStart ||0;
				}
				//fully appear at the end of the last flash.
				
				
				if (this._summonFrames<flashEnd)
				{
					//flashEnd must be >=1
					this.opacity=Math.floor( 255* Math.min(this._summonFrames-flashStart,0)/(flashEnd-flashStart))
				}
				else
				{
					//done with transition
					this.opacity=255;
					this._transitionType = 0;
					this._summonSprite = null;
					
				}
				this._summonFrames++;
			}

		}
		
		Sprite_Summon.prototype.setupExitAnimation = function(){
			if(this._exitAnimation)
			{
				$gameTemp.requestAnimation([this], this._exitAnimation);
				
			}
			this.opacity=0;
			SceneManager._scene._statusWindow.refresh();
		}
		

		//only count actual members of the party for speed
		Game_Unit.prototype.tpbBaseSpeed = function() {
			const members = this.rawBattleMembers();
			return Math.max(...members.map(member => member.tpbBaseSpeed()));
		};
		
	})

	Fossil.loadPostFix('YEP_BattleEngineCore',function()
	{
		//need to undo how it treats common events
		//since now there's an actual common event queuing system!
		/* Game_Temp.prototype.isCommonEventReserved=Yanfly.BEC.Game_Temp_isCommonEventReserved;
		Yanfly.BEC.Game_Temp_isCommonEventReserved=undefined; */
		Game_Temp.prototype.reservedCommonEvent=undefined;
		Game_Temp.prototype.clearCommonEvent=undefined;
		
		//now have it add a common event onto the common event queue 
		Fossil.forceActionQueueRetrieveCommonEvent=Game_Temp.prototype.retrieveCommonEvent;
		Game_Temp.prototype.retrieveCommonEvent = function() 
		{
			if(this._forceActionQueue){
				const tempAction= this._forceActionQueue;
				this._forceActionQueue=undefined;
				return tempAction;
			}else{
				return Fossil.forceActionQueueRetrieveCommonEvent.apply(this,arguments)
			}
		}
		
/* 		Fossil.addActionQueueToReservedList=Game_Temp.prototype.isCommonEventReserved ;
		Game_Temp.prototype.isCommonEventReserved = function() {
			return (Fossil.addActionQueueToReservedList.apply(this,arguments) || !!this._forceActionQueue)
		} */
		
			
	})
	//lotta pieces we gotta pay attention to.
	Fossil.loadPostFix(
	['YEP_BattleEngineCore'
	,'YEP_X_BattleSysSTB','YEP_X_BattleSysATB','YEP_X_BattleSysCTB'
	,'YEP_BattleSelectCursor','YEP_X_SelectionControl'
	,'YEP_X_VisualHpGauge','YEP_X_VisualATBGauge','YEP_X_TurnOrderDisplay']
	,function ()
	{
		Yanfly=window.Yanfly //our fixes keep the window object, 
		//but lose global scoped var and const definitions.
		//this is very weird, but work-around-able

							
		//if we don't have improved battle backs imported, then get rid of this function
		//which is moving our battlebacks
		if (!Fossil.pluginNameList.contains('YEP_ImprovedBattlebacks')) {
			Spriteset_Battle.prototype.updateZCoordinates = function() {}
		}
	  
		
		//in MV the battlelog inherited all the selectable stuff.
		//in mz it only gets window_base.  
		//since so many of these selections are needed, I am just changing the prototype
		//in theory this shouldn't break things too much (since window_selectable 
		//is also derived from window_base, and we aren't overwriting) but who knows?

		//rip out all the properties that exist in window_selectable
		//that don't exist in window_battlelog
		//and stick them in!
		
		 for (var i in Window_Selectable.prototype) 
		{
			//if (Object.hasOwnProperty.call(Window_Selectable.prototype, i)) 
			//{
				if(Window_BattleLog.prototype[i]==undefined)
				{
					Window_BattleLog.prototype[i] = Window_Selectable.prototype[i];
				}
			//}
		} 
		
		//initialize it since we now have scrollable properties
		Fossil.fixBattleLogScrollInit=Window_BattleLog.prototype.initialize;
		Window_BattleLog.prototype.initialize = function(rect) {
			Fossil.fixBattleLogScrollInit.call(this, rect);
			this._scrollX = 0;
			this._scrollY = 0;
			this._scrollBaseX = 0;
			this._scrollBaseY = 0;
			this.clearScrollStatus();
		};
		
		console.log('BattleEnginePostFix')
		Sprite_Battler.prototype.setupDamagePopup=Fossil.backupSprite_BattlerDamagePopup;
		Window_BattleLog.prototype.displayHpDamage=Fossil.backupdisplayHpDamage;
		Window_BattleLog.prototype.displayMpDamage=Fossil.backupdisplayMpDamage;
		Window_BattleLog.prototype.displayTpDamage=Fossil.backupdisplayTpDamage;


		Sprite_Damage.prototype.initialize =Yanfly.BEC.Sprite_Damage_initialize;
		Sprite_Damage.prototype.setup=Fossil.backupSpriteDamageSetup;
		//revert changes to start turn and end turn functions, since BEC's are
		//derived directly from RMMV.
		//then update phases so BEC knows what's happening
		if(!Imported.YEP_X_BattleSysSTB)
		{
			BattleManager.startTurn=function()
			{
				this.endEndPhase();
				this.clearPerformedBattlers();
				MZBattleManagerStartTurn.apply(this,arguments)
			}
		}else{
			//override the redirection in YEP_X_BattleSysSTB, so we can get back to the original MZ start turn, but still keep the failed escape processing.
			Yanfly.STB.BattleManager_startTurn=function()
			{
				this.endEndPhase();
				this.clearPerformedBattlers();
				MZBattleManagerStartTurn.apply(this,arguments)
			} 
		}
		

		BattleManager.endTurn=function()
		{
			this.startEndPhase();
			MZBattleManagerEndTurn.apply(this,arguments)
		}
		
	/* 	Fossil.fixIndividualTurnUpdate=BattleManager.update;
		BattleManager.update=function()
		{
			Fossil.fixIndividualTurnUpdate.apply(this,arguments)
			this.updateTpbInput()
		} */
		
		//if we have a custom battle system, change our actor setup
		if(	Fossil.pluginNameList.contains('YEP_X_BattleSysATB') ||
			Fossil.pluginNameList.contains('YEP_X_BattleSysCTB') ||
			Fossil.pluginNameList.contains('YEP_X_BattleSysSTB')  )
		{
			//revert to RMMV version of this.  But update our _currentActor to reflect actor index.
			Fossil.fixPickBattleManagerActor=BattleManager.actor;
			
			BattleManager.actor = function() 
			{
				var MVactor = this._actorIndex >= 0 ? $gameParty.members()[this._actorIndex] : null;
				this._currentActor = MVactor;
				return MVactor;
			};
			
			Fossil.fixchangeCurrentActor=BattleManager.changeCurrentActor;
			BattleManager.changeCurrentActor = function(forward) 
			{
				this._currentActor=this.actor();
				Fossil.fixchangeCurrentActor.apply(this,arguments);
			}
			
		}
		
		if( Fossil.pluginNameList.contains('YEP_X_BattleSysATB')|| Fossil.pluginNameList.contains('YEP_X_BattleSysCTB'))
		{
			//This lets you go back to the party window so you can flee a battle in ATB mode.
			//you know, if you're a coward :p
			Scene_Battle.prototype.commandCancel = function() {
				Fossil.ATBCowards=true;
				this.selectPreviousCommand();
			};
			
			Scene_Battle.prototype.commandFight = function() {
				Fossil.ATBCowards=false;
				this.startActorCommandSelection();
			};
			
			Scene_Battle.prototype.commandEscape = function() {
				Fossil.ATBCowards=false; //at least you have the courage to ADMIT you can't fight.
				BattleManager.processEscape();
				this.changeInputWindow();
			};
			
			Fossil.FixInputWindowSwap=Scene_Battle.prototype.needsInputWindowChange;
			Scene_Battle.prototype.needsInputWindowChange = function() {
				if(Fossil.ATBCowards) return false;
				return Fossil.FixInputWindowSwap.apply(this,arguments);
			};
			
			Scene_Battle.prototype.changeInputWindow = function() {
				this.hideSubInputWindows();
				if (BattleManager.isInputting()) {
					if (BattleManager.actor() && !Fossil.ATBCowards) {
						this.startActorCommandSelection();
					} else {
						this.startPartyCommandSelection();
					}
				} else {
					this.endCommandSelection();
				}
			}; 
			
			//we don't use this anymore
			BattleManager.statusUpdateATB =function(){}
			//instead we hook into the rpgmaker MZ atbgauge
			
		}
		
		if(Fossil.pluginNameList.contains('YEP_X_BattleSysSTB'))
		{
			//no savescumming escapes, if you miss it it goes to the next party member.
			Scene_Battle.prototype.commandEscape = function() {
				BattleManager.stbSetSubject();
				BattleManager.processEscape();
				this.selectNextCommand();
				BattleManager.endAction();
			};

			
		}


		if(Fossil.pluginNameList.contains('YEP_X_BattleSysCTB'))
		{
			//standard windowlayer x fix.  RMMZ defaults windowlayer to 4, RMMV defaults it to 0,
			//yaddayadda
			Fossil.fixTurnOrderWindowOpacityCTB = Window_CTBIcon.prototype.isReduceOpacity
			Window_CTBIcon.prototype.isReduceOpacity = function() 
			{
				if(this._windowLayer)
				{
					var saveWLX = this._windowLayer.x;
					this._windowLayer.x = 0;
					var tempVar = Fossil.fixTurnOrderWindowOpacityCTB.apply(this,arguments)
					this._windowLayer.x = saveWLX;
					return tempVar
				}else{
					return Fossil.fixTurnOrderWindowOpacityCTB.apply(this,arguments);
				}
			}
			

			
		}
		
		Fossil.fixBECisStartActorCommand=Scene_Battle.prototype.isStartActorCommand;
		Scene_Battle.prototype.isStartActorCommand = function() {
			//if we are a time based system we need to tell BEC to shut up and stop starting new turns
			if(BattleManager.isTpb())
			{
				return false
			}
			Fossil.fixBECisStartActorCommand.call(this)
		};
		
		Fossil.BECWARNINGSCENEBATTLEINIT=Scene_Battle.prototype.initialize
		Scene_Battle.prototype.initialize = function() {
			if(BattleManager.isTpb())
			{
					$gameMessage.setBackground(1)
					$gameMessage.setPositionType(1)
					$gameMessage.add("Fossil note: Sadly, BattleEngineCore does not work")
					$gameMessage.add("with ''Time Progress Battle'' settings.")
					$gameMessage.add("Please set Battle System to Turn-based in 'System 1'.")
					$gameMessage.add("Sorry! At least you can use Yanfly's ATB system.")
					console.log('Battle Engine Core only works in standard turn based battle system. If you want ATB, use YEP_X_BattleSysATB.');
			}
			Fossil.BECWARNINGSCENEBATTLEINIT.call(this);
		};
		
		
		if(Imported.YEP_X_SelectionControl || Imported.YEP_BattleSelectCursor ||Imported.YEP_X_BattleSysATB||Imported.YEP_X_BattleSysCTB||Imported.YEP_X_BattleSysSTB)
		{
			Fossil.fixDrawBattleEnemyFakeSelectionControl=Window_BattleEnemy.prototype.drawItem
			Window_BattleEnemy.prototype.drawItem = function(index) {
				if(typeof(this._enemies[index]) =='string')
				{
					this.resetTextColor();
					const name = this._enemies[index];
					c
				}else{
					Fossil.fixDrawBattleEnemyFakeSelectionControl.call(this,index)
				}
			};
			
		}
		Fossil.hideEnemySelectWindow=Scene_Battle.prototype.createEnemyWindow
		Scene_Battle.prototype.createEnemyWindow = function() 
		{
			Fossil.hideEnemySelectWindow.apply(this,arguments)
			if(!Yanfly.Param.BECShowSelectBox)
			{
				this._enemyWindow.move(0,0,0,0);//we want this to be invisible but usable.
			}else{
				this._enemyWindow.move(this._enemyWindow.x,this._actorCommandWindow.y,this._enemyWindow.width,this._actorCommandWindow.height);
			}
			
		};
		
		
		if(Imported.YEP_X_VisualHpGauge)
		{
			
			Fossil.fixHpGaugeUpdate=Window_VisualHPGauge.prototype.update;
			Window_VisualHPGauge.prototype.update = function() 
			{
				//hide sprites if they aren't supposed to be shown.
				if (this._additionalSprites)
				{
					if(this.contentsOpacity==0)
					{
						Window_StatusBase.prototype.hideAdditionalSprites.call(this);
					}else{
						for (const sprite of Object.values(this._additionalSprites)) 
						{
							sprite.opacity=this.contentsOpacity;
							sprite.show();
						}
					}
				}
				Fossil.fixHpGaugeUpdate.apply(this,arguments)
			}
		}
		if(Imported.YEP_X_VisualATBGauge)
		{

			//create a special gauge drawer for the enemy visual atb,
			//don't get them confused
			Window_EnemyVisualATB.prototype.drawGauge = function(x, y, width, rate, color1, color2) 
			{
				//width changes for this one, fixing it on a case-by-case basis
				gaugeID=[this.constructor.name.toString(),x,y].toString()
				label ='';//no label
				[x,y]=this.FossilTweakGaugeByPlugin(x,y)

				var fillW = Math.floor(width * rate);
				var gaugeY = y + this.lineHeight() - 20;
				if(this.drawingChargeGauge)
				{
					var newGauge=this.placeFossilGauge(
						gaugeID+'charging',
						rate,
						'rate',
						label,
						x,
						gaugeY,
						width,
						12+8*(!!Yanfly.Param.VATBThick),
						this._battler
					)
					newGauge.chargeGauge=true;
				}else{
					var newGauge=this.placeFossilGauge(
						gaugeID+'normal',
						rate,
						'rate',
						label,
						x,
						gaugeY,
						width,
						12+8*(!!Yanfly.Param.VATBThick),
						this._battler
					)
				}
				newGauge._gaugeColor1 = color1;
				newGauge._gaugeColor2 = color2;
				newGauge.hideValueText = true;
				newGauge.hideLabelText=true;
			};

			Fossil.markChargeGauge=Window_Base.prototype.drawAtbChargeGauge;
			Window_EnemyVisualATB.prototype.drawAtbChargeGauge = function(actor, wx, wy, ww) {
				this.drawingChargeGauge=true;
				Fossil.markChargeGauge.apply(this,arguments)
				this.drawingChargeGauge=undefined;
			};
			
			//erase gauges when enemies are dead.
			Fossil.EraseDeadGaugeFix=Window_EnemyVisualATB.prototype.updateRefresh;
			Window_EnemyVisualATB.prototype.updateRefresh = function(actor, wx, wy, ww) 
			{
				Fossil.EraseDeadGaugeFix.apply(this,arguments);
				//hide both gauges if actor is dead.
				 if(this._battler.isDead())
				 {
					 Window_StatusBase.prototype.hideAdditionalSprites.call(this);
				 }else{
					 //otherwise, hide the overlay if the actor isn't overcharged and prepping to act.
					for (const sprite of Object.values(this._additionalSprites)) 
					{
						if(sprite.chargeGauge&&(this._battler.atbChargeRate() == 0))
						{
							sprite.hide()
						}
						else
						{
							sprite.opacity=this.contentsOpacity;
							sprite.show();
						}
					}
				 }

			}
			
			
		} 

		if(Imported.YEP_X_TurnOrderDisplay)
		{

			//increase the icon size parameter so it scales properly on screen.
			//basically it didn't used to include the window frame size, but now it does.
			//4 pixel frame around image, 8 pixel frame around window, present on BOTH sides
			Yanfly.Param.TODIconSize+=24;
			
			//this expects the windowlayer to have a .x of 0, but in RMMZ the window layer has a .x of 4 by default
			//to avoid causing lasting issues, we'll set it and then refresh it
			Fossil.fixTurnOrderWindowOpacity = Window_TurnOrderIcon.prototype.isReduceOpacity 
			Window_TurnOrderIcon.prototype.isReduceOpacity = function() 
			{
				if(this._windowLayer)
				{
					var saveWLX = this._windowLayer.x;
					this._windowLayer.x = 0;
					var tempVar = Fossil.fixTurnOrderWindowOpacity.apply(this,arguments)
					this._windowLayer.x = saveWLX;
					return tempVar
				}else{
					return Fossil.fixTurnOrderWindowOpacity.apply(this,arguments);
				}
			}
			
			//smooth images 
			Fossil.fixWindow_TurnOrderIconsetup=Window_TurnOrderIcon.prototype.setup
			Window_TurnOrderIcon.prototype.setup = function() {
				Fossil.fixWindow_TurnOrderIconsetup.apply(this,arguments)
				this._image.smooth=true;
			};
			
			
			//fix spacing since it's double-counting the frame here.
			Fossil.fixWindow_TurnOrderIconcalculateDestinationXIndex=Window_TurnOrderIcon.prototype.calculateDestinationXIndex;
			Window_TurnOrderIcon.prototype.calculateDestinationXIndex = function() {
				var backupWidth=this.width;
				this.width-=24;
				Fossil.fixWindow_TurnOrderIconcalculateDestinationXIndex.call(this);
				this.width = backupWidth;
			}

			
			//if we have a visual enemy select, we use the enemy window instead of the help
			//window to determine what we're looking at.
			if(Imported.YEP_X_SelectionControl || Imported.YEP_BattleSelectCursor)
			{
				Fossil.fixScene_BattlesetupTurnOrderDisplayWindow=Scene_Battle.prototype.setupTurnOrderDisplayWindow;
				Scene_Battle.prototype.setupTurnOrderDisplayWindow = function(win) 
				{
					Fossil.fixScene_BattlesetupTurnOrderDisplayWindow.call(this,win);
					win._helpWindow = this._enemyWindow;
				  
				};
			}
		}

	})

	Fossil.loadPostFix('YEP_X_InBattleStatus',function()
	{

		//import all the status window functions into the inbattlestatelist.
		 for (var i in Window_StatusBase.prototype) 
		{
				if(Window_InBattleStatus.prototype[i]==undefined)
				{
					Window_InBattleStatus.prototype[i] = Window_StatusBase.prototype[i];
				}
		} 
		//tell it to hide gauge sprites like the statusinfo window does 
		Fossil.hideSpritesWindow_InBattleStatusRefresh = Window_InBattleStatus.prototype.refresh;
		Window_InBattleStatus.prototype.refresh = function() {
			this.hideAdditionalSprites();
			Fossil.hideSpritesWindow_InBattleStatusRefresh.apply(this,arguments)
		}

		Fossil.fixWindowInBattleStatusInitialization = Window_InBattleStatus.prototype.initialize
		Window_InBattleStatus.prototype.initialize = function()
		{
			this._additionalSprites = {};
			Fossil.fixWindowInBattleStatusInitialization.apply(this,arguments)
		}
		
	})

	Fossil.loadPostFix('YEP_X_PartyLimitGauge',function()
	{

		//this expects the windowlayer to have a .x of 0, but in RMMZ the window layer has a .x of 4 by default
		//to avoid causing lasting issues, we'll set it and then refresh it
		Fossil.fixWindow_PartyLimitGaugeupdateOpacity=Window_PartyLimitGauge.prototype.updateOpacity;
		Window_PartyLimitGauge.prototype.updateOpacity = function() {
			var saveWLX = this._windowLayer.x;
			this._windowLayer.x = 0;
			Fossil.fixWindow_PartyLimitGaugeupdateOpacity.apply(this,arguments)
			this._windowLayer.x = saveWLX;
			
		}
			
		Fossil.fixWindow_PartyLimitGaugeinitialize=Window_PartyLimitGauge.prototype.initialize;
		Window_PartyLimitGauge.prototype.initialize = function(unit) 
		{
			Fossil.fixWindow_PartyLimitGaugeinitialize.apply(this,arguments)
			//this.opacity=128
			//opacity should be 0 but if you want to see the windows for debugging set it here
		}
		
		//scoot our party
		Fossil.fixWindow_BasedrawPartyLimitIcon=Window_Base.prototype.drawPartyLimitIcon;
		Window_Base.prototype.drawPartyLimitIcon =function(unit,x,y,w,h)
		{
			if(unit.partyLimitGaugeIconAlign() === 'right')
			{
				//alignment is different in RMMZ.  Scootch it a little to the left.
				x-=h/3
			}
			Fossil.fixWindow_BasedrawPartyLimitIcon.call(this,unit,x,y,w,h);
		}
		
		//when we draw the limit gauges, reduce the width to account for window border size
		Fossil.fixWindow_BasedrawPartyLimitGauge=Window_Base.prototype.drawPartyLimitGauge 
		Window_Base.prototype.drawPartyLimitGauge = function(unit, x, y, w) 
		{
			this.width-=24;
			Fossil.fixWindow_BasedrawPartyLimitGauge.call(this,unit,x,y,w)
			this.width+=24;
		}
		
		
	})

	Fossil.loadPostFix('YEP_X_ItemUpgrades',function()
	{

		//there's a one-character typo at line 320.  It says
		//item.types.contain
		//but it should say
		//item.types.contains
		//if we could edit the plugin this would be ez pzy to fix but we can't so instead
		//nasty injection time :(
		
		Fossil.fixprocessupgradenotetags = DataManager.processUpgradeNotetags
		
		DataManager.processUpgradeNotetags = function(item) {
			//we need to predefine this item types
			if(!item.types){
				item.types=['ALL']
			}
			if(!item.types.contain)
			{
				//define a 'contain' that does the same thing as 'contains'.
				item.types.contain= function()
				{
					this.contains.apply(this, arguments)
				}
			}
		}	
	})


	Fossil.loadPostFix('SRD_ShakingText',function()
	{

			//remove iteration from textState so we don't double-tap it.
		Fossil.fixWindow_MessageCreateShakingCharacter = Window_Message.prototype.createShakingCharacter;
		Window_Message.prototype.createShakingCharacter = function(textState, c, w, h) {
			this.fossilStopProcessingThisCharacter=true;
			
			textState.x -=w;
			
			
			if (c.charCodeAt(0) < 0x20) {
				
				
				this.flushTextState(textState);
				//this doesn't always count the '\' for our text index and ends up printing it.
				this.processControlCharacter(textState, c);
				
				//c.charCodeAt(0)==0x10 //means a newline character.  If we did a newline, step back appropriately
				if(c.charCodeAt(0)==0x10)
				{
					textState.x-=12;
				}
				
				 //control character means we never advanced.
			}else{
				//our shakey characters are too far to the right by half a slot.  Correct this.
				//also shift the y up a tiny bit.
				textState.x +=w/2;
				textState.y -=h/4
				Fossil.fixWindow_MessageCreateShakingCharacter.call(this,textState, c, w, h)
				textState.x +=w/2;
				textState.y +=h/4
			}
		}
		
		//undo the weird little textstate++/-- shift SRD does in obtainEscapeCode
		//this will cause problems if SRD_ShakingText isn't the last message parsing plugin before Fossil_Post
		//but we'll cross that bridge when we come to it.
		Fossil.FixSRDShakeTextWindowMessageobtainEscapeCodePost=Window_Message.prototype.obtainEscapeCode;
		Window_Message.prototype.obtainEscapeCode = function(textState){
			textState.index--;
			return Fossil.FixSRDShakeTextWindowMessageobtainEscapeCodePost.apply(this,arguments)
		}
		
	})

	Fossil.loadPostFix('YEP_Footsteps',function()
	{

		Fossil.fixplayFootstepSound =Game_CharacterBase.prototype.playFootstepSound
		Game_CharacterBase.prototype.playFootstepSound = function(volume, pitch, pan) 
		{
			Fossil.tempCoord=[this.x,this.y]
			
			//fix the coordinates to identify the next tile (this is bugged in the base plugin)
			//if someone includes a diagonal movement that expands the .direction() beyond the four
			//base coordinates, this will be futureproofed.
			Fossil.tempCoord[0] += ([3,6,9].contains(this.direction())) - ([1,4,7].contains(this.direction()));
			Fossil.tempCoord[1] += ([1,2,3].contains(this.direction())) - ([7,8,9].contains(this.direction()));

			var backupRegion=$gameMap.regionId;
			var backupTerrain=$gameMap.terrainTag;
			$gameMap.regionId=function(x,y)
			{
				return backupRegion(Fossil.tempCoord[0],Fossil.tempCoord[1])
			}
			$gameMap.terrainTag=function(x,y)
			{
				return backupTerrain(Fossil.tempCoord[0],Fossil.tempCoord[1])
			}
			
			Fossil.fixplayFootstepSound.apply(this,arguments);
			
			$gameMap.regionId=backupRegion;
			$gameMap.terrainTag=backupTerrain;
		}
		
		
	})

	Fossil.loadPostFix('YEP_X_ItemDiscard',function()
	{

		Fossil.fixWindow_ItemActionCommandCreateDiscardCommandName =Window_ItemActionCommand.prototype.createDiscardCommandName;
		Window_ItemActionCommand.prototype.createDiscardCommandName = function() 
		{
			
			var text = Fossil.fixWindow_ItemActionCommandCreateDiscardCommandName.call(this);
			
			//trim the trailing '/' if you have independent items on.
			if((text[text.length-1] == '/') && ($gameParty.maxItems(this._item) <= 1))
			{
				text = text.slice(0,text.length-1)
			}
			
			return text;
		}
	})

	Fossil.loadPostFix('YEP_X_ItemRequirements',function()
	{

		//this is bugged; it runs an eval (which is supposed to be caught in 'value'), but 
		//doesn't actually catch the true/false in 'value'.
		//I'm checking to see if 'value' ever gets referenced in the provided code
		// (if it does, then someone did a workaround and I don't want to mess with it)
		//if it is included I don't mess with it.
		//if not, I am correcting the behavior to match the documentation.
		Fossil.fixItemManagerUsableItemRequirementEval =ItemManager.usableItemRequirementEval;
		ItemManager.usableItemRequirementEval=function(code)
		{
			if(!code.contains('value'))
			{
				//if we don't reference 'value', store whatever statement we make into it.
				code = "value = ("+code+")";
			}
			return Fossil.fixItemManagerUsableItemRequirementEval.call(this,code);
		}
		
	})

	Fossil.loadPostFix('RuneSkills',function()
	{
		//runeskills sets up its database in isDatabaseLoaded by default
		//problem: sometimes isN'TDatabaseLoaded!
		//so we put it into DataManager.onLoad instead;
		var fix_runeSkills_DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
		DataManager.isDatabaseLoaded = function() {
			RuneSkills.Skill=RuneSkills.Skill||'FossilFakeValue'
			var tempVal =  fix_runeSkills_DataManager_isDatabaseLoaded.apply(this,arguments);
			if (RuneSkills.Skill === 'FossilFakeValue') {RuneSkills.Skill=undefined};
			return tempVal;
		};
		
		var fix_runeSkillsInitInOnLoad = Scene_Boot.prototype.onDatabaseLoaded;
		Scene_Boot.prototype.onDatabaseLoaded = function() {
			fix_runeSkillsInitInOnLoad.call(this,arguments);
			if(!RuneSkills.Skill){RuneSkills.initialize()}
		};
		
		//resize so we are the right size
		Fossil.fixWindow_RuneChoiceCommandListSize=Window_RuneChoice.prototype.makeCommandList;
		Window_RuneChoice.prototype.makeCommandList = function() {
			Fossil.fixWindow_RuneChoiceCommandListSize.apply(this,arguments)
				this.move(this.x,this.y,this.width,SceneManager._scene.calcWindowHeight(this.maxItems(),true))
		}
		
	})

	Fossil.loadPostFix('STV_BeastBook',function()
	{

		Fossil.fixWindow_BeastBook_updateStatus= Window_BeastBook_Info.prototype.setBeast
		 Window_BeastBook_Info.prototype.setBeast  = function(beast) 
		{
			//standard fossil gauge pruning
			if (this._additionalSprites)
			{
				Window_StatusBase.prototype.hideAdditionalSprites.call(this);
			}
			Fossil.fixWindow_BeastBook_updateStatus.call(this,beast);
		};
		
	})

	Fossil.loadPostFix('YEP_ShopMenuCore',function()
	{

		//unique windowtype in YEP_Shop_Menu_Core needs to be given a rect.
		Window_ShopCategory.prototype.initialize = function() 
		{
			//this is always MV so we gotta make a rect for it.  Use the default
			//var rect = new Rectangle(0,,this.windowWidth(),
			var rect= new Rectangle(SceneManager._scene._commandWindow.x,SceneManager._scene._commandWindow.y,SceneManager._scene._commandWindow.width,SceneManager._scene._commandWindow.height)
			Window_ItemCategory.prototype.initialize.call(this,rect)
			
		};
		
		
		//put shopgoods into this if it didn't get handed off due to lazy initialization
		
		Fossil.GiveShopGoodsToShopBuyWindow=Window_ShopBuy.prototype.initialize
		Window_ShopBuy.prototype.initialize =function()
		{
			this._shopGoods=this._shopGoods||arguments[3];//grab the shop goods.
			Fossil.GiveShopGoodsToShopBuyWindow.apply(this,arguments);
		}
		
		//move the category window to where it used to be
		Fossil.moveYEPcreateCategoryWindow =Scene_Shop.prototype.createCategoryWindow 
		Scene_Shop.prototype.createCategoryWindow = function() 
		{
			Fossil.moveYEPcreateCategoryWindow.apply(this,arguments)
			//this._categoryWindow.move(this._commandWindow.x,this._commandWindow.y,this._commandWindow.width,this._commandWindow.height);
		}
		
		//scootch the item buy/sell information up a tiny bit
		Fossil.fixYEPitemNameY=Window_ShopNumber.prototype.itemNameY;
		Window_ShopNumber.prototype.itemNameY = function() {
			return Fossil.fixYEPitemNameY.apply(this,arguments)-24;
		};

		
	})

	Fossil.loadPostFix('YEP_X_Subclass',function()
	{

		//YEP is trying to overwrite the wrong function, correct it.
		Window_StatusBase.prototype.drawActorClass = Window_Base.prototype.drawActorClass;
	})

	Fossil.loadPostFix('KMS_Minimap',function()
	{

		Fossil.fixKMSMiniMapUpdate=Spriteset_Map.prototype.update;
		//fading is accomplished in a different way, but we can 
		//still create a fake fadesprite to pass in the info about the opacity
		Spriteset_Map.prototype.update = function()
		{
			this._fadeSprite=this._fadeSprite||{};
			this._fadeSprite.opacity = 255-$gameScreen.brightness();
			Fossil.fixKMSMiniMapUpdate.apply(this,arguments)
		};
		
	})



	//defaults go somewhere else now!
	Fossil.loadPostFix('Olivia_AntiPlayerStress',function()
	{

		AudioManager._bgmVolume = Olivia.AntiPlayerStress.DefaultVolume;
		AudioManager._bgsVolume = Olivia.AntiPlayerStress.DefaultVolume;
		AudioManager._meVolume = Olivia.AntiPlayerStress.DefaultVolume;
		AudioManager._seVolume = Olivia.AntiPlayerStress.DefaultVolume;
	})


	Fossil.loadPostFix('Gimmer_WibblyWobbly',function()
	{

		//now that we have multiple source nodes the attached value is ._sourceNodes
		//and it's an array!
		//things that reference ._sourceNode should just reference ._sourceNodes[0] instead.
		//ez pzy
		Fossil.fixDrunkUpdate=Spriteset_Map.prototype.updateDrunk 
		Spriteset_Map.prototype.updateDrunk = function()
		{
			if(AudioManager._bgmBuffer)
			{
				AudioManager._bgmBuffer._sourceNode = AudioManager._bgmBuffer._sourceNodes[0]
			}
			Fossil.fixDrunkUpdate.apply(this,arguments);
		}
		
	})

	Fossil.loadPostFix('Gimmer_LicenseBoard',function()
	{
		//give the license board window  all the parts a MZ window needs!
		
		Window_LicenseBoard.prototype._createAllParts = function() {
			Window.prototype._createAllParts.apply(this,arguments);
			this._windowCursorSprite=this._cursorSprite

			//giving it a default to prevent it from crashing when window_selectable tries
			//to draw everything.
			this.boardName=0;
		}
		Window_LicenseBoard.prototype._createArrowSprites = function() 
		{
			this._downArrowSprite = new Sprite();
			this.addChild(this._downArrowSprite);
			this._upArrowSprite = new Sprite();
			this.addChild(this._upArrowSprite);
			this._leftArrowSprite = new Sprite();
			this.addChild(this._leftArrowSprite);
			this._rightArrowSprite = new Sprite();
			this.addChild(this._rightArrowSprite);
		};
		//technically plugin works but is unusably ugly.  I'll come back to this later.
		
	})



	Fossil.loadPostFix('Gimmer_Core',function()
	{
		//give the popup window  all the parts a MZ window needs!
		
		Window_Popup.prototype._createAllParts = function() {
			Window.prototype._createAllParts.apply(this,arguments);
			this._windowCursorSprite=this._cursorSprite
			this._windowBackSprite=this._backSprite;
			this._windowBackSprite.alpha = 1;
			this._index=0;
		}
		//not sure if it works but it doesn't crash anymore.
		
	//this._dimmerSprite is the new name for this._backSprite.  Set it appropriately.

		/* Object.defineProperty(Window_Popup.prototype, "_backSprite", {
		get: function() {
			return this._dimmerSprite;
		},
		set: function(value) {
			this._dimmerSprite = value;
		},
		configurable: true
	}); */
	//doesn't seem to work but kept for posterity
	})

	Fossil.loadPostFix('YEP_Z_PassiveCases',function()
	{

		//bugfix:
		//   Alive Actors/Enemies/Allies/Foes <= x, etc don't work
		//because the functions they invoke return arrays instead of numbers
		//like unit.aliveMembers() gives a list of which units are alive
		//not a count
		//if we get an array, it has a length, and that's the value we want.
		Fossil.fixforceNumberParamType=DataManager.numberParameterCheck;
		DataManager.numberParameterCheck = function(check, user) {
			var paramVal=Fossil.fixforceNumberParamType.apply(this,arguments);
			//falsey param values give us a 0. (for empty lists and such)
			if (!paramVal)
			{
				return 0
			}
			//if it has a length then return the length
			if (paramVal.length)
			{
				return paramVal.length;
			}else{
				return paramVal;
			}
			
		}
		
	})

	Fossil.loadPostFix('YEP_JobPoints',function()
	{
		//this got moved from window_base to window_statusbase.
		//Any MV redefinitions got caught in windowbase, now reapply to statusbase
		//Fossil.FixStatusBaseDrawActorSimpleStatus=Window_Base.prototype.drawActorSimpleStatus;
		
		//remove the reference to drawing the actor class since we don't attach the jp there.
		Yanfly.JP.Window_Base_drawActorClass=function(){}
		//transfer the changes we made to Window_Base to Window_StatusBase so they get run.
		Window_StatusBase.prototype.drawActorSimpleStatus = Window_Base.prototype.drawActorSimpleStatus;

	})

	Fossil.loadPostFix('YEP_PartySystem',function()
	{

		//give the partydetail the properties of a status windows.
		 for (var i in Window_StatusBase.prototype) 
		{
			//if (Object.hasOwnProperty.call(Window_StatusBase.prototype, i)) 
			//{
				if(Window_PartyDetail.prototype[i]==undefined)
				{
					Window_PartyDetail.prototype[i] = Window_StatusBase.prototype[i];
				}
			//}
		} 
		
		Fossil.FixPartyDetailGaugeRefresh=Window_PartyDetail.prototype.refresh;
		Window_PartyDetail.prototype.refresh = function() {
			if (this._additionalSprites)
			{
				Window_StatusBase.prototype.hideAdditionalSprites.call(this);
			}else{
				this._additionalSprites={}
			}
			Fossil.FixPartyDetailGaugeRefresh.apply(this,arguments);
		};
	})


	Fossil.loadPostFix('YEP_KeyboardConfig',function()
	{

		//yanfly hardcoded in the old horizontal spacing formula used in RMMV into 
		//the formula used to calculate the x-offset of larger-than-normal keys
		//this reverses the x offset calculation in order to get the index,
		//then reapplies the new formula to get the correct x offset.
		Fossil.FixWindowKeyConfig=Window_KeyConfig.prototype.itemRect;
		Window_KeyConfig.prototype.itemRect = function(index) 
		{
			var rectA=Fossil.FixWindowKeyConfig.apply(this,arguments);
			var baseRect=Window_Selectable.prototype.itemRect.call(this, index);
			if(rectA.width>baseRect.width)
			{

				rectA.x-=this._scrollX+this.spacing();
				rectA.x/=(baseRect.width + this.spacing())
				rectA.x*=this.itemWidth();
				rectA.x=Math.floor(rectA.x);
				rectA.x+=this.scrollBaseX()
				rectA.x+=this.colSpacing()/2;

			}
			return rectA;
		} 
		
	})

	Fossil.loadPostFix('MatchCardLottery',function()
	{

		//due to order of operations we end up needing to define the command window size first
		//then resize it once we know how big it needs to be
		//so here's the resize.
		Fossil.fixMatchCardReplayCommandWindowSize=Window_MatchCardReplayCommand.prototype.makeCommandList ;
		Window_MatchCardReplayCommand.prototype.makeCommandList = function (x, y) {
			Fossil.fixMatchCardReplayCommandWindowSize.apply(this,arguments);
			if(this._FossilGuessedVisibleRows)
			{
				this.move(this.x,this.y,this.width,this.fittingHeight(this.numVisibleRows()))
				this._FossilGuessedVisibleRows=false;
			}
		};
	})

	Fossil.loadPostFix('StatPolygon',function()
	{
		//we don't need this function, so make it do nothing
		Bitmap.prototype._setDirty=function(){}
		
	})

	Fossil.loadPostFix('YEP_QuestJournal',function()
	{
		//yanfly used a custom drawQuestTextEx which was just MV's drawTextEx with one line added.
		//replace with MZ version.
		Window_QuestData.prototype.drawQuestTextEx=function(text,x,y)
		{
			const rect = this.baseTextRect();
			this.contents.clear();

			//contents of the MZ Window_Base.prototype.drawTextEx
			this.resetFontSettings();
			const textState = Window_Base.prototype.createTextState.call(this,text,x,y,rect.width);
			//loop through if we have wordwrap to make it work.
			if(this._wordWrap)
			{	
				while (textState.index < textState.text.length) 
				{
					this.processCharacter(textState);
					this.flushTextState(textState);
				}
			}else{			
				this.processAllText(textState);
			}
			//count how many newlines we have.  Add a buffer.
			this._fossilLineCount=(textState.text.split('\n').length||2)+2;
			this._allTextHeight=this._fossilLineCount*Window_Scrollable.prototype.itemHeight.call(this)
			this._text=textState.text;
			return textState.outputWidth; 
		}
		
		Fossil.fixWindowQuestDataRefresh=Window_QuestData.prototype.refresh
		Window_QuestData.prototype.refresh=function()
		{
			//this.paint();
			Fossil.fixWindowQuestDataRefresh.apply(this,arguments);
			this.cursorFixed(true);
		}
		
		//Window_QuestData.prototype.updateKeyScrolling=function(){}
		Window_QuestData.prototype.scrollOriginDown = function(speed) {
		  this.scrollBy(0,speed)
		};

		Window_QuestData.prototype.scrollOriginUp = function(speed) {
			this.scrollBy(0,-speed)
		};
	 
		Window_QuestData.prototype.maxItems=function()
		{
			return 1;
		} 
		
		Window_QuestData.prototype.itemHeight = function() {
			return this._allTextHeight|| Window_Scrollable.prototype.itemHeight.call(this); 
		}; 
		Window_QuestData.prototype.overallHeight = function()
		{
			return this._allTextHeight+48;
		}
		
		Window_QuestData.prototype.contentsHeight=function()
		{
		return Math.max( this.overallHeight(),Window_Selectable.prototype.contentsHeight.call(this))
		}
		
		//adjust this so the mousewheel works.
		Window_QuestData.prototype.smoothScrollDown = function(n) {
			this.smoothScrollBy(0, this.lineHeight()*2 * n);
		};

		Window_QuestData.prototype.smoothScrollUp = function(n) {
			this.smoothScrollBy(0, -this.lineHeight()*2 * n);
		};
		
		if(Imported.YEP_X_MapQuestWindow)
		{
			//slimmed down compared to the above ^
			Window_MapActiveQuest.prototype.drawQuestTextEx=function(text,x,y)
			{
				const rect = this.baseTextRect();
				//contents of the MZ Window_Base.prototype.drawTextEx
				this.resetFontSettings();
				const textState = Window_Base.prototype.createTextState.call(this,text,x,y,rect.width);
				//loop through if we have wordwarp to make it work.
				if(this._wordWrap)
				{	
					while (textState.index < textState.text.length) 
					{
						this.processCharacter(textState);
						this.flushTextState(textState);
					}
				}else{			
					this.processAllText(textState);
				}
				//count how many newlines we have.  Add a buffer.
				this._fossilLineCount=(textState.text.split('\n').length||2);
				this._allTextHeight=this._fossilLineCount*Window_Scrollable.prototype.itemHeight.call(this)
				return textState.outputWidth; 
			}
		}
	})


	Fossil.loadPostFix('YEP_IconBalloons',function()
	{
		//and inject this in.
		Fossil.UpdateSpriteCharacterMVBalloons=Sprite_Character.prototype.update;
		Sprite_Character.prototype.update=function()
		{
			Fossil.UpdateSpriteCharacterMVBalloons.apply(this,arguments);
			this.updateBalloon();
		}
		//tie icon balloons to their targets
		Fossil.startIconBalloonAssignTarget=Sprite_Character.prototype.startIconBalloon;
		Sprite_Character.prototype.startIconBalloon=function()
		{
			Fossil.startIconBalloonAssignTarget.apply(this,arguments);
			this._iconBalloonSprite._target=this;
		}
		
	})



	Fossil.loadPostFix('YEP_CommonEventMenu',function()
	{
		//those black rectangles are ugly on this menu, and don't exist in MV.  Remove them.
		Window_CommonEventMenu.prototype.drawItemBackground = function (){}
		//remove the added item height
		Window_CommonEventMenu.prototype.itemHeight=function(){return this.lineHeight()}
		
		
		//scootch the cursor down a little bit.
		Window_CommonEventMenu.prototype.setCursorRect = function(x, y, width, height) {
			y+=2;
			Window.prototype.setCursorRect.apply(this,arguments);
		}

	})

	Fossil.loadPostFix('SE_Minimap',function()
	{
		Window_Minimap.prototype.updatePadding = function() {
			this.padding = 0;
		};
	})


	Fossil.loadPostFix(['VE_BasicModule','VE_ChargeActions','VE_MateriaSystem'],function()
	{
		//revert this.
		Sprite_Battler.prototype.mainSprite = function() {
			return this;
		};
		
		//make the item() function return this the action instead of crashing.
		Fossil.FixGetAllElementsVE=VictorEngine.getAllElements;
		VictorEngine.getAllElements = function(subject, action) {
			action.item=function(){return this;}
			return Fossil.FixGetAllElementsVE(subject,action);
		};
		
		VictorEngine.waitAnimation=function(animationId)
		{
			return Fossil.guessAnimationEnd(animationId);
		}
		
		
		//skipping VE_ActionDodge because I can't figure out 
		//how to get elemental-based dodges to work in my MV project
		
		if(Imported['VE - Charge Actions'])
		{
			//make the update charge action decrement properly
			Fossil.fixVEUpdateChargeAction=Game_BattlerBase.prototype.updateChargeAction;
			Game_BattlerBase.prototype.updateChargeAction = function(){
				//instead of having a null current action, we have a current action 
				//with an item Id of zero.
				if(this.currentAction() && this.currentAction()._item._itemId==0)
				{
					this._chargeAction.turns = this._chargeAction.turns -1;
				}
				Fossil.fixVEUpdateChargeAction.apply(this,arguments);
			}
			
		}
		

		if(Imported['VE - Materia System'])	
		{
			
			
			Window_MateriaEquip.prototype.updateCursor = function() 
			{
				Window_Selectable.prototype.refreshCursor.apply(this,arguments)
			};
			
			//fix for the the windowcursorsprite->cursorsprite rename
			//and the fact that it's no longer a child.  Basically just use the generic createallparts.
			Window_MateriaEquip.prototype._createAllParts = function() 
			{
				Window.prototype._createAllParts.call(this);
			}
			
			//those black rectangles are ugly on this menu, and don't exist in MV.  Remove them.

			//restore MV look (no black rectangles, closer clustered items)
			//might be overkill but w/e
			Window_MateriaStatus.prototype.drawItemBackground=Fossil.MV.drawItemBackground;
			Window_MateriaStatus.prototype.itemHeight=Fossil.MV.itemHeight;
			Window_MateriaStatus.prototype.setCursorRect=Fossil.MV.setCursorRect;
			Window_MateriaList.prototype.drawItemBackground=Fossil.MV.drawItemBackground;
			Window_MateriaList.prototype.itemHeight=Fossil.MV.itemHeight;
			Window_MateriaList.prototype.setCursorRect=Fossil.MV.setCursorRect;
			Window_MateriaItem.prototype.drawItemBackground=Fossil.MV.drawItemBackground;
			Window_MateriaItem.prototype.itemHeight=Fossil.MV.itemHeight;
			Window_MateriaItem.prototype.setCursorRect=Fossil.MV.setCursorRect;
			Window_MateriaShop.prototype.drawItemBackground=Fossil.MV.drawItemBackground;
			Window_MateriaShop.prototype.itemHeight=Fossil.MV.itemHeight;
			Window_MateriaShop.prototype.setCursorRect=Fossil.MV.setCursorRect;
			Window_MateriaEquip.prototype.drawItemBackground=Fossil.MV.drawItemBackground;

			//replace with MZ versions
			Window_MateriaEquip.prototype.cursorDown =Window_Selectable.prototype.cursorDown;
			Window_MateriaEquip.prototype.cursorUp =Window_Selectable.prototype.cursorUp;
			Window_MateriaEquip.prototype.cursorRight =Window_Selectable.prototype.cursorRight;
			Window_MateriaEquip.prototype.cursorLeft =Window_Selectable.prototype.cursorLeft;
			
			//no smoothness to our scrolling!
			Window_MateriaEquip.prototype.smoothSelect = function(index) 
			{
				Window_Selectable.prototype.select.apply(this,arguments)
				this.reselect();
				this.refresh();
			};	
			
			Window_MateriaEquip.prototype.scrollTo = function(index) {
				Window_Selectable.prototype.scrollTo.apply(this,arguments)
				this.reselect();
				this.refresh();
			};
			Window_MateriaEquip.prototype.smoothScrollTo = function(index) {
				Window_Selectable.prototype.scrollTo.apply(this,arguments)
				this.reselect();
				this.refresh();
			};
			
			Fossil.fixCursorLevel=Scene_MateriaEquip.prototype.create
			Scene_MateriaEquip.prototype.create=function(){
				Fossil.fixCursorLevel.apply(this,arguments)
				//layer cursor sprite on top by adding it to the top of the list
				//(don't worry, addchild removes it from its current location)
				this._equipWindow._cursorSprite.parent.addChild(this._equipWindow._cursorSprite)
			}
			
		}
		
	})




	Fossil.loadPostFix('EquipSlotsCore',function()
	{
		//prevent a crash if the actor doesn't have any equipment slots.
		Fossil.fixWindowEquipItemIncludes=Window_EquipItem.prototype.includes;
		Window_EquipItem.prototype.includes = function(item) {
			if(this._actor.equipSlotList().length==0){return false}
			return Fossil.fixWindowEquipItemIncludes.apply(this,arguments)
		};
		
		Fossil.FixForceChangeEquip=Game_Actor.prototype.forceChangeEquip;
		Game_Actor.prototype.forceChangeEquip = function(slotId, item) {
			if( this._equips.length==0){return false}
			Fossil.FixForceChangeEquip.apply(this,arguments)
		};
		
		Fossil.FixChangeEquip=Game_Actor.prototype.changeEquip;
		Game_Actor.prototype.changeEquip = function(slotId, item) 
		{
			if( this._equips.length==0){return false}
			Fossil.FixChangeEquip.apply(this,arguments)
		};

	})

	Fossil.loadPostFix('YEP_X_AreaOfEffect',function()
	{
		//we need to move the 'create aoe sprites'
		//it's currently in Spriteset_Battle.prototype.createBattleback
		//but it needs to be in Spriteset_Battle.prototype.createBattleField
		
		Fossil.yanflycreateAoeSprites =Spriteset_Battle.prototype.createAoeSprites;
		
		//neutralize the current call in createBattleback.
		Spriteset_Battle.prototype.createAoeSprites = function(){}
		
		Fossil.createBattleFieldAddAoeSprites=Spriteset_Battle.prototype.createBattleField;
		
		Spriteset_Battle.prototype.createBattleField = function() {

			Fossil.createBattleFieldAddAoeSprites.apply(this,arguments);
			Fossil.yanflycreateAoeSprites.apply(this,arguments);
		};
			
	})


	Fossil.loadPostFix('DreamX_ChoiceHelp',function()
	{
		//the problem is that order of operations is different
		//and the Window_Message.prototype.createSubWindows function that used to add a help window
		//now no longer is called.
		//so the help window gets referenced without being created, and causes a crash.
		//
		//Instead, I'm going to add the help window when it gets asked for and 
		//if it doesn't already exist.
		Fossil.addDreamXHelpWindow=Window_Message.prototype.helpWindow;
		Window_Message.prototype.helpWindow = function () {
			
			if(!this._helpWindow)
			{
				this._choiceWindow=this._choiceWindow||{} //give a dummy choice window
				this._choiceWindow.setHelpWindow=function(){};
				//choicewindow never gets called anyway since it's renamed in RMMZ to choicelist
				this.createSubWindows()
			}
			
			return Fossil.addDreamXHelpWindow.apply(this,arguments);
			
		};
		
		Fossil.setHelpChoiceListWindow=Scene_Message.prototype.createChoiceListWindow;
		Scene_Message.prototype.createChoiceListWindow = function() {
			Fossil.setHelpChoiceListWindow.apply(this,arguments);
			this._choiceListWindow._helpWindow = this._messageWindow._helpWindow;
			this._choiceListWindow.callUpdateHelp();
		};
		//make this do nothing.
		//might have compatibily issues in the future with other things that muck around
		//with the Window_Message.prototype.createSubWindows function, but
		//hopefully nothing unmanageable.
		DreamX.ChoiceHelp.Window_Message_createSubWindows=function(){};

			//this does the things that dreamX wants when he initMembers in terminateMessage.
		Window_Message.prototype.fakeInitMembers = function() {
			this._background = 0;
			this._positionType = 2;
			this._waitCount = 0;
			this._faceBitmap = null;
			this._textState = null;
			this.clearFlags();
		};
		
		
		
		Fossil.swapInFakeInitWindowMessageTerminateMessage=Window_Message.prototype.terminateMessage
		Window_Message.prototype.terminateMessage = function () {
			var realInitMembers = Window_Message.prototype.initMembers
			Window_Message.prototype.initMembers=Window_Message.prototype.fakeInitMembers;
			
			
			//make fake help and choice windows if they don't exist in the current scene
			this._helpWindow=this._helpWindow||{'FossilFake':true};
			this._choiceWindow=this._choiceWindow||{'FossilFake':true};
			Fossil.swapInFakeInitWindowMessageTerminateMessage.apply(this,arguments)
			
			if(this._helpWindow.FossilFake){this._helpWindow =undefined}
			if(this._choiceWindow.FossilFake){this._choiceWindow =undefined}
			
			
			Window_Message.prototype.initMembers= realInitMembers;
		};
		
		
		
	})


	Fossil.loadPostFix('DreamX_CollapseAnimation',function()
	{
		//add some animation handlers so it can pretend it knows if animations are playing.
		Sprite_Battler.prototype.startAnimation = function() {
			this._animationPlaying = true;
		};

		Sprite_Battler.prototype.isAnimationPlaying = function() {
			return this._animationPlaying;
		};

		Sprite_Battler.prototype.endAnimation = function() {
			this._animationPlaying = false;
		};

	})

	Fossil.loadPostFix('DreamX_BattleHudOnMap',function()
	{
		//add this function to the map scene so it initializes, since dreamx provides no arguments.
		Scene_Map.prototype.windowAreaHeight=Scene_Battle.prototype.windowAreaHeight;
	})

	Fossil.loadPostFix('JK_MailSystem',function()
	{
		//add a dummy function for this thing to release reservations on
		//since the cache no longer requires that.
		ImageManager.releaseReservation=function(){};
		//this plugin used a custom drawMailTextEx which doesn't print anything in MZ
		//this is due to a lack of text flushing.
		//force a text flush
		Window_Mail.prototype.drawMailTextEx=function(text,x,y)
		{
			const rect = this.baseTextRect();
			if(y==0){
			this.contents.clear()
			this._text = "";
			this._fossilLineCount=0}

			//contents of the MZ Window_Base.prototype.drawTextEx
			this.resetFontSettings();
			const textState = Window_Base.prototype.createTextState.call(this,text,x,y,rect.width);
			//loop through if we have wordwrap to make it work.
			if(this._wordWrap)
			{	
				while (textState.index < textState.text.length) 
				{
					this.processCharacter(textState);
					this.flushTextState(textState);
				}
			}else{			
				this.processAllText(textState);
			}
			//count how many newlines we have.  Add a buffer.
			this._fossilLineCount+=(textState.text.split('\n').length||2)+2;
			//this._allTextHeight=this._fossilLineCount*Window_Scrollable.prototype.itemHeight.call(this)
			this._text=this._text +textState.text;//extend the text because of having two calls to this.
			return textState.outputHeight; 
		}
		
		Fossil.fixWindowMailRefresh=Window_Mail.prototype.refresh
		Window_Mail.prototype.refresh=function()
		{
			//this.paint();
			Fossil.fixWindowMailRefresh.apply(this,arguments);
			this.cursorFixed(true);
		}
		
		//Window_Mail.prototype.updateKeyScrolling=function(){}
	 
		Window_Mail.prototype.maxItems=function()
		{
			return 1;
		} 
		
		Window_Mail.prototype.itemHeight = function() {
			return this._allTextHeight|| Window_Scrollable.prototype.itemHeight.call(this); 
		};  
		Window_Mail.prototype.overallHeight = function()
		{
			//make the minimum height 480 pixels, to ensure that windows are initialized to a decent size.
			//since we can't compare against undefined we have a ||0 in there.
			return Math.max(this._allTextHeight+48||0,480);
		}
		
		Window_Mail.prototype.contentsHeight=function()
		{
		return Math.max( this.overallHeight(),Window_Selectable.prototype.contentsHeight.call(this))
		}
		
		//remove added MZ padding on item height
		Window_MailAttachment.prototype.itemHeight=function()
		{
			return Window_Scrollable.prototype.itemHeight.call(this)
		}
		//those black rectangles are ugly on this menu, and don't exist in MV.  Remove them.
		Window_MailAttachment.prototype.drawItemBackground = function (){}
		
		Window_Mail.prototype.scrollOriginDown = function(speed) {
			this.scrollBy(0,speed)
		};

		Window_Mail.prototype.scrollOriginUp = function(speed) {
			this.scrollBy(0,-speed)
		};
		
		//adjust this so the mousewheel works.
		Window_Mail.prototype.smoothScrollDown = function(n) {
			this.smoothScrollBy(0, this.lineHeight()*2 * n);
		};

		Window_Mail.prototype.smoothScrollUp = function(n) {
			this.smoothScrollBy(0, -this.lineHeight()*2 * n);
		};

		
		Fossil.refreshMailScrollLevel=Scene_Mail.prototype.changeMailSelection
		Scene_Mail.prototype.changeMailSelection=function(index){
			Fossil.refreshMailScrollLevel.apply(this,arguments);
			this._mailWindow.resetScroll();
		}
		
		
			//window_mail appears to be assuming that this returns the text height for all text?
			//instead of just a single line, but only in the .drawmail command.
		Window_Mail.prototype.calcTextHeight = function(textState) {
			//if we have word wrap or have a properly formatted text state just use the base window one
			const fmtStr = new RegExp("<(?:" + JKMail.Param.WordWrapText + ")>", "i");
			const wordwrap = this._item._message.match(fmtStr);
			if (wordwrap || textState.x!==undefined){return Window_Base.prototype.calcTextHeight.apply(this,arguments)}
			//otherwise add a little twist: we are multiplying by the number of lines
			//to get the total text height
			const lineSpacing = this.lineHeight() - $gameSystem.mainFontSize();
			const lastFontSize = this.contents.fontSize;
			const lines = textState.text.slice(textState.index).split("\n");
			const textHeight = this.maxFontSizeInLine(lines[0]) + lineSpacing;
			this.contents.fontSize = lastFontSize;
			return textHeight*lines.length;
		}; 

		//prevent if from crashing if we try to select mail and there's no mail
		Fossil.preventDrawMailSubjectCrash=Window_Mail.prototype.drawMail 
		Window_Mail.prototype.drawMail = function(){
			if(!this._item){return};
			Fossil.preventDrawMailSubjectCrash.apply(this,arguments);
		}

		
	})



	Fossil.loadPostFix(['YEP_X_ChangeBattleEquip','YEP_X_ActorPartySwitch','YEP_RowFormat'],function()
	{
		Fossil.fixstoreBattleSpriteset=Game_Temp.prototype.storeBattleSpriteset ;
		Game_Temp.prototype.storeBattleSpriteset = function() {
			Fossil.fixstoreBattleSpriteset.apply(this,arguments);
			SceneManager.fossilHoldOnToScene=true;
		}
		
		Fossil.fixrestoreBattleSpriteset=Game_Temp.prototype.restoreBattleSpriteset;
		Game_Temp.prototype.restoreBattleSpriteset = function() {
			SceneManager.fossilHoldOnToScene=false;
			Fossil.fixrestoreBattleSpriteset.apply(this,arguments)
		}
		
	})

	Fossil.loadPostFix('YEP_StatAllocation',function()
	{
		//the 'gainbonusap' function on this plugin is broken
		//due to a bug it SETS your total AP to the given value
		//rather than INCREASING it by that amount.
		//so if we're gaining, add the appropriate one for the class.
		Fossil.fixStatAllocationGainBonusAp=Game_Actor.prototype.gainBonusAp ;
		//default the classId to be 0 (ie: current class) if not specified.
		Game_Actor.prototype.gainBonusAp = function(value, classId=0) {
			classId == 0? arguments[0]+=this.bonusAp() : arguments[0] +=this._bonusAllocationPoints[classId];
			Fossil.fixStatAllocationGainBonusAp.apply(this,arguments);
		};
		
		//fix gauge layering issue.
		Window_AllocationList.prototype.drawGauge = function(x, y, width, rate, color1, color2) {
			//use the parameter for the gauge for the gaugeID
			gaugeID=[this.constructor.name.toString(),x,y,width].toString()

			//this will be something like "Window_VictoryExp,184,38,416"
			label ='';//no label
			[x,y]=this.FossilTweakGaugeByPlugin(x,y)

			var fillW = Math.floor(width * rate);
			var gaugeY = y + this.lineHeight() - 20;
			var newGauge=this.placeFossilGauge(gaugeID, rate,'rate',label,x,gaugeY,width,12)
			newGauge._gaugeColor1 = color1;
			newGauge._gaugeColor2 = color2;
			newGauge.hideValueText = true;
			newGauge.hideLabelText=true;
			newGauge.drawGauge();
			newGauge.parent.addChild(newGauge);//shuffle it to the front.


		};
		
	})



	Fossil.loadPostFix(['YEP_MessageCore','YEP_X_ExtMesPack1','YEP_X_ExtMesPack2','YEP_X_MessageBacklog'],function()
	{
		
		//revert the namebox changes from messagecore, restoring to stock rmmz
		Window_NameBox= MZ_Window_NameBox;
		MZ_Window_NameBox=undefined;//clean up after ourselves.

			//we need to pass in the ._params yanfly's message creation command wants
			var fixMessageCoreCommand101Params=Game_Interpreter.prototype.command101
			Game_Interpreter.prototype.command101 = function(params) {
				params=params||this._params;//recover if it got stolen.
				//cancel things as per MZ idiom.
				if ($gameMessage.isBusy()) 
				{
					return false;
				}
				//create the name box outside of yanfly's code
				$gameMessage.setSpeakerName(params[4]);
				
				return fixMessageCoreCommand101Params.call(this,params);
			} 
			
		
		
		//because Window_Message.prototype.createSubWindows never happens, the name windows
		//never get created by message core.  That's generally good, but it means that we have
		//to put in a decoy so yanfly's code can close something and won't crash.
		//so give a couple dummies so message core thinks its closing its own windows 
		var makeFakeNameBoxesWindowMessage= Window_Message.prototype.initialize;
		Window_Message.prototype.initialize = function(rect) {
			this._nameWindow={};
			this._nameWindow.deactivate = function(){};
			this._backupRect=rect;
			if($gameSystem.messageWidth())
			{
				rect.width=$gameSystem.messageWidth()
			}
			if($gameSystem.messageRows())
			{
				
			}
			
			if(Imported.YEP_X_MessageBacklog)
			{
				//we don't create subwindows, so call the existing message backlog window code from here
				this.createMessageBacklogWindow();
			}

			makeFakeNameBoxesWindowMessage.apply(this,arguments)
		}

		//undo yanfly's injection into the rendering code; this prevents the
		// Window_Message.prototype.adjustWindowSettings from being called unnecessarily.
		Window_Message.prototype.newPage = Yanfly.Message.Window_Message_newPage;
		
		//in RMMZ message window size and stuff doesn't get reset whenever they get touched.
		//this forces them to do that, so when we have plugin commands to change width it happens 
		forceRefreshWindowMessageupdatePlacement=Window_Message.prototype.updatePlacement;
		Window_Message.prototype.updatePlacement = function() {
			//look up a couple levels to find our scene and the default generation
			var rect=this.parent.parent.messageWindowRect();
			// check if our window is different than the original.  If so, change location and refresh it.
			if((this.x!==rect.x)||(this.y!==rect.y)||(this.width!==rect.width)||(this.height!==rect.height))
			{
				this.move(rect.x , rect.y, rect.width, rect.height);
				this.createContents();
			}

			forceRefreshWindowMessageupdatePlacement.apply(this,arguments)
		}
			

		//copied out of RMMV, checks for bottom row.
		Window_Selectable.prototype.bottomRow = function() {
			return Math.max(0, this.topRow() + this.maxPageRows() - 1);
		};
		
		Window_Message.prototype.shouldBreakHere = function(textState) {
			if (this.canBreakHere(textState)) {
				if(this._needsWordWrapRefresh)
				{
					this._needsWordWrapRefresh=false;
					return true;
				}
				if (!this._showFast && !this._lineShowFast) {
					return true;
				}
				if (this.isWaiting()) {
					return true;
				}
			}
			return false;
		};

		//this disables where word wrap checking is hooked into yanfly.
		Window_Base.prototype.processNormalCharacter=Yanfly.Message.Window_Base_processNormalCharacter;
		//by undoing the overwrite.
		//then we overwrite the function again, but in a different way
		Fossil.FixWordWrapPNC = Window_Base.prototype.processNormalCharacter;
		Window_Base.prototype.processNormalCharacter = function(textState) {
			
			if (this.checkWordWrap(textState))
			{
				//if our current character is a space, replace it with a newline.  otherwise insert a newline.
				if (textState.text[textState.index]==' ')
				{
					textState.text=textState.text.slice(0,textState.index)+'\n'+textState.text.slice(textState.index+1);
				}else{
					textState.text=textState.text.slice(0,textState.index)+'\n'+textState.text.slice(textState.index);
				}
				
			}else{
				Fossil.FixWordWrapPNC.apply(this,arguments);
			}
		};


		Fossil.FixUpdateMessageWW=Window_Message.prototype.updateMessage;
		Window_Message.prototype.updateMessage = function() {
			const textState = this._textState;
			if(this._wordWrap)
			{
				if (textState) {
					while (!this.isEndOfText(textState)) {
						if (this.needsNewPage(textState)) {
							this.newPage(textState);
						}
						this.updateShowFast();
						this.processCharacter(textState);
						if (this.shouldBreakHere(textState)) {
							break;
						}else{
							//if we have word wrap we still 
							//will need to process all the text
							//so do it here real quick.
							//otherwise it loops through all text without printing it which means you get it all on one big line with no gaps
							while (!this.isEndOfText(textState)) 
							{
								if(!this._wordWrap)
								{
									//if we turn off word wrap or, stop fast rendering.
									return true;
								}
								if (this.needsNewPage(textState)) {
									return true;
								}
								this.processCharacter(textState);
								this.flushTextState(textState);
								//if we turn off the fast text we go back to normal processing.
								if(this.shouldBreakHere(textState))
								{
									return true;
								}
							}
							break;
						}
					}
					this.flushTextState(textState);
					if (this.isEndOfText(textState) && !this.isWaiting()) {
						this.onEndOfText();
					}
					return true;
				} else {
					return false;
				}
			
			}else{
				return Fossil.FixUpdateMessageWW.apply(this,arguments);
			}
		};

		Fossil.sendBufferSignalWordWrap=Window_Base.prototype.checkWordWrap;
		Window_Base.prototype.checkWordWrap = function(textState) {
			var wordWrapState=Fossil.sendBufferSignalWordWrap.call(this,textState);
			this._needsWordWrapRefresh=wordWrapState;
			return wordWrapState;
			
		};

		Fossil.fixprocessNewLine=Window_Message.prototype.processNewLine 
		Window_Message.prototype.processNewLine = function(textState) {
			if (this._wordWrap)
			{
				//fast line showing shouldn't stop when wordwrapping just because we move to a new line
				//instead we should only stop it when we get the /< signal.
				//so comment this out:
				//this._lineShowFast = false;
				//and do the rest
				//it'll still stop autoadvancing in a new message box though.
				Window_Base.prototype.processNewLine.call(this, textState);
				if (this.needsNewPage(textState)) {
					this.startPause();
				}
			}else{
				Fossil.fixprocessNewLine.apply(this,arguments)
			}
		};
			
	})


	Fossil.loadPostFix('YEP_WeaponAnimation',function()
	{
		//use the new setHue function to tint.
		Fossil.updateWeaponSpriteHue = Sprite_Weapon.prototype.loadCustomBitmap 
		Sprite_Weapon.prototype.loadCustomBitmap = function() {
			Fossil.updateWeaponSpriteHue.apply(this,arguments);
			this.setHue(this.parent._battler.getUniqueWeaponHue());
		};
		
		
	})

	Fossil.loadPostFix('FROG_TalentCore',function()
	{
		Scene_Talents.prototype.helpAreaTop= function()
		{return 0}
		
		Fossil.fixMaxColsTalentCheckCommandWindow=Window_TalentCheckCommand.prototype.maxCols 
		Window_TalentCheckCommand.prototype.maxCols = function () {
			if (!this._list)
			{
				return 2
			}else{
				return Fossil.fixMaxColsTalentCheckCommandWindow.call(this,arguments)
			}
		};
		
		
	})

	Fossil.loadPostFix('YEP_EventCopier',function()
	{
		//fix a copy-and paste error so the event copier actually executes post-copy code.
		//originally it'd execut pre-copy code twice.
		Yanfly.Param.EventCopierPostCopy = JSON.parse(Yanfly.Parameters['PostCopyCode']);
	})
	
	Fossil.loadPostFix('ALOE_ConditionalChoices',function()
	{
		//import the rmmv function if we don't already define it somehow.
		Window_ChoiceList.prototype.textWidthEx= Window_ChoiceList.prototype.textWidthEx || function(text) {
			return this.drawTextEx(text, 0, this.contents.height);
		};
	})
	
	Fossil.loadPostFix(['YEP_SaveCore','YEP_X_Autosave','YEP_X_NewGamePlus'],function()
	{


		//based on StorageManager.loadObject but omitting the json conversion.
		StorageManager.load = function(savefileId) {
			const saveName = DataManager.makeSavename(savefileId);
			this.loadZip(saveName)
			.then(zip => this.zipToJson(zip))
			.then(saveinfo=>{Fossil.backupwindowref._saveContents=saveinfo;
			Fossil.oldSaveDrawContents.call(Fossil.backupwindowref,Fossil.backupdyvalue)}
			)
			return false;
		}
		//StorageManager.save =StorageManager.saveObject
		StorageManager.save = function(savefileId, object) {
		const saveName = DataManager.makeSavename(savefileId);
		return this.jsonToZip(json)
			.then(zip => this.saveZip(saveName, zip));
		};

		Fossil.oldSaveDrawContents=Window_SaveInfo.prototype.drawContents;

		Window_SaveInfo.prototype.drawContents=function(dy){
			Fossil.backupdyvalue=dy;
			Fossil.backupwindowref=this;
			//there probably shouldn't be a race condition from this,
			//two assignments should easily outpace a file loading and unzipping
		}


		Scene_File.prototype.firstSavefileIndex= function()
		{
			return Scene_Load.prototype.firstSavefileId.apply(this,arguments);
		}


		//make this thinner
		Fossil.thinSaveFileWindowInit= Window_SavefileList.prototype.initialize;
			Window_SavefileList.prototype.initialize = function(x,y,width,height) 
			{
				Fossil.thinSaveFileWindowInit.call(this, new Rectangle(x,y,Math.round(width*3/4),height))
			}


		Scene_File.prototype.mainAreaTop = function() {return 0}


		 //copied out of Window_ChoiceList.prototype.initialize
		Window_SaveConfirm.prototype.initialize = function() {
			//taking the init from Scene_Title.prototype.commandWindowRect
			//then making the width fit the text you entered.
			var ww = Graphics.boxWidth-12
			var wh = Window_Selectable.prototype.fittingHeight(3);
			var wx = (Graphics.boxWidth - ww) / 2 ;
			var wy = Graphics.boxHeight - wh - 96 ;
			rect = new Rectangle(wx, wy, ww, wh);
			Window_TitleCommand.prototype.initialize.call(this, rect);
			ww = Window_Base.prototype.textWidthEx.call(this,Yanfly.Param.SaveConfirmLoadTx )+64
			var wx = (Graphics.boxWidth - ww) / 2 ;
			this.move(wx,wy,ww,wh);
			this.refresh();
		};
		Window_SaveConfirm.prototype.selectLast=function()
		{
			
		}

		
		Window_SaveConfirm.prototype.setData=function(text)
		{
			var ww = Window_Base.prototype.textWidthEx.call(this,text)+48
			var wx = (Graphics.boxWidth - ww) / 2 ;
			var wh = Window_Selectable.prototype.fittingHeight(3);
			var wy = Graphics.boxHeight - wh - 96 ;
			this.move(wx,wy,ww,wh)
			//stolen from Window_Help.prototype.refresh 
			this.refresh();
			this._text=text;
			const rect = this.baseTextRect();
			this.drawTextEx(this._text, rect.x, rect.y, rect.width);
		}



		if(Imported.YEP_X_Autosave)
		{
			if(Fossil.chattyOutput)
			{
			console.log('YEP_X_Autosave is currently not supported in FOSSIL, since MZ has a built-in autosave.')
			}
			if(Yanfly.Param.AutosaveOnMapLoad)
			{
				if(Fossil.chattyOutput)
				{
				console.log('Auto Save On Map load in YEP_X_Autosave has been disabled. MZ has that already.')
				}
				Yanfly.Param.AutosaveOnMapLoad=false;
			}
		}
				
				
		Fossil.fixSaveFileListIndex=Window_SavefileList.prototype.drawItem
		Window_SavefileList.prototype.drawItem = function(index){
			index--;
			Fossil.tempSaveFileIndex=1;
			Fossil.fixSaveFileListIndex.call(this,index)
		}

		Window_SavefileList.prototype.itemRect = function(index) {
			//have to adjust the off-by-one here.
			index+= Fossil.tempSaveFileIndex||0;
			Fossil.tempSaveFileIndex=0;
			const maxCols = this.maxCols();
			const itemWidth = this.itemWidth();
			const itemHeight = this.itemHeight();
			const colSpacing = this.colSpacing();
			const rowSpacing = this.rowSpacing();
			const col = index % maxCols;
			const row = Math.floor(index / maxCols);
			const x = col * itemWidth + colSpacing / 2 - this.scrollBaseX();
			const y = row * itemHeight + rowSpacing / 2 - this.scrollBaseY();
			const width = itemWidth - colSpacing;
			const height = itemHeight - rowSpacing;
			return new Rectangle(x, y, width, height);
		};

		Fossil.fixSaveInfoOffByOne=Window_SaveInfo.prototype.savefileId 
		Window_SaveInfo.prototype.savefileId = function() {
		  return Fossil.fixSaveInfoOffByOne.apply(this,arguments)-1;
		};

		Fossil.fixSaveActionOffByOne=Window_SaveAction.prototype.savefileId 
		Window_SaveAction.prototype.savefileId = function() {
			return Fossil.fixSaveActionOffByOne.apply(this,arguments)-1;
		};

		Fossil.fixonSaveSuccessOffByOne=Scene_File.prototype.onSaveSuccess 
		Scene_File.prototype.onSaveSuccess = function() {
			Fossil.fixonSaveSuccessOffByOne.apply(this,arguments)
			if (!Yanfly.Param.SavePop) {
				this._actionWindow._currentFile++;
				this._infoWindow._currentFile++;
				this._infoWindow.updateIndex();
			}
		}

		Fossil.fixperformActionDeleteOffByOne=Scene_File.prototype.performActionDelete
		Scene_File.prototype.performActionDelete = function() {
			Fossil.fixperformActionDeleteOffByOne.apply(this,arguments)
			if (!Yanfly.Param.SavePop) {
				this._actionWindow._currentFile++;
				this._infoWindow._currentFile++;
				this._infoWindow.updateIndex();
			}	
		}

		Fossil.fixSaveActionFirstSaveLoad=Scene_File.prototype.create 
		Scene_File.prototype.create = function() {
			Fossil.fixSaveActionFirstSaveLoad.apply(this,arguments)
			this._infoWindow.updateIndex();
			this._listWindow._autosave = $gameSystem.isAutosaveEnabled();
		}
		//I believe no wait is needed now that we're handling async right
		Fossil.updateIndexNoWait=Window_SaveInfo.prototype.updateIndex 
		Window_SaveInfo.prototype.updateIndex =function()
		{
			Fossil.updateIndexNoWait.apply(this,arguments);
			this._waitTime=1;
		}

		Scene_File.prototype.performActionSave = function ()
		{
			Scene_Save.prototype.executeSave.call(this,this.savefileId());
			
		}
		
		if(Imported.YEP_X_NewGamePlus)
		{
			//Due to the async loading (and promises being truthy), without this code
			//we end up with
			// 1) Select New Game +
			// 2) New Game is created
			// 3) New Game gets modifications applied
			// 4) New game gets thrown out and original savegame is loaded.
			// 5) Save game starts.
			// What we do instead here is remove the original Scene_File.prototype.startNewGamePlus
			//so it's more
			// 1) select new game plus
			// 2) nothing happens
			// 3) ...
			// 4) savegame is loaded
			// 5) newgame is created
			// 6) new game gets modifications applied
			// 7) start new game+
			Fossil.startNewGamePlusAfterFileLoads=DataManager.correctDataErrors 
			DataManager.correctDataErrors = function() {
				Fossil.startNewGamePlusAfterFileLoads.apply(this,arguments);
				Fossil.startNewGamePlus.call(SceneManager._scene);
			};
			
			
			Fossil.startNewGamePlus=Scene_File.prototype.startNewGamePlus
			Scene_File.prototype.startNewGamePlus=function(){}
		}

	})






	//////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////
	//POST CHECK IS NOW COMPLETE
	//////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////////////////
	///ADD SPECIFIC FIXES
	//////////////////////////////////////////////////////////////////////

	//First, find where our core plugin (That is, FOSSIL.js) is located in 
	//the document body
	//note that I am ASSUMING that nobody else is touching the plugin order
	//in the document body, which simpifies things greatly.
	//I don't think anyone else is doing something this weird so I think
	//I am probably fine.
	Fossil.corePluginListOffset=0;
	documentBodyList=Array.from(document.body.children)
	for(var elementIndex=0;elementIndex<documentBodyList.length;elementIndex++)
	{
		if(documentBodyList[elementIndex].outerHTML.contains('plugins/FOSSIL.js'))
		{
			Fossil.corePluginListOffset=elementIndex;
			break;
		}
		
	}

	//okay, so now we know where FOSSIL is in the document body.  
	//It is followed by the remaining plugins in order.
	//since we throw an error if FOSSIL is not the first plugin,
	// we can be 100% sure it is either first, or someone has modified
	//the FOSSIL code.  In the latter case, this is your problem now.


	//now we are going to go through and parse these in reverse order.
	//Why?  Well, our children elements are numbered starting at the beginning.
	//So if we have 20 plugins, if we start at #20, and add the post plugins 'afterEnd'
	//(pushing everything 21+ down one slot)
	// we can add an unlimited number of Post functions without losing track of where we are.
	//similarly, once we are done adding post functions
	//we add in all our Pre functions to slot 20 'beforeBegin', 
	//pushing the core plugin and all post plugins down a slot each time.
	//when we move on to the plugin in slot 19 we do 19's post functions
	//then its pre functions
	//and so on and so forth.

	//add our final fixes




}


//this section runs if we were called using the normal plugin definition
//it copies the index.html and redirects to a new one
//if you just want to fix plugins, there's nothing here for you to do.  Go up^ to that block.
if(typeof(scriptUrls)!=="undefined")
{
	
	if($plugins[0].name!=='FOSSIL')
	{
		throw new Error('FOSSIL needs to be the first plugin.  If FOSSIL is not the first plugin, everything will break!'); 
	}
	Fossil.pluginNameList =  $plugins.filter(plugin => plugin.status).map(a => a.name );
	
	if(Fossil.pluginNameList.contains('FOSSIL_Pre')||Fossil.pluginNameList.contains('FOSSIL_Post'))
	{
		throw new Error('The new version of FOSSIL only requires a single plugin.'); 
	}
	console.log('This is using the original main.js')
	//okay, we are running in the original main.js file.
	//in order to inject into plugin order, 
	//Fossil must override main.js and become the new main.js.
	//to do that, we load the original index.html file.
	//then we save a copy of it, FOSSILindex.html
	//which has one change: main.js is replaced with a call to Fossil
	//we then force a refresh to this new html file.
	//NOTE FOR DEVELOPERS: If you just replace index.html with the new file
	//you skip this entire setup step.
	//
	if(Fossil.pluginNameList.contains('YEP_GridFreeDoodads'))
	{
		//stop it from popping open the console.  Rude!
		Utils.RPGMAKER_VERSION="1.6.1";
	}

	Fossil.loadTextFile = function(name, src) {
		const xhr = new XMLHttpRequest();
		const url =  src;
		window[name] = null;
		xhr.open("GET", url);
		xhr.overrideMimeType("text/plain");
		xhr.onload = () => this.onXhrLoad(xhr, name, src, url);
		xhr.onerror = () => this.onXhrError(name, src, url);
		xhr.send();
	};



	Fossil.onXhrError = function(name, src, url) {
		const error = { name: name, src: src, url: url };
		this._errors.push(error);
	};

	Fossil.loadTextFile("newIndexHtml",'index.html')
	
	Fossil.onXhrLoad = function(xhr, name, src, url) {
		if (xhr.status < 400) {
			window[name]= (xhr.responseText);
			writeNewIndexFile(window[name], 'text/html');
			console.log('I wrote a new file')
			window.location.replace("FOSSILindex.html");
		} else {
			this.onXhrError(name, src, url);
		}
	};
	
	writeNewIndexFile = function(rawIndexHtml) {
		//next, we take the newIndexHtml and replace 'main.js' with '/plugins/Fossil.js'

		rawIndexHtml = rawIndexHtml.replace("main.js", "plugins/FOSSIL.js");

		var fs = require("fs");
		var path = require('path');
		var base = path.dirname(process.mainModule.filename);
		var filePath = path.join(base, 'FOSSILindex.html');
		//var data = createWrapperObject(, orderedResult, unknownPlugins);
		fs.writeFileSync(filePath, rawIndexHtml);
		//synchronous writing means that we can guarantee this is in place 
		//for when we ridirect to the new html.
		
	};
	
	console.log('end of FOSSILindex.html creation block!  The window should refresh soon.')	
}





//this code takes the place of Main.js.  DO NOT TOUCH THIS CODE.
if(typeof(scriptUrls)=="undefined")
{
	
	//finally we're here.  This is the altered plugin manager that handles our injections
	//
	Fossil.alterPluginManager = function()
	{
		PluginManager.setup = function(plugins) {
			
			
			for (const plugin of plugins) {
				//FOSSIL does not get processed like a normal plugin
				if(plugin.name!=='FOSSIL')
				{
					if (plugin.status && !this._scripts.includes(plugin.name)) {
						this.setParameters(plugin.name, plugin.parameters);
						this.loadScript(plugin.name);
						this._scripts.push(plugin.name);
					}
				}
			}
			
			//and these are the fixes that happen after EVERY plugin.
			//this includes windowfixer et cetera.
			const FinalScript = document.createElement("script");
			FinalScript.type = "text/javascript";
			FinalScript.async = false;
			FinalScript.defer = true;
			FinalScript.src='data: text/javascript;base64,'+btoa(
					'var tempFunc=Fossil.finalFixes.toString();'+
					'tempFunc=tempFunc.substring(tempFunc.indexOf("{")+1,tempFunc.length-1);'+
					'tempFunc+=" if(Fossil.chattyOutput){console.log('+ "'"+'finalFixes Here'+"'"+')}";  '+
					'eval.call(window,tempFunc);'
					)
			document.body.insertBefore(FinalScript, null);
		};
		
		//when we load a script, we first add any prefixes, then any postfixes
		PluginManager.loadScript = function(filename) {
			//add prefixes
			
			//now you might think, 'oh, I'll just put in an inline script function'
			//something like:
			//<script type="text/javascript" defer="">Fossil.preList[0].preFixes()</script>
			//NOPE!
			//inline functions IGNORE defer and async and always go before external scripts.
			//we exploit this later in order to immediately push a constant into global scope.
			//So what do we do?
			//we encode our javascript in base 64, then set the src atribute to
			// data:text/javascript;base64,[base64ofourcode]
			//as learned here from this stack overflow question
			//https://stackoverflow.com/questions/41394983/how-to-defer-inline-javascript/46088817#46088817
			//data: blocks execute at the same level as external scripts
			//
			//stupid but we gotta do it.
			//more than that, since functions-in-functions only have local scope
			//we gotta eval instead of calling the function.
			Fossil.spoofPre='Utils.RPGMAKER_VERSION=Utils.FAKE_VERSION';
			Fossil.spoofPost='Utils.RPGMAKER_VERSION=Utils.MZ_VERSION';
			
			//change the rpgmaker version before this plugin runs.
			if(Fossil.versionSpoofPlugins.includes(filename))
			{
				const script = document.createElement("script");
				script.type = "text/javascript";
				script.async = false;
				script.defer = true;
				script.src='data: text/javascript;base64,'+btoa(
				'eval.call(window,Fossil.spoofPre);'
				)
				document.body.appendChild(script);
			}
			
			
			
			for(var preFixIndex=0; preFixIndex<Fossil.preList.length ;preFixIndex++)
			{
				if(filename==Fossil.preList[preFixIndex].pluginName)
				{
					const script = document.createElement("script");
					script.type = "text/javascript";
					script.async = false;
					script.defer = true;
					script.src='data: text/javascript;base64,'+btoa(
					'var tempFunc=Fossil.preList['+preFixIndex+'].preFunction.toString();'+
					'tempFunc=tempFunc.substring(tempFunc.indexOf("{")+1,tempFunc.length-1);'+
					'tempFunc+=" if(Fossil.chattyOutput){console.log('+"Fossil.preList["+preFixIndex+"].pluginName"+"+'PREFixes Here'"+')}";  '+
					'eval.call(window,tempFunc);'
					)
					document.body.appendChild(script);
				}
			}
			
			
			const url = this.makeUrl(filename);
			const script = document.createElement("script");
			script.type = "text/javascript";
			script.src = url;
			script.async = false;
			script.defer = true;
			script.onerror = this.onError.bind(this);
			script._url = url;
			document.body.appendChild(script);
			
			for(var postFixIndex=0; postFixIndex<Fossil.postList.length ;postFixIndex++)
			{
				if(filename==Fossil.postList[postFixIndex].pluginName)
				{
					
					const script = document.createElement("script");
					script.type = "text/javascript";
					script.async = false;
					script.defer = true;
					script.src='data: text/javascript;base64,'+btoa(
					'var tempFunc=Fossil.postList['+postFixIndex+'].postFunction.toString();'+
					'tempFunc=tempFunc.substring(tempFunc.indexOf("{")+1,tempFunc.length-1);'+
					'tempFunc+=" if(Fossil.chattyOutput){console.log('+"Fossil.postList["+postFixIndex+"].pluginName"+"+'POSTFixes Here'"+')}";  '+
					'eval.call(window,tempFunc);'
					)
					document.body.appendChild(script);
				}
			}
			
			//change the rpgmaker version back after this plugin runs.
			if(Fossil.versionSpoofPlugins.includes(filename))
			{
				const script = document.createElement("script");
				script.type = "text/javascript";
				script.async = false;
				script.defer = true;
				script.src='data: text/javascript;base64,'+btoa(
				'eval.call(window,Fossil.spoofPost);'
				)
				document.body.appendChild(script);
			}
			
			//yes in THEORY this could be made more efficient by not constantly flipping back and forth
			//if we have two adjacent plugins that require the old version number
			//but guess what?  It's a super fast execution so we lose no time doing it
			//and this code is hideous already without more optimizations.
			
		};
		

	}

	//we are the new main.js replacement.  Do the main.js stuff, but in a fossil way.
	//treat this like main.js; IE: do NOT alter this if you don't know what you're doing.
	//
	//if you need to change main.js, change it here
	//
	
	//tell people they are running in FOSSIL.
	console.log('FOSSIL is now running as main.')

	//=============================================================================
	// main.js v1.2.1
	//=============================================================================

//this is an absurd thing we do to keep these constants in a global scope.
	var constDef1 = 'const scriptUrls = ["js/libs/pixi.js","js/libs/pako.min.js","js/libs/localforage.min.js","js/libs/effekseer.min.js","js/libs/vorbisdecoder.js","js/rmmz_core.js","js/rmmz_managers.js","js/rmmz_objects.js","js/rmmz_scenes.js","js/rmmz_sprites.js","js/rmmz_windows.js","js/plugins.js"];'
	var constDef2= 'const effekseerWasmUrl = "js/libs/effekseer.wasm";'
	
	//we need to define constants with a global scope, 
	//but since we're in an if statement we can't.
	//so instead, we push them up into the html layer from inside here.
	//since if they're inline scripts they get instantly evaluated.
	
	//Q: What if we had them outside an if statement?  
	//Then on the first execution of this file, when it's still being controlled by 
	//the original main.js, the browser would detect an attempt to redefine these 
	//const values before we got a chance to run any of this script.  No go.
	
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.async = false;
	script.defer = true;
	script.innerHTML= constDef1 + ' ' + constDef2;
	document.body.children[0].insertAdjacentElement('beforeBegin',script);
	
		

	class Main {
		constructor() {
			this.xhrSucceeded = false;
			this.loadCount = 0;
			this.error = null;
		}

		run() {
			this.showLoadingSpinner();
			this.testXhr();
			this.loadMainScripts();
		}

		showLoadingSpinner() {
			const loadingSpinner = document.createElement("div");
			const loadingSpinnerImage = document.createElement("div");
			loadingSpinner.id = "loadingSpinner";
			loadingSpinnerImage.id = "loadingSpinnerImage";
			loadingSpinner.appendChild(loadingSpinnerImage);
			document.body.appendChild(loadingSpinner);
		}

		eraseLoadingSpinner() {
			const loadingSpinner = document.getElementById("loadingSpinner");
			if (loadingSpinner) {
				document.body.removeChild(loadingSpinner);
			}
		}

		testXhr() {
			const xhr = new XMLHttpRequest();
			xhr.open("GET", document.currentScript.src);
			xhr.onload = () => (this.xhrSucceeded = true);
			xhr.send();
		}

		loadMainScripts() {
			for (const url of scriptUrls) {
				const script = document.createElement("script");
				script.type = "text/javascript";
				script.src = url;
				script.async = false;
				script.defer = true;
				script.onload = this.onScriptLoad.bind(this);
				script.onerror = this.onScriptError.bind(this);
				script._url = url;
				document.body.appendChild(script);
			}
			this.numScripts = scriptUrls.length;
			window.addEventListener("load", this.onWindowLoad.bind(this));
			window.addEventListener("error", this.onWindowError.bind(this));
		}

		onScriptLoad() {
			if (++this.loadCount === this.numScripts) {
				//Adding these lines is the only modification we make to the main class;
				Fossil.pluginNameList =  $plugins.filter(plugin => plugin.status).map(a => a.name );
				if($plugins[0].name!=='FOSSIL')
				{
					throw new Error('Fossil needs to be the first plugin.  If Fossil is not the first plugin, everything will break!'); 
				}
				
				var staticFixList=fossilStaticFixes.toString()
				staticFixList=staticFixList.substring(staticFixList.indexOf("{")+1,staticFixList.length-1)
				var dynamicFixList=fossilDynamicFixes.toString()
				dynamicFixList=dynamicFixList.substring(dynamicFixList.indexOf("{")+1,dynamicFixList.length-1)
				//we need to have an eval because we want all our functions we make
				//to be in scope, rather than stuck insdie the fossilDynamicFixes function
				//BUT!  We want these to be written as functions when coding, 
				//so we don't have big strings hanging around.
				//So basically the wrapper functions get discarded immediately.
				//and we run all of the fixes in global scope.
				eval.call(window,staticFixList) //apply all our static pre-plugin fixes
				eval.call(window,dynamicFixList);
				fossilStaticFixes=undefined;//clear this;
				fossilDynamicFixes=undefined;//clear this;
				Fossil.alterPluginManager(); //alter the plugin manager to work the way we want.
				PluginManager.setup($plugins); //apply our plugin and fixes
			}
		}

		onScriptError(e) {
			this.printError("Failed to load", e.target._url);
		}

		printError(name, message) {
			this.eraseLoadingSpinner();
			if (!document.getElementById("errorPrinter")) {
				const errorPrinter = document.createElement("div");
				errorPrinter.id = "errorPrinter";
				errorPrinter.innerHTML = this.makeErrorHtml(name, message);
				document.body.appendChild(errorPrinter);
			}
		}

		makeErrorHtml(name, message) {
			const nameDiv = document.createElement("div");
			const messageDiv = document.createElement("div");
			nameDiv.id = "errorName";
			messageDiv.id = "errorMessage";
			nameDiv.innerHTML = name;
			messageDiv.innerHTML = message;
			return nameDiv.outerHTML + messageDiv.outerHTML;
		}

		onWindowLoad() {
			if (!this.xhrSucceeded) {
				const message = "Your browser does not allow to read local files.";
				this.printError("Error", message);
			} else if (this.isPathRandomized()) {
				const message = "Please move the Game.app to a different folder.";
				this.printError("Error", message);
			} else if (this.error) {
				this.printError(this.error.name, this.error.message);
			} else {
				this.initEffekseerRuntime();
			}
		}

		onWindowError(event) {
			if (!this.error) {
				this.error = event.error;
			}
		}

		isPathRandomized() {
			// [Note] We cannot save the game properly when Gatekeeper Path
			//   Randomization is in effect.
			return (
				Utils.isNwjs() &&
				process.mainModule.filename.startsWith("/private/var")
			);
		}

		initEffekseerRuntime() {
			const onLoad = this.onEffekseerLoad.bind(this);
			const onError = this.onEffekseerError.bind(this);
			effekseer.initRuntime(effekseerWasmUrl, onLoad, onError);
		}

		onEffekseerLoad() {
			this.eraseLoadingSpinner();
			SceneManager.run(Scene_Boot);
		}

		onEffekseerError() {
			this.printError("Failed to load", effekseerWasmUrl);
		}
	}
	//make this a global class.
	window.Main=Main;
	//and run main with global scope
	constDef3='const main = new Main(); main.run();';
	
		
	script = document.createElement("script");
	script.type = "text/javascript";
	script.async = false;
	script.defer = true;
	script.innerHTML= constDef3;
	document.body.children[0].insertAdjacentElement('beforeBegin',script);
	
	

	//-----------------------------------------------------------------------------
	FossilReplacedMainJs=true;


}


//these are the plugins I know of that care about version number.  Spoof it for all of them.
//add to the list if you find a plugin that cares about Utils.RPGMAKER_VERSION
Fossil.versionSpoofPlugins=[
'KELYEP_DragonBones',
'SRD_GameUpgrade',
'SRD_SuperToolsEngine',
'YEP_AbsorptionBarrier',
'YEP_AdvancedSwVar',
'YEP_AnimateTilesOption',
'YEP_AutoPassiveStates',
'YEP_BaseParamControl',
'YEP_BattleAICore',
'YEP_BattleEngineCore',
'YEP_BuffsStatesCore',
'YEP_CommonEventMenu',
'YEP_CoreEngine',
'YEP_DamageCore',
'YEP_EnemyLevels',
'YEP_EnhancedTP',
'YEP_EquipCore',
'YEP_EventCopier',
'YEP_EventTimerControl',
'YEP_ExtraEnemyDrops',
'YEP_FloorDamage',
'YEP_FpsSynchOption',
'YEP_GridFreeDoodads',
'YEP_HitAccuracy',
'YEP_InstantCast',
'YEP_ItemCore',
'YEP_ItemSynthesis',
'YEP_JobPoints',
'YEP_LifeSteal',
'YEP_MoveRouteCore',
'YEP_OptionsCore',
'YEP_OverkillBonus',
'YEP_QuestJournal',
'YEP_RepelLureEncounters',
'YEP_RowFormation',
'YEP_SelfSwVar',
'YEP_SkillCore',
'YEP_SkillLearnSystem',
'YEP_SpecialParamFormula',
'YEP_StealSnatch',
'YEP_TargetCore',
'YEP_WeaponUnleash',
'YEP_X_ActorVariables',
'YEP_X_ActSeqPack1',
'YEP_X_ArmorScaling',
'YEP_X_AttachAugments',
'YEP_X_BattleSysATB',
'YEP_X_BattleSysCTB',
'YEP_X_BattleSysSTB',
'YEP_X_ClassBaseParam',
'YEP_X_CoreUpdatesOpt',
'YEP_X_CounterControl',
'YEP_X_CriticalControl',
'YEP_X_DifficultySlider',
'YEP_X_EnemyBaseParam',
'YEP_X_EquipRequirements',
'YEP_X_ExtDoT',
'YEP_X_ItemDisassemble',
'YEP_X_ItemRequirements',
'YEP_X_ItemUpgradeSlots',
'YEP_X_LimitedSkillUses',
'YEP_X_PartyLimitGauge',
'YEP_X_PassiveAuras',
'YEP_X_StateCategories',
'YEP_X_WeakEnemyPoses',
'YEP_Z_CriticalSway',
'YEP_Z_PassiveCases',
'YEP_Z_SkillRewards',
'YEP_Z_StateProtection']
