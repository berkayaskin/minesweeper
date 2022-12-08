import { render } from '@testing-library/react'
import { Header } from './Header'

it('should renders the title correctly', () => {
  const { asFragment } = render(<Header title='Minesweeper' />)
  expect(asFragment()).toMatchSnapshot()
})
