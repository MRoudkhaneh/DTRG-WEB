import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormControl } from 'components/form-control'
import { FormInput } from 'components/form-input'

export default {
  title: 'Components/Input',
  component: FormInput,
} as ComponentMeta<typeof FormInput>

const Template: ComponentStory<typeof FormInput> = (args) => (
  <FormControl onSubmit={() => {}}>
    <FormInput {...args} />
  </FormControl>
)

export const Base = Template.bind({})

Base.args = {
  name: 'input',
}

export const Label = Template.bind({})

Label.args = {
  name: 'input',
  label: 'Some label',
}
