import { render, screen, fireEvent } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { PatientAssetsToolbar } from '..'

const history = createMemoryHistory()

const wrapper = ({ children }): JSX.Element => (
  <Router history={history}>{children}</Router>
)

describe('Asset toolbar', () => {
  it('Should render properly', () => {
    render(<PatientAssetsToolbar />, { wrapper })
    const button = screen.getByTestId('previous')
    fireEvent.click(button)
    expect(history.location.pathname).toBe('/admin/patients')
  })
})
