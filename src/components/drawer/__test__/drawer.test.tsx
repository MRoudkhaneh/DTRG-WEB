import { Drawer } from '..'
import { render, screen } from '@testing-library/react'

describe('Drawer', () => {
  it('Should render properly', () => {
    render(<Drawer />)
    const element = screen.getByTestId('drawer')
    expect(element).toBeInTheDocument()
  })
  it('Should change its width when is open', () => {
    render(<Drawer open />)
    const element = screen.getByTestId('drawer')
    expect(element).toHaveClass('w-72')
  })
})
