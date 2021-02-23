/*
 * @Author: zzj
 * @Date: 2021-02-23 15:17:45
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-23 15:45:22
 * @Description:快速排序
 */
function quickSort(arr) {
  const rec = (arr) => {
    if (arr.length === 1) return arr;
    const left = [];
    const right = [];
    const mid = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  };
  return rec(arr);
}
