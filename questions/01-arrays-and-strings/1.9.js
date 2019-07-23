// check if str2 is a rotation of str1
const isRotation = (str1, str2) => {
  if(str1.length !== str2.length) return false
  return isSubstring(str1 + str1, str2)
}

// check if str1 is a substring of str2
const isSubstring = (str1, str2) => {
  return str1.includes(str2)
}

/*----------  Test  ----------*/
describe("1.9", () => {
  [
    ["", "", true],
    ["abc", "ab", false],
    ["abcd", "cdab", true],
    ["abcd", "bacd", false],
  ].forEach(([str1, str2, result]) => {
    it(`'${ str1 }', '${ str2 }': ${ result }`, () => {
      assert.equal(isRotation(str1, str2), result)
    })
  })
})
