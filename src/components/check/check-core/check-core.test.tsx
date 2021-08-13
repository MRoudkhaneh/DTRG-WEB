import { CheckCore } from '.'
import { render, screen, fireEvent } from '@testing-library/react'
import { useState } from 'react'

const CheckBox = () => {
  const [check, setcheck] = useState(false)
  return (
    <CheckCore checked={check} onChange={(e) => setcheck(e.target.checked)} />
  )
}

describe('Check box core', () => {
  it('Should render properly', () => {
    render(<CheckCore />)
    const element = screen.getByTestId('check-core')
    expect(element).toBeVisible()
  })
  it('Should render className', () => {
    render(<CheckCore className="my-12" />)
    const element = screen.getByTestId('check-core')
    expect(element.className).toContain('my-12')
  })
  it('Should fire event properly', () => {
    render(<CheckBox />)
    const element: any = screen.getByTestId('check-core')
    fireEvent.change(element, { target: { checked: true } })
    expect(element.checked).toBeTruthy()
  })
})
