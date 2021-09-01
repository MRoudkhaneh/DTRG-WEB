import { useCallback, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { Api } from 'utils/api'
import { PatientAssetActions } from './actions'

export const usePatientAssets = () => {
  const { id } = useParams() as any
  const [params, setParams] = useState({
    page: 1,
    patient_id: id,
  })
  const { useGet } = useService()
  const { onError } = useError()

  const queryKey = useMemo(() => ['PATIENTS_ASSETS_LIST', params], [params])

  const { data, isLoading, isFetching, isSuccess } = useGet({
    key: queryKey,
    url: Api.assets,
    onFocus: false,
    keepPreviousData: true,
    onError,
  })

  return {
    isSuccess,
    data: data ? data.data : { count: 0, results: [] },
    isLoading: useMemo(() => isLoading || isFetching, [isLoading, isFetching]),
    page: useMemo(() => params.page, [params.page]),
    columns: useMemo(
      () => [
        { head: 'Lot number', key: 'lot_number', width: 'w-1/6' },
        { head: 'Serial Number', key: 'serial_number', width: 'w-1/6' },
        { head: 'Ownership', key: 'ownership', width: 'w-1/5' },
        { head: 'Category', key: 'category', width: 'w-1/6' },
        { head: 'Type', key: 'type', width: 'w-1/6' },
        { head: 'Expiration date', key: 'expiration_date', width: 'w-1/6' },
        {
          head: '',
          width: 'w-[0px]',
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
