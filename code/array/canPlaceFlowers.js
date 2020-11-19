/*
 * @Author: zzj
 * @Date: 2020-11-19 11:02:58
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-19 15:39:12
 * @Description:(605)种花问题
 */
export default (flowerbed, n) => {
  let sum = 0;
  if (flowerbed.length === 1) {
    if (flowerbed[0] === 0) {
      sum++;
    }
  } else {
    for (let i = 1; i < flowerbed.length; i++) {
      if (flowerbed[i] === 0) {
        if (i === 1 && flowerbed[i - 1] === 0) {
          sum++;
        } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
          sum++;
          i = i + 1;
        } else if (i === flowerbed.length - 1 && flowerbed[i - 1] === 0) {
          sum++;
        }
      }
    }
  }
  return sum >= n;
};
