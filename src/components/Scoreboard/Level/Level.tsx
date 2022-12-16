import styled from '@emotion/styled'
import { ChangeEvent } from 'react'

export interface LevelProps {
  /**
   * Array of possible game levels
   */
  children: string[]
  /**
   * Select new lvl handler
   */
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const Level = ({ children, onChange }: LevelProps) => (
  <Select onChange={onChange}>
    {children.map((item: string) => (
      <Option key={item} value={item}>
        {item}
      </Option>
    ))}
  </Select>
)

const Select = styled.select`
  margin: 0;
  height: 100%;
  border-radius: 0;
  border: 0.15vw solid;
  border-color: white #9e9e9e #9e9e9e white;
  background-color: #d1d1d1;
`

const Option = styled.option`
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0 0.2vw 0.2vw;
`
