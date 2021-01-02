/*
 * @Author: zzj
 * @Date: 2021-01-02 18:40:25
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-02 21:57:38
 * @Description:
 */
import calPoints from "../../code/stack/calPoints";

test('ops = ["5","2","C","D","+"]', () => {
  expect(calPoints(["5", "2", "C", "D", "+"])).toBe(30);
});

test('ops = ["5","-2","4","C","D","9","+","+"]', () => {
  expect(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])).toBe(27);
});
