const isPalindrome = list => {
  let fast = list
  let slow = list
  const stack = []

  while(fast != null && fast.next != null) {
    stack.push(slow.val)
    slow = slow.next
    fast = fast.next.next
  }

  // list have odd length
  if(fast != null) {
    slow = slow.next
  }

  while(slow != null) {
    if(slow.val !== stack.pop()) return false
    slow = slow.next
  }

  return true
}

/*----------  Test  ----------*/
const { arrayToList } = require("./util")

describe("2.6", () => {
  [
    [
      [],
      true,
    ],
    [
      ["a"],
      true,
    ],
    [
      ["a", "b"],
      false,
    ],
    [
      ["a", "b", "c"],
      false,
    ],
    [
      ["a", "b", "a"],
      true,
    ],
    [
      ["a", "b", "b", "a"],
      true,
    ],
  ].forEach(([input, result]) => {
    it(`${ util.inspect(input) }: ${ result }`, () => {
      assert.equal(isPalindrome(arrayToList(input)), result)
    })
  })
})
