/*
 * @Author: zzj
 * @Date: 2021-03-01 22:17:16
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-01 22:26:39
 * @Description:(83)删除排序链表中的重复元素
 */
var deleteDuplicates = function (head) {
  let p = head;
  while (p && p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return head;
};
