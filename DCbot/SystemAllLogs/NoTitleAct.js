const Discord = require('discord.js')
const disbut = require('discord-buttons')
var greatauthor = '558978191172173835';
function delay(n){return new Promise(function(resolve){setTimeout(resolve,n*1000);});}
function ranout(x){return Math.floor(Math.random()*x+1)}
const anMessage = require('../JSONHome/anMessage.json');

exports.MessageResponse = async function(message,client){

  function mesend(a){message.channel.send(a);} 
  function deleteit(a){message.channel.messages.fetch(a).then(message => message.delete());}
  async function delayout(a,b){await delay(b);message.channel.send(a);}

  switch (message.content) {
    case '罵我':case '罵我！！':case '罵我🥺':case '罵罵我':case'罵我！':case '罵我!': case '罵我!!':
      var funact = ranout(10);
      switch(funact){
        case 9 : 
          mesend("<@" + message.author.id +">");delayout('本小姐剛剛似乎說了一個貶義詞......\n要去洗嘴巴了啦嗚嗚嗚......',2);
        break;
        case 10 :
           mesend('有看到馬路旁的行道樹嗎?');delayout('它雖然是植物但是比你有用很多。',2)
          break;
        default : mesend(anMessage.AbuseMe[funact].response);break;
      }
      break;
  }
}

exports.MessageInclude = async function(message,client){
  function mesend(a){message.channel.send(a);}
  if (message.content.includes(':eyescry:')){message.react('<:eyescry:859467065614008391>') ;return;}
  if (message.content.includes('再見')){mesend('你好，謝謝，小籠包，再見!!');return;}
  if (message.content.includes('小萌')){message.react("<:lang:857229478013829121>");return;}
  
}