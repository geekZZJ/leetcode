/*
 * @Author: zzj
 * @Date: 2020-11-28 18:13:51
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-28 18:21:11
 * @Description:
 */
import choose from "../../code/sort/choose";

test("选择排序", () => {
  expect(choose([1, 9, 5, 3, 4])).toEqual([1, 3, 4, 5, 9]);
});
