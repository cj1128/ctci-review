const checkPermutation = (str1, str2) => {
  if(str1.length !== str2.length) return false
  return [...str1].sort().join() === [...str2].sort().join()
}

const checkPermutation2 = (str1, str2) => {
  if(str1.length !== str2.length) return false
  const length = str1.length
  const m = {}
  for(let i = 0; i < length; i++) {
    if(m[str1[i]] == null) {
      m[str1[i]] = 1
    } else {
      m[str1[i]] += 1
    }
  }

  for(let i = 0; i < length; i++) {
    if(m[str2[i]] == null || m[str2[i]] === 0) return false
    m[str2[i]] -= 1
  }

  return true
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
      assert.equal(checkPermutation2(...input), result)
    })
  })
})
