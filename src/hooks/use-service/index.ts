import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Request } from 'utils'

export const useService = () => {
  const client = useQueryClient()

  return {
    client,
    useGet: ({ url, params, key, ...rest }: IUseServiceFetch) => {
      const asyncGet = async () =>
        await Request.get(url, {
          params: { ...params, ...(key[1] && { ...key[1] }) },
        })
      return useQuery(key, asyncGet, { ...rest })
    },
    usePost: ({ url, ...rest }: IUseServiceMutate) => {
      const asyncPost = async ({ payload }: { payload: any }) =>
        await Request.post(url, payload)
      return useMutation(asyncPost, { ...rest })
    },
    usePut: ({ url, ...rest }: IUseServiceMutate) => {
      const asyncPut = async ({ payload }: { payload: any }) =>
        await Request.put(url, payload)
      return useMutation(asyncPut, {
        ...rest,
      })
    },
    useDelete: ({ url, params, ...rest }: IUseServiceMutate) => {
      const asyncDelete = async () => await Request.delete(url, { params })
      return useMutation(asyncDelete, {
        ...rest,
      })
    },
    useOptimisticPost: ({
      url,
      key,
      onMutate,
      onError,
      onSuccess,
    }: IUseServiceOptimistic) => {
      const asyncPost = async ({ payload }: { payload: any }) =>
        await Request.post(url, payload)
      return useMutation(asyncPost, {
        onMutate: async ({ payload }: { payload: any }) => {
          await client.cancelQueries(key)
          const snapshot = client.getQueryData(key)
          client.setQueryData(key, (old: any) => {
             if (old.data && old.data.results)
               old.data.results = [payload, ...old.data.results]
            return old
          })
          onMutate?.()
          return { snapshot }
        },
        onError: (error: any, data: any, context: any) => {
          client.setQueryData(key, context.snapshot)
          onError?.(error)
        },
        onSettled: () => client.invalidateQueries(key),
        onSuccess,
      })
    },
    useOptimisticPut: ({
      url,
      key,
      id,
      onMutate,
      onError,
      onSuccess,
    }: IUseServiceOptimistic) => {
      const asyncPut = async ({ payload }: { payload: any }) =>
        await Request.put(url, payload)
      return useMutation(asyncPut, {
        onMutate: async ({ payload }: { payload: any }) => {
          await client.cancelQueries(key)
          const snapshot = client.getQueryData(key)
          client.setQueryData(key, (old: any) => {
             if (old.data && old.data.results)
               old.data.results = old.data.results.map((item: any) =>
                 item.id == id ? payload : item
               )
            return old
          })
          onMutate?.()
          return { snapshot }
        },
        onError: (error: any, data: any, context: any) => {
          client.setQueryData(key, context.snapshot)
          onError?.(error)
        },
        onSuccess,
        onSettled: () => client.invalidateQueries(key),
      })
    },
    useOptimisticDelete: ({
      url,
      key,
      id,
      params,
      onMutate,
      onError,
      onSuccess,
    }: IUseServiceOptimistic) => {
      const asyncDelete = async () => await Request.delete(url, { params })
      return useMutation(asyncDelete, {
        onMutate: async () => {
          await client.cancelQueries(key)
          const snapshot = client.getQueryData(key)
          client.setQueryData(key, (old: any) => {
           if (old.data && old.data.results)
             old.data.results = old?.data?.results.filter(
               (item: any) => item.id != id
             )
            return old
          })
          onMutate?.()
          return { snapshot }
        },
        onError: (error: any, data: any, context: any) => {
          client.setQueryData(key, context.snapshot)
          onError?.(error)
        },
        onSettled: () => client.invalidateQueries(key),
        onSuccess,
      })
    },
  }
}
