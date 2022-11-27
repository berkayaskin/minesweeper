import { Heading } from '@chakra-ui/react'
import { Legend } from 'src/components/Legend'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Heading fontFamily='monospace' display='block' mb='8' fontSize='4xl' color='whiteAlpha.800'>
        Minesweeper
      </Heading>
      <Legend />
    </div>
  )
}

export default App
