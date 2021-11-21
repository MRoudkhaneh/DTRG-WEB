import { useCallback, useMemo, useState, ChangeEvent } from 'react'
import { useParams, Params } from 'react-router-dom'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { Api } from 'utils/api'
import { PatientAssetActions } from './actions'
import * as FileSaver from 'file-saver'

type TAssetParmas = {
  page: number
  search: string | null
  patient_id: string | null
}

export type TUsePatientAsset = {
  isSuccess: boolean
  isLoading: boolean
  queryKey: any[]
  data: { count: number; results: any[] }
  exportLoading: boolean
  page: number
  columns: TColumn[]
  onPaginate: (page: number) => void
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void
  onExport: () => void
}

export const usePatientAssets = (): TUsePatientAsset => {
  const { useGet } = useService()
  const { onError } = useError()
  const routeParams: Readonly<Params<'id'>> = useParams()

  const [isExport, setIsExport] = useState<boolean>(false)
  const [params, setParams] = useState<TAssetParmas>({
    page: 1,
    search: null,
    patient_id: routeParams.id || null,
  })

  const queryKey = useMemo(() => ['PATIENTS_ASSETS_LIST', params], [params])

  const { data, isLoading, isFetching, isSuccess } = useGet({
    key: queryKey,
    url: Api.assets,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    onError,
  })

  const { isFetching: exportLoading } = useGet({
    url: `${Api.assets}/export/`,
    key: ['ASSET_EXPORT'],
    refetchOnWindowFocus: false,
    keepPreviousData: false,
    enabled: isExport,
    onSuccess: ({ data }: { data: any }) => {
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
        { head: 'Owner', key: 'patient_name', width: 'w-1/3' },
        { head: 'Ownership', key: 'ownership', width: 'w-1/3' },
        { head: 'Serial Number', key: 'serial_number', width: 'w-1/3' },
        {
          head: '',
          width: 'w-[0px]',
          key: '',
          render: (item: any) => PatientAssetActions({ item, queryKey }),
        },
      ],
      [queryKey]
    ),
    onPaginate: useCallback((index) => {
      setParams((prev) => ({ ...prev, page: index }))
    }, []),
    onSearch: useCallback((event) => {
      setTimeout(() => {
        setParams((prev) => ({
          ...prev,
          page: 1,
          search: event.target.value,
        }))
      }, 500)
    }, []),
    onExport: useCallback(() => setIsExport(true), []),
  }
}
