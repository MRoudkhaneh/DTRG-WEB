import { Button } from '.'
import { render, screen } from '@testing-library/react'

describe('Button component', () => {
  it('Should render children', () => {
    render(<Button>Click me</Button>)
    const child = screen.getByText(/Click me/i)
    expect(child).toBeVisible()
  })
  it('Should be disabled', () => {
    render(<Button disabled>Click me</Button>)
    const child = screen.getByRole('button')
    expect(child.className).toContain('opacity-50')
  })
  it('Should be loading', () => {
    render(<Button loading>Click me</Button>)
    const child = screen.getByRole('button')
    expect(child.className).toContain('cursor-wait')
  })
})
