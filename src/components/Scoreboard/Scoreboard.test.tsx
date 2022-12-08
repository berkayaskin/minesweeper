import { render } from '@testing-library/react'

import { Scoreboard } from './Scoreboard'

it('Scoreboard renders correctly', () => {
  const { asFragment } = render(
    <Scoreboard
      time='000'
      levels={['beginner', 'intermediate', 'expert']}
      bombs='010'
      onReset={() => null}
    />,
  )

  expect(asFragment()).toMatchSnapshot()
})
