"use strict";

/**
 * 数値の配列を受け取って、その要素を全て掛け合わせて返す関数
 */
function multi(numbers) {
  let result = 1;
  for (const num of numbers) {
    result = result * num;
  }
  return result;
}

module.exports = { multi };
