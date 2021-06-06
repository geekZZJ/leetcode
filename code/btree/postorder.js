/*
 * @Author: zzj
 * @Date: 2021-06-06 16:25:32
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-06 16:26:00
 * @Description:
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
