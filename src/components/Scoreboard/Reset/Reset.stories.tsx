import { Meta, Story } from '@storybook/react/types-6-0'
import { Reset, ResetProps } from './Reset'

export default {
  title: 'Scoreboard/Reset',
  component: Reset,
} as Meta

const Template: Story<ResetProps> = (args) => <Reset {...args} />

export const ResetExample = Template.bind({})
