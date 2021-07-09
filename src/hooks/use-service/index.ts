import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Request } from 'utils'

export const useService = () => {
  const client = useQueryClient()

  return {
    client,
    useGet: (props: IUseService) => {
      const {
        url,
        key,
        params,
        onError,
        onSuccess,
        onSettled,
        onFocus,
        onMount,
        enabled,
        initialData,
        keepPreviousData,
      } = props
      const asyncGet = async () =>
        await Request.get(url, {
          params: { ...params, ...(key[1] && { ...key[1] }) },
        })
      return useQuery(key, asyncGet, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
        ...(onSettled && { onSettled }),
        ...(enabled !== undefined && { enabled }),
        ...(onFocus !== undefined && { refetchOnWindowFocus: onFocus }),
        ...(onMount !== undefined && { refetchOnMount: onMount }),
        ...(initialData && { initialData }),
        ...(keepPreviousData && { keepPreviousData }),
      })
    },
    usePost: (props: IUseService) => {
      const { url, onError, onSuccess, onMutate, onSettled } = props
      const asyncPost = async ({ payload }) => await Request.post(url, payload)
      return useMutation(asyncPost, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
        ...(onMutate && { onMutate }),
        ...(onSettled && { onSettled }),
      })
    },
    usePut: (props: IUseService) => {
      const { url, onError, onSuccess, onMutate, onSettled } = props
      const asyncPut = async ({ payload }) => await Request.put(url, payload)
      return useMutation(asyncPut, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
        ...(onMutate && { onMutate }),
        ...(onSettled && { onSettled }),
      })
    },
    useDelete: (props: IUseService) => {
      const { url, onError, onSuccess, onMutate, onSettled, params } = props
      const asyncDelete = async () => await Request.delete(url, { params })
      return useMutation(asyncDelete, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
        ...(onMutate && { onMutate }),
        ...(onSettled && { onSettled }),
      })
    },
  }
}
