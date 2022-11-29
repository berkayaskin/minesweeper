import { Meta, Story } from '@storybook/react/types-6-0'
import { Scoreboard, ScoreboardProps } from './Scoreboard'

export default {
  title: 'Scoreboard/Scoreboard',
  component: Scoreboard,
} as Meta

const Template: Story<ScoreboardProps> = (args) => <Scoreboard {...args} />

export const ScoreboardExample = Template.bind({})
ScoreboardExample.args = {
  time: '000',
  levels: ['Beginner', 'Intermediate', 'Expert'],
  onReset: () => null,
  bombs: '010',
}
