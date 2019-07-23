const compressStr = str => {
  if(str === "") return ""

  const result = []
  let n = 0
  for(let i = 0; i < str.length; i++)  {
    n++

    if(str[i] !== str[i + 1] || i === str.length - 1) {
      result.push(str[i])
      result.push(n)
      n = 0
    }
  }

  const resultStr = result.join("")
  return resultStr.length < str.length ? resultStr : str
}

/*----------  Test  ----------*/

describe("1.6", () => {
  [
    ["aabcccccaaa", "a2b1c5a3"],
    ["", ""],
    ["a", "a"],
    ["abc", "abc"],
    ["abb", "abb"],
    ["abbbb", "a1b4"],
    ["abbcccccd", "a1b2c5d1"],
  ].forEach(([str, result]) => {
    it(`'${ str }': '${ result }'`, () => {
      assert.equal(compressStr(str), result)
    })
  })
})
