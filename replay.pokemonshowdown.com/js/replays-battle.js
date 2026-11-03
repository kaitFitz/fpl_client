"use strict";function _inheritsLoose(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,_setPrototypeOf(t,o);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}var










ReplayAd=function(_preact$Component){function ReplayAd(){var _this;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_preact$Component.call.apply(_preact$Component,[this].concat(args))||this;_this.

hidden=ReplayAd.shown;_this.
mountedAt=null;_this.
lastReplayId=null;return _this;}_inheritsLoose(ReplayAd,_preact$Component);var _proto=ReplayAd.prototype;_proto.

shouldComponentUpdate=function shouldComponentUpdate(nextProps){
if(this.hidden||!nextProps.replayId)return false;
if(this.mountedAt===null)return true;
var changed=nextProps.replayId!==this.lastReplayId;
this.lastReplayId=nextProps.replayId;
if(changed&&performance.now()-this.mountedAt>=30_000){
this.hidden=true;
return true;
}
return false;
};_proto.
componentDidMount=function componentDidMount(){
this.loadAd();
};_proto.
componentDidUpdate=function componentDidUpdate(){
this.loadAd();
};_proto.
loadAd=function loadAd(){var _this$base;
if(ReplayAd.shown||this.hidden||!this.props.replayId||!((_this$base=this.base)!=null&&_this$base.isConnected))return;
ReplayAd.shown=true;
this.mountedAt=performance.now();
this.lastReplayId=this.props.replayId;
window.ramp=window.ramp||{};
window.ramp.que=window.ramp.que||[];
var script=document.createElement('script');
script.setAttribute('data-cfasync','false');
script.async=true;
script.src='https://cdn.intergient.com/1025841/77767/ramp.js';
document.head.appendChild(script);
};_proto.
render=function render(){
return this.hidden||!this.props.replayId?null:preact.h("div",{id:"replay-undercontrols"});
};return ReplayAd;}(preact.Component);ReplayAd.shown=false;var


BattleDiv=function(_preact$Component2){function BattleDiv(){return _preact$Component2.apply(this,arguments)||this;}_inheritsLoose(BattleDiv,_preact$Component2);var _proto2=BattleDiv.prototype;_proto2.
shouldComponentUpdate=function shouldComponentUpdate(){
return false;
};_proto2.
render=function render(){
return preact.h("div",{"class":"battle",style:{position:'relative'}});
};return BattleDiv;}(preact.Component);var

BattleLogDiv=function(_preact$Component3){function BattleLogDiv(){return _preact$Component3.apply(this,arguments)||this;}_inheritsLoose(BattleLogDiv,_preact$Component3);var _proto3=BattleLogDiv.prototype;_proto3.
shouldComponentUpdate=function shouldComponentUpdate(){
return false;
};_proto3.
render=function render(){
return preact.h("div",{"class":"battle-log"});
};return BattleLogDiv;}(preact.Component);var


