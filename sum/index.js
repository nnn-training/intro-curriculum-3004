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


function tinko(numbers) {
  let lesult = 1;
  for (const num of numbers){
    lesult = lesult * num;
  }
  return lesult;
}
module.exports = {
  add
  tinko
};
