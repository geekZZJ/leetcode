/*
 * @Author: zzj
 * @Date: 2020-11-29 11:36:21
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-29 12:15:27
 * @Description:(164)最大间距
 */
// export default (nums) => {
//   if (nums.length < 2) {
//     return 0;
//   }
//   // sort默认从小到大
//   nums.sort((a, b) => {
//     return a - b;
//   });
//   let max = 0;
//   for (let i = 0, tmp; i < nums.length - 1; i++) {
//     tmp = nums[i + 1] - nums[i];
//     if (tmp > max) {
//       max = tmp;
//     }
//   }
//   return max;
// };

export default (nums) => {
  if (nums.length < 2) {
    return 0;
  }
  let max = 0;
  let len = nums.length - 1;
  let space;
  for (let i = len, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      tmp = nums[j];
      if (tmp > nums[j + 1]) {
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
      }
    }
    if (i < len) {
      space = nums[i + 1] - nums[i];
      if (space > max) {
        max = space;
      }
    }
  }
  return Math.max(max, nums[1] - nums[0]);
};
