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
 * 数値の配列を受け取って、その要素の総積を返す関数
 */
function multi(numbers) {
  return numbers.reduce((o,v) => o * v);
}

module.exports = { add, multi };
