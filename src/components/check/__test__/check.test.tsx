import { render, screen } from '@testing-library/react'
import event from '@testing-library/user-event'
import { Check } from '..'

describe('Check component', () => {
  it('Should render properly', () => {
    render(<Check label="Some label" />)
    const label = screen.getByText(/Some label/i)
    expect(label).toBeVisible()
  })
  it('Should be accessible', () => {
    render(<Check label="Some label" />)
    const label = screen.getByLabelText(/Some label/i)
    const checkbox = screen.getByRole('checkbox')
    event.click(label)
    expect(checkbox).toBeChecked()
  })
})
