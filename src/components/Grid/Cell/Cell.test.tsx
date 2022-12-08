import { CellState, Coordinates } from '@/helpers/Field'
import { createEvent, fireEvent, render, screen } from '@testing-library/react'
import { Cell, ClosedFrame, isActiveCell } from './Cell'

describe('Cell', () => {
  const coordinates: Coordinates = [1, 1]

  const props = {
    coordinates,
    onClick: jest.fn(),
    onContextMenu: jest.fn(),
  }

  for (let cell = CellState.empty; cell <= CellState.weakFlag; cell++) {
    it('should render cell correctly', () => {
      const { asFragment } = render(<Cell {...props}>{cell}</Cell>)
      expect(asFragment()).toMatchSnapshot()
    })

    it('should render closed frame correctly', () => {
      const { asFragment } = render(<ClosedFrame mouseDown={true} />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('should prevent default context menu for all type of cell', () => {
      render(<Cell {...props}>{cell}</Cell>)

      const cellComponent = screen.getByTestId(`${cell}_${coordinates}`)
      const contextMenuEvent = createEvent.contextMenu(cellComponent)
      fireEvent(cellComponent, contextMenuEvent)

      expect(contextMenuEvent.defaultPrevented).toBe(true)
    })

    it('should call onClick and onContextMenu for active cell', () => {
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
