/*
 * @Author: zzj
 * @Date: 2020-12-16 21:54:15
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-17 10:59:53
 * @Description: (215) 数组中的第K个最大元素
 */
// export default (nums, k) => {
//   return nums.sort((a, b) => b - a)[k - 1];
// };

export default (nums, k) => {
  let len = nums.length - 1;
  for (let i = len, temp; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums[len - k + 1];
};
