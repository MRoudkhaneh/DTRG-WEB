import { render, screen } from '@testing-library/react'
import { Modal } from '..'

describe('Modal', () => {
  it('Should render properly on modal root', () => {
    render(<Modal>modal children</Modal>, {
      baseElement: document.getElementById('modal'),
    })
    expect(screen.getByText(/modal children/i)).toBeVisible()-
  })
})
