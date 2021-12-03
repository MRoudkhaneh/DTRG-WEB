import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormControl } from 'components/form-control'
import { FormTextArea } from 'components/form-textarea'

export default {
  title: 'Components/Textarea',
  component: FormTextArea,
} as ComponentMeta<typeof FormTextArea>

const Template: ComponentStory<typeof FormTextArea> = (args) => (
  <FormControl onSubmit={() => {}}>
    <FormTextArea {...args} />
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
