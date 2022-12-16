import { Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { ChangeEvent } from 'react'
import { Counter as CounterComponent } from './Counter'
import { Level as LevelComponent } from './Level'
import { Reset as ResetComponent } from './Reset'

export interface ScoreboardProps {
  /**
   * Timer
   */
  time: string
  /**
   * Possible game difficulty levels
   * @example ['Beginner', 'Intermediate', 'Expert']
   */
  levels: string[]
  /**
   * Action handler when the GameReset button is clicked
   */
  onReset: () => void

  /**
   * Action handler when select new lvl
   */
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void

  /**
   * Bombs in the field
   */
  bombs: string
}

export const Scoreboard = ({ time, levels, bombs, onReset, onChange }: ScoreboardProps) => {
  return (
    <Wrapper>
      <CounterComponent>{time}</CounterComponent>
      <Flex>
        <LevelComponent onChange={onChange}>{levels}</LevelComponent>
        <ResetComponent onReset={onReset} />
      </Flex>
      <CounterComponent>{bombs}</CounterComponent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5vw 1vw 0.25vw 1vw;
`
