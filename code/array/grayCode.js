/*
 * @Author: zzj
 * @Date: 2020-11-19 15:44:01
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-19 16:22:38
 * @Description:(89)格雷编码
 */
export default (n) => {
  if (n === 0) {
    return [0];
  }
  // 递归函数，用来算输入为n的格雷编码
  let make = (n) => {
    if (n === 1) {
      return ["0", "1"];
    } else {
      let prev = make(n - 1);
      let result = [];
      let max = Math.pow(2, n) - 1;
      for (let i = 0; i < prev.length; i++) {
        result[i] = `0${prev[i]}`;
        result[max - i] = `1${prev[i]}`;
      }
      return result;
    }
  };
  return make(n).map((item) => parseInt(item, 2));
};
