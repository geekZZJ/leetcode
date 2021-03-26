/*
 * @Author: zzj
 * @Date: 2021-03-26 15:23:43
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-26 16:12:03
 * @Description:(76)最小覆盖子串
 */
export default (s, t) => {
  let l = 0;
  let r = 0;
  const need = new Map();
  for (let i of t) {
    need.set(i, need.has(i) ? need.get(i) + 1 : 1);
  }
  let needType = need.size;
  let res = "";
  while (r < s.length) {
    const c = s[r];
    if (need.has(c)) {
      need.set(c, need.get(c) - 1);
      if (need.get(c) === 0) {
        needType -= 1;
      }
    }
    while (needType === 0) {
      const newRes = s.substring(l, r + 1);
      if (!res || newRes.length < res.length) {
        res = newRes;
      }
      const c = s[l];
      if (need.has(c)) {
        need.set(c, need.get(c) + 1);
        if (need.get(c) === 1) {
          needType += 1;
        }
      }
      l++;
    }
    r++;
  }
  return res;
};
