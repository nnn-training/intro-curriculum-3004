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

// module.exports = { add };

// 練習問題
/**
 * 数値の配列を受け取って、その要素の積を返す関数
 */
function multi(numbers) {
  let result = 1;
  for (const num of numbers) {
    result = result * num;
  }
  return result;
}
// パッケージに複数のメソッドを追加するときの書き方
module.exports = { add, multi };