import { act, renderHook } from '@testing-library/react-hooks'
import { mockServer, wrapper } from 'test/mock'
import { useService } from '..'

const worker = mockServer('url-for-test', {
  get: { title: 'Lord of the Rings', author: 'J. R. R. Tolkien' },
})

const { result: service } = renderHook(() => useService(), {
  wrapper,
})

describe('Use service', () => {
  beforeAll(() => worker.listen())
  afterAll(() => worker.close())
  it('Should return proper data on get', async () => {
    const { result, waitFor } = renderHook(
      () =>
        service.current.useGet({
          key: ['test'],
          url: 'url-for-test',
        }),
      {
        wrapper,
      }
    )
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data.data).toStrictEqual({
      title: 'Lord of the Rings',
      author: 'J. R. R. Tolkien',
    })
  })
  it('Should return proper data on post', async () => {
    const { result, waitFor } = renderHook(
      () =>
        service.current.usePost({
          url: 'url-for-test',
        }),
      {
        wrapper,
      }
    )
    act(() => result.current.mutate({ payload: { id: 1, name: 'dtrg' } }))
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data.data).toStrictEqual({ id: 1, name: 'dtrg' })
  })
  it('Should return proper data on put', async () => {
    const { result, waitFor } = renderHook(
      () =>
        service.current.usePut({
          url: 'url-for-test',
        }),
      {
        wrapper,
      }
    )
    act(() => result.current.mutate({ payload: { id: 3, name: 'doris' } }))
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data.data).toStrictEqual({ id: 3, name: 'doris' })
  })
  it('Should return proper data on delete', async () => {
    const { result, waitFor } = renderHook(
      () =>
        service.current.useDelete({
          url: 'url-for-test',
        }),
      {
        wrapper,
      }
    )
    act(() => result.current.mutate(''))
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data.data).toBe('Success delete')
  })
})
