// 122. 买卖股票的最佳时机 II

export default (prices) => {
  // 保存利润
  let count = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length - 1; j++) {
      if (prices[j + 1] > prices[j]) {
        count += prices[j + 1] - prices[j]
        i = j
      } else {
        i = j
        break
      }
    }
  }
  return count
}
