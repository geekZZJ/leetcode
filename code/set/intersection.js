/*
 * @Author: zzj
 * @Date: 2021-03-24 10:42:13
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-24 10:53:44
 * @Description:(349)两个数组的交集
 */
export default (nums1, nums2) => {
  return [...new Set(nums1)].filter((item) => nums2.includes(item));
};
