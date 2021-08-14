import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { UiProvider } from 'provider/ui-provider'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { PasswordForm } from '..'

const wrapper = ({ children }) => (
  <UiProvider>
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  </UiProvider>
)

describe('Password form', () => {
  it('Should render properly', () => {
    render(<PasswordForm />, { wrapper })
    const element = screen.getByPlaceholderText(/enter your email/i)
    expect(element).toBeVisible()
  })
  it('Should submit properly', async () => {
    render(<PasswordForm />, { wrapper })
    const input = screen.getByPlaceholderText(/enter your email/i)
    const submit = screen.getByRole('button', { name: /submit/i })
    const loading = screen.queryByTestId('loading-bounce')
    fireEvent.change(input, { target: { value: 'a@gmail.com' } })
    fireEvent.click(submit)
    await waitFor(() =>
      expect(screen.queryByTestId('loading-bounce')).toBeInTheDocument()
    )
    expect(loading).not.toBeInTheDocument()
  })
})
