import { CellState, Coordinates, Field } from './Field'

export const getNeighbours = ([x, y]: Coordinates): Record<string, [number, number]> => {
  return {
    topLeft: [x - 1, y - 1],
    top: [x - 1, y],
    topRight: [x - 1, y + 1],
    left: [x, y - 1],
    right: [x, y + 1],
    bottomLeft: [x + 1, y - 1],
    bottom: [x + 1, y],
    bottomRight: [x + 1, y + 1],
  }
}

export const isItemExistInField = ({ length }: Field, [x, y]: Coordinates): boolean => {
  return x >= 0 && x < length && y >= 0 && y < length
}

export const incrementNeighbours = (field: Field, coordinates: Coordinates): Field => {
  const neighbours = getNeighbours(coordinates)
  const newField = [...field]

  Object.values(neighbours).forEach(([x, y]) => {
    if (isItemExistInField(field, [x, y])) {
      if (newField[x][y] !== CellState.bomb) {
        newField[x][y]++
      }
    }
  })

  return newField
}
