import { render, screen } from '@testing-library/react'
import { Confirm } from '..'

describe('Confirm component', () => {
  it('Should render properly', () => {
    render(
      <Confirm
        title="Are you sure"
        description="You are about to delete this item."
        onCancel={() => {}}
        onConfirm={() => {}}
      />
    )
    const title = screen.getByText('Are you sure')
    const description = screen.getByText('You are about to delete this item.')
    const cancelButton = screen.getByText('Cancel')
    const confirmButton = screen.getByText('Confirm')
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(cancelButton).toBeInTheDocument()
    expect(confirmButton).toBeInTheDocument()
  })
})
