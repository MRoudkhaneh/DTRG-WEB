import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Request } from 'utils'

export const useService = () => {
  const client = useQueryClient()

  return {
    client,
    useGet: ({ url, params, key, ...rest }: IUseService) => {
      const asyncGet = async () =>
        await Request.get(url, {
          params: { ...params, ...(key[1] && { ...key[1] }) },
        })
      return useQuery(key, asyncGet, { ...rest })
    },
    usePost: ({ url, ...rest }: IUseService) => {
      const asyncPost = async ({ payload }: { payload: any }) =>
        await Request.post(url, payload)
      return useMutation(asyncPost, { ...rest })
    },
    usePut: ({ url, ...rest }: IUseService) => {
      const asyncPut = async ({ payload }: { payload: any }) =>
        await Request.put(url, payload)
      return useMutation(asyncPut, {
        ...rest,
      })
    },
    useDelete: ({ url, params, ...rest }: IUseService) => {
      const asyncDelete = async () => await Request.delete(url, { params })
      return useMutation(asyncDelete, {
        ...rest,
      })
    },
  }
}
