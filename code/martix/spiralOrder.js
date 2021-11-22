/*
 * @Author: zzj
 * @Date: 2021-01-16 15:55:08
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-16 18:28:03
 * @Description:(54)螺旋矩阵
 */

export default (arr) => {
  // 处理每一圈的数据遍历过程
  const map = (matrix, r = []) => {
    for (let i = 0; i < matrix.length; i++) {
      if (i === 0) {
        // 处理首行
        r = r.concat(matrix[i])
      } else if (i === matrix.length - 1) {
        // 末行反转拼接
        r = r.concat(matrix[i].reverse())
      } else {
        // 其他行取最后一个
        r.push(matrix[i].pop())
      }
    }
    matrix.shift()
    matrix.pop()
    // 取出每行第一个
    for (let i = matrix.length - 1; i >= 0; i--) {
      if (matrix[i].length === 0) {
        matrix.splice(i, 1)
      } else {
        r.push(matrix[i].shift())
        if (matrix[i].length === 0) {
          matrix.splice(i, 1)
        }
      }
    }
    if (matrix.length) {
      return map(matrix, r)
    } else {
      return r
    }
  }
  return map(arr, [])
}
