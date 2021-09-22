import { useCallback, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { Api } from 'utils/api'
import { PatientAssetActions } from './actions'
import * as FileSaver from 'file-saver'

export const usePatientAssets = () => {
  const routeParams: { id: string } = useParams()
  const { useGet } = useService()
  const { onError } = useError()
  const [isExport, setIsExport] = useState(false)
  const [params, setParams] = useState({
    page: 1,
    search: null,
    patient_id: routeParams.id || null,
  })

  const queryKey = useMemo(() => ['PATIENTS_ASSETS_LIST', params], [params])

  const { data, isLoading, isFetching, isSuccess } = useGet({
    key: queryKey,
    url: Api.assets,
    onFocus: false,
    keepPreviousData: true,
    onError,
  })

  const { isFetching: exportLoading } = useGet({
    url: `${Api.assets}/export/`,
    key: ['ASSET_EXPORT'],
    onFocus: false,
    keepPreviousData: false,
    enabled: isExport,
    onSuccess: ({ data }) => {
      const fileType =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
      const fileExtension = '.csv'
      const newData = new Blob([data], { type: fileType })
      setIsExport(false)
      FileSaver.saveAs(newData, 'Assets' + fileExtension)
    },
  })

  return {
    queryKey,
    isSuccess,
    exportLoading,
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
        { head: 'Status', key: 'status', width: 'w-1/6' },
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
    onSearch: useCallback(
      (event) => {
        setTimeout(() => {
          setParams((prev) => ({
            ...prev,
            page: 1,
            search: event.target.value,
          }))
        }, 500)
      },
      [params.search]
    ),
    onExport: useCallback(() => setIsExport(true), [isExport]),
  }
}
