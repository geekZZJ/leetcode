/*
 * @Author: zzj
 * @Date: 2020-11-22 22:27:24
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-22 22:29:54
 * @Description:(459)重复的子字符串
 */
export default (s) => {
  let reg = /^(\w+)\1+$/;
  return reg.test(s);
};
