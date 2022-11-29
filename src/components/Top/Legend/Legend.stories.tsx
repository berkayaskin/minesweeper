import { Meta, Story } from '@storybook/react/types-6-0'
import { Legend, LegendProps } from './Legend'

export default {
  title: 'Top/Legend',
  component: Legend,
} as Meta

const Template: Story<LegendProps> = (args) => <Legend {...args} />

export const GameLegend = Template.bind({})
GameLegend.args = {
  feature: 'Feature',
  firstAction: 'ctrl',
  secondAction: 'click',
}

