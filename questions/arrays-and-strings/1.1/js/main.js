// with a Set
// O(N)
const isUnique = str => {
  const s = new Set()

  for(const chr of str) {
    if(s.has(chr)) return false
      s.add(chr)
  }

  return true
}

// without additional data structures
// O(NLogN)
const isUnique2 = str => {
  const s = [...str].sort()

  for(let i = 0; i < s.length; i++) {
    if(s[i] === s[i+1]) return false
  }

  return true
}

/*----------  Test  ----------*/
const assert = require("assert")

const m = [
  ["", true],
  ["abcd", true],
  ["abcda", false],
]

describe("1.1", () => {
  it("with a Set", () => {
    m.forEach(([str, expected]) => {
      assert.equal(isUnique(str), expected)
    })
  })

  it("without additional data structures", () => {
    m.forEach(([str, expected]) => {
      assert.equal(isUnique2(str), expected)
    })
  })
})
