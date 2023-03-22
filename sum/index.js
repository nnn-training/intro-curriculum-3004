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
 * 配列で渡された整数をすべてかけ合わせて返す関数
 */
function multi(numbers) {
  if (!Array.isArray(numbers)) {
    console.error('multi関数には配列を渡してください');
  }
  if (numbers.includes(0)) {
    return 0;
  }
  let result = 1;
  for (const number of numbers) {
    result *= number;
  }
  return result;
}
module.exports = {
   add, multi,
  };
