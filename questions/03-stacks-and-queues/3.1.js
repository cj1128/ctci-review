// return a compound stack
class Stack {
  constructor(number, defaultSize) {
    this.stackNumber = number
    this.arr = new Array(defaultSize * number).fill(null)

    this.stackInfo = new Array(number)

    for(let i = 0; i < number; i++) {
      this.stackInfo[i] = {
        start: i * defaultSize,
        size: 0,
        capacity: defaultSize,
      }
    }
  }

  // throw error if full
  push(idx, val) {
    if(this.totalSize() === this.arr.length) {
      throw new Error("stack is full")
    }

    const s = this.stackInfo[idx]
    if(s.size < s.capacity) {
      this.arr[this.getIndex(s.start + s.size)] = val
      s.size++
    } else {
      // shift
      this.shift((idx + 1) % this.stackNumber)
      s.capacity++
      s.size++
      this.arr[this.getIndex(s.start + s.size - 1)] = val
    }
  }

  // throw error if empty
  pop(idx) {
    const s = this.stackInfo[idx]
    if(s.size === 0) {
      throw new Error("stack is empty")
    }
    const result = this.arr[this.getIndex(s.start + s.size - 1)]
    s.size--
    return result
  }

  size(idx) {
    return this.stackInfo[idx].size
  }

  capacity(idx) {
    return this.stackInfo[idx].capacity
  }

  totalSize() {
    return this.stackInfo.map(i => i.size).reduce((a, b) => a + b)
  }

  getIndex(idx) {
    return idx % this.arr.length
  }

  // return an array of this stack
  dump(idx) {
    const result = []
    const s = this.stackInfo[idx]
    for(let i = 0; i < this.stackInfo[idx].size; i++) {
      const val = this.arr[this.getIndex(s.start + i)]
      result.push(val)
    }
    return result
  }

  dumpAll() {
    return [...this.arr]
  }

  shift(idx) {
    const s = this.stackInfo[idx]
    if(s.size === s.capacity) {
      this.shift((idx + 1) % this.stackNumber)
      s.capacity++
    }

    for(let i = 0; i < s.size; i++) {
      this.arr[this.getIndex(s.start + s.size - i)] = this.arr[this.getIndex(s.start + s.size - i - 1)]
    }
    this.arr[s.start] = null
    s.start = this.getIndex(s.start + 1)
    s.capacity--
  }
}

/*----------  Test  ----------*/
describe("3.1", () => {
  it("should work", () => {
    const stack = new Stack(3, 3)
    stack.push(0, 1)

    stack.push(1, 2)
    stack.push(1, 3)

    stack.push(2, 4)
    stack.push(2, 5)
    stack.push(2, 6)
    assert.equal(stack.size(0), 1)
    assert.equal(stack.capacity(0), 3)
    assert.deepEqual(stack.dump(0), [1])

    assert.equal(stack.size(1), 2)
    assert.equal(stack.capacity(1), 3)
    assert.deepEqual(stack.dump(1), [2, 3,])

    assert.equal(stack.size(2), 3)
    assert.equal(stack.capacity(2), 3)
    assert.deepEqual(stack.dump(2), [4, 5, 6])

    // grow stack 2
    stack.push(2, 7)
    assert.deepEqual(stack.dump(2), [4, 5, 6, 7])
    assert.equal(stack.size(2), 4)
    assert.equal(stack.capacity(2), 4)

    // grow stack 1
    stack.push(1, 8)
    stack.push(1, 9)
    assert.deepEqual(stack.dump(1), [2, 3, 8, 9])
    assert.equal(stack.size(1), 4)
    assert.equal(stack.capacity(1), 4)

    assert.equal(stack.size(0), 1)
    assert.equal(stack.capacity(0), 1)

    assert.deepEqual(stack.dumpAll(), [6, 7, 1, 2, 3, 8, 9, 4, 5])

    // stack is full
    assert.throws(() => {
      stack.push(0, 100)
    })

    assert.equal(stack.pop(0), 1)
    assert.equal(stack.size(0), 0)
    assert.equal(stack.capacity(0), 1)

    stack.push(0, 100)
    assert.equal(stack.pop(2), 7)
    stack.push(0, 101)
    assert.deepEqual(stack.dumpAll(), [5, 6, 100, 101, 2, 3, 8, 9, 4])
    assert.deepEqual(stack.dump(0), [100, 101])
    assert.deepEqual(stack.dump(1), [2, 3, 8, 9])
    assert.deepEqual(stack.dump(2), [4, 5, 6])

    assert.equal(stack.pop(0), 101)
    assert.equal(stack.pop(0), 100)
    assert.equal(stack.size(0), 0)
    assert.equal(stack.capacity(0), 2)
    assert.throws(() => {
      stack.pop(0)
    })

    assert.equal(stack.pop(1), 9)
    assert.equal(stack.pop(1), 8)
    assert.equal(stack.pop(1), 3)
    assert.equal(stack.pop(1), 2)
    assert.equal(stack.size(1), 0)
    assert.equal(stack.capacity(1), 4)
    assert.throws(() => {
      stack.pop(1)
    })

    assert.equal(stack.pop(2), 6)
    assert.equal(stack.pop(2), 5)
    assert.equal(stack.pop(2), 4)
    assert.equal(stack.size(2), 0)
    assert.equal(stack.capacity(2), 3)
    assert.throws(() => {
      stack.pop(2)
    })
  })
})
