/*-------------------------------------------------------------------------------------------------------------------
* about:加密解密文件。基于crypto插件（https://github.com/brix/crypto-js）。
* author:马兆铿
* date:201+-1-2
* -------------------------------------------------------------------------------------------------------------------*/
import CryptoJS from 'crypto-js'

const KEY = '507C036B8BCC11AA7A117109C1CBAA87'; //orvibo的MD5加密后

//加密
function Crypto(key) {
  /*  数据加密
  * */
  this.encrypt = (msg) => {
    let str = '';
    //
    if (typeof msg === 'string') {
      str = msg;
    } else {
      str = JSON.stringify(msg);
    }
    return CryptoJS.AES.encrypt(str, key).toString();
  };

  /*  解密
  * */
  this.decrypt = (cryptText) => {
    // Decrypt
    let bytes = CryptoJS.AES.decrypt(cryptText, key);
    let plaintext = bytes.toString(CryptoJS.enc.Utf8);
    if (  //object对象
      plaintext === 'true' ||
      plaintext === 'false' ||
      plaintext.indexOf('{') === 0 ||
      plaintext.indexOf('[') === 0
    ) {
      return JSON.parse(plaintext);
    } else {  //字符串
      return plaintext;
    }
  }
}

export const crypto = new Crypto(KEY);
