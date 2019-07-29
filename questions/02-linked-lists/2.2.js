const f = (list, n) => {
  if(list == null) return { index: 0 }
  const { index, val } = f(list.next, n)
  if(index === n) return { index: n, val }
  return { index: index + 1, val: list.val }
}

const kthToLast = (list, k) => {
  const { index, val } = f(list, k)
  if(index === k) return val
  return null
}

const kthToLast2 = (list, k) => {
  let p1 = list
  let p2 = list

  for(let i = 0; i < k; i++) {
    if(p2 == null) return null
    p2 = p2.next
  }

  while(p2 != null) {
    p1 = p1.next
    p2 = p2.next
  }

  return p1.val
}

/*----------  Test  ----------*/
const { arrayToList } = require("./util")

describe("2.2", () => {
  [
    [[], 1, null],
    [[1], 2, null],
    [[1, 2, 3], 1, 3],
    [[1, 2, 3, 4, 5], 3, 3],
  ].forEach(([arr, k, result]) => {
    it(`${ util.inspect(arr) }, ${ k }: ${ result }`, () => {
      const list = arrayToList(arr)
      assert.equal(kthToLast(list, k), result)
      assert.equal(kthToLast2(list, k), result)
    })
  })
})


