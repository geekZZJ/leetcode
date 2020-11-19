/*
 * @Author: zzj
 * @Date: 2020-11-19 11:03:08
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-19 15:06:09
 * @Description:
 */
import canPlaceFlowers from "../../code/array/canPlaceFlowers";

test("flowerbed = [1,0,0,0,1], n = 2", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
});
