const removeDup = list => {
  if(list == null) return

  const set = new Set()
  set.add(list.val)

  while(list.next != null) {
    if(set.has(list.next.val)) {
      list.next = list.next.next
    } else {
      set.add(list.next.val)
      list = list.next
    }
  }
}

const removeDup2 = list => {
  while(list != null) {
    let p = list

    while(p.next != null) {
      if(p.next.val === list.val) {
        p.next = p.next.next
      } else {
        p = p.next
      }
    }

    list = list.next
  }
}
/*----------  Test  ----------*/
const { arrayToList, listToArray } = require("./util")

describe("2.1", () => {
  [
    [
      [],
      [],
    ],
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
    [
      [1, 2, 3, 3],
      [1, 2, 3],
    ],
    [
      [1, 2, 2, 3, 4, 5, 5],
      [1, 2, 3, 4, 5],
    ],
  ].forEach(([input, result]) => {
    it(`with a set, ${ util.inspect(input) }: ${ util.inspect(result) }`, () => {
      const list = arrayToList(input)
      removeDup(list)
      assert.deepEqual(listToArray(list), result)
    })

    it(`without additional data structure, ${ util.inspect(input) }: ${ util.inspect(result) }`, () => {
      const list = arrayToList(input)
      removeDup2(list)
      assert.deepEqual(listToArray(list), result)
    })
  })
})
