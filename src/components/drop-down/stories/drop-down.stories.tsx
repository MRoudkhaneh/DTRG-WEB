import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DropDown } from 'components/drop-down'
import { DropDownOption } from 'components/drop-down-option'

export default {
  title: 'Components/DropDown',
  component: DropDown,
} as ComponentMeta<typeof DropDown>

const Template: ComponentStory<typeof DropDown> = (args) => (
  <DropDown {...args} />
)

export const Base = Template.bind({})

Base.args = {
  label: 'Drop down',
  className: 'mx-auto w-1/4 my-10',
  children: (
    <>
      <DropDownOption>Some option one</DropDownOption>
      <DropDownOption>Some option two</DropDownOption>
    </>
  ),
}
