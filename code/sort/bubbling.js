/*
 * @Author: zzj
 * @Date: 2020-11-28 17:49:55
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-21 18:11:08
 * @Description:冒泡排序
 */
export default (arr) => {
  for (let i = arr.length - 1, tmp; i > 0; i--) {
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

// 冒泡排序
function bubbleSort(arr) {
  for (let i = 0, tmp; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}
