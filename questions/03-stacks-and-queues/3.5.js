const { Stack } = require("./util")

const sortStack = s => {
  const tmp = Stack.new()

  while(!s.isEmpty()) {
    const cur = s.pop()
    let n = 0

    while(!tmp.isEmpty() && cur < tmp.peek()) {
      n++
      s.push(tmp.pop())
    }

    tmp.push(cur)

    while(n-- > 0) {
      tmp.push(s.pop())
    }
  }

  while(!tmp.isEmpty()) {
    s.push(tmp.pop())
  }
}

/*----------  Test  ----------*/

describe("3.5", () => {
  it("should work", () => {
    const s1 = Stack.new()
    s1.push(5)
    s1.push(1)
    s1.push(6)
    s1.push(3)
    s1.push(8)
    sortStack(s1)
    assert.equal(s1.pop(), 1)
    assert.equal(s1.pop(), 3)
    assert.equal(s1.pop(), 5)
    assert.equal(s1.pop(), 6)
    assert.equal(s1.pop(), 8)
  })
})
