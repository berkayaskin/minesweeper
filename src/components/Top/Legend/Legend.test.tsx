import { render } from '@testing-library/react'
import { Legend } from './Legend'

it('should render legend correctly', () => {
  const { asFragment } = render(<Legend feature='Flag' firstAction='ctrl' secondAction='click' />)
  expect(asFragment()).toMatchSnapshot()
})
