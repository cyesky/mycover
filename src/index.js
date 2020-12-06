/*
 * @Author: 沧海一声笑
 * @Date: 2020-11-15 11:27:11
 * @LastEditors: 沧海一声笑
 * @LastEditTime: 2020-12-06 17:27:43
 * @Description: 
 */
// function a(a,b){
//     return a+b
// }
// // module.exports={
// //     a
// // }
// export default{a}
exports.a = function(a, b) {
    if (a > 0 && b > 0) {
      return a + b;
    } else {
      return 0;
    }
  };
  exports.DDD = function(a, b) {
    if (a > 0 && b > 0) {
      return a + b;
    } else {
      return 0;
    }
  };