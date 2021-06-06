/*
 * @Author: zzj
 * @Date: 2021-06-06 16:22:52
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-06 17:38:31
 * @Description:中序遍历
 */
const bt = require("./bt");

// const inorder = (root) => {
//   if (!root) {
//     return;
//   }
//   inorder(root.left);
//   console.log(root.val);
//   inorder(root.right);
// };

const inorder = (root) => {
  if (!root) {
    return;
  }
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    console.log(n.val);
    p = n.right;
  }
};

inorder(bt);
