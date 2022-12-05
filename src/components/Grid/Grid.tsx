import { Coordinates, Field } from '@/helpers/Field'
import styled from '@emotion/styled'
import { Cell } from './Cell'

export interface GridProps {
  /**
   * Field data
   */
  children: Field
  /**
   * onClick handler
   * @param coordinates
   */
  onClick: (coordinates: Coordinates) => void
  /**
   * onContextMenu handler
   * @param coordinates
   */
  onContextMenu: (coordinates: Coordinates) => void
}

export const Grid = ({ children, ...rest }: GridProps) => (
  <Wrapper size={children.length}>
    {children.map((row, y) =>
      row.map((cell, x) => (
        <Cell key={`${cell}_${x}_${y}`} coordinates={[x, y]} {...rest}>
          {cell}
        </Cell>
      )),
    )}
  </Wrapper>
)

interface WrapperProps {
  size: number
}

const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: repeat(${({ size }) => size}, auto);
  width: max-content;
  padding: 1vw;
`
