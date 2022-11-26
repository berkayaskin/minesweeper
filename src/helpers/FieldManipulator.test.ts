import { CellState, Field } from './Field'
import { getNeighbours, incrementNeighbours, isItemExistInField } from './FieldManipulator'

const { empty, bomb, hidden } = CellState

describe('Field Manipulator', () => {
  describe('getNeighbours', () => {
    it('should return 8 neighbours for [0,0]', () => {
      const neighbours = getNeighbours([0, 0])
      expect(neighbours).toStrictEqual({
        topLeft: [-1, -1],
        top: [-1, 0],
        topRight: [-1, 1],
        left: [0, -1],
        right: [0, 1],
        bottomLeft: [1, -1],
        bottom: [1, 0],
        bottomRight: [1, 1],
      })
    })
    it('should return 8 neighbours for [3,3]', () => {
      const neighbours = getNeighbours([3, 3])
      expect(neighbours).toStrictEqual({
        topLeft: [2, 2],
        top: [2, 3],
        topRight: [2, 4],
        left: [3, 2],
        right: [3, 4],
        bottomLeft: [4, 2],
        bottom: [4, 3],
        bottomRight: [4, 4],
      })
    })
  })

  describe('isItemExistInField', () => {
    const field = [
      [empty, empty, bomb, empty],
      [empty, empty, empty, empty],
      [empty, empty, empty, empty],
      [empty, empty, bomb, empty],
    ]
    it('should return true for item [0,1]', () => {
      const isItemExist = isItemExistInField(field, [0, 1])
      expect(isItemExist).toBe(true)
    })
    it('should return true for item [3,4]', () => {
      const isItemExist = isItemExistInField(field, [2, 3])
      expect(isItemExist).toBe(true)
    })
    it('should return false for [-1,1]', () => {
      const isItemExist = isItemExistInField(field, [-1, 1])
      expect(isItemExist).toBe(false)
    })
  })

  describe('incrementNeighbours', () => {
    it('should increment neighbours of empty cell at [1, 1]', () => {
      const field: Field = [
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty],
      ]

      const newField = incrementNeighbours(field, [1, 1])
      expect(newField).toStrictEqual([
        [1, 1, 1],
        [1, empty, 1],
        [1, 1, 1],
      ])
    })

    it('should increment neighbours of bomb cell at [1, 1]', () => {
      const field: Field = [
        [empty, empty, bomb],
        [empty, bomb, empty],
        [empty, empty, empty],
      ]

      const newField = incrementNeighbours(field, [1, 1])
      expect(newField).toStrictEqual([
        [1, 1, bomb],
        [1, bomb, 1],
        [1, 1, 1],
      ])
    })

    it('should increment neighbours of bomb cell at [0, 0]', () => {
      const field: Field = [
        [bomb, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty],
      ]

      const newField = incrementNeighbours(field, [0, 0])
      expect(newField).toStrictEqual([
        [bomb, 1, 0],
        [1, 1, 0],
        [0, 0, 0],
      ])
    })

    it('should increment neighbours of bomb cell at [2, 2]', () => {
      const field: Field = [
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, bomb],
      ]

      const newField = incrementNeighbours(field, [2, 2])
      expect(newField).toStrictEqual([
        [0, 0, 0],
        [0, 1, 1],
        [0, 1, bomb],
      ])
    })

    it('should increment neighbours of bomb cell at [0, 2]', () => {
      const field: Field = [
        [empty, bomb, empty],
        [empty, hidden, empty],
        [empty, empty, empty],
      ]
      const newField = incrementNeighbours(field, [0, 2])
      expect(newField).toStrictEqual([
        [0, bomb, 0],
        [0, 11, 1],
        [0, 0, 0],
      ])
    })
  })
})
