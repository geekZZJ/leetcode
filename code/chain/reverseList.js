/*
 * @Author: zzj
 * @Date: 2021-02-21 16:36:44
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-21 16:48:24
 * @Description:(206)反转链表
 */
var reverseList = function (head) {
  let p1 = head;
  let p2 = null;
  while (p1) {
    const tmp = p1.next;
    p1.next = p2;
    p2 = p1;
    p1 = tmp;
  }
  return p2;
};
