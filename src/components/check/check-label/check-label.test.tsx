import { CheckLabel } from '.'
import { render, screen } from '@testing-library/react'

describe('Check box label', () => {
  it('Should render properly', () => {
    render(<CheckLabel label="Set it up" />)
    const element = screen.getByText(/Set it up/i)
    expect(element).toBeVisible()
  })
})
