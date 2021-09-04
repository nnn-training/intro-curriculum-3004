'use strict';

/**
 * 数値の配列を受け取って、その要素の合計を返す関数
 */
function add(numbers) {
  const result = numbers.reduce((l, r) => l + r, 0);
  return result;
}

/**
 * 数値の配列を受け取って、その要素を掛け合わせた結果を返す関数
 */
function multi(numbers) {
  const result = numbers.reduce((l, r) => l * r, 1);
  return result;
}

module.exports = { add, multi };
