/*
 * @Author: zzj
 * @Date: 2021-02-21 14:49:11
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-21 14:50:35
 * @Description:(914)卡牌分组
 */
// 最大公约数
var gcd = (x, y) => {
  return x === 0 ? y : gcd(y % x, x);
};

var hasGroupsSizeX = function (deck) {
  let count = {};
  for (let i = 0; i < deck.length; i++) {
    if (count[deck[i]]) {
      count[deck[i]]++;
    } else {
      count[deck[i]] = 1;
    }
  }
  let g = -1;
  for (let i = 0; i < 10000; i++) {
    if (count[i] > 0) {
      if (g === -1) {
        g = count[i];
      } else {
        g = gcd(g, count[i]);
      }
    }
  }
  return g >= 2;
};
