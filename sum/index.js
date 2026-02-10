'use strict';

/**
 * 数値の配列を受け取って、その要素の合計を返す関数
 * 「配列で渡された整数をすべて掛けあわせて返す関数」を追加
 * バージョン実験
 */


function multi(numbers) {
  let result = 1;
  for (const num of numbers) {
    result = result * num;
  }
  return result;
}

module.exports = { multi };
