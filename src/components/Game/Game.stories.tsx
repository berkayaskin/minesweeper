import { CellState, Field } from '@/helpers/Field'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Grid } from '@/components/Grid'
import { Scoreboard } from '@/components/Scoreboard'
import { Top } from '@/components/Top'

import { GameArea } from './GameArea'
import { GameOver } from './GameOver'
import { Wrapper, WrapperProps } from './Wrapper'

export default {
  title: 'Components/Game',
  component: Wrapper,
} as Meta

const Template: Story<WrapperProps> = (args) => <Wrapper {...args} />

export const GameExample = Template.bind({})

const { empty: e, bomb: b, hidden: h, flag: f } = CellState

const defautGameField: Field = [
  [f, f, h, h, h],
  [b, 3, 1, e, e],
  [1, 1, h, 1, 1],
  [1, e, e, 1, b],
  [2, 1, e, 1, e],
]

GameExample.args = {
  children: (
    <>
      <Top title='Minesweeper' feature='Flag' firstAction='right click' secondAction='click' />

      <GameArea>
        <Scoreboard
          time='000'
          bombs='000'
          levels={['beginner', 'intermediate', 'expert']}
          onReset={() => null}
          onChange={() => null}
        />
        <GameOver onClick={() => null} isWin={true} />
        <Grid onClick={() => null} onContextMenu={() => null}>
          {defautGameField}
        </Grid>
      </GameArea>
    </>
  ),
}
