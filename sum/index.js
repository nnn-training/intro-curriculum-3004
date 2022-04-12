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
 * 数値の配列を受け取って、その要素を掛け合わせた結果を返す関数
 * パッケージへ定義
 */
function multi(numbers) {
    let result = 1;
    for (const num of numbers) {
        result = result * num;
    }
    return result;
}

// 特定の関数をモジュールとなるよう関数やオブジェクトを代入する。
module.exports = {
    // add: add,
    // multi: multi
    // モジュール上で定義したい関数名と、ファイル内で定義した関数名を同じにしたい場合表記を省略できる！　⬇︎
    add,
    multi
};