import { render, screen } from '@testing-library/react'
import { ConfirmActions } from '..'

describe('Confirm actions', () => {
  it('Should render action buttons', () => {
    render(<ConfirmActions />)
    const cancel = screen.getByText(/cancel/i)
    const confirm = screen.getByText(/confirm/i)
    expect(cancel).toBeVisible()
    expect(confirm).toBeVisible()
  })
  it('Should render loading instead of confirm text', () => {
    render(<ConfirmActions loading />)
    const confirm = screen.queryByText(/confirm/i)
    expect(confirm).not.toBeInTheDocument()
  })
})
