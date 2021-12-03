import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormControl } from 'components/form-control'
import { FormSwitch } from 'components/form-switch'

export default {
  title: 'Components/Switch',
  component: FormSwitch,
} as ComponentMeta<typeof FormSwitch>

const Template: ComponentStory<typeof FormSwitch> = (args) => (
  <FormControl onSubmit={() => {}}>
    <FormSwitch {...args} />
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
