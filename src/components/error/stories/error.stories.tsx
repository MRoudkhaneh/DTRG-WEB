import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Error } from 'components/error'

export default {
  title: 'Components/Error',
  component: Error,
} as ComponentMeta<typeof Error>

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />

export const Base = Template.bind({})

Base.args = {
  error: { message: 'Basic error' },
}
