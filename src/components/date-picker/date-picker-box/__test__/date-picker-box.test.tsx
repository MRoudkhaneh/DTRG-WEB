import { DatePickerBox } from '..'
import { render, screen } from '@testing-library/react'

describe('Date picker box', () => {
  it('Should render proper class name on error', () => {
    render(<DatePickerBox error="any" />)
    const element = screen.getByTestId('date-picker-box')
    expect(element).toHaveClass('border-2 border-red-400 shadow')
  })
  it('Should render proper value', () => {
    render(<DatePickerBox value="2020-03-03" />)
    const element = screen.getByTestId('date-picker-box')
    expect(element).toHaveTextContent('2020-03-03')
  })
})
