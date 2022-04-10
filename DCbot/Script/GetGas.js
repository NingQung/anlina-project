//#region 全域引用
const auth = require('../JSONHome/auth.json');
const request = require('request');
//#endregion

//#region 申請使用連結
const baseExcel = {
    'methed': 'GET',
    'url': auth.Gas.Get[0].baseExcel,
    'headers': {}
};
//#endregion
//#region 連結使用允許
exports.getBaseExcel = function(callback) {
    let backValue = new Array;
    request(baseExcel, function(error, response) {
        try {
            if (error) {
                console.log('getBaseExcelError1', error)
                callback(false);
            } else {
                const data = JSON.parse(response.body); //接收回傳(response)的body
                callback(data);
            }
        } catch (err) {
            console.log('getBaseExcelError2', err);
            callback(false);
        }
    });
};
//#endregion