import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Confirm } from 'components/confirm'

export default {
  title: 'Components/Confirm',
  component: Confirm,
} as ComponentMeta<typeof Confirm>

const Template: ComponentStory<typeof Confirm> = (args) => <Confirm {...args} />

export const Base = Template.bind({})

Base.args = {
  title: 'Are you sure',
  description: 'You are about to delete this item.',
  onCancel: () => {},
  onConfirm: () => {},
}
