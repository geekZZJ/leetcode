/*
 * @Author: zzj
 * @Date: 2021-01-10 12:46:17
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-10 15:06:04
 * @Description:
 */
import sort, { NodeList } from "../../code/chain/sortList";

test("sort:1", () => {
  let head = new NodeList([4, 1, 3, 2, 7, 9, 10, 12, 6]);
  sort(head);
  let res = [];
  let next = head;
  while (next) {
    res.push(next.val);
    next = next.next;
  }
  expect(res).toEqual([1, 2, 3, 4, 6, 7, 9, 10, 12]);
});
