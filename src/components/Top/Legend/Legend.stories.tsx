import { Meta, Story } from '@storybook/react/types-6-0'
import { Legend } from './Legend'

export default {
  title: 'Top/Legend',
  component: Legend,
} as Meta

const Template: Story = (args) => <Legend {...args} />

export const GameLegend = Template.bind({})
