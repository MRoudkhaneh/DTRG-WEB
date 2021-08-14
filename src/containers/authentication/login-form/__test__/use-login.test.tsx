import { renderHook, act } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { UiProvider } from 'provider/ui-provider'
import { useLogin } from '../use-login'

const history = createMemoryHistory()

const wrapper = ({ children }) => (
  <UiProvider>
    <QueryClientProvider client={new QueryClient()}>
      <Router history={history}>{children}</Router>
    </QueryClientProvider>
  </UiProvider>
)

describe('Use login', () => {
  it('Should render properly', () => {
    const { result } = renderHook(() => useLogin(), { wrapper })
    expect(result.current.isLoading).toBeFalsy()
  })
  it('Should submit properly', async () => {
    const { result, waitFor } = renderHook(() => useLogin(), { wrapper })
    act(() => result.current.onSubmit({ email: 'whatever', password: 'some' }))
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data).toBe('Success post')
    expect(history.location.pathname).toBe('/admin/patients')
  })
})
