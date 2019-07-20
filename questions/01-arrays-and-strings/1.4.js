const isPalindromePermutation = str => {
  str = str.replace(/\s/g, "").toLowerCase()
  str = [...str].sort().join("")
  const lengthEven = str.length % 2 === 0

  let foundTheExtra = false

  for(let i = 0; i < str.length - 1; i += 2) {
    if(str[i] !== str[i+1]) {
      if(lengthEven) return false

      if(!foundTheExtra) {
        foundTheExtra = true
        i--
      } else {
        return false
      }
    }
  }

  return true
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
