const partition = (list, val) => {
  const less = []
  const greater = []

  while(list != null) {
    if(list.val < val) {
      less.push(list)
    } else {
      greater.push(list)
    }
    list = list.next
  }

  const result = [...less, ...greater]
  for(let i = 0; i < result.length; i++) {
    result[i].next = result[i + 1]
  }
}

/*----------  Test  ----------*/
const { arrayToList, listToArray } = require("./util")

describe("2.4", () => {
  [
    [
      [],
      1,
      [],
    ],
    [
      [1, 5, 3, 2],
      3,
      [1, 2, 5, 3],
    ],
    [
      [1, 5, 2, 4, 6, 8, 3],
      5,
      [1, 2, 4, 3, 5, 6, 8],
    ],
  ].forEach(([input, val, result]) => {
    it(`${ util.inspect(input) }, ${ val }: ${ util.inspect(result) }`, () => {
      const list = arrayToList(input)
      partition(list, val)
      assert.deepEqual(listToArray(list), result)
    })
  })
})
