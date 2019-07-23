// modify in place
const zeroMatrix = matrix => {
  const rows = matrix.length
  const cols = matrix[0].length

  const r = new Array(rows).fill(false)
  const c = new Array(cols).fill(false)

  for(let x = 0; x < rows; x++) {
    for(let y = 0; y < rows; y++) {
      if(matrix[x][y] === 0) {
        r[x] = true
        c[y] = true
      }
    }
  }

  for(let x = 0; x < rows; x++) {
    for(let y = 0; y < cols; y++) {
      if(r[x] === true || c[y] === true) {
        matrix[x][y] = 0
      }
    }
  }
}

/*----------  Test  ----------*/
describe("1.8", () => {
  [
    [
      [
        [1, 2,],
        [3, 0,],
      ],
      [
        [1, 0,],
        [0, 0,],
      ],
    ],
    [
      [
        [0, 2, 3,],
        [4, 5, 6,],
        [7, 8, 0,],
      ],
      [
        [0, 0, 0,],
        [0, 5, 0,],
        [0, 0, 0,],
      ],
    ],
  ].forEach(([matrix, result]) => {
    it(`${ util.inspect(_.cloneDeep(matrix)) }: ${ util.inspect(result) }`, () => {
      zeroMatrix(matrix)
      assert.deepEqual(matrix, result)
    })
  })
})
