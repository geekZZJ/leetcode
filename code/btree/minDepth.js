/*
 * @Author: zzj
 * @Date: 2021-06-22 21:50:19
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-22 22:01:58
 * @Description:（111）二叉树的最小深度
 */
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  const q = [[root, 1]];
  while (q.length) {
    const [n, l] = q.shift();
    if (!n.left && !n.right) {
      return l;
    }
    if (n.left) {
      q.push([n.left, l + 1]);
    }
    if (n.right) {
      q.push([n.right, l + 1]);
    }
  }
};
