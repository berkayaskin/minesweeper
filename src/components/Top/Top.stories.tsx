import { Meta, Story } from '@storybook/react/types-6-0'
import type { TopComponentType } from './Top'
import { Top } from './Top'

export default {
  title: 'Top/Top',
  component: Top,
} as Meta

const Template: Story<TopComponentType> = (args) => <Top {...args} />

export const TopPanel = Template.bind({})
TopPanel.args = {
  title: 'Minesweeper',
  feature: 'Flag',
  firstAction: 'Ctrl',
  secondAction: 'Click',
}
