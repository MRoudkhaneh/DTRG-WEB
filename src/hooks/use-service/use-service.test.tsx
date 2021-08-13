import { renderHook } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useService } from '.'

const wrapper = ({ children }) => (
  <QueryClientProvider client={new QueryClient()}>
    {children}
  </QueryClientProvider>
)

describe('Use service', () => {
  it('Should return proper data', async () => {
    const { result } = renderHook(() => useService(), {
      wrapper,
    })
    const { result: getResult, waitFor } = renderHook(
      () =>
        result.current.useGet({
          key: ['test'],
          url: 'https://jsonplaceholder.typicode.com/posts',
        }),
      {
        wrapper,
      }
    )
    await waitFor(() => getResult.current.isSuccess)
    expect(getResult.current.data.data.length).toBe(100)
  })
})
