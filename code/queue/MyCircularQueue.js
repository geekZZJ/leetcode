/*
 * @Author: zzj
 * @Date: 2021-01-07 16:09:33
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-07 17:35:11
 * @Description:(622)循环队列
 */
export default class MyCircularQueue {
  constructor(k) {
    // 保存数据长度为k的数据结构
    this.list = Array(k);
    // 队首指针
    this.front = 0;
    // 队尾指针
    this.rear = 0;
    // 队列长度
    this.max = k;
  }
  enQueue(value) {
    if (this.isFull()) {
      return false;
    } else {
      this.list[this.rear] = value;
      this.rear = (this.rear + 1) % this.max;
      return true;
    }
  }
  deQueue() {
    this.list[this.front] = "";
    this.front = (this.front + 1) % this.max;
    return true;
  }
  isEmpty() {
    return this.front === this.rear && !this.list[this.front];
  }
  isFull() {
    return this.front === this.rear && this.list[this.front];
  }
  Front() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.list[this.front];
  }
  Rear() {
    if (this.isEmpty()) {
      return -1;
    }
    let rear = this.rear - 1;
    return this.list[rear < 0 ? this.max - 1 : rear];
  }
}
