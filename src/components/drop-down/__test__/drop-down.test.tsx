import { render, screen } from '@testing-library/react'
import event from '@testing-library/user-event'
import { DropDownOption } from 'components/drop-down-option'
import { DropDown } from '..'

describe('DropDown', () => {
  it('should render', () => {
    render(
      <DropDown label="Some Lable">
        <DropDownOption>Some option one</DropDownOption>
        <DropDownOption>Some option two</DropDownOption>
      </DropDown>
    )
    const label = screen.getByText('Some Lable')
    const option = screen.queryByText('Some option two')
    expect(label).toBeInTheDocument()
    expect(option).not.toBeInTheDocument()
    event.click(label)
    const optionOn = screen.getByText('Some option two')
    expect(optionOn).toBeInTheDocument()
  })
})
