import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Check } from 'components/check'

export default {
  title: 'Components/Check',
  component: Check,
} as ComponentMeta<typeof Check>

const Template: ComponentStory<typeof Check> = (args) => <Check {...args} />

export const Base = Template.bind({})

Base.args = {
  label: 'Current',
}
