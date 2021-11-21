import { useCallback, useMemo, useState } from 'react'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { Api } from 'utils/api'

type TAssetParmas = {
  page: number
}

const columns = [
  { head: 'First name', key: 'first_name', width: 'w-1/6' },
  { head: 'Last name', key: 'last_name', width: 'w-1/6' },
  { head: 'Type', key: 'history_type', width: 'w-1/6' },
  {
    head: 'Date',
    key: 'history_date',
    width: 'w-1/6',
    render: (item: any) => (
      <div className="flex items-center space-x-4">
        <span className="text-gray-600 dark:text-gray-300">
          {item.history_date?.slice(0, 10)}
        </span>
      </div>
    ),
  },
  {
    head: 'Reason for change',
    key: 'history_change_reason',
    width: 'w-1/3',
    render: (item: any) => (
      <span className="text-gray-600 dark:text-gray-300 text-sm">
        {item.history_change_reason}
      </span>
    ),
  },
]

type TUseAuditsList = {
  queryKey: any[]
  isSuccess: boolean
  columns: TColumn[]
  data: { count: number; results: any[] }
  isLoading: boolean
  page: number
  onPaginate: (page: number) => void
}

export const useAuditsList = (): TUseAuditsList => {
  const { useGet } = useService()

  const { onError } = useError()

  const [params, setParams] = useState<TAssetParmas>({
    page: 1,
  })

  const queryKey = useMemo(() => ['PATIENTS_ASSETS_LIST', params], [params])

  const { data, isLoading, isFetching, isSuccess } = useGet({
    key: queryKey,
    url: Api.audits,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    onError,
  })

  return {
    queryKey,
    isSuccess,
    columns,
    data: data ? data.data : { count: 0, results: [] },
    isLoading: useMemo(() => isLoading || isFetching, [isLoading, isFetching]),
    page: useMemo(() => params.page, [params.page]),
    onPaginate: useCallback(
      (index) => {
        setParams((prev) => ({ ...prev, page: index }))
      },
      [params.page]
    ),
  }
}
