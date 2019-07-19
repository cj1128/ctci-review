// return a Set contains permutations of characters of str
const getPermutations = str => {
  const result = new Set()
  if(str === "") return result

  for(let i = 0; i < str.length; i++) {
    const rest = str.slice(0, i) + str.slice(i + 1)

    const subResult = getPermutations(rest)

    if(subResult.size === 0) {
      result.add(str[i])
    } else {
      subResult.forEach(s => {
        result.add(str[i] + s)
      })
    }
  }

  return result
}

/*----------  Test  ----------*/
describe("permutation", () => {
  [
    ["", new Set()],
    [
      "ab",
      new Set([
        "ab",
        "ba",
      ]),
    ],
    [
      "abc",
      new Set([
        "abc",
        "acb",
        "bac",
        "bca",
        "cab",
        "cba",
      ]),
    ],
    [
      "abcd",
      new Set([
        "abcd",
        "abdc",
        "acbd",
        "acdb",
        "adbc",
        "adcb",
        "bacd",
        "badc",
        "bcad",
        "bcda",
        "bdac",
        "bdca",
        "cabd",
        "cadb",
        "cbad",
        "cbda",
        "cdab",
        "cdba",
        "dabc",
        "dacb",
        "dbac",
        "dbca",
        "dcab",
        "dcba",
      ]),
    ],
  ].forEach(([str, result]) => {
    it(`'${ str }'`, () => {
      assert(getPermutations(str), result)
    })
  })
})
