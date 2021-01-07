/*
 * @Author: zzj
 * @Date: 2021-01-07 16:10:11
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-07 17:13:33
 * @Description:
 */
import MyCircularQueue from "../../code/queue/MyCircularQueue";

test("MyCircularQueue:1", () => {
  let queue = new MyCircularQueue(4);
  queue.enQueue(2);
  expect(queue.isFull()).toBe(false);
  expect(queue.enQueue(1)).toBe(true);
  expect(queue.Front()).toBe(2);
  expect(queue.Rear()).toBe(1);
});
