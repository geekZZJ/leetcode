/*
 * @Author: zzj
 * @Date: 2021-03-25 21:28:36
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-25 21:37:58
 * @Description:(349)数组交集
 */
export default (nums1, nums2) => {
  const map = new Map();
  nums1.forEach((n) => {
    map.set(n, true);
  });
  const res = [];
  nums2.forEach((n) => {
    if (map.get(n)) {
      res.push(n);
      map.delete(n);
    }
  });
  return res;
};
