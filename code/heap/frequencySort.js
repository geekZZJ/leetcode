/**
 * 451. 根据字符出现频率排序
 */

class Heap {
  constructor (str) {
    const map = new Map()
    str.split('').forEach(item => {
      if (map.has(item)) {
        map.set(item, map.get(item) + 1)
      } else {
        map.set(item, 1)
      }
    })
    this.map = map
    this.data = Array.from(map.values())
  }

  // 堆排序
  sort () {
    const arr = this.data
    const n = arr.length
    if (n <= 1) {
      return arr
    } else {
      for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
        Heap.splMaxHeap(arr, i, n)
      }
      for (let i = 0; i < n; i++) {
        Heap.swap(arr, 0, n - 1 - i)
        Heap.splMaxHeap(arr, 0, n - 1 - i)
      }
      return arr
    }
  }

  // 构建最大堆
  static splMaxHeap (arr, i, size) {
    // 左节点索引
    const l = i * 2 + 1
    // 右节点索引
    const r = i * 2 + 2
    let largest = i
    if (l <= size - 1 && arr[l] > arr[largest]) {
      largest = l
    }
    if (r <= size - 1 && arr[r] > arr[largest]) {
      largest = r
    }
    if (largest !== i) {
      Heap.swap(arr, i, largest)
      Heap.splMaxHeap(arr, largest, size)
    }
  }

  toString () {
    const arr = this.sort()
    console.log(arr)
    const str = []
    while (arr.length) {
      const top = arr.pop()
      for (const [k, v] of this.map) {
        if (v === top) {
          str.push(k.repeat(v))
          this.map.delete(k)
          break
        }
      }
    }
    return str.join('')
  }

  static swap (arr, a, b) {
    if (a === b) return
    const c = arr[a]
    arr[a] = arr[b]
    arr[b] = c
  }
}

export default Heap
