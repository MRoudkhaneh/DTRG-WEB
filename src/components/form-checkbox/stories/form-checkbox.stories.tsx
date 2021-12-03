import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormControl } from 'components/form-control'
import { FormCheckBox } from 'components/form-checkbox'

export default {
  title: 'Components/Checkbox',
  component: FormCheckBox,
} as ComponentMeta<typeof FormCheckBox>

const Template: ComponentStory<typeof FormCheckBox> = (args) => (
  <FormControl onSubmit={() => {}}>
    <FormCheckBox {...args} />
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
