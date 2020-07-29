import md5 from "md5";
import jsonp from "./jsonp";

export default (baidu_translate, query, lang, callback) => {
  if (typeof callback !== 'function') return false;
  
  var url = '//api.fanyi.baidu.com/api/trans/vip/translate';
  if (window.location.protocol.includes('https')) {
    url = '//fanyi-api.baidu.com/api/trans/vip/translate';
  }
  var salt = Date.now();
  var from = 'auto';
  var sign = md5(baidu_translate.appid + query + salt + baidu_translate.appkey);
 
  if (query.length === 0) {
    callback({ error: 'empty' });
  } else if (query.length < 100) {
    jsonp(url, {
      'q': query,
      'appid': baidu_translate.appid,
      'salt': salt,
      'from': from,
      'to': lang,
      'sign': sign,
      'callback': 'baiduTranslate' + salt
    }, (result) => {
      if (result && result.trans_result) {
        callback({ result: result.trans_result[0].dst });
      } else {
        callback({ error: 'wrong' });
      }
    }, true);
  } else {
    callback({ error: 'huge' });
  }
 }