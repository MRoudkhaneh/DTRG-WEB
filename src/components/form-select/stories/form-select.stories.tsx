import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormControl } from 'components/form-control'
import { FormSelect } from 'components/form-select'

const options = [
  { id: '1', title: 'Option one' },
  { id: '2', title: 'Option two' },
  { id: '3', title: 'Option three' },
  { id: '4', title: 'Option four' },
  { id: '5', title: 'Option six' },
]

export default {
  title: 'Components/Select',
  component: FormSelect,
} as ComponentMeta<typeof FormSelect>

const Template: ComponentStory<typeof FormSelect> = (args) => (
  <FormControl onSubmit={() => {}}>
    <FormSelect {...args} />
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
