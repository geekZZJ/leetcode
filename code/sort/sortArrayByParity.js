/*
 * @Author: zzj
 * @Date: 2020-11-29 12:43:10
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-29 13:00:24
 * @Description:(922)按奇偶排序数组 II
 */
export default (A) => {
  // 降序排序
  A.sort((a, b) => {
    a - b;
  });
  let r = [];
  let odd = 1;
  let even = 0;
  A.forEach((item) => {
    if (item % 2 === 1) {
      r[odd] = item;
      odd = odd + 2;
    } else {
      r[even] = item;
      even = even + 2;
    }
  });
  return r;
};
