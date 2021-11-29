import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from 'components/button'

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

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'Button',
// }

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Button',
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button',
// }
