/*
 * @Author: zzj
 * @Date: 2021-06-06 16:25:32
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-06 16:27:38
 * @Description:后序遍历
 */
const bt = require("./bt");

const postorder = (root) => {
  if (!root) {
    return;
  }
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
};

postorder(bt);
