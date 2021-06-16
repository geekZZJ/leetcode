/*
 * @Author: zzj
 * @Date: 2021-06-16 14:08:27
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-16 14:31:59
 * @Description:(104) 二叉树的最大深度
 */
var maxDepth = function (root) {
  let res = 0;
  const dfs = (n, l) => {
    if (!n) {
      return;
    }
    if (!n.left && !n.right) {
      res = Math.max(res, l);
    }
    dfs(n.left, l + 1);
    dfs(n.right, l + 1);
  };
  dfs(root, 1);
  return res;
};
