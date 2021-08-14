// import { renderHook, act } from '@testing-library/react-hooks'
// import { QueryClient, QueryClientProvider } from 'react-query'
// import { Router } from 'react-router-dom'
// import { createMemoryHistory } from 'history'
// import { UiProvider } from 'provider/ui-provider'
// import { usePassword } from '../use-password'

// const expectedToast = {
//   open: true,
//   type: 'success',
//   title: 'Success',
//   description: 'New password has been sent to your email.',
// }

// const history = createMemoryHistory()

// const wrapper = ({ children }) => (
//   <UiProvider>
//     <QueryClientProvider client={new QueryClient()}>
//       <Router history={history}>{children}</Router>
//     </QueryClientProvider>
//   </UiProvider>
// )

describe('Use password', () => {
  it('Should render properly', () => {
    // const { result } = renderHook(() => usePassword(), { wrapper })
    // expect(result.current.isLoading).toBeFalsy()
  })
  // it('Should submit properly', async () => {
  //   const { result, waitFor } = renderHook(() => usePassword(), { wrapper })
  //   act(() => result.current.onSubmit({ email: 'whatever' }))
  //   await waitFor(() => result.current.isSuccess)
  //   expect(result.current.data).toBe('Success post')
  //   expect(result.current.toast).toStrictEqual(expectedToast)
  //   expect(history.location.pathname).toBe('/authentication/login')
  // })
})
