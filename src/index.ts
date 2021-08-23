type SudokuNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type SudokuCellValue = null | SudokuNumber

type SudokuSet = [
  SudokuCellValue,
  SudokuCellValue,
  SudokuCellValue,
  SudokuCellValue,
  SudokuCellValue,
  SudokuCellValue,
  SudokuCellValue,
  SudokuCellValue,
  SudokuCellValue,
]

type SudokuBoard = [SudokuSet, SudokuSet, SudokuSet, SudokuSet, SudokuSet, SudokuSet, SudokuSet, SudokuSet, SudokuSet]

type SudokuIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

type SudokuPosition = { row: SudokuIndex; column: SudokuIndex }
// Move in sudoku
type SudokuMove = [SudokuPosition, SudokuNumber]

export default class Sudoku {
  // board stored as rows
  private _board: SudokuBoard
  moves: SudokuMove[] = []

  constructor(board?: SudokuBoard) {
    if (board != null) {
      this._board = board
    } else {
      this._board = [
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
      ]
    }
  }

  // TODO: optimise getting one row/column/box

  // Hard-coded deep-clone
  get rows(): SudokuBoard {
    return [
      [
        this._board[0][0],
        this._board[0][1],
        this._board[0][2],
        this._board[0][3],
        this._board[0][4],
        this._board[0][5],
        this._board[0][6],
        this._board[0][7],
        this._board[0][8],
      ],
      [
        this._board[1][0],
        this._board[1][1],
        this._board[1][2],
        this._board[1][3],
        this._board[1][4],
        this._board[1][5],
        this._board[1][6],
        this._board[1][7],
        this._board[1][8],
      ],
      [
        this._board[2][0],
        this._board[2][1],
        this._board[2][2],
        this._board[2][3],
        this._board[2][4],
        this._board[2][5],
        this._board[2][6],
        this._board[2][7],
        this._board[2][8],
      ],
      [
        this._board[3][0],
        this._board[3][1],
        this._board[3][2],
        this._board[3][3],
        this._board[3][4],
        this._board[3][5],
        this._board[3][6],
        this._board[3][7],
        this._board[3][8],
      ],
      [
        this._board[4][0],
        this._board[4][1],
        this._board[4][2],
        this._board[4][3],
        this._board[4][4],
        this._board[4][5],
        this._board[4][6],
        this._board[4][7],
        this._board[4][8],
      ],
      [
        this._board[5][0],
        this._board[5][1],
        this._board[5][2],
        this._board[5][3],
        this._board[5][4],
        this._board[5][5],
        this._board[5][6],
        this._board[5][7],
        this._board[5][8],
      ],
      [
        this._board[6][0],
        this._board[6][1],
        this._board[6][2],
        this._board[6][3],
        this._board[6][4],
        this._board[6][5],
        this._board[6][6],
        this._board[6][7],
        this._board[6][8],
      ],
      [
        this._board[7][0],
        this._board[7][1],
        this._board[7][2],
        this._board[7][3],
        this._board[7][4],
        this._board[7][5],
        this._board[7][6],
        this._board[7][7],
        this._board[7][8],
      ],
      [
        this._board[8][0],
        this._board[8][1],
        this._board[8][2],
        this._board[8][3],
        this._board[8][4],
        this._board[8][5],
        this._board[8][6],
        this._board[8][7],
        this._board[8][8],
      ],
    ]
  }

  // hard-coded transposed deep-clone
  get columns(): SudokuBoard {
    return [
      [
        this._board[0][0],
        this._board[1][0],
        this._board[2][0],
        this._board[3][0],
        this._board[4][0],
        this._board[5][0],
        this._board[6][0],
        this._board[7][0],
        this._board[8][0],
      ],
      [
        this._board[0][1],
        this._board[1][1],
        this._board[2][1],
        this._board[3][1],
        this._board[4][1],
        this._board[5][1],
        this._board[6][1],
        this._board[7][1],
        this._board[8][1],
      ],
      [
        this._board[0][2],
        this._board[1][2],
        this._board[2][2],
        this._board[3][2],
        this._board[4][2],
        this._board[5][2],
        this._board[6][2],
        this._board[7][2],
        this._board[8][2],
      ],
      [
        this._board[0][3],
        this._board[1][3],
        this._board[2][3],
        this._board[3][3],
        this._board[4][3],
        this._board[5][3],
        this._board[6][3],
        this._board[7][3],
        this._board[8][3],
      ],
      [
        this._board[0][4],
        this._board[1][4],
        this._board[2][4],
        this._board[3][4],
        this._board[4][4],
        this._board[5][4],
        this._board[6][4],
        this._board[7][4],
        this._board[8][4],
      ],
      [
        this._board[0][5],
        this._board[1][5],
        this._board[2][5],
        this._board[3][5],
        this._board[4][5],
        this._board[5][5],
        this._board[6][5],
        this._board[7][5],
        this._board[8][5],
      ],
      [
        this._board[0][6],
        this._board[1][6],
        this._board[2][6],
        this._board[3][6],
        this._board[4][6],
        this._board[5][6],
        this._board[6][6],
        this._board[7][6],
        this._board[8][6],
      ],
      [
        this._board[0][7],
        this._board[1][7],
        this._board[2][7],
        this._board[3][7],
        this._board[4][7],
        this._board[5][7],
        this._board[6][7],
        this._board[7][7],
        this._board[8][7],
      ],
      [
        this._board[0][8],
        this._board[1][8],
        this._board[2][8],
        this._board[3][8],
        this._board[4][8],
        this._board[5][8],
        this._board[6][8],
        this._board[7][8],
        this._board[8][8],
      ],
    ]
  }

