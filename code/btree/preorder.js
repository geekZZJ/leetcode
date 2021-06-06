/*
 * @Author: zzj
 * @Date: 2021-06-02 22:17:13
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-06 17:15:40
 * @Description:二叉树先序遍历
 */
const bt = require("./bt");

// const preorder = (root) => {
//   if (!root) {
//     return;
//   }
//   console.log(root.val);
//   preorder(root.left);
//   preorder(root.right);
// };

const preorder = (root) => {
  if (!root) {
    return;
  }
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    console.log(n.val);
    if (n.right) {
      stack.push(n.right);
    }
    if (n.left) {
      stack.push(n.left);
    }
  }
};

preorder(bt);
