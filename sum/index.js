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
 * 数値の配列を受け取って、その要素の積を返す関数
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
  multi: multi
};

// - 自作ライブラリの作成方法：
//   - ディレクトリを作り（＝作成するパッケージの名前）、yarn initを実行
//   - .jsファイルを作成、その中に関数定義＋module.exportsでオブジェクトのプロパティ（メソッド）: 関数名と記載
// - 自作ライブラリの利用方法：
//   - 利用したいディレクトリでyarn init
//   - Yarn add パッケージの相対パスでnode_modulesディレクトリに自作パッケージがインストールされる