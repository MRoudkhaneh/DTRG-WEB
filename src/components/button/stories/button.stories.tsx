import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from 'components/button'
import { ICDelete } from 'icons'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Submit = Template.bind({})

Submit.args = {
  children: 'Submit',
  className:
    'w-1/4 my-10 mx-auto h-12 text-white shadow-blue bg-secondary dark:bg-primary',
}

export const Cancel = Template.bind({})

Cancel.args = {
  children: 'Cancel',
  className: 'h-12  w-1/4  bg-gray-200 mx-auto my-10',
}

export const Icon = Template.bind({})

Icon.args = {
  children: <ICDelete className="w-6 h-6 text-red-600" />,
  className: ' mx-auto my-10',
  icon: true,
}
