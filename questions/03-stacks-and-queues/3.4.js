const MyQueue = {
  new() {
    const stackForNewest = [] // top element is the newest element
    const stackForOldest = [] // top element is the oldest element

    const shift = () => {
      if(stackForOldest.length === 0) {
        const n = stackForNewest.length
        for(let i = 0; i < n; i++) {
          stackForOldest.push(stackForNewest.pop())
        }
      }
    }

    return {
      enqueue(val) {
        stackForNewest.push(val)
      },

      dequeue() {
        shift()
        return stackForOldest.pop()
      },
    }
  },
}

/*----------  Test  ----------*/
describe("3.4", () => {
 it("should work", () => {
  const q = MyQueue.new()
  q.enqueue(1)
  q.enqueue(2)
  q.enqueue(3)
  assert.equal(q.dequeue(), 1)
  assert.equal(q.dequeue(), 2)

  q.enqueue(4)
  assert.equal(q.dequeue(), 3)
  assert.equal(q.dequeue(), 4)
 })
})
