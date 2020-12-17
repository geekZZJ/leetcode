/*
 * @Author: zzj
 * @Date: 2020-12-17 09:47:35
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-17 10:11:37
 * @Description:
 */
import firstMissingPositive from "../../code/sort/firstMissingPositive";

test("缺失的第一个正数", () => {
  expect(firstMissingPositive([1, 2, 0])).toBe(3);
});
