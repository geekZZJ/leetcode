/*
 * @Author: zzj
 * @Date: 2021-02-21 15:32:58
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-21 15:35:26
 * @Description:(237)删除链表中的节点
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
