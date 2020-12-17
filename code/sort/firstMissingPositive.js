/*
 * @Author: zzj
 * @Date: 2020-12-17 09:47:23
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-17 10:51:43
 * @Description:(41) 缺失的第一个正数
 */
// export default (nums) => {
//   nums = nums.filter((item) => item > 0);
//   if (nums.length) {
//     nums.sort((a, b) => a - b);
//     if (nums[0] !== 1) {
//       return 1;
//     } else {
//       for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i + 1] - nums[i] > 1) {
//           return nums[i] + 1;
//         }
//       }
//       // pop() 方法用于删除数组的最后一个元素并返回删除的元素。
//       return nums.pop() + 1;
//     }
//   } else {
//     return 1;
//   }
// };

export default (nums) => {
  nums = nums.filter((item) => item > 0);
  // 选择排序优化
  for (let i = 0, min; i < nums.length; i++) {
    min = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < min) {
        let temp = min;
        min = nums[j];
        nums[j] = temp;
      }
    }
    nums[i] = min;
    if (i > 0) {
      if (nums[i] - nums[i - 1] > 1) {
        return nums[i - 1] + 1;
      }
    } else {
      if (min !== 1) {
        return 1;
      }
    }
  }
  return nums.length ? nums.pop() + 1 : 1;
};
