/*
 * @Author: zzj
 * @Date: 2020-11-29 12:44:03
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-29 13:01:31
 * @Description:
 */
import sortArrayByParity from "../../code/sort/sortArrayByParity";

test("按奇偶排序数组", () => {
  expect(sortArrayByParity([4, 2, 5, 7])).toEqual([4, 5, 2, 7]);
});
