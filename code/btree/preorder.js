/*
 * @Author: zzj
 * @Date: 2021-06-02 22:17:13
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-02 22:20:57
 * @Description:二叉树先序遍历
 */
const bt = require("./bt");

const preorder = (root) => {
  if (!root) {
    return;
  }
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
};

preorder(bt);
