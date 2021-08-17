import { act, renderHook } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { usePatientAssets } from '../use-patient-assets'
import { UiProvider } from 'provider/ui-provider'

const history = createMemoryHistory()

const wrapper = ({ children }) => (
  <QueryClientProvider client={new QueryClient()}>
    <UiProvider>
      <Router history={history}>{children}</Router>
    </UiProvider>
  </QueryClientProvider>
)

describe('Use patient asset list', () => {
  it('Should return data properly', async () => {
    const { result, waitFor } = renderHook(() => usePatientAssets(), {
      wrapper,
    })
    expect(result.current.isLoading).toBeTruthy()
    await waitFor(() => result.current.isSuccess)
    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.data).toBe('Did it')
  })
  it('Should paginate properly', async () => {
    const { result, waitFor } = renderHook(() => usePatientAssets(), {
      wrapper,
    })
    act(() => result.current.onPaginate(2))
    expect(result.current.isLoading).toBeTruthy()
    await waitFor(() => result.current.isSuccess)
    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.page).toBe(2)
    expect(result.current.data).toBe('Did it')
  })
})
