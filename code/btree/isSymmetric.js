/*
 * @Author: zzj
 * @Date: 2021-02-25 10:20:18
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-25 16:19:01
 * @Description:(101)对称二叉树
 */
class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = undefined;
  }
}

class Tree {
  constructor(data) {
    // 临时存储所有节点，方便寻找父子节点
    let nodeList = [];
    // 顶端节点
    let root;
    for (let i = 0; i < data.length; i++) {
      let node = new Node(data[i]);
      nodeList.push(node);
      if (i > 0) {
        // 计算当前节点属于哪一层
        let n = Math.floor(Math.sqrt(i + 1));
        // 记录当前层的起始点
        let q = Math.pow(2, n) - 1;
        // 记录上一层的起始点
        let p = Math.pow(2, n - 1) - 1;
        // 找到当前节点的父节点
        let parent = nodeList[p + Math.floor((i - q) / 2)];
        if (parent.left) {
          parent.right = node;
        } else {
          parent.left = node;
        }
      }
    }
    root = nodeList.shift();
    nodeList.length = 0;
    return root;
  }
  static isSymmetry(root) {
    if (!root) {
      return true;
    }
    let walk = (left, right) => {
      if (!left && !right) {
        return true;
      }
      if ((left && !right) || (!left && right) || left.val !== right.val) {
        return false;
      }
      return walk(left.left, right.right) && walk(left.right, right.left);
    };
    return walk(root.left, root.right);
  }
}

export default Tree;
export { Node };
