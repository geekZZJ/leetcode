## 问题修复

### 最大矩阵

```js
export default function rectangle(arr) {
  let result = [];
  let reg = /1{2,}/g;
  // 把每一行连续的1挑选出来，并记录好起始点和截止点
  arr = arr.map((item) => {
    let str = item.join("");
    let r = reg.exec(str);
    let rs = [];
    while (r) {
      rs.push([r.index, r.index + r[0].length - 1]);
      r = reg.exec(str);
    }
    return rs;
  });

  let maxRect = (arr, result = [], n = 1) => {
    let top = arr.pop();
    let next = arr.pop();
    let tt;
    let nn;
    let start;
    let end;
    let width = 1;
    let maxWidth = 1;
    // 表示处理了几行，top和next是2行，n从1开始，所以首先n++
    n++;
    // 计算相邻的两行1的交叉，比如 0111001和0011000，交叉后成 11即[2,3]
    for (let i = 0, il = top.length; i < il; i++) {
      tt = top[i];
      for (let j = 0, jl = next.length; j < jl; j++) {
        nn = next[j];
        width = Math.min(tt[1], nn[1]) - Math.max(tt[0], nn[0]);
        if (width >= maxWidth) {
          maxWidth = width;
          start = Math.max(tt[0], nn[0]);
          end = Math.min(tt[1], nn[1]);
        }
      }
    }
    // 如果没有找到交叉点
    if (start === undefined || end === undefined) {
      // 判断是不是处理超过3行，没超过直接返回false
      if (n < 3) {
        return false;
      } else {
        // 超过3行，说明上一次的结果和当前行没有交叉，返回上一次的结果即可
        width = top[0][1] - top[0][0] + 1;
        if (width > 1) {
          result.push((n - 1) * width);
        }
      }
    } else {
      // 找到交叉点继续下一行
      if (arr.length > 0) {
        arr.push([[start, end]]);
        maxRect(arr, result, n++);
      } else {
        // 从某一行一直计算到最后一行，这个时候start和end一直有值，所以不会进入到if层，这个时候n就是累计的行数（高），end-start+1就是宽
        result.push(n * (end - start + 1));
      }
    }
  };
  // 每一次寻找最大矩形，找不到交叉点就结束了
  while (arr.length > 1) {
    maxRect([].concat(arr), result);
    arr.pop();
  }
  // 为什么有这一行，理论上arr已经为1行了
  // maxRect(arr, result)

  let max = 0;
  let item = result.pop();
  while (item) {
    if (item > max) {
      max = item;
    }
    item = result.pop();
  }
  return max > 0 ? max : -1;
}
```
