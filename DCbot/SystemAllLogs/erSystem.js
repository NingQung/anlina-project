//#region 空房系統前置作業
var fs = require('fs');
const Discord = require('discord.js')
const prefix = require('../JSONHome/prefix.json')

var greatauthor = '558978191172173835';

function ranout(x){return Math.floor(Math.random()*x+1)}
function delay(n){return new Promise(function(resolve){setTimeout(resolve,n*1000);});}
//#endregion


//空房玩家端系統
exports.EmptyRoomPlayer =async function(message,client){

  //#region 空房玩家端初始作業
  const erPlayers = require('../JSONHome/erPlayers.json');
  function mesend(a){message.channel.send(a);} 
  function deleteit(a){message.channel.messages.fetch(a).then(message => message.delete());}
  async function delayout(a,b){await delay(b);message.channel.send(a);}
  
  //#endregion

  const cmd = message.content.substring(prefix.length).split(' ');

  //#region 空房玩家端系統主體
  switch(cmd[0]){
    case '系統開始':
      mesend("<@" + message.author.id +">");delayout('已成功進入系統');
      break;
    case '系統測試':
      const emojifilter = (reaction, user) => {
        return ['🇦', '🇧','🇨' ,'🇩' ,'🇪', '🇫', '🇬' ,'🇭'].includes(reaction.emoji.name) && user.id === message.author.id;
      };
      message.channel.send('系統歡迎您的光臨，測試指令請按：\n🇦 系統測試\n🇧 系統測試二號').then(message =>{
        message.react('🇦');
        message.react('🇧');
        const collector = message.createReactionCollector(emojifilter, { time: 15000 });
        collector.on('collect', (reaction, user) => {
          switch (reaction.emoji.name) {
            case '🇦':
              mesend('<@' + user.id +'>'+ '\n通過測試A');
              break;
            case '🇧':
              mesend('<@' + user.id +'>'+ '\n通過測試B');
              break;
            default:
              mesend('<@' + user.id +'>'+ '\n亂按切掉喔');
              break;
          }
          collector.stop();
        });
        collector.on('end', (collected,reason) =>{
          if(reason === 'time'){ 
            message.channel.send('需要想那麼久嗎...凌亞溦不喜歡躊躇不前的人...');
          }
        })
      })
      break;
    case '訊息擷取' :
      const filter1 = message => message.author.id == message.author.id;
      message.channel.send('測試二號').then(message=>{
        const collector = message.channel.createMessageCollector(filter1, { time: 15000 });
        collector.on('collect' , (message) =>{
          message.channel.send(message.member.user.tag + '您剛剛傳送的訊息：' + message.content);
          collector.stop();
        });
        
      })
      break;

    case '註冊':
      if (cmd[1] == null){mesend('請輸入角色名');return;}
      var Newplayer = {
        "Playerid" : message.author.id,
        "PlayerName":cmd[1],
        "Money":100,
        "MindValue":50,
        "Soal":10,
        "WeaponA":"X1",
        "WeaponB":null,
        "Crystal":"A1",
        "CrystalhadA":null,
        "CrystalhadB":null,
        "CrystalGet": null,
      }
      
      writeJSON(Newplayer)
      break;

    case 'jsonadd':
      
      modifyJSON(message.author.id,100)
      break;
    
    case '銷毀': case '刪除':
      const dltaccountfilter = (reaction, user) => {
        return ['⭕', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
      };
      message.channel.send('確認刪除帳號??\n此動作不可回復').then(message =>{
        message.react('⭕');
        message.react('❌');
        const collector = message.createReactionCollector(dltaccountfilter, { time: 15000 });
        collector.on('collect', (reaction, user) => {
          switch (reaction.emoji.name) {
            case '⭕':
              deleteJSON(message.author.id);
              //mesend('刪除完成');
              break;
            case '❌':
              mesend('了解，刪除程序已停止');
              break;
            default:
              mesend('嚴肅的話題不要鬧......');
              break;
          }
          collector.stop();
        });
        collector.on('end', (reason)=>{
          if(reason === 'time'){ 
            mesend('想太久了吧......');
          }
        })
      })
      break;
    
      
    
  }  
  //#endregion

  //#region 空房系統方城

  //#region 新增帳號
  function writeJSON(Newplayer){
    fs.readFile('./JSONHome/erPlayers.json',function(err,PlayerDetails){
      if (err) {return console.error(err);}
      
      var erusers = PlayerDetails.toString();
      erusers = JSON.parse(erusers);

      for(var i=0;i<erusers.total;i++){
        if (message.author.id == erusers.PlayerDetails[i].Playerid){
          mesend('一個DC帳號只能註冊一次喔')
          return;
        }
        if (message.author.id == erusers.PlayerDetails[i].PlayerName){
          mesend('此名已被使用，請更換')
          return;
        }
      }
      erusers.PlayerDetails.push(Newplayer);
      erusers.total = erusers.PlayerDetails.length;
      console.log(erusers.PlayerDetails);

      var str = JSON.stringify(erusers);
      fs.writeFile('./JSONHome/erPlayers.json',str,function(err){
        if (err) {return console.error(err);}
        mesend("玩家資料建置完成")
      })
    })
  }
  //#endregion
  //#region 修改內容
  function modifyJSON(ID,moneyadd){
    fs.readFile('./JSONHome/erPlayers.json',function(err,PlayerDetails){
      if (err) {return console.error(err);}

      var erusers = PlayerDetails.toString();
      erusers = JSON.parse(erusers);

      for (var i =0;i<erusers.total;i++){
        if (message.author.id === erusers.PlayerDetails[i].Playerid){
          erusers.PlayerDetails[i].Money = erusers.PlayerDetails[i].Money + moneyadd;
          console.log('增加完成')
        }
      }
      console.log(erusers.PlayerDetails);
      erusers.total = erusers.PlayerDetails.length;
      var str = JSON.stringify(erusers);
      fs.writeFile('./JSONHome/erPlayers.json',str,function(err){
        if (err) {return console.error(err);}
        mesend("玩家資料修改完成")
      })
    })
  }
  //#endregion
  //#region 銷毀帳號
  function deleteJSON(id){
    fs.readFile('./JSONHome/erPlayers.json',function(err,PlayerDetails){
      if (err) {return console.error(err);}

      var erusers = PlayerDetails.toString();
      erusers = JSON.parse(erusers);
      var bedeleteone;

      for (var i =0;i<erusers.total;i++){
        if (message.author.id === erusers.PlayerDetails[i].Playerid){
          bedeleteone = i;
        }
      }
      erusers.PlayerDetails.splice(bedeleteone,1)
      console.log(erusers.PlayerDetails);
      erusers.total = erusers.PlayerDetails.length;
      var str = JSON.stringify(erusers);
      fs.writeFile('./JSONHome/erPlayers.json',str,function(err){
        if (err) {return console.error(err);}
        mesend("玩家資料刪除完成")
      })
    })
  }
  //#endregion

  //#endregion

}
//空房管理端系統
exports.EmptyRoomAdmin = async function(message,client){

  //#region 空房管理端初始作業
  const erPlayers = require('../JSONHome/erPlayers.json');
  function mesend(a){message.channel.send(a);} 
  function deleteit(a){message.channel.messages.fetch(a).then(message => message.delete());}

  //#endregion

  const cmd = message.content.substring(prefix.length).split(' ');

  //#region 空房管理端系統主體
  switch(cmd[0]){
    case 'dlplayerdata':
      GreatAuthorDecide(message);
        message.channel.send("<@" + message.author.id +">",{
          files :[{
            attachment :'./JSONHome/erPlayers.json',
            name :'erPlayers.json'
          }]
        });
        break;
  }
  //#endregion

  //#region 作者判斷
  function GreatAuthorDecide(message){
    if(message.author.id !== greatauthor){
      mesend('無法啟用指令，有問題請聯絡作者大人');
      return;
    }
  }
  //#endregion
}