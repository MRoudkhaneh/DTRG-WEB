import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Drawer } from 'components/drawer'

export default {
  title: 'Components/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />

export const Open = Template.bind({})

Open.args = {
  open: true,
  children: 'Hello World',
}

export const Colse = Template.bind({})

Colse.args = {
  open: false,
}
