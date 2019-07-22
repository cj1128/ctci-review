const rotate = matrix => {
  const n = Math.sqrt(matrix.length)
  if(n < 2) return matrix
  const half = Math.floor(n / 2)

  // loop through diagonal
  for(let offset = 0; offset < half; offset++) {
    // loop through x
    for(let i = 0; i < n - (offset * 2) - 1; i++) {
      let x = offset + i
      let y = offset
      let prev = matrix[x * n + y]

      // four sides
      for(let j = 0; j < 4; j++) {
        const nextX = y
        const nextY = n - 1 - x
        const next = matrix[nextX * n + nextY]
        matrix[nextX * n + nextY] = prev
        prev = next
        x = nextX
        y = nextY
      }
    }
  }

  return matrix
}

/*----------  Test  ----------*/
// we use on character to represent a pixel, it doesn't matter in this problem
// because we don't need to modify pixel
describe("1.7", () => {
  [
    [
      [
        "a", "b",
        "c", "d",
      ],
      [
        "c", "a",
        "d", "b",
      ],
    ],
    [
      [
        "a", "b", "c",
        "d", "e", "f",
        "g", "h", "i",
      ],
      [
        "g", "d", "a",
        "h", "e", "b",
        "i", "f", "c",
      ],
    ],
    [
      [
        "a", "b", "c", "d",
        "e", "f", "g", "h",
        "i", "j", "k", "l",
        "m", "n", "o", "p",
      ],
      [
        "m", "i", "e", "a",
        "n", "j", "f", "b",
        "o", "k", "g", "c",
        "p", "l", "h", "d",
      ],
    ],
  ].forEach(([matrix, result]) => {
    it(`${ _.cloneDeep(matrix) }: ${ result }`, () => {
      rotate(matrix)
      assert.deepEqual(matrix, result)
    })
  })
})
