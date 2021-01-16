/*
 * @Author: zzj
 * @Date: 2021-01-16 15:55:08
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-16 18:28:03
 * @Description:(54)螺旋矩阵
 */

export default (arr) => {
  // 处理每一圈的数据遍历过程
  let map = (matrix, r = []) => {
    for (let i = 0; i < matrix.length; i++) {
      if (i === 0) {
        r = r.concat(matrix[i]);
      } else if (i === matrix.length - 1) {
        r = r.concat(matrix[i].reverse());
      } else {
        r.push(matrix[i].pop());
      }
    }
    matrix.shift();
    matrix.pop();
    for (let i = matrix.length - 1; i >= 0; i--) {
      if (matrix[i].length === 0) {
        matrix.splice(i, 1);
      } else {
        r.push(matrix[i].shift());
      }
    }
    if (matrix.length) {
      return map(matrix, r);
    } else {
      return r;
    }
  };
  return map(arr, []);
};
