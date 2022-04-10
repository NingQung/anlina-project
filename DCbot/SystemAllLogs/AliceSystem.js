const Discord = require('discord.js')
const disbut = require("discord-buttons")
var greatauthor = '558978191172173835';
function delay(n){return new Promise(function(resolve){setTimeout(resolve,n*1000);});}

exports.SinoAlice = async function(message,client,actchoice,actingtags){
switch(actchoice){
  case 1 : //殼武系統
    //#region 變數宣告 
    var shellmsgouta;
    var shellmsgoutb;
    var shellmsgoutc;
    var shellembedtitle;
    var shellbuttonurl;
    var defaultkey = true;
    var raidcore1 = "貝利亞爾<:core1:876340385591484416>";
    var raidcore2 = "希爾<:core2:876346986436128838>";
    var raidcore3 = "瑪帕斯<:core3:876347144506855464>";
    var raidcore4 = "艾亞塔爾<:core4:876347250572414996>";
    var raidcore5 = "妖魂<:core5:876347333053390908>";
    var raidcore6 = "巴爾<:core6:876347517514686545>";
    var raidcore7 = "刻耳柏洛斯<:core7:876347611995598888>";
    var raidcore8 = "黑翼使徒<:core8:876347722347737118>";
    var raidcore9 = "蛇尾雞<:core9:876347822469959760>";
    var raidcore11 = "耶夢加得<:core11:876363432788647946>";
    var raidcore12 = "法夫納<:core12:876363483652960256>";
    var raidcore13 = "食人魔<:core13:876363545447661598>";
    var raidcore14 = "芬里厄<:core14:876363640343781387>";
    var raidcore15 = "悲嘆蜘蛛<:core15:876363702390099968>";
    var raidcore16 = "飛空獸<:core16:876363753418006548>";
    var raidcore17 = "妖花<:core17:876363842261774347>";
    var raidcore18 = "史爾特爾<:core18:876363882166353930>";
    var raidcore19 = "水晶幽魂<:core19:876363936595853322>";
    //#endregion
    //#region 判斷指令
    switch (actingtags) {
      case '書':
        shellembedtitle = "殼武 書";
        shellmsgouta = "食人魔討伐"
        shellmsgoutb = raidcore11+","+raidcore12+","+raidcore13;
        shellmsgoutc = raidcore13+"×3,"+raidcore15+"×2,"+raidcore17+"×2";
        shellbuttonurl = "https://sinoalice.game-db.tw/weapons/%E6%AE%BB%E3%83%8E%E6%9B%B8";
        break;
      case '琴':
        shellembedtitle = "殼武 琴";
        shellmsgouta = "法夫納(火龍)討伐"
        shellmsgoutb = raidcore11+","+raidcore12+","+raidcore13;
        shellmsgoutc = raidcore11+"×3,"+raidcore16+"×2,"+raidcore18+"×2";
        shellbuttonurl = "https://sinoalice.game-db.tw/weapons/%E6%AE%BB%E3%83%8E%E7%AB%AA%E7%90%B4";
        break;
      case '杖':
        shellembedtitle = "殼武 杖";
        shellmsgouta = "耶夢加得討伐"
        shellmsgoutb = raidcore11+","+raidcore12+","+raidcore13;
        shellmsgoutc = raidcore12+"×3,"+raidcore14+"×2,"+raidcore19+"×2";
        shellbuttonurl = "https://sinoalice.game-db.tw/weapons/%E6%AE%BB%E3%83%8E%E6%9D%96";
        break;
      case '魔具':case '球':
        shellembedtitle = "殼武 魔具";
        shellmsgouta = "飛空獸討伐"
        shellmsgoutb = raidcore14+","+raidcore15+","+raidcore16;
        shellmsgoutc = raidcore12+"×3,"+raidcore14+"×2,"+raidcore19+"×2";
        shellbuttonurl = "https://sinoalice.game-db.tw/weapons/%E6%AE%BB%E3%83%8E%E9%AD%94%E5%85%B7";
        break;
      case '劍': case '刀':
        shellembedtitle = "殼武 劍";
        shellmsgouta = "耶夢加得討伐"
        shellmsgoutb = raidcore11+","+raidcore12+","+raidcore13;
        shellmsgoutc = raidcore11+"×3,"+raidcore16+"×2,"+raidcore18+"×2";
        shellbuttonurl = "https://sinoalice.game-db.tw/weapons/%E6%AE%BB%E3%83%8E%E5%A4%A7%E5%89%A3";
        break;
      case '槌': case '捶': case '錘':
        shellembedtitle = "殼武 槌";
        shellmsgouta = "飛空獸討伐"
        shellmsgoutb = raidcore14+","+raidcore15+","+raidcore16;
        shellmsgoutc = raidcore12+"×3,"+raidcore14+"×2,"+raidcore19+"×2";
        shellbuttonurl = "https://sinoalice.game-db.tw/weapons/%E6%AE%BB%E3%83%8E%E6%96%A7";
        break;
      case '弓':
        shellembedtitle = "殼武 弓";
        shellmsgouta = "食人魔討伐"
        shellmsgoutb = raidcore11+","+raidcore12+","+raidcore13;
        shellmsgoutc = raidcore13+"×3,"+raidcore15+"×2,"+raidcore17+"×2";
        shellbuttonurl = "https://sinoalice.game-db.tw/weapons/%E6%AE%BB%E3%83%8E%E5%BC%93";
        break;
      case '柄': case '槍':
        shellembedtitle = "殼武 槍";
        shellmsgouta = "法夫納(火龍)討伐"
        shellmsgoutb = raidcore11+","+raidcore12+","+raidcore13;
        shellmsgoutc = raidcore11+"×3,"+raidcore16+"×2,"+raidcore18+"×2";
        shellbuttonurl = "https://sinoalice.game-db.tw/weapons/%E6%AE%BB%E3%83%8E%E6%A7%8D";
        break;
      case '禍書':
        shellembedtitle = "殼武 禍書";
        shellmsgouta = "黑翼使徒討伐"
        shellmsgoutb = raidcore1+","+raidcore8+","+raidcore5;
        shellmsgoutc = raidcore8+"×3,"+raidcore9+"×2,"+raidcore7+"×2";
        shellbuttonurl = "https://sinoalice.game-db.tw/weapons/%E6%AE%BB%E3%83%8E%E6%9B%B8(%E7%A6%8D)";
        break;
      case '禍琴':
        shellembedtitle = "殼武 禍琴";
        shellmsgouta = "蛇尾雞討伐"
        shellmsgoutb = raidcore2+","+raidcore9+","+raidcore4;
        shellmsgoutc = raidcore9+"×3,"+raidcore8+"×2,"+raidcore7+"×2";
        shellbuttonurl = "https://sinoalice.game-db.tw/weapons/%E6%AE%BB%E3%83%8E%E7%AC%9B(%E7%A6%8D)";
        break;
      case '禍杖':
        shellembedtitle = "殼武 禍杖";
        shellmsgouta = "希爾討伐"
        shellmsgoutb = raidcore2+","+raidcore9+","+raidcore4;
        shellmsgoutc = raidcore2+"×3,"+raidcore3+"×2,"+raidcore1+"×2";
        shellbuttonurl = "https://sinoalice.game-db.tw/weapons/%E6%AE%BB%E3%83%8E%E6%9D%96(%E7%A6%8D)";
        break;
      case '禍魔具':case '禍球':
        shellembedtitle = "殼武 禍魔具";
        shellmsgouta = "瑪帕斯(水鳥)討伐"
        shellmsgoutb = raidcore7+","+raidcore3+","+raidcore6;
        shellmsgoutc = raidcore3+"×3,"+raidcore2+"×2,"+raidcore1+"×2";
        shellbuttonurl = "https://sinoalice.game-db.tw/weapons/%E6%AE%BB%E3%83%8E%E9%AD%94%E5%85%B7(%E7%A6%8D)";
        break;
      case '禍刀': case '禍劍':
        shellembedtitle = "殼武 禍劍";
        shellmsgouta = "貝利亞爾討伐"
        shellmsgoutb = raidcore1+","+raidcore8+","+raidcore5;
        shellmsgoutc = raidcore1+"×3,"+raidcore2+"×2,"+raidcore3+"×2";
        shellbuttonurl = "https://sinoalice.game-db.tw/weapons/%E6%AE%BB%E3%83%8E%E5%89%A3(%E7%A6%8D)";
        break;
      case '禍錘': case '禍槌': case '禍捶':
        shellembedtitle = "殼武 禍錘";
        shellmsgouta = "艾亞塔爾(石柱)討伐"
        shellmsgoutb = raidcore2+","+raidcore9+","+raidcore4;
        shellmsgoutc = raidcore4+"×3,"+raidcore5+"×2,"+raidcore6+"×2";
        shellbuttonurl = "https://sinoalice.game-db.tw/weapons/%E6%AE%BB%E3%83%8E%E9%8E%9A(%E7%A6%8D)";
        break;
      case '禍弓': case '禍鎗':
        shellembedtitle = "殼武 禍鎗";
        shellmsgouta = "刻耳柏洛斯(三頭狗)討伐"
        shellmsgoutb = raidcore7+","+raidcore3+","+raidcore6;
        shellmsgoutc = raidcore7+"×3,"+raidcore8+"×2,"+raidcore9+"×2";
        shellbuttonurl = "https://sinoalice.game-db.tw/weapons/%E6%AE%BB%E3%83%8E%E9%8A%83(%E7%A6%8D)";
        break;
      case '禍柄': case '禍鐮':
        shellembedtitle = "殼武 禍鐮";
        shellmsgouta = "妖魂討伐"
        shellmsgoutb = raidcore1+","+raidcore8+","+raidcore5;
        shellmsgoutc = raidcore5+"×3,"+raidcore4+"×2,"+raidcore6+"×2";
        shellbuttonurl = "https://sinoalice.game-db.tw/weapons/%E6%AE%BB%E3%83%8E%E9%8E%8C(%E7%A6%8D)";
        break;
      default:
        defaultkey = false;
        break;
    }
    //#endregion
    //#region 輸出主體
    const ShellAuthorAvatar = client.users.cache.get(greatauthor).displayAvatarURL({size : 4096,dynamic : true })
    const ShellEmbed = new Discord.MessageEmbed()
      .setColor('#b826ee')
      .setTitle(shellembedtitle)
      .addField('來源：',shellmsgouta)
      .addField('進化：',shellmsgoutb +'**各五顆**')
      .addField('洗技能：',shellmsgoutc)
      .setFooter('資料整理&程式設計：'+ client.users.cache.get(greatauthor).tag,ShellAuthorAvatar)
    const ShellButton = new disbut.MessageButton()
      .setStyle('url')
      .setURL(shellbuttonurl)
      .setLabel('DataBase詳細資料');
    if(defaultkey){
      message.channel.send(ShellEmbed,ShellButton); 
    }else{
      message.channel.send("指令使用：an殼武 (武器名稱)\n例如：an殼武 禍書    an殼武 弓\n註：如果您輸入是正確的名稱卻沒有獲得回應，請回報給作者凝洸大人")
    }
    break;
    //#endregion
  
  case 2 : //討伐系統
    //#region 變數宣告
    var raidmsgout1;//誰的區域，哪種攻擊佳
    var raidmsgout2;//特效防具
    var raidmsgout3;//筆記
    var raidmsgout4;//核用途
    var raidmsgout5;//夢魘技能
    var raidembedtitle;
    var raidbuttonurl;
    var raidpicurl;
    var raidoutkey = 0;
    //#endregion
    //#region 判斷指令
    switch(actingtags){
      case 'help':
        raidoutkey = 2;
        break;
      case 'logall':
        raidoutkey = 3;
        break;
      case '水蛇': case '耶夢': case '耶夢加得':
        raidembedtitle = 'Яa!d　|　盤據聖堂的惡夢';
        raidmsgout1 = '白雪區域．<:susing_wind:771006415069904936>風屬．物魔皆可';
        raidmsgout2 = '蛇種．淑女為佳';
        raidmsgout3 = '就是一條<:lang:857229478013829121>水蛇';
        raidmsgout4 = 'H1&2可獲得：殼劍&殼杖\n**核功用：**基本殼武幾乎會用到';
        raidmsgout5 = '物語：水剋\n競技：歡聲';
        raidbuttonurl = 'https://sinoalice.game-db.tw/raid/%E8%81%96%E5%A0%82%E3%83%8B%E5%B7%A3%E9%A3%9F%E3%82%A6%E6%82%AA%E5%A4%A2';
        raidpicurl = 'https://sinoalice.game-db.tw/images/cardL/CardL0550.png';
        break;
      case '火龍':case '海底':case '法夫納':
        raidembedtitle = 'Яa!d　|　盤踞海底的火龍';
        raidmsgout1 = '人魚公主．<:susing_water:771006059031691274>水屬．物魔皆可';
        raidmsgout2 = '龍種．海底為佳';
        raidmsgout3 = '龍龍吃我大劍!!!';
        raidmsgout4 = 'H1&2可獲得：殼劍&殼杖\n**核功用：**基本殼武幾乎會用到';
        raidmsgout5 = '物語：火增\n競技：火增';
        raidbuttonurl = 'https://sinoalice.game-db.tw/raid/%E6%B5%B7%E5%BA%95%E3%83%8B%E5%B7%A3%E9%A3%9F%E3%82%A6%E7%81%AB%E7%AB%9C';
        raidpicurl = 'https://sinoalice.game-db.tw/images/cardL/CardL0665.png';
        break;
      case '食人魔':case '樹海':case '歐克':
        raidembedtitle = 'Яa!d　|　盤踞樹海的惡夢';
        raidmsgout1 = '愛麗絲區域．火屬．魔攻為佳';
        raidmsgout2 = '獸人種．黑石為佳';
        raidmsgout3 = 'Boss會降攻，火力高比較好打';
        raidmsgout4 = 'H1&2可獲得：殼弓、殼書\n**核功用：**基本殼武幾乎會用到';
        raidmsgout5 = '物語：風剋\n競技：狼煙';
        raidbuttonurl = 'https://sinoalice.game-db.tw/raid/%E6%A8%B9%E6%B5%B7%E3%83%8B%E5%B7%A3%E9%A3%9F%E3%82%A6%E6%82%AA%E5%A4%A2';
        raidpicurl = 'https://sinoalice.game-db.tw/images/cardL/CardL0773.png';
        break;
      case '水狗': case '芬里厄': case '丘陵':case '水狼': case '冰狼': 
        raidembedtitle = 'Яa!d　|　盤踞丘陵的惡夢';
        raidmsgout1 = '桃樂絲區域．風屬．魔攻為佳';
        raidmsgout2 = '野獸種．黃金為佳';
        raidmsgout3 = 'Boss三血時物攻無效';
        raidmsgout4 = '**核功用：**殼槌&球 進化|殼劍&杖&球 洗技能';
        raidmsgout5 = '物語：水增\n競技：水增';
        raidbuttonurl = 'https://sinoalice.game-db.tw/raid/%E4%B8%98%E9%99%B5%E3%83%8B%E5%B7%A3%E9%A3%9F%E3%82%A6%E6%82%AA%E5%A4%A2';
        raidpicurl = 'https://sinoalice.game-db.tw/images/cardL/CardL0991.png';
        break;
      case '蜘蛛':case '屍毒':case '悲嘆蜘蛛':case '雙牙':
        raidembedtitle = 'Яa!d　|　屍毒的雙牙';
        raidmsgout1 = '睡美人區域．水屬．物魔皆可';
        raidmsgout2 = '蜘蛛種．喪失為佳';
        raidmsgout3 = '上面用魔攻，下面用物攻';
        raidmsgout4 = '**核功用：**殼槌&球 進化|殼弓&書 洗技能';
        raidmsgout5 = '物語：火增\n競技：火增';
        raidbuttonurl = 'https://sinoalice.game-db.tw/raid/%E5%B1%8D%E6%AF%92%E3%83%8E%E5%8F%8C%E7%89%99';
        raidpicurl = 'https://sinoalice.game-db.tw/images/cardL/CardL1030.png?v=.png';
        break;
      case '飛空': case '飛空獸':case '因果':
        raidembedtitle = 'Яa!d　|　因果之翼';
        raidmsgout1 = '紅帽區域．風屬．物魔皆可';
        raidmsgout2 = '鳥種．菓子(台服似乎沒有)、悲哀為佳';
        raidmsgout3 = '先打夥伴再打飛空獸';
        raidmsgout4 = 'H1&2可獲得：殼槌&球\n**核功用：**殼槌&球 進化|殼劍&柄&琴 洗技能';
        raidmsgout5 = '物語：風壁\n競技：風壁';
        raidbuttonurl = 'https://sinoalice.game-db.tw/raid/%E5%9B%A0%E6%9E%9C%E3%83%8E%E7%BF%BC';
        raidpicurl = 'https://sinoalice.game-db.tw/images/cardL/CardL1105.png';
        break;
      case '妖花':case '夢幻':
        raidembedtitle = 'Яa!d　|　夢幻的洗禮';
        raidmsgout1 = '輝夜姬區域．風屬．物攻為佳';
        raidmsgout2 = '植物種．艶翅為佳';
        raidmsgout3 = '輸出不夠先打妖花B，如果輸出夠直接打王';
        raidmsgout4 = '**核功用：**\n殼弓、書 洗技能';
        raidmsgout5 = '物語：降防\n競技：降防';
        raidbuttonurl = 'https://sinoalice.game-db.tw/raid/%E5%A4%A2%E5%B9%BB%E3%83%8E%E6%B4%97%E7%A4%BC';
        raidpicurl = 'https://sinoalice.game-db.tw/images/cardL/CardL1173.png';
        break;
      case '火巨':case '巨兵':case '42':case '史爾特爾':
        raidembedtitle = 'Яa!d　|　巨兵的洗禮';
        raidmsgout1 = '灰姑娘區域．水屬．物魔皆可';
        raidmsgout2 = '石巨人種．鬣犬為佳';
        raidmsgout3 = 'Boss速通即可';
        raidmsgout4 = '**核功用：**\n殼琴、柄、劍 洗技能';
        raidmsgout5 = '物語：監牢\n競技：監牢';
        raidbuttonurl = 'https://sinoalice.game-db.tw/raid/%E5%B7%A8%E5%85%B5%E3%83%8E%E6%B4%97%E7%A4%BC';
        raidpicurl = 'https://sinoalice.game-db.tw/images/cardL/CardL1446.png';
        break;
      case '結晶':case '水晶':case '水晶幽魂':
        raidembedtitle = 'Яa!d　|　拒絕的結晶';
        raidmsgout1 = '葛麗特區域．火屬．物魔皆可';
        raidmsgout2 = '幽魂種．砂岩為佳';
        raidmsgout3 = 'Boss拖太久的話會被降爆';
        raidmsgout4 = '**核功用：**\n殼槌、杖、球 洗技能';
        raidmsgout5 = '物語：風壁\n競技：血界祈禱';
        raidbuttonurl = 'https://sinoalice.game-db.tw/raid/%E6%8B%92%E7%B5%B6%E3%83%8E%E7%B5%90%E6%99%B6';
        raidpicurl = 'https://sinoalice.game-db.tw/images/cardL/CardL1552.png';
        break;
      case '貝利':case '疾惡':
        raidembedtitle = 'Яa!d　|　疾惡的詛咒';
        raidmsgout1 = '皮諾丘區域．風屬．物魔皆可';
        raidmsgout2 = '撒旦種．音楽隊為佳';
        raidmsgout3 = '打爛就好了，沒印象是怎麼打的......';
        raidmsgout4 = 'EX可獲得：禍殼劍\n**核功用：**\n禍殼劍&鐮&書 進化\n禍殼劍&杖&球 洗技能';
        raidmsgout5 = '物語：增魔攻\n競技：增魔攻';
        raidbuttonurl = 'https://sinoalice.game-db.tw/raid/%E7%96%BE%E6%82%AA%E3%83%8E%E5%91%AA%E8%A9%9B';
        raidpicurl = 'https://sinoalice.game-db.tw/images/cardL/CardL1748.png';
        break;
      case '希爾':case '冥闇':
        raidembedtitle = 'Яa!d　|　冥闇的使者';
        raidmsgout1 = '愛麗絲區域．風屬．魔攻為佳';
        raidmsgout2 = '獸人種．煙夜、筋肉為佳';
        raidmsgout3 = '物攻幾乎沒有傷害，所以不要開風刀硬打';
        raidmsgout4 = 'EX可獲得：禍殼杖\n**核功用：**\n禍殼槌&琴&杖 進化\n禍殼劍&杖&球 洗技能';
        raidmsgout5 = '物語：致死傷害轉狀態\n競技：逆刻';
        raidbuttonurl = 'https://sinoalice.game-db.tw/raid/%E5%86%A5%E9%97%87%E3%83%8E%E4%BD%BF%E8%80%85';
        raidpicurl = 'https://sinoalice.game-db.tw/images/cardL/CardL2104.png';
        break;
      case '水鳥':case '帕瑪斯':case '怪鳥':case '瑪帕斯':
        raidembedtitle = 'Яa!d　|　奸惡的怪鳥';
        raidmsgout1 = '葛麗特區域．<:susing_wind:771006415069904936>風屬．物魔皆可';
        raidmsgout2 = '鳥種．悲哀為佳';
        raidmsgout3 = '2血如果下面兩隻**死了**，他會發瘋；\n3血如果下面兩隻**還在**，他也會發瘋\n火力夠直接打死王，火力不夠3血打下面的';
        raidmsgout4 = 'EX可獲得：禍殼球(註：8/30這場並沒有EX關卡)\n**核功用：**\n禍殼鎗&球 進化\n禍殼劍&杖&球 洗技能';
        raidmsgout5 = '物語：水警\n競技：水警';
        raidbuttonurl = 'https://sinoalice.game-db.tw/raid/%E5%A5%B8%E6%82%AA%E3%83%8E%E6%80%AA%E9%B3%A5';
        raidpicurl = 'https://sinoalice.game-db.tw/images/cardL/CardL2863.png';
        break;
      case '石柱':case '艾亞塔爾':case '艾亞':
        raidembedtitle = 'Яa!d　|　石柱的化身';
        raidmsgout1 = '人魚公主區域．火屬．魔攻佳';
        raidmsgout2 = '龍種．白夜為佳';
        raidmsgout3 = '會看玩家身上buff攻擊，物多就單體(很痛)，魔多就全體';
        raidmsgout4 = 'EX可獲得：禍殼槌\n**核功用：**\n禍殼槌&琴&杖 進化\n禍殼槌&鐮 洗技能';
        raidmsgout5 = '物語：風剋\n競技：全體晚鐘';
        raidbuttonurl = 'https://sinoalice.game-db.tw/raid/%E7%9F%B3%E6%9F%B1%E3%83%8E%E5%8C%96%E8%BA%AB';
        raidpicurl = 'https://sinoalice.game-db.tw/images/cardL/CardL2691.png';
        break;
      case '妖魂':
        raidembedtitle = 'Яa!d　|　妖魂的惡戲';
        raidmsgout1 = '紅帽區域．火屬．物魔皆可';
        raidmsgout2 = '幽靈種．但是棘手的怪是兩隻跟班龍\n白夜為佳';
        raidmsgout3 = 'Boss關buff不夠4層的話，2龍會超痛群體攻擊\n2龍必須優先同時打死，妖魂最後處理\n妖魂血不高、控血到1/4就不會補血';
        raidmsgout4 = 'EX可獲得：禍殼鐮\n**核功用：**\n禍殼劍&鐮&書 進化\n禍殼槌&鐮 洗技能';
        raidmsgout5 = '物語：降雙攻\n競技：降雙攻';
        raidbuttonurl = 'https://sinoalice.game-db.tw/raid/%E5%A6%96%E9%AD%82%E3%83%8E%E6%82%AA%E6%88%AF';
        raidpicurl = 'https://sinoalice.game-db.tw/images/cardL/CardL1949.png?v=.png';
        break;
      case '重砲':case '巴爾':case '暴威':
        raidembedtitle = 'Яa!d　|　暴威的重炮';
        raidmsgout1 = '睡美人區域．火屬．[未知]';
        raidmsgout2 = '蜘蛛種．共滅(台服好像沒有)、喪失為佳';
        raidmsgout3 = '作者註：沒有人有印象......尷尬';
        raidmsgout4 = '**核功用：**\n禍殼鎗&球 進化\n禍殼槌&鐮 洗技能';
        raidmsgout5 = '物語：弓增\n競技：弓增';
        raidbuttonurl = 'https://sinoalice.game-db.tw/raid/%E6%9A%B4%E5%A8%81%E3%83%8E%E9%87%8D%E7%A0%B2';
        raidpicurl = 'https://sinoalice.game-db.tw/images/cardL/CardL3188.png';
        break;
      case '三頭':case '三頭狗':case '刻耳柏':case '刻耳柏洛斯':case '煉獄':
        raidembedtitle = 'Яa!d　|　煉獄的守衛 ';
        raidmsgout1 = '桃樂絲區域．水屬．魔攻為佳';
        raidmsgout2 = '野獸種．青藍、処女(前兩個台服似乎沒有)、黄金為佳';
        raidmsgout3 = '沒打過............尷尬了嗚嗚嗚';
        raidmsgout4 = 'EX可獲得：禍殼鎗\n**核功用：**\n禍殼鎗&球 進化\n禍殼鎗&書&琴 洗技能';
        raidmsgout5 = '物語：火警\n競技：火警';
        raidbuttonurl = 'https://sinoalice.game-db.tw/raid/%E7%85%89%E7%8D%84%E3%83%8E%E7%95%AA%E7%8A%AC';
        raidpicurl = 'https://sinoalice.game-db.tw/images/cardL/CardL2582.png';
        break;
      case '黑翼':case '斯雷德':case '浸食':case '使徒':
        raidembedtitle = 'Яa!d　|　浸食的洗禮';
        raidmsgout1 = '灰姑娘區域．水屬．物攻為佳';
        raidmsgout2 = '人種．涙雨為佳';
        raidmsgout3 = 'Boss三血後不能拖，不然會被X翻';
        raidmsgout4 = 'EX可獲得：禍殼書\n**核功用：**\n禍殼劍&鐮&書 進化\n禍殼鎗&書&琴 洗技能';
        raidmsgout5 = '物語：火剋\n競技：降劍柄';
        raidbuttonurl = 'https://sinoalice.game-db.tw/raid/%E6%B5%B8%E9%A3%9F%E3%83%8E%E6%B4%97%E7%A4%BC';
        raidpicurl = 'https://sinoalice.game-db.tw/images/cardL/CardL1879.png';
        break;
      case '蛇尾': case '毒蛇':case '蛇尾雞':
        raidembedtitle = 'Яa!d　│　毒蛇的雙眼';
        raidmsgout1 = '白雪區域．水屬．火力不夠建議魔攻';
        raidmsgout2 = '蛇種．淑女為佳';
        raidmsgout3 = 'Boss二血打太慢會降物攻至-10層\n三血會吸血且會不停範圍攻擊\n快速打過王關為上策';
        raidmsgout4 = 'EX可獲得：禍殼琴\n**核功用：**\n禍殼槌&琴&杖 進化\n禍殼弓&書&琴 洗技能';
        raidmsgout5 = '物語：火壁\n競技：順刻';
        raidbuttonurl = 'https://sinoalice.game-db.tw/raid/%E6%AF%92%E8%9B%87%E3%83%8E%E5%8F%8C%E7%9C%BC';
        raidpicurl = 'https://sinoalice.game-db.tw/images/cardL/CardL2316.png';
        break;
      default:
        raidoutkey = 1;
        break;
    }
    //#endregion
    //#region 輸出主體
    switch(raidoutkey){
      case 0 :
        const RaidAuthorAvatar = client.users.cache.get('491559082415620136').displayAvatarURL({size : 4096,dynamic : true })
        const RaidEmbed = new Discord.MessageEmbed()
          .setColor('#071def')
          .setThumbnail(raidpicurl)
          .setTitle(raidembedtitle)
          .addField('│角色：',raidmsgout1)
          .addField('│特效防具：',raidmsgout2)
          .addField('│攻略筆記：',raidmsgout3)
          .addField('│關卡資源：',raidmsgout4)
          .addField('│夢魘技能：',raidmsgout5)
          .setFooter('|資料整理&筆記提供：'+ client.users.cache.get('491559082415620136').tag+ '\n|筆記提供：'+client.users.cache.get('408613153505673228').tag +'\n|程式設計：' + client.users.cache.get(greatauthor).tag,RaidAuthorAvatar)
        const RaidButton = new disbut.MessageButton()
          .setStyle('url')
          .setURL(raidbuttonurl)
          .setLabel('DataBase詳細資料');
        message.channel.send(RaidEmbed,RaidButton);
        break;
      case 1 :
        const RaidDefaultEmbed = new Discord.MessageEmbed()
          .setColor('03f0ee')
          .setTitle('怎麼辦啦?!?!\n本小姐聽不懂......')
          .setDescription('指令使用：an討伐 (關卡簡稱/Boss簡稱/Boss正式名稱/關卡全稱)擇一即可')
          .addFields(
            {name:'關卡簡稱',value:'an討伐 怪鳥'},
            {name:'Boss簡稱',value:'an討伐 水鳥'},
            {name:'Boss正式名稱',value:'an討伐 瑪帕斯'},
            {name:'關卡全稱',value:'an討伐 奸惡的怪鳥'},
          )
          .setFooter('如果您輸入是正確的名稱卻沒有獲得回應\n請回報給作者凝洸大人\nPS:此訊息會在20秒後自動刪除')
          message.channel.send(RaidDefaultEmbed).then(async message =>{
            await delay(20);
            message.delete();
          })
        break;
      case 2 :
        //const RaidHelpEmbed = new Discord.MessageEmbed()
        message.channel.send('直接叫作者最快' +"\n<@" + greatauthor +">");
        break;
      case 3 :
        break;
    }
    break;
    //#endregion
  
  case 3 : //雙鬥系統
    //#region 變數宣告
    var bilamsgcolor;
    var bilamsgoutmtitle;
    var bilamsgoutmdetails;
    var bilamsgoutmpic;
    var bilamsgoutatitle;
    var bilamsgoutaarms;
    var bilamsgoutadetail;
    var bilamsgoutbtitle;
    var bilamsgoutbarms;
    var bilamsgoutbdetail;
    var biladefaultkey = true;
    //#endregion
    //#region 判斷指令
    switch (actingtags){
      case '火龍與毒牙':case '火龍':case '毒牙':case '蜘蛛':
        bilamsgcolor = '#f62343';
        bilamsgoutmtitle = 'D!Яa!d ║ 火龍與毒牙';
        bilamsgoutmdetails = 'Wave2火龍\nWave3蜘蛛兄弟二人組';
        bilamsgoutmpic = 'https://sinoalice.game-db.tw/images/item/Item1636.png'
        bilamsgoutatitle = '法夫納';
        bilamsgoutaarms = '龍種，海底為佳';
        bilamsgoutadetail = '沒甚麼威脅，可以輕鬆過';
        bilamsgoutbtitle = '悲嘆蜘蛛兄弟';
        bilamsgoutbarms = '蜘蛛種，悲哀為佳';
        bilamsgoutbdetail = '上面用魔攻，下面用物攻';
        break;
      case '聖堂與丘陵':case '水蛇':case '水狗':case '冰狼':case '丘陵':case '聖堂':
        bilamsgcolor = '#03e7ea';
        bilamsgoutmtitle = 'D!Яa!d ║ 聖堂與丘陵';
        bilamsgoutmdetails = 'Wave2耶夢\nWave3芬里厄';
        bilamsgoutmpic = 'https://sinoalice.game-db.tw/images/item/Item1637.png'
        bilamsgoutatitle = '耶夢加得';
        bilamsgoutaarms = '蛇種，海底為佳';
        bilamsgoutadetail = '沒甚麼威脅，可以輕鬆過';
        bilamsgoutbtitle = '芬里厄';
        bilamsgoutbarms = '野獸種．黃金為佳';
        bilamsgoutbdetail = '第三條血時物攻無效';
        break;
      case '樹海與因果':case '食人魔':case '食人':case '爛鳥':case '飛空獸':case '飛空':case '樹海':case '因果':
        bilamsgcolor = '#00f04e';
        bilamsgoutmtitle = 'D!Яa!d ║ 樹海與因果';
        bilamsgoutmdetails = 'Wave2食人魔\nWave3飛空獸';
        bilamsgoutmpic = 'https://sinoalice.game-db.tw/images/item/Item1638.png'
        bilamsgoutatitle = '食人魔';
        bilamsgoutaarms = '獸人種，黑石為佳';
        bilamsgoutadetail = '物攻會打爆幹久，火弓建議攜帶';
        bilamsgoutbtitle = '飛空獸';
        bilamsgoutbarms = '鳥種．菓子(台服似乎沒有)、悲哀為佳';
        bilamsgoutbdetail = '伙伴為有點痛的龍種。白夜也可以裝';
        break;
      case '巨兵與浸食':case '史爾':case '黑翼':case '巨兵':case '浸食':
        bilamsgcolor = '#f62343';
        bilamsgoutmtitle = 'D!Яa!d ║ 巨兵與浸食';
        bilamsgoutmdetails = 'Wave2史爾特爾\nWave3黑翼使徒';
        bilamsgoutmpic = 'https://sinoalice.game-db.tw/images/item/Item1636.png'
        bilamsgoutatitle = '史爾特爾';
        bilamsgoutaarms = '石巨人種．鬣犬為佳';
        bilamsgoutadetail = '記得先疊狀態，不然黑翼很難打';
        bilamsgoutbtitle = '黑翼使徒斯雷德';
        bilamsgoutbarms = '人種．涙雨為佳';
        bilamsgoutbdetail = '留降屬性武器，不然黑翼狀態上來就沒完沒了';
        break;
      case '夢幻與詛咒':case '妖花':case '貝利':case '詛咒':case '夢幻':
        bilamsgcolor = '#03e7ea';
        bilamsgoutmtitle = 'D!Яa!d ║ 夢幻與詛咒';
        bilamsgoutmdetails = 'Wave2妖花\nWave3貝利亞爾';
        bilamsgoutmpic = 'https://sinoalice.game-db.tw/images/item/Item1637.png'
        bilamsgoutatitle = '妖花';
        bilamsgoutaarms = '植物種．艶翅為佳';
        bilamsgoutadetail = '集火快速急殺Boss，兩隻小妖花威脅不大';
        bilamsgoutbtitle = '貝利亞爾';
        bilamsgoutbarms = '撒旦種．音楽隊為佳';
        bilamsgoutbdetail = '物魔皆可，輕鬆打就好了';
        break;
      case '結晶與妖魂':case '結晶':case '水晶':case '妖魂':
        bilamsgcolor = '#00f04e';
        bilamsgoutmtitle = 'D!Яa!d ║ 結晶與妖魂';
        bilamsgoutmdetails = 'Wave2水晶幽魂\nWave3妖魂';
        bilamsgoutmpic = 'https://sinoalice.game-db.tw/images/item/Item1638.png'
        bilamsgoutatitle = '水晶幽魂';
        bilamsgoutaarms = '幽魂種．砂岩為佳';
        bilamsgoutadetail = '火增可以在Wave1末尾先開，等到發動時馬上打過去';
        bilamsgoutbtitle = '妖魂';
        bilamsgoutbarms = '幽靈種&龍種．建議裝白夜對付龍';
        bilamsgoutbdetail = '優先打龍，之後妖魂就可以慢慢打';
        break;
      default:
        biladefaultkey = false;
        break;      
    }
    //#endregion
    //#region 輸出主體
    if(biladefaultkey){
      const BilateralRaidEmbed = new Discord.MessageEmbed()
        .setColor('#8727e6')
        .setTitle(bilamsgoutmtitle)
        .setThumbnail(bilamsgoutmpic)
        .setDescription('**記得開雙倍，不開會後悔**')
        .addField('║關卡配置',bilamsgoutmdetails)
        .addFields(
          {name: '║Boss一號', value: bilamsgoutatitle,inline: true},
          {name: '║防具資料', value: bilamsgoutaarms,inline: true},
          {name: '║Boss攻略', value: bilamsgoutadetail,inline: true})
        .addFields(
          {name: '║Boss二號', value: bilamsgoutbtitle,inline: true},
          {name: '║防具資料', value: bilamsgoutbarms,inline: true},
          {name: '║Boss攻略', value: bilamsgoutbdetail,inline: true})   
        .setFooter('Bot by NingQung')
      message.channel.send(BilateralRaidEmbed)
    }else{
      message.channel.send('打雙鬥的正式名稱或是其中一個Boss的簡稱即可')
    }
    break;
    //#endregion
  
  default:
    message.channel.send("安麗娜警告：Alice領域出現[未解析]\n請通知管理員執行綻華系統")
    break;
}

}