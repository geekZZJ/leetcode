/*
 * @Author: zzj
 * @Date: 2020-11-14 13:07:52
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-16 16:16:51
 * @Description:
 */

// export default (str) => {
//   // 字符串按空格进行分割
//   const arr = str.split(" ");
//   let result = arr.map((item) => {
//     // 数组才有reverse方法
//     return item.split("").reverse().join("");
//   });
//   return result.join(" ");
// };

// export default (str) => {
//   // 字符串按空格进行分割
//   return str
//     .split(" ")
//     .map((item) => {
//       // 数组才有reverse方法
//       return item.split("").reverse().join("");
//     })
//     .join(" ");
// };

export default (str) => {
  // 字符串按空格进行分割
  return str
    .split(/\s/g)
    .map((item) => {
      // 数组才有reverse方法
      return item.split("").reverse().join("");
    })
    .join(" ");
};
