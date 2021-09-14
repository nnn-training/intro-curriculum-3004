"use strict";

/**
 * 数値の配列を受け取って、その要素の総和を返す関数
 * @param {Array}} numbers
 * @returns number!
 */

function add(numbers) {
  let result = 0;
  for (const num of numbers) {
    result = result + num;
  }
  return result;
}

/**
 * 数値の配列を受け取って、その要素の積を返す関数
 * @param {Array}} numbers
 * @returns number!
 */

function multi(numbers) {
  let result = 1;
  for (const num of numbers) {
    result = result * num;
  }
  return result;
}

module.exports = {
  add: add,
  multi: multi,
};
