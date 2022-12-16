import theme from '@/config/theme'
import { Field } from '@/helpers/Field'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'

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

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App>{StaticField}</App>
    </ChakraProvider>
  </StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
