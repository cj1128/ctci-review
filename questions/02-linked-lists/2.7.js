// return null if no intersection
const intersect = (l1, l2) => {
  if(l1 == null || l2 == null) return null
  let length1 = 1
  let length2 = 1
  let p1 = l1
  let p2 = l2

  while(p1.next != null) {
    length1++
    p1 = p1.next
  }

  while(p2.next != null) {
    length2++
    p2 = p2.next
  }

  // no intersection
  if(p1 !== p2) {
    return null
  }

  p1 = l1
  p2 = l2

  if(length1 < length2) {
    for(let i = 0; i < length2 - length1; i++) {
      p2 = p2.next
    }
  }
  if(length2 < length1) {
    for(let i = 0; i < length1 - length2; i++) {
      p1 = p1.next
    }
  }

  while(p1.val !== p2.val) {
    p1 = p1.next
    p2 = p2.next
  }

  return p1
}

/*----------  Test  ----------*/
const { listToArray, arrayToList, concatList } = require("./util")

describe("2.7", () => {
   const l = arrayToList([100, 200])
   const l1 = arrayToList([1, 2, 3])
   const l2 = arrayToList([4, 5, 6])
   const l3 = arrayToList([1, 2, 3, 4])
   const l4 = arrayToList([1])
   concatList(l1, l)
   concatList(l2, l)
   concatList(l3, l)
   concatList(l4, l)
  ;[
    [
      arrayToList([]),
      arrayToList([]),
      null,
    ],
    [
      arrayToList([1, 2, 3]),
      arrayToList([1, 2, 3]),
      null,
    ],
    [
      l1,
      l2,
      100,
    ],
    [
      l3,
      l4,
      100,
    ],
  ].forEach(([list1, list2, result]) => {
    it(`${ util.inspect(listToArray(list1)) }, ${ util.inspect(listToArray(list2)) }: ${ result }`, () => {
      const interesectionNode = intersect(list1, list2)
      if(result == null) {
        assert.equal(interesectionNode, result)
      } else {
        assert.equal(interesectionNode.val, result)
      }
    })
  })
})
