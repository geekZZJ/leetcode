// 415. 字符串相加
const addStrings = (num1, num2) => {
  const maxLen = Math.max(num1.length, num2.length)
  num1 = num1.length === maxLen ? num1 : num1.padStart(maxLen, '0')
  num2 = num2.length === maxLen ? num2 : num2.padStart(maxLen, '0')
  const arr = []
  let tempNum = 0
  for (let index = maxLen - 1; index >= 0; index--) {
    const sum = parseInt(num1[index]) + parseInt(num2[index]) + tempNum
    const rest = sum % 10
    tempNum = parseInt(sum / 10)
    arr.unshift(rest)
  }
  if (tempNum) arr.unshift(tempNum)
  return arr.join('')
}
