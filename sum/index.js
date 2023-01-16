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

function multi(s) {
  let result=1;
  for (let i=0; i < s.length; i++) {
    result = result * s[i];
  }
  return result;
}
module.exports = {
  add,
  multi
};