  // hard-coded deep-clone
  get boxes(): SudokuBoard {
    return [
      [
        // 1
        this._board[0][0],
        this._board[0][1],
        this._board[0][2],
        this._board[1][0],
        this._board[1][1],
        this._board[1][2],
        this._board[2][0],
        this._board[2][1],
        this._board[2][2],
      ],
      [
        // 2
        this._board[0][3],
        this._board[0][4],
        this._board[0][5],
        this._board[1][3],
        this._board[1][4],
        this._board[1][5],
        this._board[2][3],
        this._board[2][4],
        this._board[2][5],
      ],
      [
        // 3
        this._board[0][6],
        this._board[0][7],
        this._board[0][8],
        this._board[1][6],
        this._board[1][7],
        this._board[1][8],
        this._board[2][6],
        this._board[2][7],
        this._board[2][8],
      ],
      [
        // 4
        this._board[3][0],
        this._board[3][1],
        this._board[3][2],
        this._board[4][0],
        this._board[4][1],
        this._board[4][2],
        this._board[5][0],
        this._board[5][1],
        this._board[5][2],
      ],
      [
        // 5
        this._board[3][3],
        this._board[3][4],
        this._board[3][5],
        this._board[4][3],
        this._board[4][4],
        this._board[4][5],
        this._board[5][3],
        this._board[5][4],
        this._board[5][5],
      ],
      [
        // 6
        this._board[3][6],
        this._board[3][7],
        this._board[3][8],
        this._board[4][6],
        this._board[4][7],
        this._board[4][8],
        this._board[5][6],
        this._board[5][7],
        this._board[5][8],
      ],
      [
        // 7
        this._board[6][0],
        this._board[6][1],
        this._board[6][2],
        this._board[7][0],
        this._board[7][1],
        this._board[7][2],
        this._board[8][0],
        this._board[8][1],
        this._board[8][2],
      ],
      [
        // 8
        this._board[6][3],
        this._board[6][4],
        this._board[6][5],
        this._board[7][3],
        this._board[7][4],
        this._board[7][5],
        this._board[8][3],
        this._board[8][4],
        this._board[8][5],
      ],
      [
        // 9
        this._board[6][6],
        this._board[6][7],
        this._board[6][8],
        this._board[7][6],
        this._board[7][7],
        this._board[7][8],
        this._board[8][6],
        this._board[8][7],
        this._board[8][8],
      ],
    ]
  }

  get cellsWithPosition(): [SudokuPosition, SudokuCellValue][] {
    return this.rows
      .map<[SudokuPosition, SudokuCellValue][]>((row, rowIndex) =>
        row.map((cell, columnIndex) => [{ row: rowIndex as SudokuIndex, column: columnIndex as SudokuIndex }, cell]),
      )
      .flat()
  }

  private static hasDuplicateNumber(set: SudokuSet, optionalNewNumber?: SudokuNumber) {
    const found = new Set<SudokuNumber>()
    if (optionalNewNumber != null) {
      found.add(optionalNewNumber)
    }
    for (const num of set) {
      if (num != null) {
        if (found.has(num)) {
          return false
        } else {
          found.add(num)
        }
      }
    }
    return true
  }
  isValid() {
    return (
      [...this.rows, ...this.columns, ...this.boxes].map(set => Sudoku.hasDuplicateNumber(set)).includes(false) ===
      false
    )
  }

  static determineBoxIndex({ row, column }: SudokuPosition) {
    if (row < 3) {
      if (column < 3) {
        return 0
      } else if (column < 6) {
        return 1
      } else {
        return 2
      }
    } else if (row < 6) {
      if (column < 3) {
        return 3
      } else if (column < 6) {
        return 4
      } else {
        return 5
      }
    } else {
      if (column < 3) {
        return 6
      } else if (column < 6) {
        return 7
      } else {
        return 8
      }
    }
  }
  moveIsValid([{ row, column }, number]: SudokuMove) {
    return (
      [this.rows[column], this.columns[row], this.boxes[Sudoku.determineBoxIndex({ row, column })]]
        .map(set => Sudoku.hasDuplicateNumber(set, number))
        .includes(false) === false
    )
  }

  performMove([{ row, column }, number]: SudokuMove) {
    this._board[row][column] = number
    this.moves.push([{ row, column }, number])
  }
  reverseLastMove() {
    const lastMove = this.moves.pop()
    if (lastMove != null) {
      const [{ row, column }] = lastMove
      this._board[row][column] = null
    } else {
      throw new Error("No moves recorded")
    }
  }

  findNextFreeCell(): SudokuPosition | null {
    for (const [position, value] of this.cellsWithPosition) {
      if (value == null) {
        return position
      }
    }
    return null
  }

  recursiveTryMoves(): boolean {
    const cellToTry = this.findNextFreeCell()
    if (cellToTry != null) {
      for (let i = 1; i <= 9; i++) {
        const move: SudokuMove = [cellToTry, i as SudokuNumber]
        if (this.moveIsValid(move)) {
          this.performMove(move)
          const foundSolution = this.recursiveTryMoves()
          if (foundSolution) {
            return true
          }
        }
      }
      return false
    } else {
      // this is the recursion end condition
      return true
    }
  }
  bruteForceSolution() {
    this.recursiveTryMoves()
    return this.moves
  }
}
