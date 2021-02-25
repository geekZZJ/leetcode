/*
 * @Author: zzj
 * @Date: 2021-02-24 22:27:52
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-24 22:29:37
 * @Description:
 */
import rotate from "../../code/martix/rotate";

test("rotate", () => {
  expect(
    rotate([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ]);
});
