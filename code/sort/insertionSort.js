/*
 * @Author: zzj
 * @Date: 2021-02-22 09:45:33
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-22 10:17:54
 * @Description:
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const tmp = arr[i];
    let j = i;
    while (j > 0) {
      if (arr[j - 1] > tmp) {
        arr[j] = arr[j - 1];
      } else {
        break;
      }
      j--;
    }
    arr[j] = tmp;
  }
}
