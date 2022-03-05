/**
 * 313. 超级丑数
 */
class Ugly {
  constructor (n, primes) {
    this.n = n
    this.primes = new Heap(primes)
  }

  getAll () {
    // 超级丑数列表
    const result = [1]
    let i = 2
    while (result.length < this.n) {
      const arr = Ugly.getPrimes(i)
      let k = 0
      for (;k < arr.length; k++) {
        if (!this.primes.find(arr[k])) {
          break
        }
      }
      if (k === arr.length) {
        if (arr.length === 0) {
          if (this.primes.find(i)) {
            result.push(i)
          }
        } else {
          result.push(i)
        }
      }
      i++
    }
    return result[this.n - 1]
  }
  // 计算指定正整数n的质因数
  static getPrimes (n) {
    const prime = (n) => {
      // 存储所有的质因数
      const arr = []
      for (let i = 2; i < n / 2 + 1; i++) {
        if (n % i === 0 && !prime(i).length) {
          arr.push(i)
        }
      }
      return arr
    }
    return prime(n)
  }
}

class Heap {
  constructor (data) {
    this.data = data
    this.sort()
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

  static swap (arr, a, b) {
    if (a === b) return
    const c = arr[a]
    arr[a] = arr[b]
    arr[b] = c
  }

  find (val, i = 0) {
    const arr = this.data
    if (val > arr[i] || i > arr.length) {
      return false
    } else if (val === arr[i]) {
      return val
    } else {
      return this.find(val, i * 2 + 1) || this.find(val, i * 2 + 2)
    }
  }
}

export default Ugly
