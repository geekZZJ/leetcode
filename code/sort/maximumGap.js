/*
 * @Author: zzj
 * @Date: 2020-11-29 11:36:21
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-29 11:49:57
 * @Description:(164)最大间距
 */
export default (nums) => {
  if (nums.length < 2) {
    return 0;
  }
  // sort默认从小到大
  nums.sort((a, b) => {
    return a - b;
  });
  let max = 0;
  for (let i = 0, tmp; i < nums.length - 1; i++) {
    tmp = nums[i + 1] - nums[i];
    if (tmp > max) {
      max = tmp;
    }
  }
  return max;
};
