import { DatePickerLable } from '..'
import { render, screen } from '@testing-library/react'

describe('Date picker label', () => {
  it('Should render label', () => {
    render(<DatePickerLable label="Some label" />)
    const element = screen.getByText(/some label/i)
    expect(element).toBeVisible()
  })
})
