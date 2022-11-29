import { VStack } from '@chakra-ui/react'
import { Scoreboard } from 'src/components/Scoreboard'
import { Top } from 'src/components/Top'
import './App.css'

function App() {
  return (
    <VStack spacing='2rem'>
      <Top title='Minesweeper' feature='Flag' firstAction='ctrl' secondAction='click' />
      <Scoreboard
        time='000'
        levels={['Beginner', 'Intermediate', 'Expert']}
        bombs='010'
        onReset={() => null}
      />
    </VStack>
  )
}

export default App
