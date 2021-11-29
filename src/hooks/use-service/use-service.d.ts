interface IUseServiceFetch {
  url: string
  key: string | any[]
  id?: string | number
  params?: any
  refetchOnWindowFocus?: boolean
  enabled?: boolean
  initialData?: any
  keepPreviousData?: boolean
  select?: (data: any) => any
  onSuccess?: (data?: any) => void
  onError?: (error?: any, data?: any, context?: any) => void
  onSettled?: (data?: any) => void
}

type IUseServiceMutate = {
  key?: string | any[]
  onMutate?: (data?: any) => void
} & Pick<
  IUseServiceFetch,
  'url' | 'id' | 'params' | 'onSuccess' | 'onError' | 'onSettled'
>

type IUseServiceOptimistic = {
  key: string | any[]
  onMutate?: (data?: any) => void
} & Pick<
  IUseServiceFetch,
  'url' | 'id' | 'params' | 'onSuccess' | 'onError' | 'onSettled'
>
