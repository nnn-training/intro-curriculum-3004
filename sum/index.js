'use strict';

/**
 * 数値の配列を受け取って、その要素の合計を返す関数
 */
function add(numbers) {
  let result = 0;
  for (const num of numbers) {
    result = result + num;
  }
  return result;
}


/**
 * 数値の配列を受け取って、その要素の乗算を返す関数
 */
 function multi(numbers) {
  let resultMulti = 1;
  for (const num of numbers) {
    resultMulti = resultMulti * num;
  }
  return resultMulti;
}

module.exports = { add, multi };
