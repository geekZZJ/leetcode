/*
 * @Author: zzj
 * @Date: 2021-01-16 15:56:04
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-24 22:32:18
 * @Description:
 */
import spiralOrder from "../../code/martix/spiralOrder";

test("martix", () => {
  let input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  expect(spiralOrder(input)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});

// test("martix", () => {
//   let input = [
//     [1, 11],
//     [2, 12],
//     [3, 13],
//     [4, 14],
//     [5, 15],
//     [6, 16],
//     [7, 17],
//     [8, 18],
//     [9, 19],
//     [10, 20],
//   ];
//   expect(spiralOrder(input)).toEqual([
//     1,
//     11,
//     12,
//     13,
//     14,
//     15,
//     16,
//     17,
//     18,
//     19,
//     20,
//     10,
//     9,
//     8,
//     7,
//     6,
//     5,
//     4,
//     3,
//     2,
//   ]);
// });
