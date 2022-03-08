import buy from '../../code/greedy/maxProfit'

test('buy1:', () => {
  expect(buy([7, 1, 5, 3, 6, 4])).toBe(7)
})

test('buy2:', () => {
  expect(buy([1, 2, 3, 4, 5])).toBe(4)
})

test('buy2:', () => {
  expect(buy([7, 6, 4, 3, 1])).toBe(0)
})
