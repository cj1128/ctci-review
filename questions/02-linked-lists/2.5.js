// recursive
const sumReverseOrder = (left, right, carry) => {
  if(left == null && right == null && carry === 0) return null
  let value = 0
  if(left != null) {
    value += left.val
  }
  if(right != null) {
    value += right.val
  }
  value += carry

  const node = newNode()
  node.val = value % 10
  node.next = sumReverseOrder(
    left == null ? null : left.next,
    right == null ? null : right.next,
    value >= 10 ? 1 : 0,
  )
  return node
}

// left and right are of same length
const _sumForwardOrder = (left, right) => {
  if(left.next == null) {
    const value = left.val + right.val
    const node = newNode()
    node.val = value % 10
    const carry = value >= 10 ? 1 : 0
    return { node, carry }
  }

  const { node, carry } = _sumForwardOrder(left.next, right.next)
  const value = left.val + right.val + carry
  const result = newNode()
  result.val = value % 10
  result.next = node
  const newCarry = value >= 10 ? 1 : 0

  return { node: result, carry: newCarry }
}

const listLength = list => {
  let n = 0
  while(list != null) {
    n++
    list = list.next
  }
  return n
}

const padListWithZero = (list, n) => {
  for(let i = 0; i < n; i++) {
    const node = newNode()
    node.val = 0
    node.next = list
    list = node
  }

  return list
}

const sumForwardOrder = (left, right) => {
  if(left == null && right == null) return null

  // pad short list with 0s
  const leftLength = listLength(left)
  const rightLength = listLength(right)

  if(leftLength < rightLength) {
    left = padListWithZero(left, rightLength - leftLength)
  } else if (leftLength > rightLength) {
    right = padListWithZero(right, leftLength - rightLength)
  }

  const { node, carry } = _sumForwardOrder(left, right)
  if(carry === 0) return node
  const result = newNode()
  result.val = carry
  result.next = node
  return result
}

/*----------  Test  ----------*/
const { listToArray, arrayToList, newNode } = require("./util")

describe("2.5", () => {
  describe("reverse order", () => {
    [
      [
        [],
        [],
        [],
      ],
      [
        [1],
        [5],
        [6],
      ],
      [
        [1],
        [9],
        [0, 1],
      ],
      [
        [1],
        [5, 1],
        [6, 1],
      ],
      [
        [0, 7],
        [0, 8],
        [0, 5, 1],
      ],
      [
        [7, 1, 6],
        [5, 9, 2],
        [2, 1, 9],
      ],
    ].forEach(([left, right, result]) => {
      it(`${ util.inspect(left) }, ${ util.inspect(right) }: ${ util.inspect(result) }`, () => {
        const r = sumReverseOrder(arrayToList(left), arrayToList(right), 0)
        assert.deepEqual(listToArray(r), result)
      })
    })
  })

  describe("forward order", () => {
    [
      [
        [],
        [],
        [],
      ],
      [
        [1],
        [5],
        [6],
      ],
      [
        [1],
        [9],
        [1, 0],
      ],
      [
        [1],
        [5, 1],
        [5, 2],
      ],
      [
        [7, 1, 6],
        [5, 9, 2],
        [1, 3, 0, 8],
      ],
    ].forEach(([left, right, result]) => {
      it(`${ util.inspect(left) }, ${ util.inspect(right) }: ${ util.inspect(result) }`, () => {
        const r = sumForwardOrder(arrayToList(left), arrayToList(right))
        assert.deepEqual(listToArray(r), result)
      })
    })
  })
})
