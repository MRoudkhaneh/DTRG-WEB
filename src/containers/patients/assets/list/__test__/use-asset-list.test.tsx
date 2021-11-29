import { act, renderHook } from '@testing-library/react-hooks'
import { wrapper } from 'test'
import { usePatientAssets } from '../use-patient-assets'

describe('Use patient asset list', () => {
  it('Should return data properly', async () => {
    // const { result, waitFor } = renderHook(() => usePatientAssets(), {
    //   wrapper,
    // })
    // expect(result.current.isLoading).toBeTruthy()
    // await waitFor(() => result.current.isSuccess)
    // expect(result.current.isLoading).toBeFalsy()
    // expect(result.current.data).toBe('Did it')
  })
  // it('Should paginate properly', async () => {
  //   const { result, waitFor } = renderHook(() => usePatientAssets(), {
  //     wrapper,
  //   })
  //   act(() => result.current.onPaginate(2))
  //   expect(result.current.isLoading).toBeTruthy()
  //   await waitFor(() => result.current.isSuccess)
  //   expect(result.current.isLoading).toBeFalsy()
  //   expect(result.current.page).toBe(2)
  //   expect(result.current.data).toBe('Did it')
  // })
})
