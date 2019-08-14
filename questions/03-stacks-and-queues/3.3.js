const { Stack } = require("./util")

const SetOfStacks = {
  new(capacity) {
    const stacks = []

    return {
      push(val) {
        let stack = stacks[stacks.length - 1]

        if(stack == null) {
          stack = Stack.new(capacity)
          stacks.push(stack)
        }

        if(stack.size === capacity) {
          stack = Stack.new()
          stacks.push(stack)
        }

        stack.push(val)
      },

      pop() {
        const stack = stacks[stacks.length - 1]
        if(stack == null) throw new Error("no stack")
        const val = stack.pop()
        if(stack.size === 0) {
          stacks.pop()
        }
        return val
      },

      popAt(n) {
        const stack = stacks[n]
        if(stack == null) throw new Error("no such stack")
        const val = stack.pop()
        if(stack.size === 0) {
          stacks.splice(n, 1)
        }
        return val
      },

      // return stack number
      get stacks() {
        return stacks.length
      },

      get size() {
        return stacks.map(s => s.size).reduce((a, b) => a + b, 0)
      },
    }
  },
}

/*----------  Test  ----------*/
describe("3.3", () => {
  it("should work", () => {
    const s = SetOfStacks.new(2)
    s.push(1)
    s.push(2)
    assert.equal(s.stacks, 1)

    s.push(3)
    s.push(4)
    assert.equal(s.stacks, 2)

    s.push(5)
    s.push(6)
    assert.equal(s.stacks, 3)

    assert.equal(s.pop(), 6)
    assert.equal(s.pop(), 5)
    assert.equal(s.pop(), 4)
    assert.equal(s.stacks, 2)

    s.push(100)
    s.push(200)
    assert.equal(s.stacks, 3)

    assert.equal(s.popAt(0), 2)
    assert.equal(s.popAt(0), 1)

    // NOTE: the stacks have been changed, index 1 refers to previous index 2 stack
    assert.equal(s.popAt(1), 200)

    assert.equal(s.pop(), 100)
    assert.equal(s.pop(), 3)
    assert.equal(s.size, 0)
  })
})
