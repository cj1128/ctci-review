const urlify = str => str.replace(/ /g, "%20")

/*----------  Test ----------*/
describe("1.3", () => {
  [
    ["", ""],
    ["abc", "abc"],
    ["abc ", "abc%20"],
    ["abc %20", "abc%20%20"],
  ].forEach(([str, result]) => {
    it(`'${ str }': ${ result }`, () => {
      assert.equal(urlify(str), result)
    })
  })
})
