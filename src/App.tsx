import { Scoreboard } from '@/components/Scoreboard'
import { Top } from '@/components/Top'
import { VStack } from '@chakra-ui/react'
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
