// 860. 柠檬水找零

export default (bills) => {
  // 表示钱箱子，用于存储零钱
  let hand = []
  while (bills.length) {
    let money = bills.shift()
    if (money === 5) {
      hand.push(money)
    } else {
      hand.sort((a, b) => b - a)
      // 需要找的零钱
      let change = money - 5
      for (let i = 0; i < hand.length; i++) {
        if (hand[i] <= change) {
          change -= hand[i]
          hand.splice(i, 1)
          // 删除数组后数组长度发生变化，要维持原来的i不变
          i--
        }
        if (change === 0) {
          break
        }
      }
      if (change !== 0) {
        return false
      } else {
        hand.push(money)
      }
    }
  }
  return true
}
