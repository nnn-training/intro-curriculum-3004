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
 * receive a list of numbers and return the multiplication of its all elements
 */
function multi(numbers) {
  let result = 1;
  for (const num of numbers) {
    result = result * num;
  }
  return result;
}

module.exports = { add,multi };
