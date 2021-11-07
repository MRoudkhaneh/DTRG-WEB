import { useCallback, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { Api } from 'utils/api'

type TAssetParmas = {
  page: number
}

const columns = [
  { head: 'First name', key: 'first_name', width: 'w-1/4' },
  { head: 'Last name', key: 'last_name', width: 'w-1/4' },
  { head: 'Type', key: 'history_type', width: 'w-1/4' },
  { head: 'Date', key: 'history_date', width: 'w-1/4' },
]

export const useAuditsList = () => {
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
