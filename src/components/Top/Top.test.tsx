import { render } from '@testing-library/react'
import { Top } from './Top'

it('should render top correctly', () => {
  const { asFragment } = render(
    <Top feature='Flag' firstAction='ctrl' secondAction='click' title='Minesweeper' />,
  )
  expect(asFragment()).toMatchSnapshot()
})
