//#region 主系統前置作業
var fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({
  restTimeOffset : 0
});
const disbut = require("discord-buttons")
disbut(client)

const auth = require('./JSONHome/auth.json');
const prefix = require('./JSONHome/prefix.json');

const erMain = require('./SystemAllLogs/erSystem.js');
const anMain = require('./SystemAllLogs/anSystem.js');
const MsgActMain = require('./SystemAllLogs/NoTitleAct.js')
const toolMain = require('./SystemAllLogs/ToolFunction.js')

const { del } = require('request');
var totalerror;

//#endregion

//#region 主系統啟動序列
client.login(auth.tokenfive);
client.on('ready', () => {
  totalerror = 0;
  console.log(`Log in as${client.user.username}`);
  client.user.setPresence({ activity: { name: 'Anlina System' } });
});

require('events').defaultMaxListeners = 400;
//#endregion

//#region 定義宣告_第一區塊(包含ranout,delay)
var evmbutswitch;
var vocabularysign;
var vocabularykeyi;
var evmbrray;

function ranout(x){return Math.floor(Math.random()*x+1)}
function delay(n){return new Promise(function(resolve){setTimeout(resolve,n*1000);});}



//#endregion

//#region 輸入偵聽
client.on('message', message => {
  //#region 回歸定理
  try{
    if(!message.guild || !message.member) return;
    if(!message.member.user) return;
    if(message.member.user.bot) return;
  } catch(error){console.log(error);}
  //#endregion

  

  //#region 感知系統執行
  try{
    //#region 前綴判斷
    let tempPrefix = '-1';
    const prefixletter = Object.keys(prefix);
    prefixletter.forEach(element  => {
      if(message.content.substring(0, prefix[element].Value.length) === prefix[element].Value){
        tempPrefix = element
      }
    })
    //#endregion
  
    //#region 事件決定
    switch(tempPrefix){
      case '0':
        anMain.AnlinaAction(message,client)
        anMain.AnlinaFunction(message,client,totalerror);
        break;
      case '1':
        erMain.EmptyRoomPlayer(message,client);
        erMain.EmptyRoomAdmin(message,client)
        break;
      default:
        MsgActMain.MessageInclude(message,client);
        MsgActMain.MessageResponse(message,client);
        break;
      }
    //#endregion
  } catch(err){totalerror = totalerror + 1;console.log('OnMessageError',err)}
  //#endregion

});
//#endregion



//#region 按鈕聽取
client.on("clickButton",async (button)=>{
  //#region 抽獎系統A
  if (button.id == 'gotchaAbutton'){
    var funact = ranout(100);
    switch (true) {
      case funact == 30 : case funact == 29 : case funact == 28 ://3% 
        button.channel.send('SS')
        break;
      case funact <21 : //20%
        button.channel.send('S')
        break;
      case funact === 49 :
        button.channel.send('繧').then( async button =>{
          await delay(1);
          button.delete()
          button.channel.send('這是......為什麼有......').then(async button=>{
            await delay(1)
            button.delete();
          })
        })
        break;
      default:
        button.channel.send('A')
        break;
    }
  }
  //#endregion
  //#region 抽籤系統
  
  if(button.id == 'stickbut'){
    var sticksign
    if(anMain.stickarraycreateswitch){
      for(i=0;i<anMain.sticklimit;i++){
        anMain.stickarray[i] = i + 1
      }
      anMain.stickarraycreateswitch = false;
    }
    if(anMain.stickarray.length ===0){button.channel.send('已抽完所有籤');button.reply.defer();return;}
    sticksign = ranout(anMain.stickarray.length) - 1
    button.channel.send(anMain.stickarray[sticksign]);
    anMain.stickarray.splice(sticksign,1)
  }
  //#endregion
  //#region 背單字系統
  if(button.id == 'evmbut'){
    var vocMain = new require('./JSONHome/engVoc.json');
    const EVMButton = new disbut.MessageButton()
      .setStyle('blurple')
      .setID('evmbut')
      .setLabel('產生單字')
    const EVMRUButton = new disbut.MessageButton()
      .setStyle('red')
      .setID('evmuprank')
      .setLabel('單字地位升級')
    const EVMRDButton = new disbut.MessageButton()
      .setStyle('green')
      .setID('evmdwrank')
      .setLabel('單字地位降級')
    if(anMain.evmaswitch == true){
      for(i=0;i<vocMain.total;i++){
        anMain.evmarray[i] = i;
      }
      anMain.evmaswitch = false;
      evmbutswitch = true;
    }
    if(anMain.evmbswitch == true){
      var evmrankarray = '';
      var evmbstarti = 0;
      for(i=0;i<vocMain.total;i++){
        if(vocMain.EngDetails[i].Ra == anMain.evmrankselect){
          evmrankarray = evmrankarray + i + ' ';
          evmbstarti = evmbstarti +1;
        }
      }
      evmrankarray = evmrankarray.split(' ')
      evmbrray = new Array(evmbstarti)
      for(i=0;i<evmbstarti +1;i++){
        evmbrray[i] = evmrankarray[i];
      }
      anMain.evmbswitch = false;
      evmbutswitch = false;
    }
    if(evmbutswitch){
      if(anMain.evmarray.length == 0){button.channel.send('已輸出所有單字');button.reply.defer();return;}
      vocabularysign = ranout(anMain.evmarray.length) -1;
      vocabularykeyi = anMain.evmarray[vocabularysign];
      button.channel.send(vocMain.EngDetails[vocabularykeyi].Ed + '\n||' + vocMain.EngDetails[vocabularykeyi].Cd + '||\nRa:'+ vocMain.EngDetails[vocabularykeyi].Ra,{buttons:[EVMButton,EVMRUButton,EVMRDButton]});
      anMain.evmarray.splice(vocabularysign,1);
    }else{
      if(evmbrray.length == 0){button.channel.send('已輸出所有單字');button.reply.defer();return;}
      button.channel.send(evmbrray)
      vocabularysign = ranout(evmbrray.length -1) -1;
      vocabularykeyi = evmbrray[vocabularysign];
      button.channel.send(vocMain.EngDetails[vocabularykeyi].Ed + '\n||' + vocMain.EngDetails[vocabularykeyi].Cd + '||',{buttons:[EVMButton,EVMRUButton,EVMRDButton]})
      evmbrray.splice(vocabularysign,1)
    }
  }
  if(button.id == 'evmuprank'){
    evmrankup(vocabularykeyi,button,1);
  }
  if(button.id == 'evmdwrank'){
    evmrankup(vocabularykeyi,button,-1);
  }
  //#endregion 
  button.reply.defer();
})
//#endregion


