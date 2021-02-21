/*
 * @Author: zzj
 * @Date: 2020-11-28 18:13:37
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-21 18:26:44
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

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let indexMin = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      const tmp = arr[i];
      arr[i] = arr[indexMin];
      arr[indexMin] = tmp;
    }
  }
  console.log(arr);
}

selectionSort([5, 4, 3, 2, 1]);
