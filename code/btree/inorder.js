/*
 * @Author: zzj
 * @Date: 2021-06-06 16:22:52
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-06 16:27:50
 * @Description:中序遍历
 */
const bt = require("./bt");

const inorder = (root) => {
  if (!root) {
    return;
  }
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
};

inorder(bt);
