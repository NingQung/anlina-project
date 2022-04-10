exports.ClockWork = function(){
  let currentdate = new Date();
  var CWMain = currentdate.toLocaleString('zh-TW',{timeZone:'Asia/Taipei',hour12:false})
  CWMain = CWMain.substring(2).replace(/\//g," ").replace(/:/g," ");
  return CWMain;
}