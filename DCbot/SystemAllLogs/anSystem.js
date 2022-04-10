//#region 安麗娜系統前置作業
var fs = require('fs');
const Discord = require('discord.js')
const disbut = require("discord-buttons")
const toolMain = require('./ToolFunction.js')
const botMain = require('../bot.js')

const prefix = require('../JSONHome/prefix.json')
const Alice = require('../SystemAllLogs/AliceSystem.js');
//const vocMain = require('../JSONHome/engVoc.json')

const anMessage = require('../JSONHome/anMessage.json');
var greatauthor = '558978191172173835';
function ranout(x){return Math.floor(Math.random()*x+1)}
function delay(n){return new Promise(function(resolve){setTimeout(resolve,n*1000);});}
//#endregion


//#region 安麗娜回應系統
exports.AnlinaAction = async function(message,client){

  //#region 定義宣告_Anlina回應區塊
  function mesend(a){message.channel.send(a);}
  function deleteit(a){message.channel.messages.fetch(a).then(message => message.delete());}
  async function delayout(a,b){await delay(b);message.channel.send(a);}
  //#endregion

  const cmd = message.content.substring(prefix.length).split(/\s+/);

  //#region 回應系統主體
  switch(cmd[0]){
    case '歐氣量': case '歐氣':
      funact = ranout(12);
      switch (funact) {
        case 10:
          message.react('<:goldbox:852894163402096741>');mesend("金色的箱子，內容卻是垃圾素材");
          break;
        case 11:
          message.react('<:goldbox:852894163402096741>');mesend("本小姐抽到大獎啦!!!\n不是你抽的喔");
          break;
        case 12:
          mesend('天哪本小姐感受到歐氣爆棚，這是怎麼回事??');delayout("喔原來是我出雙蛋黃了，抱歉抱歉。",1)
          break;
        default:
          mesend(anMessage.Euair[funact].response);
          break;
      }
      break;
    case '抽獎': case '扭蛋':
      const gotchafilter = (reaction, user) => {
        return ['🇦', '🇧','🇨'].includes(reaction.emoji.name) && user.id === message.author.id;
      };
      const embed = new Discord.MessageEmbed()
        .setColor('#b6ece7')
        .setTitle('凌亞溦の至死不渝扭蛋系統')
        .setDescription('Ver0.8\nBy安麗娜企劃部')
        .setThumbnail('https://imgur.com/r4dwGoU')
        .addField('結束系統指令：an抽獎結束  or  an扭蛋結束','如有錯誤請回報',false)
        .addField('🇦 模擬系統A','三種稀有度，出率3%,20%,77%',false)
        .setTimestamp()
        .setFooter('亞森芬：疑凌亞溦你不要殘害其他正常人類啦!','https://imgur.com/GP8vrnm')
      message.channel.send(embed).then(message =>{
        var gotchaembedID = message.id;
        message.react("🇦");
        const collector = message.createReactionCollector(gotchafilter, { time: 20000 });
        collector.on('collect', (reaction, user) => {
          switch (reaction.emoji.name) {
            case '🇦':
              message.channel.send('Gotcha Sys').then(async message =>{
                await delay(1);
                message.edit('Gotcha System A Start!!')
                const GotchaAButton = new disbut.MessageButton()
                  .setStyle('green')
                  .setID('gotchaAbutton')
                  .setLabel('這是抽獎按鈕')
                message.channel.send('按按鈕即可抽獎',GotchaAButton).then(message =>{
                  gotchabuttonID = message.id;
                })
              })
              break;
            default:
              mesend('<@' + user.id +'>'+ '\n亂按切掉喔');
              break;
          }
          deleteit(gotchaembedID);
          collector.stop();
        });
        collector.on('end', (collected,reason) =>{
          if(reason === 'time'){ 
            mesend('需要想那麼久嗎...凌亞溦不喜歡躊躇不前的人...');
            deleteit(gotchaembedID);
          }
        })
      })
      break;
    case '抽籤':
      if(isNaN(cmd[1])){
        mesend(cmd[1] + '非數字，請輸入數字');
        return;
      } 
      const StickButton = new disbut.MessageButton()
        .setStyle('green')
        .setID('stickbut')
        .setLabel('抽籤')
      message.channel.send('抽籤系統啟動',StickButton)
      exports.sticklimit = cmd[1];
      exports.stickarraycreateswitch = true;
      exports.stickarray = new Array(cmd[1])
      break;
    case '抽獎結束': case '扭蛋結束': case '扭蛋停止': case '抽獎停止':
      message.react('<:2B_RyoKai:876008481868640256>')
      deleteit(gotchabuttonID)
      break;
    case '殼武': case '殼五':
      Alice.SinoAlice(message,client,1,cmd[1])
      break;
    case '討伐': case '討罰': case '核':
      Alice.SinoAlice(message,client,2,cmd[1])
      break;
    case '雙鬥':case '雙鬪':case '雙豆':
      Alice.SinoAlice(message,client,3,cmd[1])
      break;
    case 'alarm':case '鬧鐘':
      if(cmd[2] == null || cmd[3] == null||cmd[4] == null||cmd[1]=='help'){//help
        const AlarmEmbed = new Discord.MessageEmbed()
          .setTitle('鬧鐘系統使用方法')
          .setColor('46ef89')
          .setDescription('analarm "日期模式" "日子" "小時" "分鐘" "訊息內容"\n日期模式有兩種選擇：a 或 d')
          .addFields(
            {name :'-IF日期模式選了a......',value :'代表輸入幾天之後\n-日子：幾天後\n-小時：幾小時之後，請不要輸入超過24小時\n-分鐘：幾分鐘之後，請不要輸入超過60分鐘',inline : false},
            {name :'-IF日期模式選了d......',value :'代表輸入啟動時間\n-日子：當天日期\n-小時：當天幾點，請輸入24小時制\n-分鐘：當天幾分',inline : false},
            {name :'-訊息內容(重要!)',value :'不能有空格的訊息內容',inline : false},
            {name :'-會在哪裡發送?',value :'現在這個頻道',inline : false}
          )
          .setFooter('註：如需每日定時鬧鐘請稍等功能完善')
        message.channel.send('｛韶光蕩漾，太古之輝煌於雲端翱翔｝\n白話來說就是指令錯囉!',AlarmEmbed)
        return;
      }
      if(cmd[3]>24 || cmd[4]>60){//時間不對
        message.channel.send('｛永世膩於光陰，勇士溺於水影｝\n白話來說就是：沒有人再說二十五小時八十分鐘後，或著25:80這種時間啦!!!!!!');
        return;
      }
      var alarmHour = parseInt(cmd[3]);var alarmDate;var alarmMinute;
      var currenttime = toolMain.ClockWork().split(" ");
      if(cmd[1] == 'd'){//d判斷
        alarmDate =  parseInt(cmd[2]);
        alarmHour =  parseInt(cmd[3]);
        alarmMinute =  parseInt(cmd[4]);
      }else if(cmd[1] == 'a'){//a判斷
        alarmMinute =  parseInt(cmd[4]) + parseInt(currenttime[4]);
        alarmHour =  parseInt(cmd[3]) + parseInt(currenttime[3]);
        alarmDate =  parseInt(cmd[2]) + parseInt(currenttime[2]);
        if(alarmMinute >= 60){
          alarmMinute = alarmMinute - 60;
          alarmHour = alarmHour + 1;
        }
        if(alarmHour >= 24){
          alarmHour = alarmHour - 24;
          alarmDate = alarmDate + 1;
        }
      }else{
        message.channel.send('只有a模式與d模式喔!!');return;
      }
      if(alarmDate == currenttime[2]){//過去否
        if(parseInt(parseInt(currenttime[3])*100 + parseInt(currenttime[4])) > alarmHour*100 + alarmMinute){
          message.channel.send('｛鬧鐘於往昔之日響徹，卻無法傳遞琳瑯之刻｝\n白話來說就是鬧鐘時間不對啦')
          return;
        }
      }
      var Newalarm = {
        "Alarmownerid" : message.author.id,
        "Alarmsendid" : message.channel.id,
        "Date" : alarmDate,
        "Hours" : alarmHour,
        "Minutes" : alarmMinute,
        "Content" : cmd[5],
      }
      addalarm(Newalarm);
      break;
    case 'dlalarm':case 'alarmdl':
      message.channel.send("<@" + message.author.id +">",{
        files :[{
          attachment :'./JSONHome/alarmSys.json',
          name :'alarmSys.json'
        }]
      });
      break;
  }
  //#endregion

  //#region json函式
  function addalarm(alarmain){//新增鬧鐘
    fs.readFile('./JSONHome/alarmSys.json',function(err,AlarmDetails){
      if (err) {return console.error(err);}
      
      var alarmarea = AlarmDetails.toString();
      alarmarea = JSON.parse(alarmarea);

      alarmarea.AlarmDetails.push(alarmain);
      alarmarea.total = alarmarea.AlarmDetails.length;
      //console.log(alarmarea.AlarmDetails);

      var str = JSON.stringify(alarmarea);
      fs.writeFile('./JSONHome/alarmSys.json',str,function(err){
        if (err) {return console.error(err);}
        message.react('✅')
      })
    })
  }
  exports.deleteAlarm = function(AlarmI){//刪除鬧鐘
    fs.readFile('./JSONHome/alarmSys.json',function(err,AlarmDetails){
      if (err) {return console.error(err);}
  
      var alarmarea = AlarmDetails.toString();
      alarmarea = JSON.parse(alarmarea);
  
      alarmarea.AlarmDetails.splice(AlarmI,1)
      //console.log(alarmarea.AlarmDetails);
      alarmarea.total = alarmarea.AlarmDetails.length;
      var str = JSON.stringify(alarmarea);
      fs.writeFile('./JSONHome/alarmSys.json',str,function(err){
        if (err) {return console.error(err);}
        message.react('✅')
      })
    })
  }
  //#endregion
}
//#endregion


