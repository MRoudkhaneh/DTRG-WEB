import { QueryClient, QueryClientProvider } from 'react-query'
import { Router } from 'react-router-dom'
import { UiProvider } from 'provider/ui-provider'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { LoginForm } from '..'

const history = createMemoryHistory()

const wrapper = ({ children }) => (
  <UiProvider>
    <QueryClientProvider client={new QueryClient()}>
      <Router history={history}>{children}</Router>
    </QueryClientProvider>
  </UiProvider>
)

describe('Login form', () => {
  it('Should render properly', () => {
    render(<LoginForm />, { wrapper })
    const element = screen.getByPlaceholderText(/enter your email/i)
    expect(element).toBeVisible()
  })
  it('Should submit properly', async () => {
    render(<LoginForm />, { wrapper })
    const email = screen.getByPlaceholderText(/enter your email/i)
    const pass = screen.getByPlaceholderText(/enter your password/i)
    const submit = screen.getByRole('button', { name: /login/i })
    const loading = screen.queryByTestId('loading-bounce')
    fireEvent.change(email, { target: { value: 'a@gmail.com' } })
    fireEvent.change(pass, { target: { value: '12345' } })
    fireEvent.click(submit)
    await waitFor(() =>
      expect(screen.queryByTestId('loading-bounce')).toBeInTheDocument()
    )
    expect(loading).not.toBeInTheDocument()
    expect(history.location.pathname).toBe('/admin/patients')
  })
  it('Should push properly', () => {
    render(<LoginForm />, { wrapper })
    const pusher = screen.getByRole('button', { name: /create/i })
    fireEvent.click(pusher)
    expect(history.location.pathname).toBe('/authentication/register')
  })
})
