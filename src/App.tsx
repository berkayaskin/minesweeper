import { GameArea, GameOver, Wrapper } from '@/components/Game'
import { Grid } from '@/components/Grid'
import { Scoreboard } from '@/components/Scoreboard'
import { Top } from '@/components/Top'
import { Field } from '@/helpers/Field'
import { VStack } from '@chakra-ui/react'
import { FC } from 'react'

import './App.css'

const StaticField: Field = [
  [9, 2, 9, 1, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1, 0, 1, 9, 1, 1, 9, 1],
  [0, 0, 1, 9, 10, 0, 2, 2, 2, 1, 1, 1],
  [0, 0, 10, 10, 1, 0, 1, 9, 1, 2, 2, 2],
  [0, 1, 1, 2, 2, 9, 1, 1, 1, 0, 0, 0],
  [0, 1, 9, 3, 9, 2, 10, 0, 0, 2, 1, 1],
  [0, 2, 2, 4, 9, 2, 10, 1, 1, 1, 9, 1],
  [0, 1, 9, 2, 1, 1, 1, 9, 1, 2, 2, 2],
  [0, 1, 10, 10, 0, 0, 1, 1, 1, 1, 9, 1],
  [0, 1, 10, 10, 0, 0, 1, 1, 1, 1, 9, 1],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 9, 1],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 9, 1],
]

interface AppProps {
  children: Field
}

const App: FC<AppProps> = () => {
  return (
    <Wrapper>
      <VStack spacing='2rem'>
        <Top title='Minesweeper' feature='Flag' firstAction='ctrl' secondAction='click' />
        <GameArea>
          <Scoreboard
            time='000'
            levels={['Beginner', 'Intermediate', 'Expert']}
            bombs='010'
            onReset={() => null}
            onChange={() => null}
          />
          <GameOver onClick={() => null} isWin={true} />
          <Grid onClick={() => null} onContextMenu={() => null}>
            {StaticField}
          </Grid>
        </GameArea>
      </VStack>
    </Wrapper>
  )
}

export default App
