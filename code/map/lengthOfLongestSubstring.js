/*
 * @Author: zzj
 * @Date: 2021-03-26 15:07:12
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-26 15:17:02
 * @Description:(3)无重复字符的最长子串
 */
export default (s) => {
  let l = 0;
  let res = 0;
  const map = new Map();
  for (let r = 0; r < s.length; r++) {
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1;
    }
    res = Math.max(res, r - l + 1);
    map.set(s[r], r);
  }
  return res;
};
