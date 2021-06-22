/*
 * @Author: zzj
 * @Date: 2021-06-22 22:07:55
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-22 22:31:02
 * @Description:（102）二叉树的层序遍历
 */
// var levelOrder = function (root) {
//   if (!root) {
//     return [];
//   }
//   const q = [[root, 0]];
//   const res = [];
//   while (q.length) {
//     const [n, level] = q.shift();
//     if (!res[level]) {
//       res.push([n.val]);
//     } else {
//       res[level].push(n.val);
//     }
//     if (n.left) {
//       q.push([n.left, level + 1]);
//     }
//     if (n.right) {
//       q.push([n.right, level + 1]);
//     }
//   }
//   return res;
// };

// 方法二
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const q = [root];
  const res = [];
  while (q.length) {
    let len = q.length;
    res.push([]);
    while (len--) {
      const n = q.shift();
      res[res.length - 1].push(n.val);
      if (n.left) {
        q.push(n.left);
      }
      if (n.right) {
        q.push(n.right);
      }
    }
  }
  return res;
};
