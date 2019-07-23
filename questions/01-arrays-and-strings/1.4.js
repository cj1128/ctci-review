const isPalindromePermutation = str => {
  str = str.replace(/\s/g, "").toLowerCase()
  const m = {}

  for(let i = 0; i < str.length; i++) {
    const c = str[i]
    if(m[c] == null) {
      m[c] = 1
    } else {
      m[c] += 1
    }
  }

  let oddCount = 0

  for(let key in m) {
    if(m[key] % 2 !== 0) {
      oddCount += 1
    }
  }

  return oddCount <= 1
}

/*----------  Test  ----------*/
describe("1.4", () => {
  [
    ["", true],
    ["abcd", false],
    ["aabb", true],
    ["xaabb", true],
    ["abbcc", true],
    ["Tact Coa", true],
  ].forEach(([str, result]) => {
    it(`'${ str }': ${ result }`, () => {
      assert.equal(isPalindromePermutation(str), result)
    })
  })
})
