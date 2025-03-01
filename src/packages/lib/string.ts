/*----------------------------------------------------------------------------------
 * desc: 字符串基础函数
 * ----------------------------------------------------------------------------------*/
import { isNaN, isNil, random } from 'radash';

/**
 * 判断是合法数字
 * @param x
 */
export function isNumeric(x: unknown = '') {
  if (typeof x === 'number') {
    return !isNaN(x); // 如果是数字类型，使用 isNaN 函数检查是否是有效数字
  } else if (typeof x === 'string' && x.length) {
    const str = x.trim(); // 处理字符串前后的空格
    return str ? !isNaN(Number(str)) : false; // 如果是字符串类型，先尝试将其转换为数字，然后使用 isNaN 函数检查是否是有效数字
  } else {
    return false; // 如果既不是数字类型也不是字符串类型，则不是数字或数字字符串
  }
}

/**
 * 生成随机数字符串。避免使用 Math.random，会被 Fotify 警告
 * @param len 长度
 * @returns {string}
 */
export function generateRandomNumStr(len = 5): string {
  const TO_INT = 10;
  const randomNum = random(TO_INT, true).toString();
  const randomInt = randomNum.replace('.', '');
  return randomInt.slice(0, len);
}

/**
 * 是后端不需要的空值
 */
export function checkIfNotValid(value: any) {
  const NIL_STR_LIST = ['undefined', 'null']; // 有时候前端会自己字符串化错误的值
  const SERVER_NOT_NEEDEDS = ['[null]', '{}']; // 后端不需要的空值：[undefined]、空对象

  const valueJsonStr = JSON.stringify(value);
  return isNil(value) || NIL_STR_LIST.includes(value) || SERVER_NOT_NEEDEDS.includes(valueJsonStr);
}

/**
 * 计算字符长度。中文算 2 个
 * @param str
 */
export function getByteLength(str: string) {
  let length = 0;
  const ASCII_END = 127;

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    // 假设码点大于127的都是中文字符或全角字符
    length += charCode > ASCII_END ? 2 : 1;
  }
  return length;
}
