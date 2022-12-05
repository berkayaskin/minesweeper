import { incrementNeighbours } from './FieldManipulator'

export type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type Field = Cell[][]
export type Coordinates = [number, number]

export const CellState: Record<string, Cell> = {
  empty: 0,
  bomb: 9,
  hidden: 10,
  flag: 11,
  weakFlag: 12,
}

export const generateFieldWithState = (size: number, state: Cell = CellState.empty): Field => {
  return new Array(size).fill(null).map(() => new Array(size).fill(state))
}

export const generateFieldWithBombs = (size: number, probability: number): Field => {
  if (probability < 0 || probability > 1) {
    throw new Error('Probability must be between 0 and 1')
  }

  let allCells = size * size
  let cellsWithBombs = allCells * probability
  const field = generateFieldWithState(size)

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      if (cellsWithBombs === 0) {
        return field
      }
      if (cellsWithBombs / allCells > Math.random()) {
        field[x][y] = CellState.bomb
        incrementNeighbours(field, [x, y])
        cellsWithBombs--
      }

      allCells--
    }
  }
  return field
}
