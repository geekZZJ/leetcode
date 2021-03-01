/*
 * @Author: zzj
 * @Date: 2021-03-01 22:28:01
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-01 22:37:00
 * @Description:(141)环形链表
 */
var hasCycle = function (head) {
  let p1 = head;
  let p2 = head;
  while (p1 && p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p2 === p1) {
      return true;
    }
  }
  return false;
};
