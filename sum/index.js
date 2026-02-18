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
 * 数値の配列を受け取って、その要素のかけ合わせた積を返す関数
 */
function multi(numbers) {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
}

module.exports = { add, multi };
