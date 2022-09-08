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
 * 整数の配列を受け取って、その要素を全て掛け合わせた数値を返す関数
 */
function multi(numbers) {
  let result = 1;
  for (const num of numbers) {
    result *= num;
  }
  return result;

}
module.exports = { add, multi };
