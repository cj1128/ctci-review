// make sure str1.length <= str2.length
const isOneAway = (str1, str2) => {
  const n1 = str1.length
  const n2 = str2.length
  if(n1 > n2) return isOneAway(str2, str1)

  if(n2 - n1 > 1) return false

  if(n1 === n2) {
    let diff = 0

    for(let i = 0; i < n1; i++) {
      if(str1[i] !== str2[i]) {
        diff++
        if(diff > 1) return false
      }
    }

    return true
  }

  for(let i = 0, j = 0; i < n1.length, j < n2.length; i++, j++) {
    let diff = 0
    if(str1[i] !== str2[j]) {
      diff++
      if(diff > 1) return false
      i--
    }
  }

  return true
}

/*----------  Test  ----------*/
describe("1.5", () => {
  [
    ["pale", "ple", true],
    ["pales", "pale", true],
    ["pale", "bale", true],
    ["pale", "bake", false],
    ["abdc", "abc", true],
    ["", "a", true],
  ].forEach(([str1, str2, result]) => {
    it(`'${ str1 }' and '${ str2 }': ${ result }`, () => {
      assert.equal(isOneAway(str1, str2), result)
    })
  })
})
