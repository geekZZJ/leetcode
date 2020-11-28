/*
 * @Author: zzj
 * @Date: 2020-11-28 17:49:55
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-28 18:03:16
 * @Description:冒泡排序
 */
export default (arr) => {
  for (let i = arr.length, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      tmp = arr[j];
      if (tmp > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};
