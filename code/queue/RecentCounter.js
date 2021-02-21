/*
 * @Author: zzj
 * @Date: 2021-02-21 11:51:58
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-21 14:51:29
 * @Description:(933)最近的请求次数
 */
var RecentCounter = function () {
  this.q = [];
};

RecentCounter.prototype.ping = function (t) {
  this.q.push(t);
  while (this.q[0] < t - 3000) {
    this.q.shift();
  }
  return this.q.length;
};