//#region 計時塔
setInterval(() => {
  var currenttime = toolMain.ClockWork().split(" ");
  if(currenttime[3] == 23 && currenttime[4] == 00){
    client.channels.cache.get('811923840225640501').send("每日單字自動備份",{
      files :[{
      attachment :'./JSONHome/engVoc.json',
      name :'engVoc.json'
      }]
    });
  }
  //茶店大競技通知
  if (NZTSMain.grancolosseumheld){
    if (currenttime[3] == 20 && currenttime[4] == 00){
      client.channels.cache.get('751437528036540506').send('<@&745879303954104411>');
      client.channels.cache.get('751437528036540506').send('記得檢查裝備喔!!');
    }
    if (currenttime[3] == 20 && currenttime[4] == 45){
      client.channels.cache.get('751437528036540506').send('<@&745879303954104411>');
      client.channels.cache.get('751437528036540506').send('大競技期間，能進通話就進通話吧!');
    }
  }
  //茶店鬧鐘
  if (currenttime[3] == 20 && currenttime[4] == 50) {
    client.channels.cache.get('751437528036540506').send('<@&745879303954104411>' + "................");
  }
  const AlarmMain = new require('./JSONHome/alarmSys.json')
  for( alai=0 ; alai < AlarmMain.total;alai++){
    if (currenttime[3] == AlarmMain.AlarmDetails[alai].Hours && currenttime[4] == AlarmMain.AlarmDetails[alai].Minutes) {
      client.channels.cache.get(AlarmMain.AlarmDetails[alai].Alarmsendid).send('<@' + AlarmMain.AlarmDetails[alai].Alarmownerid +'>\n' + AlarmMain.AlarmDetails[alai].Content);
      anMain.deleteAlarm(alai)
    }
  }
}
, 60000);
//#endregion


function evmrankup(ID,message,num){
  fs.readFile('./JSONHome/engVoc.json',function(err,EngDetails){
    if (err) {return console.error(err);}

    var vocarea = EngDetails.toString();
    vocarea = JSON.parse(vocarea);

    vocarea.EngDetails[ID].Ra = vocarea.EngDetails[ID].Ra + num;

    //console.log(vocarea.EngDetails);
    vocarea.total = vocarea.EngDetails.length;
    var str = JSON.stringify(vocarea);
    fs.writeFile('./JSONHome/engVoc.json',str,function(err){
      if (err) {return console.error(err);}
      message.channel.send('OK')
    })
  })
}