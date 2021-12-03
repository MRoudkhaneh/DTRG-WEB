import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormControl } from 'components/form-control'
import { FormMultiSelect } from 'components/form-multi-select'

const options = [
  { id: '1', title: 'Option one' },
  { id: '2', title: 'Option two' },
  { id: '3', title: 'Option three' },
  { id: '4', title: 'Option four' },
  { id: '5', title: 'Option six' },
]

export default {
  title: 'Components/MultiSelect',
  component: FormMultiSelect,
} as ComponentMeta<typeof FormMultiSelect>

const Template: ComponentStory<typeof FormMultiSelect> = (args) => (
  <FormControl onSubmit={() => {}}>
    <FormMultiSelect {...args} />
  </FormControl>
)

export const Base = Template.bind({})

Base.args = {
  name: 'input',
  options,
}

export const Label = Template.bind({})

Label.args = {
  name: 'input',
  label: 'Some label',
  options,
}
