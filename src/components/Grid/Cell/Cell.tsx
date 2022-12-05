import { Cell as CellType, CellState, Coordinates } from '@/helpers/Field'
import styled from '@emotion/styled'

export interface CellProps {
  /**
   * Cell status based on the CellType
   */
  children: CellType
  /**
   * Cell coordinates
   * @default { x: 0, y: 0 }
   * @example { x: 1, y: 2 }
   */
  coordinates: Coordinates
  /**
   * onClick handler
   */
  onClick: (coordinates: Coordinates) => void
  /**
   * onContextMenu handler
   */
  onContextMenu: (coordinates: Coordinates) => void
}

export const isActiveCell = (cell: CellType): boolean =>
  [CellState.hidden, CellState.flag, CellState.weakFlag].includes(cell)

export const Cell = ({ children, coordinates, ...rest }: CellProps) => {
  const isActive = isActiveCell(children)

  const onClick = () => {
    if (isActive) {
      rest.onClick(coordinates)
    }
  }

  const onContextMenu = (elem: React.MouseEvent<HTMLElement>) => {
    elem.preventDefault()

    if (isActive) {
      rest.onContextMenu(coordinates)
    }
  }

  const props = {
    onClick,
    onContextMenu,
    'data-testid': `${children}_${coordinates}`,
  }

  return <ComponentsMap {...props}>{children}</ComponentsMap>
}

interface ComponentsMapProps {
  children: CellType
  onClick: (elem: React.MouseEvent<HTMLElement>) => void
  onContextMenu: (elem: React.MouseEvent<HTMLElement>) => void
  'data-testid'?: string
}

const ComponentsMap = ({ children, ...rest }: ComponentsMapProps) => {
  switch (children) {
    case CellState.empty:
      return <RevealedFrame {...rest} />
    case CellState.bomb:
      return (
        <BombFrame {...rest}>
          <Bomb />
        </BombFrame>
      )
    case CellState.hidden:
      return <ClosedFrame {...rest} />
    case CellState.flag:
      return (
        <ClosedFrame {...rest}>
          <Flag />
        </ClosedFrame>
      )
    case CellState.weakFlag:
      return (
        <ClosedFrame {...rest}>
          <WeakFlag />
        </ClosedFrame>
      )
    default:
      return <RevealedFrame {...rest}>{children}</RevealedFrame>
  }
}

const ClosedFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.8vw;
  height: 1.8vw;
  cursor: pointer;
  user-select: none;
  background-color: #d1d1d1;
  border: 0.4vh solid transparent;
  border-color: #fff #9e9e9e #9e9e9e #fff;
  &:hover {
    filter: brightness(1.1);
  }
`
const transparent = 'rgba(0, 0, 0, 0)'
const colors: { [key in CellType]: string } = {
  0: '#000',
  1: '#2a48ec',
  2: '#2bb13d',
  3: '#ec6561',
  4: '#233db7',
  5: '#a6070f',
  6: '#e400af',
  7: '#906a02',
  8: '#fa0707',
  9: transparent,
  10: transparent,
  11: transparent,
  12: transparent,
}

const RevealedFrame = styled(ClosedFrame)`
  border-color: #dddddd;
  cursor: default;
  color: ${({ children }) => colors[children as CellType] ?? transparent};
  &:hover {
    filter: brightness(1);
  }
`
const Bomb = styled.div`
  width: 1vw;
  height: 1vw;
  background-color: #333;
  border-radius: 50%;
`

const BombFrame = styled(RevealedFrame)`
  background-color: #ec433c;
`

const Flag = styled.div`
  width: 0;
  height: 0;
  border-left: 0.5vw solid #ec433c;
  border-top: 0.5vw solid transparent;
  border-bottom: 0.5vw solid transparent;
`

const WeakFlag = styled(Flag)`
  border-left: 0.5vw solid #f19996;
`