const Stack = {
  new() {
    const stack = []

    return {
      push(val) {
        stack.push(val)
      },

      pop() {
        if(stack.length === 0) throw new Error("empty stack")
        return stack.pop()
      },

      get size() {
        return stack.length
      },

      peek() {
        return stack[stack.length - 1]
      },

      isEmpty() {
        return stack.length === 0
      },
    }
  },
}

exports.Stack = Stack
