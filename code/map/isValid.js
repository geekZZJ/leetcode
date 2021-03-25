/*
 * @Author: zzj
 * @Date: 2021-03-25 21:38:13
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-25 21:55:36
 * @Description:(20)有效的括号
 */
export default (s) => {
  if (s.length % 2 === 1) return false;
  const stack = [];
  const map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (map.has(c)) {
      stack.push(c);
    } else {
      const t = stack[stack.length - 1];
      if (map.get(t) === c) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
