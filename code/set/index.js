/*
 * @Author: zzj
 * @Date: 2021-03-24 09:54:43
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-24 10:18:27
 * @Description:
 */
// 去重
const arr = [1, 1, 2, 2];

const arr2 = [...new Set(arr)];

// 判断元素是否在集合中
const set = new Set(arr);
const has = set.has(3);

// 求交集
const set2 = new Set([2, 3]);
const set3 = new Set([...set2].filter((item) => set.has(item)));
console.log(set3);
