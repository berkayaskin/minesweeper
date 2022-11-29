import { Meta, Story } from '@storybook/react/types-6-0'
import { Header } from './Header'

import { HeaderProps } from './Header'

export default {
  title: 'Top/Header',
  component: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const GameHeader = Template.bind({})

GameHeader.args = {
  title: 'Minesweeper',
}
