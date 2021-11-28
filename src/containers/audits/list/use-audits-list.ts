import { useCallback, useMemo, useState } from 'react'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { Api } from 'utils/api'
import { AuditListDate } from './date'
import { AuditListReason } from './reason'
import { AuditListUser } from './user'

type TAssetParmas = {
  page: number
}

type TUseAuditsList = {
  queryKey: any[]
  isSuccess: boolean
  data: { count: number; results: any[] }
  isLoading: boolean
  page: number
  onPaginate: (page: number) => void
}

export const columns = [
  { head: 'Patient name', key: 'full_name', width: 'w-1/6' },
  {
    head: 'User name',
    key: 'last_name',
    width: 'w-1/6',
    render: (item: any) => AuditListUser({ item }),
  },
  { head: 'Type', key: 'history_type', width: 'w-1/6' },
  {
    head: 'Date',
    key: 'history_date',
    width: 'w-1/6',
    render: (item: any) => AuditListDate({ item }),
  },
  {
    head: 'Change',
    key: 'history_change_reason',
    width: 'w-1/3',
    render: (item: any) => AuditListReason({ item }),
  },
  {
    head: '',
    key: '',
    width: 'w-[0px]',
    render: () => null,
  },
]

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
    data: data ? data.data : { count: 0, results: [] },
    isLoading: useMemo(() => isLoading || isFetching, [isLoading, isFetching]),
    page: useMemo(() => params.page, [params.page]),
    onPaginate: useCallback((page) => {
      setParams((prev) => ({ ...prev, page }))
    }, []),
  }
}
