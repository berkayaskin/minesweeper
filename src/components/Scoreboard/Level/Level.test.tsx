import { render } from '@testing-library/react'
import { Level } from './Level'

it('should render level correctly', () => {
  const { asFragment } = render(<Level>{['beginner', 'intermediate', 'expert']}</Level>)
  expect(asFragment()).toMatchSnapshot()
})
