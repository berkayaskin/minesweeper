import { Meta, Story } from '@storybook/react/types-6-0'
import { Level, LevelProps } from './Level'

export default {
  title: 'Scoreboard/Level',
  component: Level,
} as Meta

const Template: Story<LevelProps> = (args) => <Level {...args} />

export const LevelExample = Template.bind({})
LevelExample.args = {
  children: ['Beginner', 'Intermediate', 'Expert'],
}
