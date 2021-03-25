/*
 * @Author: zzj
 * @Date: 2021-03-25 22:07:57
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-25 22:13:07
 * @Description:(1)两数之和
 */
export default (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const n2 = target - n;
    if (map.has(n2)) {
      return [map.get(n2), i];
    } else {
      map.set(n, i);
    }
  }
};
