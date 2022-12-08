import { render } from '@testing-library/react'
import { Counter } from './Counter'

it('should render counter correctly', () => {
  const { asFragment } = render(<Counter>001</Counter>)
  expect(asFragment()).toMatchSnapshot()
})
