'use strict';
/**
 * 配列で渡された正数を全てかけ合わせて返す関数
 */
function multi(s) {
    let result = 0;
    for(const answer of s){
        result = answer * result;
    }
    return result;
}
console.log(multi([1, 2, 3, 4, 5, 6]));
