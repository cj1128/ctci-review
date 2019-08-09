const Stack = {
  new() {
    const stack = []
    const min = []

    return {
      push(val) {
        stack.push(val)

        if((min.length > 0 && val <= min[min.length - 1]) || min.length === 0) {
          min.push(val)
        }
      },

      pop() {
        const val = stack.pop()
        if(val === min[min.length - 1]) {
          min.pop()
        }
        return val
      },

      min() {
        return min[min.length - 1]
      },
    }
  },
}

/*----------  Test  ----------*/
describe("3.2", () => {
  it("should work", () => {
    const s = Stack.new()
    s.push(10)
    assert.equal(s.min(), 10)

    s.push(5)
    assert.equal(s.min(), 5)

    s.push(6)
    assert.equal(s.min(), 5)

    s.push(3)
    assert.equal(s.min(), 3)

    assert.equal(s.pop(), 3)
    assert.equal(s.min(), 5)

    assert.equal(s.pop(), 6)
    assert.equal(s.min(), 5)

    assert.equal(s.pop(), 5)
    assert.equal(s.min(), 10)

    assert.equal(s.pop(), 10)
  })
})

