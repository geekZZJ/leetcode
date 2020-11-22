/*
 * @Author: zzj
 * @Date: 2020-11-22 22:27:50
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-22 22:33:45
 * @Description:
 */
import repeatedSubstringPattern from "../../code/regexp/repeatedSubstringPattern";

test("abcabcab", () => {
  expect(repeatedSubstringPattern("abcabcab")).toBe(false);
});
