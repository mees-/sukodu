import test from "ava"
import Sudoku from "./index.js"

test("bruteForce returns correct answer", t => {
  const mySudoku = new Sudoku([
    [6, 0, 0, 0, 0, 0, 7, 0, 0],
    [0, 4, 0, 2, 9, 8, 0, 0, 0],
    [0, 0, 0, 6, 4, 0, 0, 8, 0],
    [0, 0, 0, 8, 0, 0, 2, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0, 1],
    [0, 2, 0, 1, 3, 0, 0, 0, 6],
    [0, 0, 5, 0, 0, 0, 0, 0, 2],
    [7, 0, 0, 5, 0, 0, 0, 0, 0],
    [0, 0, 9, 0, 2, 0, 0, 1, 0],
  ])
  const moves = mySudoku.bruteForceSolution()

  t.deepEqual(moves, [
    [
      {
        row: 0,
        column: 1,
      },
      9,
    ],
    [
      {
        row: 0,
        column: 2,
      },
      8,
    ],
    [
      {
        row: 0,
        column: 3,
      },
      3,
    ],
    [
      {
        row: 0,
        column: 4,
      },
      5,
    ],
    [
      {
        row: 0,
        column: 5,
      },
      1,
    ],
    [
      {
        row: 0,
        column: 7,
      },
      2,
    ],
    [
      {
        row: 0,
        column: 8,
      },
      4,
    ],
    [
      {
        row: 1,
        column: 0,
      },
      5,
    ],
    [
      {
        row: 1,
        column: 2,
      },
      7,
    ],
    [
      {
        row: 1,
        column: 6,
      },
      1,
    ],
    [
      {
        row: 1,
        column: 7,
      },
      6,
    ],
    [
      {
        row: 1,
        column: 8,
      },
      3,
    ],
    [
      {
        row: 2,
        column: 0,
      },
      2,
    ],
    [
      {
        row: 2,
        column: 1,
      },
      3,
    ],
    [
      {
        row: 2,
        column: 2,
      },
      1,
    ],
    [
      {
        row: 2,
        column: 5,
      },
      7,
    ],
    [
      {
        row: 2,
        column: 6,
      },
      9,
    ],
    [
      {
        row: 2,
        column: 8,
      },
      5,
    ],
    [
      {
        row: 3,
        column: 0,
      },
      1,
    ],
    [
      {
        row: 3,
        column: 1,
      },
      5,
    ],
    [
      {
        row: 3,
        column: 2,
      },
      6,
    ],
    [
      {
        row: 3,
        column: 4,
      },
      7,
    ],
    [
      {
        row: 3,
        column: 5,
      },
      4,
    ],
    [
      {
        row: 3,
        column: 7,
      },
      3,
    ],
    [
      {
        row: 3,
        column: 8,
      },
      9,
    ],
    [
      {
        row: 4,
        column: 0,
      },
      8,
    ],
    [
      {
        row: 4,
        column: 1,
      },
      7,
    ],
    [
      {
        row: 4,
        column: 3,
      },
      9,
    ],
    [
      {
        row: 4,
        column: 4,
      },
      6,
    ],
    [
      {
        row: 4,
        column: 5,
      },
      2,
    ],
    [
      {
        row: 4,
        column: 6,
      },
      4,
    ],
    [
      {
        row: 4,
        column: 7,
      },
      5,
    ],
    [
      {
        row: 5,
        column: 0,
      },
      9,
    ],
    [
      {
        row: 5,
        column: 2,
      },
      4,
    ],
    [
      {
        row: 5,
        column: 5,
      },
      5,
    ],
    [
      {
        row: 5,
        column: 6,
      },
      8,
    ],
    [
      {
        row: 5,
        column: 7,
      },
      7,
    ],
    [
      {
        row: 6,
        column: 0,
      },
      4,
    ],
    [
      {
        row: 6,
        column: 1,
      },
      1,
    ],
    [
      {
        row: 6,
        column: 3,
      },
      7,
    ],
    [
      {
        row: 6,
        column: 4,
      },
      8,
    ],
    [
      {
        row: 6,
        column: 5,
      },
      3,
    ],
    [
      {
        row: 6,
        column: 6,
      },
      6,
    ],
    [
      {
        row: 6,
        column: 7,
      },
      9,
    ],
    [
      {
        row: 7,
        column: 1,
      },
      6,
    ],
    [
      {
        row: 7,
        column: 2,
      },
      2,
    ],
    [
      {
        row: 7,
        column: 4,
      },
      1,
    ],
    [
      {
        row: 7,
        column: 5,
      },
      9,
    ],
    [
      {
        row: 7,
        column: 6,
      },
      3,
    ],
    [
      {
        row: 7,
        column: 7,
      },
      4,
    ],
    [
      {
        row: 7,
        column: 8,
      },
      8,
    ],
    [
      {
        row: 8,
        column: 0,
      },
      3,
    ],
    [
      {
        row: 8,
        column: 1,
      },
      8,
    ],
    [
      {
        row: 8,
        column: 3,
      },
      4,
    ],
    [
      {
        row: 8,
        column: 5,
      },
      6,
    ],
    [
      {
        row: 8,
        column: 6,
      },
      5,
    ],
    [
      {
        row: 8,
        column: 8,
      },
      7,
    ],
  ])

  t.deepEqual(mySudoku.rows, [
    [6, 9, 8, 3, 5, 1, 7, 2, 4],
    [5, 4, 7, 2, 9, 8, 1, 6, 3],
    [2, 3, 1, 6, 4, 7, 9, 8, 5],
    [1, 5, 6, 8, 7, 4, 2, 3, 9],
    [8, 7, 3, 9, 6, 2, 4, 5, 1],
    [9, 2, 4, 1, 3, 5, 8, 7, 6],
    [4, 1, 5, 7, 8, 3, 6, 9, 2],
    [7, 6, 2, 5, 1, 9, 3, 4, 8],
    [3, 8, 9, 4, 2, 6, 5, 1, 7],
  ])
})
