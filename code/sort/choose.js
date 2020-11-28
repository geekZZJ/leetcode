/*
 * @Author: zzj
 * @Date: 2020-11-28 18:13:37
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-28 18:19:59
 * @Description:选择排序
 */
export default (arr) => {
  for (let i = 0, min; i < arr.length; i++) {
    min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        let c = min;
        min = arr[j];
        arr[j] = c;
      }
    }
    arr[i] = min;
  }
  return arr;
};
