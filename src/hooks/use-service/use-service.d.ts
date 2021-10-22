interface IUseService {
  url?: string
  onSuccess?: any
  onError?: any
  onSettled?: any
  onMutate?: any
  key?: any
  params?: any
  refetchOnWindowFocus?: boolean
  enabled?: boolean
  initialData?: any
  keepPreviousData?: boolean
}
