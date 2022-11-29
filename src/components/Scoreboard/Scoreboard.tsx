import styled from '@emotion/styled'
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
   * Bombs in the field
   */
  bombs: string
}

export const Scoreboard = ({ time, levels, bombs, onReset }: ScoreboardProps) => {
  return (
    <Wrapper>
      <CounterComponent>{time}</CounterComponent>
      <LevelComponent>{levels}</LevelComponent>
      <ResetComponent onReset={onReset} />
      <CounterComponent>{bombs}</CounterComponent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: max-content;
  padding-bottom: 2vw;
`
