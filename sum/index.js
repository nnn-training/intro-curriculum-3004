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
 * 配列で渡された整数を全て掛け合わせて返す関数
 */
function multi(numbers) {
  let value = 1;
  for(let number of numbers) {
    value = value * number;
  }
  return value;
}

module.exports = { 
  add: add,
  multi: multi
};