BattlePanel=function(_preact$Component4){function BattlePanel(){var _this2;for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}_this2=_preact$Component4.call.apply(_preact$Component4,[this].concat(args))||this;_this2.
result=









undefined;_this2.
resultError='';_this2.
privacySaving=null;_this2.
manageError='';_this2.
manageOpen=false;_this2.
battle=void 0;_this2.

lastUsedKeyCode='0';_this2.
turnView=false;_this2.
autofocusTurnView=null;_this2.































































































keyPressed=function(e){var _e$target,_e$target2,_this2$battle,_this2$battle2;
_this2.lastUsedKeyCode=""+e.keyCode;
if(e.ctrlKey||e.metaKey||e.altKey)return;
if(e.keyCode===27&&_this2.turnView){
_this2.closeTurn();
return;
}

if(((_e$target=e.target)==null?void 0:_e$target.tagName)==='INPUT'||((_e$target2=e.target)==null?void 0:_e$target2.tagName)==='SELECT')return;
switch(e.keyCode){
case 75:
if((_this2$battle=_this2.battle)!=null&&_this2$battle.atQueueEnd){
_this2.replay();
}else if((_this2$battle2=_this2.battle)!=null&&_this2$battle2.paused){
_this2.play();
}else{
_this2.pause();
}
break;
case 74:
if(e.shiftKey)_this2.firstTurn();else
_this2.prevTurn();
break;
case 76:
if(e.shiftKey)_this2.lastTurn();else
_this2.nextTurn();
break;
case 188:
if(e.shiftKey)_this2.stepSpeed(-1);
break;
case 190:
if(e.shiftKey)_this2.stepSpeed(1);
break;
case 191:
if(e.shiftKey){
alert(
'k = play/pause\n'+
'j = previous turn\n'+
'l = next turn\n'+
'J = first turn\n'+
'L = last turn\n'+
'm = mute\n'+
'< = slower\n'+
'> = faster\n'+
'1-9 = skip to turn\n'+
'? = keyboard shortcuts (this)\n'
);
}
break;
case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
case 96:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:
_this2.turnView=String.fromCharCode(e.keyCode-(e.keyCode>=96?48:0));
if(_this2.turnView==='0')_this2.turnView='10';
_this2.autofocusTurnView='end';
e.preventDefault();
_this2.forceUpdate();
break;
case 77:
_this2.toggleMute();
break;
}
_this2.forceUpdate();
};_this2.
play=function(){var _this2$battle3;
(_this2$battle3=_this2.battle)==null||_this2$battle3.play();
};_this2.
replay=function(){var _this2$battle4,_this2$battle5;
(_this2$battle4=_this2.battle)==null||_this2$battle4.reset();
(_this2$battle5=_this2.battle)==null||_this2$battle5.play();
_this2.forceUpdate();
};_this2.
pause=function(){var _this2$battle6;
(_this2$battle6=_this2.battle)==null||_this2$battle6.pause();
};_this2.
nextTurn=function(){var _this2$battle7;
(_this2$battle7=_this2.battle)==null||_this2$battle7.seekBy(1);
};_this2.
prevTurn=function(){var _this2$battle8;
(_this2$battle8=_this2.battle)==null||_this2$battle8.seekBy(-1);
};_this2.
firstTurn=function(){var _this2$battle9;
(_this2$battle9=_this2.battle)==null||_this2$battle9.seekTurn(0);
_this2.forceUpdate();
};_this2.
lastTurn=function(){var _this2$battle10;
(_this2$battle10=_this2.battle)==null||_this2$battle10.seekTurn(Infinity);
};_this2.
goToTurn=function(e){var _this2$base,_this2$battle11;
var turn=(_this2$base=_this2.base)==null||(_this2$base=_this2$base.querySelector('input[name=turn]'))==null?void 0:_this2$base.value;
if(!(turn!=null&&turn.trim()))return _this2.closeTurn(e);
var turnNum=Number(turn);
if(turn==='e'||turn==='end'||turn==='f'||turn==='finish')turnNum=Infinity;
if(isNaN(turnNum)||turnNum<0)alert("Invalid turn");
(_this2$battle11=_this2.battle)==null||_this2$battle11.seekTurn(turnNum);
_this2.closeTurn(e);
};_this2.
switchViewpoint=function(){var _this2$battle12,_this2$battle13;
(_this2$battle12=_this2.battle)==null||_this2$battle12.switchViewpoint();
if((_this2$battle13=_this2.battle)!=null&&_this2$battle13.viewpointSwitched){
PSRouter.replace(_this2.stripQuery(_this2.props.id)+'?p2');
}else{
PSRouter.replace(_this2.stripQuery(_this2.props.id));
}
};_this2.
clickDownload=function(e){var _this2$result;
if(!_this2.battle){

alert("Wait for the battle to finish loading before downloading.");
return;
}
var filename=(_this2.battle.tier||'Battle').replace(/[^A-Za-z0-9]/g,'');


var timestamp=(((_this2$result=_this2.result)==null?void 0:_this2$result.uploadtime)||0)*1000;
var date=new Date(timestamp);
filename+="-"+date.getFullYear();
filename+=""+(date.getMonth()>=9?'-':'-0')+(date.getMonth()+1);
filename+=""+(date.getDate()>=10?'-':'-0')+date.getDate();

filename+='-'+toID(_this2.battle.p1.name);
filename+='-'+toID(_this2.battle.p2.name);

var a=e.currentTarget;
a.href=BattleLog.createReplayFileHref({battle:_this2.battle});
a.download=filename+'.html';

e.stopPropagation();
};_this2.













changeSpeed=function(e){
var speed=e.target.value;
var fadeTable={
hyperfast:40,
fast:50,
normal:300,
slow:500,
reallyslow:1000
};
var delayTable={
hyperfast:1,
fast:1,
normal:1,
slow:1000,
reallyslow:3000
};
if(!_this2.battle)return;
_this2.battle.messageShownTime=delayTable[speed];
_this2.battle.messageFadeTime=fadeTable[speed];
_this2.battle.scene.updateAcceleration();
};_this2.














changeSound=function(e){var _this2$battle14;
var muted=e.target.value;
(_this2$battle14=_this2.battle)==null||_this2$battle14.setMute(muted==='off');

BattleSound.setBgmVolume(muted==='musicoff'?0:65.88125800126558);
_this2.forceUpdate();
};_this2.
changeVolume=function(e){var _this2$battle15,_this2$battle16;
var volume=Number(e.target.value);
BattleSound.setBgmVolume(volume);
BattleSound.setEffectVolume(volume);
(_this2$battle15=_this2.battle)==null||_this2$battle15.setMute(true);
(_this2$battle16=_this2.battle)==null||_this2$battle16.setMute(false);
_this2.forceUpdate();
};_this2.
changeDarkMode=function(e){
var darkmode=e.target.value;
PSReplays.darkMode=darkmode;
PSReplays.updateDarkMode();
_this2.forceUpdate();
};_this2.
openTurn=function(e){var _this2$battle17;
_this2.turnView=""+(((_this2$battle17=_this2.battle)==null?void 0:_this2$battle17.turn)||'')||true;
_this2.autofocusTurnView='select';
e.preventDefault();
_this2.forceUpdate();
};_this2.
closeTurn=function(e){
_this2.turnView=false;
e==null||e.preventDefault();
_this2.forceUpdate();
};_this2.



toggleManage=function(){
_this2.manageOpen=!_this2.manageOpen;
_this2.forceUpdate();
};_this2.










selectShareURL=function(e){
e.currentTarget.select();
};_this2.
changePrivacy=function(e){
var privateValue=Number(e.target.value);
if(!_this2.result||_this2.privacySaving!==null)return;
if(privateValue===3&&!confirm("Delete this replay?"))return;

var replay=_this2.result;
_this2.privacySaving=privateValue;
_this2.manageError='';
_this2.forceUpdate();

Net("/api/replays/edit").post({},{
id:replay.id,
"private":privateValue
}).then(function(resultText){
if(resultText.startsWith(']'))resultText=resultText.slice(1);
var result=JSON.parse(resultText);
if(result.actionerror)throw new Error(result.actionerror);
if(_this2.result!==replay)return;

replay["private"]=privateValue;
replay.password=result.password||null;
_this2.privacySaving=null;

var fullid=replay.id+(replay.password?"-"+replay.password+"pw":'');
PSRouter.replace(fullid);
PSRouter.update();
})["catch"](function(error){
if(_this2.result!==replay)return;
_this2.privacySaving=null;
_this2.manageError=error instanceof Error?error.message:String(error);
_this2.forceUpdate();
});
};return _this2;}_inheritsLoose(BattlePanel,_preact$Component4);var _proto4=BattlePanel.prototype;_proto4.componentDidMount=function componentDidMount(){this.loadBattle(this.props.id);window.onkeydown=this.keyPressed;};_proto4.componentWillReceiveProps=function componentWillReceiveProps(nextProps){if(this.stripQuery(this.props.id)!==this.stripQuery(nextProps.id)){if(this.replayID(this.props.id)!==this.replayID(nextProps.id)){this.manageOpen=false;}this.loadBattle(nextProps.id);}};_proto4.stripQuery=function stripQuery(id){return id.includes('?')?id.slice(0,id.indexOf('?')):id;};_proto4.replayID=function replayID(id){var fullid=this.stripQuery(id);if(!fullid.endsWith('pw'))return fullid;var passwordIndex=fullid.lastIndexOf('-');return passwordIndex>0?fullid.slice(0,passwordIndex):fullid;};_proto4.loadBattle=function loadBattle(id){var _this3=this;if(this.battle)this.battle.destroy();this.battle=null;this.result=undefined;this.resultError='';this.privacySaving=null;this.manageError='';this.forceUpdate();var elem=document.getElementById("replaydata-"+id);var logElem=document.getElementById("replaylog-"+id);if(elem){setTimeout(function(){return _this3.loadResult(elem.innerText,id,logElem==null?void 0:logElem.innerText.replace(/<\\\//g,'</'));},1);return;}Net("/"+this.stripQuery(id)+".json?countview").get().then(function(result){_this3.loadResult(result,id);})["catch"](function(err){_this3.loadResult(err.statusCode===404?'':String((err==null?void 0:err.body)||''),id);});};_proto4.loadResult=function loadResult(result,id){var _this4=this;var log=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';try{var replay=JSON.parse(result);replay.log||(replay.log=log);this.result=replay;var $base=$(this.base);this.battle=new Battle({id:replay.id,$frame:$base.find('.battle'),$logFrame:$base.find('.battle-log'),log:replay.log.split('\n'),isReplay:true,paused:true,autoresize:true});window.battle=this.battle;this.battle.subscribe(function(_){_this4.forceUpdate();});var query=Net.decodeQuery(id);if('p2'in query){this.battle.switchViewpoint();}if(query.turn||query.t){this.battle.seekTurn(parseInt(query.turn||query.t,10));}}catch(err){this.result=null;this.resultError=result.startsWith('{')?err.toString():result;}this.forceUpdate();};_proto4.componentWillUnmount=function componentWillUnmount(){var _this$battle;(_this$battle=this.battle)==null||_this$battle.destroy();window.battle=null;window.onkeydown=null;};_proto4.componentDidUpdate=function componentDidUpdate(){if(this.autofocusTurnView==='select'){var _this$base2;(_this$base2=this.base)==null||(_this$base2=_this$base2.querySelector('input[name=turn]'))==null||_this$base2.select();this.autofocusTurnView=null;}if(this.autofocusTurnView==='end'){var _this$base3;var turnbox=(_this$base3=this.base)==null?void 0:_this$base3.querySelector('input[name=turn]');turnbox==null||turnbox.setSelectionRange(2,2);turnbox==null||turnbox.focus();this.autofocusTurnView=null;}};_proto4.getSpeed=function getSpeed(){if(!this.battle)return'normal';if(this.battle.messageFadeTime<=40){return'hyperfast';}else if(this.battle.messageFadeTime<=50){return'fast';}else if(this.battle.messageFadeTime>=500){return'slow';}else if(this.battle.messageFadeTime>=1000){return'reallyslow';}return'normal';};_proto4.stepSpeed=function stepSpeed(delta){var _this$base4;var target=(_this$base4=this.base)==null?void 0:_this$base4.querySelector('select[name=speed]');if(!target)return;var values=['reallyslow','slow','normal','fast','hyperfast'];var newValue=values[values.indexOf(target.value)+delta];if(newValue){target.value=newValue;this.changeSpeed({target:target});}};_proto4.toggleMute=function toggleMute(){var _this$battle2;(_this$battle2=this.battle)==null||_this$battle2.setMute(!BattleSound.muted);this.forceUpdate();};_proto4.manageURL=function manageURL(extension){return Net.defaultRoute+"/"+this.stripQuery(this.props.id)+"."+extension+"?manage";};_proto4.currentPrivacy=function currentPrivacy(){if(!this.result)return 0;if(this.result["private"]===1&&!this.result.password)return 2;return this.result["private"];};_proto4.shareURL=function shareURL(){if(!this.result)return'';var fullid=this.result.id+(this.result.password?"-"+this.result.password+"pw":'');return"https://psim.us/r/"+fullid;};_proto4.
renderManagement=function renderManagement(){var _this$props$user;
if(!this.manageOpen)return null;
if(!((_this$props$user=this.props.user)!=null&&_this$props$user.isLeader)){
return preact.h("p",{"class":"section message-error"},"You do not have permission to manage this replay.");
}
var privacy=this.currentPrivacy();
return preact.h("section",{"class":"section",style:{clear:'right',marginTop:'12px',marginRight:'0',maxWidth:'500px'}},
preact.h("button",{type:"button","class":"button",style:"float:right",onClick:this.toggleManage},
preact.h("i",{"class":"fa fa-times"})," Close"
),
preact.h("h2",{style:"margin-top:0"},"Manage replay"),
preact.h("p",null,"Privacy: ",

preact.h("button",{"class":"button button-first",disabled:privacy===0,value:0,onClick:this.changePrivacy},"Public"

),
preact.h("button",{"class":"button button-middle",disabled:privacy===1,value:1,onClick:this.changePrivacy},"Private"

),
preact.h("button",{"class":"button button-middle",disabled:privacy===2,value:2,onClick:this.changePrivacy},"Private (no password)"

),
preact.h("button",{"class":"button button-last",disabled:privacy===3,value:3,onClick:this.changePrivacy},"Deleted"

)," ",
this.privacySaving!==null&&preact.h("em",{"class":"button cur"},"Saving...")
),
this.manageError&&preact.h("p",{"class":"message-error"},this.manageError),
preact.h("p",null,
preact.h("a",{"class":"button",href:this.manageURL('json')},"JSON")," ",
preact.h("a",{"class":"button",href:this.manageURL('log')},"Log")," ",
preact.h("a",{"class":"button",href:this.manageURL('inputlog')},"Input log")
)
);
};_proto4.
renderError=function renderError(){
if(this.resultError){
return preact.h("div",{"class":PSRouter.showingLeft()?'mainbar has-sidebar':'mainbar'},
preact.h("section",{"class":"section"},
preact.h("h1",null,"Error"),
preact.h("p",null,
this.resultError
)
)
);
}





return preact.h("div",{"class":PSRouter.showingLeft()?'mainbar has-sidebar':'mainbar'},
preact.h("section",{"class":"section",style:{maxWidth:'200px'}},
preact.h("div",{style:{textAlign:'center'}},
preact.h("img",{src:"//play.pokemonshowdown.com/sprites/gen5ani/unown-n.gif",alt:"",style:{imageRendering:'pixelated'}}),
preact.h("img",{src:"//play.pokemonshowdown.com/sprites/gen5ani/unown-o.gif",alt:"",style:{imageRendering:'pixelated'}}),
preact.h("img",{src:"//play.pokemonshowdown.com/sprites/gen5ani/unown-t.gif",alt:"",style:{imageRendering:'pixelated'}})
),
preact.h("div",{style:{textAlign:'center'}},
preact.h("img",{src:"//play.pokemonshowdown.com/sprites/gen5ani/unown-f.gif",alt:"",style:{imageRendering:'pixelated'}}),
preact.h("img",{src:"//play.pokemonshowdown.com/sprites/gen5ani/unown-o.gif",alt:"",style:{imageRendering:'pixelated'}}),
preact.h("img",{src:"//play.pokemonshowdown.com/sprites/gen5ani/unown-u.gif",alt:"",style:{imageRendering:'pixelated'}}),
preact.h("img",{src:"//play.pokemonshowdown.com/sprites/gen5ani/unown-n.gif",alt:"",style:{imageRendering:'pixelated'}}),
preact.h("img",{src:"//play.pokemonshowdown.com/sprites/gen5ani/unown-d.gif",alt:"",style:{imageRendering:'pixelated'}})
)
),preact.h("section",{"class":"section"},
preact.h("h1",null,"Not Found"),
preact.h("p",null,"The battle you're looking for has expired. Battles expire after 15 minutes of inactivity unless they're saved."

),
preact.h("p",null,"In the future, remember to click ",
preact.h("strong",null,"Upload and share replay")," to save a replay permanently."
)
)
);
};_proto4.
renderControls=function renderControls(){var _this$battle3,_this$battle4,_this$result,_this$result2,_this$result3,_this$props$user2;
var atEnd=!this.battle||this.battle.atQueueEnd;
var atStart=!((_this$battle3=this.battle)!=null&&_this$battle3.started);

if(this.turnView){
var value=this.turnView===true?undefined:this.turnView;
this.turnView=true;
return preact.h("div",{"class":"replay-controls"},preact.h("section",{"class":"section"},
preact.h("form",{onSubmit:this.goToTurn},"Turn? ",
preact.h("input",{name:"turn",autofocus:true,value:value,inputMode:"numeric","class":"textbox",size:5})," ",
preact.h("button",{type:"submit","class":"button"},preact.h("strong",null,"Go"))," ",
preact.h("button",{type:"button","class":"button",onClick:this.closeTurn},"Cancel")
),
preact.h("p",null,
preact.h("em",null,"Pro tip:")," You don't need to click \"Skip to turn\" if you have a keyboard, just start typing the turn number and press ",
preact.h("kbd",null,"Enter"),". For more shortcuts, press ",preact.h("kbd",null,"Shift"),"+",preact.h("kbd",null,"/")," ","when a text box isn't focused."

)
));
}

return preact.h("div",{"class":"replay-controls"},
preact.h("p",null,
atEnd&&this.battle?
preact.h("button",{onClick:this.replay,"class":"button",style:{width:'5em',marginRight:'3px'}},
preact.h("i",{"class":"fa fa-undo","aria-hidden":true}),preact.h("br",null),"Replay"
):
!this.battle||this.battle.paused?
preact.h("button",{onClick:this.play,"class":"button",disabled:!this.battle,style:{width:'5em',marginRight:'3px'}},
preact.h("i",{"class":"fa fa-play","aria-hidden":true}),preact.h("br",null),preact.h("strong",null,"Play")
):

preact.h("button",{onClick:this.pause,"class":"button",style:{width:'5em',marginRight:'3px'}},
preact.h("i",{"class":"fa fa-pause","aria-hidden":true}),preact.h("br",null),preact.h("strong",null,"Pause")
),
" ",
preact.h("button",{"class":"button button-first",disabled:atStart,onClick:this.firstTurn},
preact.h("i",{"class":"fa fa-fast-backward","aria-hidden":true}),preact.h("br",null),"First turn"
),
preact.h("button",{
"class":"button button-first",disabled:atStart,style:{marginLeft:'1px',position:'relative',zIndex:'1'},
onClick:this.prevTurn},

preact.h("i",{"class":"fa fa-step-backward","aria-hidden":true}),preact.h("br",null),"Prev turn"
),
preact.h("button",{"class":"button button-last",disabled:atEnd,style:{marginRight:'2px'},onClick:this.nextTurn},
preact.h("i",{"class":"fa fa-step-forward","aria-hidden":true}),preact.h("br",null),"Skip turn"
),
preact.h("button",{"class":"button button-last",disabled:atEnd,onClick:this.lastTurn},
preact.h("i",{"class":"fa fa-fast-forward","aria-hidden":true}),preact.h("br",null),"Skip to end"
)," ",
preact.h("button",{"class":"button",onClick:this.openTurn},
preact.h("i",{"class":"fa fa-repeat","aria-hidden":true})," Go to turn..."
)
),
preact.h("p",null,
preact.h("label",{"class":"optgroup"},"Speed:",
preact.h("br",null),
preact.h("select",{name:"speed","class":"button",onChange:this.changeSpeed,value:this.getSpeed()},
preact.h("option",{value:"hyperfast"},"Hyperfast"),
preact.h("option",{value:"fast"},"Fast"),
preact.h("option",{value:"normal"},"Normal"),
preact.h("option",{value:"slow"},"Slow"),
preact.h("option",{value:"reallyslow"},"Really slow")
)
)," ",
preact.h("label",{"class":"optgroup"},"Sound:",
preact.h("br",null),
preact.h("select",{
name:"sound","class":"button",onChange:this.changeSound,
value:BattleSound.muted?'off':BattleSound.bgmVolume?'on':'musicoff'},

preact.h("option",{value:"on"},"On"),
preact.h("option",{value:"musicoff"},"Music Off"),
preact.h("option",{value:"off"},"Muted")
)
)," ",
preact.h("label",{"class":"optgroup"},"Dark mode:",
preact.h("br",null),
preact.h("select",{name:"darkmode","class":"button",onChange:this.changeDarkMode,value:PSReplays.darkMode},
preact.h("option",{value:"auto"},"Automatic"),
preact.h("option",{value:"dark"},"Dark"),
preact.h("option",{value:"light"},"Light")
)
)," ",
preact.h("label",{"class":"optgroup"},"Viewpoint:",
preact.h("br",null),
preact.h("button",{onClick:this.switchViewpoint,name:"viewpoint","class":this.battle?'button':'button disabled'},
(_this$battle4=this.battle)!=null&&_this$battle4.viewpointSwitched?(_this$result=this.result)==null?void 0:_this$result.players[1]:((_this$result2=this.result)==null?void 0:_this$result2.players[0])||"Player"," ",
preact.h("i",{"class":"fa fa-random","aria-hidden":true,"aria-label":"Switch viewpoint"})
)
)," ",
preact.h("label",{"class":"optgroup"},"Volume:",
preact.h("br",null),
preact.h("input",{type:"range",onInput:this.changeVolume})
)
),
this.result?preact.h("h1",null,
preact.h("strong",null,this.result.format),": ",
!!this.result["private"]&&preact.h("i",{"class":"fa fa-lock","aria-hidden":true})," ",this.result.players.join(' vs. ')
):preact.h("h1",null,
preact.h("em",null,"Loading...")
),
!!((_this$result3=this.result)!=null&&_this$result3["private"])&&preact.h("p",null,
preact.h("strong",null,preact.h("i",{"class":"fa fa-lock","aria-hidden":true})," PRIVATE")," - make sure you have the owner's permission to share"
),
preact.h("p",null,
preact.h("label",null,"Short URL: ",
preact.h("input",{
name:"shareurl",type:"text","class":"textbox",readOnly:true,size:60,
style:"max-width:99%;box-sizing:border-box;field-sizing:content;padding-right:20px",
value:this.shareURL(),onFocus:this.selectShareURL}
)
)
),
this.result?preact.h("p",null,
preact.h("span",{style:{"float":'right'}},
((_this$props$user2=this.props.user)==null?void 0:_this$props$user2.isLeader)&&preact.h("button",{
type:"button","class":"button"+(this.manageOpen?' cur':''),onClick:this.toggleManage},

preact.h("i",{"class":"fa fa-wrench","aria-hidden":true})," Manage"
)," ",
preact.h("a",{"class":"button",href:"/download",onClick:this.clickDownload},
preact.h("i",{"class":"fa fa-download","aria-hidden":true})," Download"
)
),
this.result.uploadtime?new Date(this.result.uploadtime*1000).toDateString():"Unknown upload date",
this.result.rating?[" | ",preact.h("em",null,"Rating:")," "+this.result.rating]:''

):preact.h("p",null,"\xA0"),
this.renderManagement(),
!PSRouter.showingLeft()&&preact.h("p",null,
preact.h("a",{href:PSRouter.href(PSRouter.leftLoc),"class":"button"},preact.h("i",{"class":"fa fa-caret-left","aria-hidden":true})," More replays")
)
);
};_proto4.
render=function render(){
if(this.result===null)return this.renderError();

return preact.h("div",{"class":PSRouter.showingLeft()?'mainbar has-sidebar':'mainbar'},
preact.h("div",{style:{position:'relative'}},
preact.h(BattleDiv,null),
preact.h(BattleLogDiv,null),
this.renderControls(),
preact.h(ReplayAd,{replayId:this.result?this.replayID(this.props.id):null})
)
);
};return BattlePanel;}(preact.Component);
//# sourceMappingURL=replays-battle.js.map