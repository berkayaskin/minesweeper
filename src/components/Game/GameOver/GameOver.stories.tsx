import { Meta, Story } from '@storybook/react/types-6-0'

import { GameOver, GameOverProps } from './GameOver'

export default {
  title: 'Components/Game/GameOver',
  component: GameOver,
} as Meta

const Template: Story<GameOverProps> = (args) => <GameOver {...args} />

export const GameOverWinExample = Template.bind({})

GameOverWinExample.args = {
  isWin: true,
}

export const GameOverLooseExample = Template.bind({})

GameOverLooseExample.args = {
  isWin: false,
}
