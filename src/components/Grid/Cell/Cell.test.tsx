import { CellState, Coordinates } from '@/helpers/Field'
import { createEvent, fireEvent, render, screen } from '@testing-library/react'
import { Cell, isActiveCell } from './Cell'

describe('Cell', () => {
  const coordinates: Coordinates = [1, 1]

  for (let cell = CellState.empty; cell <= CellState.weakFlag; cell++) {
    it('should prevent default context menu for all type of cell', () => {
      const props = {
        coordinates,
        onClick: jest.fn(),
        onContextMenu: jest.fn(),
      }

      render(<Cell {...props}>{cell}</Cell>)

      const cellComponent = screen.getByTestId(`${cell}_${coordinates}`)
      const contextMenuEvent = createEvent.contextMenu(cellComponent)
      fireEvent(cellComponent, contextMenuEvent)

      expect(contextMenuEvent.defaultPrevented).toBe(true)
    })

    it('should call onClick and onContextMenu for active cell', () => {
      const props = {
        coordinates,
        onClick: jest.fn(),
        onContextMenu: jest.fn(),
      }

      render(<Cell {...props}>{cell}</Cell>)

      const cellComponent = screen.getByTestId(`${cell}_${coordinates}`)
      fireEvent.click(cellComponent)
      fireEvent.contextMenu(cellComponent)

      if (isActiveCell(cell)) {
        expect(props.onClick).toBeCalledWith(coordinates)
        expect(props.onContextMenu).toBeCalledWith(coordinates)
      } else {
        expect(props.onClick).not.toBeCalled()
        expect(props.onContextMenu).not.toBeCalled()
      }
    })
  }
})
