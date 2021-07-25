import { useCallback, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { Api } from 'utils/api'
import { PatientAssetActions } from './actions'

export const usePatientAssets = () => {
  const routerParams = useParams() as any
  const [params, setParams] = useState({
    page: 1,
    patient_id: routerParams.id,
  })
  const { useGet } = useService()
  const { onError } = useError()

  const queryKey = useMemo(() => ['PATIENTS_ASSETS_LIST', params], [params])

  const { data, isLoading, isFetching } = useGet({
    key: queryKey,
    url: Api.assets,
    onFocus: false,
    keepPreviousData: true,
    onError,
  })

  return {
    data: data ? data.data : { count: 0, results: [] },
    isLoading: useMemo(() => isLoading || isFetching, [isLoading, isFetching]),
    page: useMemo(() => params.page, [params.page]),
    columns: useMemo(
      () => [
        { head: 'Lot number', key: 'lot_number', width: 'w-1/2' },
        { head: 'Serial Number', key: 'serial_number', width: 'w-1/2' },
        { head: 'Expiration date', key: 'expiration_date', width: 'w-1/2' },
        {
          head: '',
          width: 'w-[20px]',
          render: (item: any) => PatientAssetActions({ item, queryKey }),
        },
      ],
      [queryKey]
    ),
    onPaginate: useCallback(
      (index) => {
        setParams((prev) => ({ ...prev, page: index }))
      },
      [params.page]
    ),
  }
}
