/*
 * @Author: zzj
 * @Date: 2020-11-18 15:54:43
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-18 17:24:46
 * @Description:(17)给定一个仅包含数字2-9的字符串，返回所有它能表示的字母组合。
 */
export default (str) => {
  // 建立电话号码键盘映射
  const map = ["", 1, "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let num = str.split("");
  if (num.length === 0) {
    return num;
  }
  // 保存键盘映射后的内容，23=>["abc","def"]
  let code = [];
  num.forEach((item) => {
    if (map[item]) {
      code.push(map[item]);
    }
  });
  if (code.length === 1) {
    return code[0].split("");
  }
  let comb = (arr) => {
    let temp = [];
    // 遍历第一个元素
    for (let i = 0; i < arr[0].length; i++) {
      // 遍历第二个元素
      for (let j = 0; j < arr[1].length; j++) {
        temp.push(`${arr[0][i]}${arr[1][j]}`);
      }
    }
    arr.splice(0, 2, temp);
    if (arr.length > 1) {
      comb(arr);
    } else {
      return temp;
    }
    return arr[0];
  };
  return comb(code);
};
