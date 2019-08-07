const findLoop = list => {
  const s = new Set()
  let p = list
  while(!s.has(p)) {
    s.add(p)
    p = p.next
  }

  return p
}

const findLoop2 = list => {
  let slow = list
  let fast = list

  do {
    slow = slow.next
    fast = fast.next.next
  } while(slow !== fast)

  let p = list
  while(slow !== p) {
    slow = slow.next
    p = p.next
  }

  return p
}

/*----------  Test  ----------*/
const { newNode, arrayToList, listToArray } = require("./util")

describe("2.8", () => {
  const l1 = newNode(1)
  l1.next = l1

  const l2 = arrayToList([1, 2, 3]) // 2 is the start of the loop
  const n2 = l2.next
  l2.next.next.next = n2

  const l3 = arrayToList([1, 2, 3]) // 3 is the start of the loop
  const n3 = l3.next.next
  l3.next.next.next = n3

  ;[
    [l1, l1],
    [l2, n2],
    [l3, n3],
  ].forEach(([list, result]) => {
    it(`${ util.inspect(listToArray(list)) }: ${ result.val }`, () => {
      assert.equal(findLoop(list), result)
      assert.equal(findLoop2(list), result)
    })
  })
})
