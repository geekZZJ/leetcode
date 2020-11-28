/*
 * @Author: zzj
 * @Date: 2020-11-28 18:03:40
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-28 18:07:41
 * @Description:
 */
import bubbling from "../../code/sort/bubbling";

test("冒泡排序", () => {
  expect(bubbling([1, 9, 5, 3, 4])).toEqual([1, 3, 4, 5, 9]);
});
