import { render } from '@testing-library/react'
import { Modal } from '..'

describe('Modal', () => {
  it('Should render properly on modal root', () => {
    render(<Modal>test</Modal>, {
      baseElement: document.getElementById('modal'),
    })
  })
})
