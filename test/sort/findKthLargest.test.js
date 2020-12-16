/*
 * @Author: zzj
 * @Date: 2020-12-16 22:26:54
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-16 22:28:37
 * @Description:
 */
import findKthLargest from "../../code/sort/findKthLargest";

test("最大间距", () => {
  expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
});
