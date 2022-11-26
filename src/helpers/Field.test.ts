import { CellState, generateFieldWithBombs, generateFieldWithState } from './Field'

const { empty, bomb, hidden } = CellState

describe('Field Generator', () => {
  describe('generateFieldWithState', () => {
    it('should return 2x2 field with empty cells', () => {
      const field = generateFieldWithState(2)
      expect(field).toStrictEqual([
        [empty, empty],
        [empty, empty],
      ])
    })
    it('should return 3x3 field with empty cells', () => {
      const field = generateFieldWithState(3)
      expect(field).toStrictEqual([
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty],
      ])
    })

    it('should return 4x4 field with hidden cells', () => {
      const field = generateFieldWithState(4, hidden)
      expect(field).toStrictEqual([
        [hidden, hidden, hidden, hidden],
        [hidden, hidden, hidden, hidden],
        [hidden, hidden, hidden, hidden],
        [hidden, hidden, hidden, hidden],
      ])
    })
  })

  describe('generateFieldWithBombs', () => {
    const filteredCellsWithBomb = (flatField: number[]): number[] =>
      flatField.filter((cell) => cell === bomb)

    const filteredCellsWithoutBomb = (flatField: number[]): number[] =>
      flatField.filter((cell) => cell !== bomb)

    it('should return error if probability is not between 0 and 1', () => {
      const errorText = 'Probability must be between 0 and 1'
      expect(() => generateFieldWithBombs(1, -1)).toThrow(errorText)
      expect(() => generateFieldWithBombs(1, 2)).toThrow(errorText)
    })

    it('should return minimum possible field without bombs', () => {
      const field = generateFieldWithBombs(1, 0)
      expect(field).toStrictEqual([[empty]])
    })

    it('should return minimum possible field with bombs', () => {
      const field = generateFieldWithBombs(1, 1)
      expect(field).toStrictEqual([[bomb]])
    })

    it('should return 2x2 field with bombs', () => {
      const field = generateFieldWithBombs(2, 1)
      expect(field).toStrictEqual([
        [bomb, bomb],
        [bomb, bomb],
      ])
    })

    it('should return 4x4 field with 50% possibility of bomb', () => {
      const field = generateFieldWithBombs(4, 0.5)
      const flatField = field.flat()

      const cellsWithBombs = filteredCellsWithBomb(flatField)
      const cellsWithoutBombs = filteredCellsWithoutBomb(flatField)

      expect(cellsWithBombs).toHaveLength(8)
      expect(cellsWithoutBombs).toHaveLength(8)
    })

    it('should return 4x4 field with 25% possibility of bomb', () => {
      const field = generateFieldWithBombs(4, 0.25)
      const flatField = field.flat()

      const cellsWithBombs = filteredCellsWithBomb(flatField)
      const cellsWithoutBombs = filteredCellsWithoutBomb(flatField)

      expect(cellsWithBombs).toHaveLength(4)
      expect(cellsWithoutBombs).toHaveLength(12)
    })

    it('should simulate real game field size = 10x10 with 25% mined cells(25 mines)', () => {
      const field = generateFieldWithBombs(10, 0.25)
      const flatField = field.flat()

      const cellsWithBombs = filteredCellsWithBomb(flatField)
      const cellsWithoutBombs = filteredCellsWithoutBomb(flatField)

      expect(cellsWithBombs).toHaveLength(25)
      expect(cellsWithoutBombs).toHaveLength(75)
    })
  })
})
