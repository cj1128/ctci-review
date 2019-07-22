const compressStr = str => {
  if(str === "") return ""

  const result = []
  let last = str[0]
  let n = 1
  for(let i = 1; i < str.length; i++)  {
    if(str[i] === last) {
      n++
      continue
    }

    result.push(last)
    result.push(n)
    last = str[i]
    n = 1
  }

  result.push(last)
  result.push(n)

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
