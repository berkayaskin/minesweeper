import { Meta, Story } from '@storybook/react/types-6-0'
import { Cell, CellProps } from './Cell'

export default {
  title: 'Grid/Cell',
  component: Cell,
  argTypes: {
    coordinates: { defaultValue: { x: 1, y: 1 } },
  },
} as Meta

const Template: Story<CellProps> = (args) => <Cell {...args} />

export const Closed = Template.bind({})
Closed.args = {
  children: 10,
}

export const Empty = Template.bind({})
Empty.args = {
  children: 0,
}

export const Bomb = Template.bind({})
Bomb.args = {
  children: 9,
}

export const Flag = Template.bind({})
Flag.args = {
  children: 11,
}

export const WeakFlag = Template.bind({})
WeakFlag.args = {
  children: 12,
}

export const One = Template.bind({})
One.args = {
  children: 1,
}

export const Two = Template.bind({})
Two.args = {
  children: 2,
}

export const Three = Template.bind({})
Three.args = {
  children: 3,
}

export const Four = Template.bind({})
Four.args = {
  children: 4,
}

export const Five = Template.bind({})
Five.args = {
  children: 5,
}

export const Six = Template.bind({})
Six.args = {
  children: 6,
}

export const Seven = Template.bind({})
Seven.args = {
  children: 7,
}

export const Eight = Template.bind({})
Eight.args = {
  children: 8,
}