//#region 安麗娜指令系統
exports.AnlinaFunction = async function(message,client,totalerror){

  //#region 定義宣告_Anlina指令區塊
  function mesend(a){message.channel.send(a);} 
  function deleteit(a){message.channel.messages.fetch(a).then(message => message.delete());}

  async function delayout(a,b){await delay(b);message.channel.send(a);}
  
  function pinit(a){message.channel.messages.fetch(a).then(message => message.pin());}
  function unpinit(a){message.channel.messages.fetch(a).then(message => message.unpin());}
  //#endregion

  const cmd = message.content.substring(prefix.length).split(' ');

  //#region 指令系統主體
  switch(cmd[0]){
    
    case 'voc':
      var engvoctemp = message.content;
      engvoctemp = engvoctemp.substr(6).split(',');
      var Newengvoc = {
        "Ed":engvoctemp[0],
        "Cd":engvoctemp[1],
        "Ra":0
      }
      Voctojson(Newengvoc);
      break;
    case 'evm':
      const vocMain = require('../JSONHome/engVoc.json')
      if(cmd[1]==null){
        exports.evmaswitch = true;
        exports.evmbswitch = false;
        exports.evmarray = new Array(vocMain.total);
      }else{
        exports.evmrankselect = cmd[1];
        exports.evmaswitch = false;
        exports.evmbswitch = true;
      }
      const EVMButton = new disbut.MessageButton()
        .setStyle('blurple')
        .setID('evmbut')
        .setLabel('產生單字')
      message.channel.send('(哈欠)(揉眼)(呼嚕嚕)(躺著)',EVMButton)
      break;
    case 'dlvoc':case '下載單字':
      message.channel.send("<@" + message.author.id +">",{
        files :[{
          attachment :'./JSONHome/engVoc.json',
          name :'engVoc.json'
        }]
      });
      break;
    //#region 系統分支_抓取資料
    case 'grabid' :
      message.channel.send(message.guild.id);
      mesend(message.channel.id);
      message.channel.send(message.author.id);
      mesend(message.id);
      break;
    //#endregion

    //#region 系統分支_跨權限指令
    case 'pin' : 
      pinit(cmd[1]); 
      break;
    case 'unpin' : 
      unpinit(cmd[1]); 
      break;
    case 'delete' :
      if (message.author.id !== greatauthor) return;
      message.delete();
      deleteit(cmd[1]);
      break;
    //#endregion

    //#region 系統分支_跨服指令
    case 'ocsend' :
      client.channels.cache.get(cmd[1]).send(cmd[2]);
      break;
    case 'ocdlt' :
      if (message.author.id !== greatauthor) return;
      client.channels.cache.get(cmd[2]).messages.fetch(cmd[1]).then(message => {
        if(message.deletable){
          message.delete()
          mesend('deleted')
        }else{
          mesend('deleteflase')
        }
      });
      break;
    //#endregion

    //#region 系統分支_內部指令

    case 'syscheck':
      const embed = new Discord.MessageEmbed()
        .setColor('#b6ece7')
        //.setAuthor('安麗娜系統執行：')
        .setTitle('系統功能檢查')
        .setDescription('By安麗娜維修部')
        .addField('遺沫：',message.deletable,false)
        .addField('緘程：',message.editable,false)
        .addField('渡目：',message.pinnable,false)
        .addField('凹面：',totalerror,false)
        .setTimestamp()
        .setFooter('檢查完畢');
      message.channel.send(embed);
      break;

    //#endregion

    function Voctojson(Vocmain){//新增單字
      fs.readFile('./JSONHome/engVoc.json',function(err,EngDetails){
        if (err) {return console.error(err);}
        
        var vocarea = EngDetails.toString();
        vocarea = JSON.parse(vocarea);
  
        vocarea.EngDetails.push(Vocmain);
        vocarea.total = vocarea.EngDetails.length;
        //console.log(alarmarea.AlarmDetails);
  
        var str = JSON.stringify(vocarea);
        fs.writeFile('./JSONHome/engVoc.json',str,function(err){
          if (err) {return console.error(err);}
          message.react('✅')
        })
      })
    }
  }
  //#endregion
}
//#endregion