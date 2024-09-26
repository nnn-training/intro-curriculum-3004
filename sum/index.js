'use strict';

/**
 * 数値の配列を受け取って、その要素の合計を返す関数
 * @param {Array} numbers 数値の配列
 * @return {number} 合計の数値
 */
function add(numbers) {
  let result = 0;
  for (const num of numbers) {
    result += num;
  }
  return result;
}

/**
 * 数値の配列を受け取って、その整数を全て掛けあわせて返す関数
 * @param {Array} numbers 数値の配列
 * @return {number} 全てかけ合わせた結果の数値
 */
function multi(numbers) {
  let result = 1;
  for (const num of numbers) {
    result *= num;
  }
  return result;
}

module.exports = { add, multi };
