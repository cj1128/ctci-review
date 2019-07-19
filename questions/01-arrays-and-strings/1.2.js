const checkPermutation = (str1, str2) => {
  if(str1.length !== str2.length) return false
  return [...str1].sort().join() === [...str2].sort().join()
}

/*----------  Test  ----------*/
describe("1.2", () => {
  [
    [["abc", "abcd"], false],
    [["abc", "aaa"], false],
    [["abc", "cba"], true],
    [["", ""], true],
  ].forEach(([input, result]) => {
    it(`'${ input[0] }' and '${ input[1] }': ${ result }`, () => {
      assert.equal(checkPermutation(...input), result)
    })
  })
})
