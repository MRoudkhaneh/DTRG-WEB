import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormControl } from 'components/form-control'
import { FormDatePicker } from 'components/form-datepicker'

export default {
  title: 'Components/Datepicker',
  component: FormDatePicker,
} as ComponentMeta<typeof FormDatePicker>

const Template: ComponentStory<typeof FormDatePicker> = (args) => (
  <FormControl onSubmit={() => {}}>
    <FormDatePicker {...args} />
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
