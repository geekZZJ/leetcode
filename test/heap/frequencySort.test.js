import Heap from '../../code/heap/frequencySort'

test('Heap', () => {
  const heap = new Heap('chcaa')
  expect(heap.toString()).toMatch(/ccaah|aacch/)
})
