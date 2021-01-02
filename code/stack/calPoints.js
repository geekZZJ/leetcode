/*
 * @Author: zzj
 * @Date: 2021-01-02 18:40:17
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-02 21:56:48
 * @Description:(682)棒球比赛
 */
export default (ops) => {
  let result = [];
  let pre1, pre2;
  ops.forEach((item) => {
    switch (item) {
      case "C":
        if (result.length) {
          result.pop();
        }
        break;
      case "D":
        pre1 = result.pop();
        result.push(pre1, pre1 * 2);
        break;
      case "+":
        pre1 = result.pop();
        pre2 = result.pop();
        result.push(pre2, pre1, pre1 + pre2);
        break;
      default:
        result.push(item * 1);
    }
  });
  return result.reduce((total, num) => {
    return total + num;
  });
};
