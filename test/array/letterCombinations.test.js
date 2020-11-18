/*
 * @Author: zzj
 * @Date: 2020-11-18 15:55:51
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-18 17:25:23
 * @Description:
 */
import letterCombinations from "../../code/array/letterCombinations";

test("23", () => {
  expect(letterCombinations("23")).toEqual([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf",
  ]);
});
