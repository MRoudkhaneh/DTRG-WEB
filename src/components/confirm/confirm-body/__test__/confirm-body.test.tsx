import { render, screen } from '@testing-library/react'
import { ConfirmBody } from '..'

describe('Confirm Body', () => {
  it('Should render title and description properly', () => {
    render(<ConfirmBody title="Some title" description="Some desc" />)
    const title = screen.getByText(/Some title/i)
    const desc = screen.getByText(/Some desc/i)
    expect(title).toBeVisible()
    expect(desc).toBeVisible()
  })
})
