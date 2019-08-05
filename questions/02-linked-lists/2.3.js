const deleteMiddle = node => {
  if(node == null || node.next == null) return
  const next = node.next
  node.val = next.val
  node.next = next.next
}

/*----------  Test  ----------*/
const { arrayToList, listToArray } = require("./util")

describe("2.3", () => {
  [
    [
      [],
      0,
      [],
    ],
    [
      [1],
      2, // 0 based
      [1],
    ],
    [
      [1, 2, 3, 4],
      1, // 0 based
      [1, 3, 4],
    ],
    [
      [1, 2, 3, 4, 5],
      3,
      [1, 2, 3, 5],
    ],
  ].forEach(([input, index, result]) => {
    it(`${ util.inspect(input) }, ${ index }: ${ util.inspect(result) }`, () => {
      const list = arrayToList(input)
      let node = list
      for(let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      deleteMiddle(node)
      assert.deepEqual(listToArray(list), result)
    })
  })
})
