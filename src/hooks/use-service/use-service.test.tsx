import { renderHook } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useService } from '.'

const wrapper = ({ children }) => (
  <QueryClientProvider client={new QueryClient()}>
    {children}
  </QueryClientProvider>
)

const { result: service } = renderHook(() => useService(), {
  wrapper,
})

describe('Use service', () => {
  it('Should return proper data on get', async () => {
    const { result, waitFor } = renderHook(
      () =>
        service.current.useGet({
          key: ['test'],
          url: 'https://jsonplaceholder.typicode.com/posts',
        }),
      {
        wrapper,
      }
    )
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data.data.length).toBe(100)
  })
})
