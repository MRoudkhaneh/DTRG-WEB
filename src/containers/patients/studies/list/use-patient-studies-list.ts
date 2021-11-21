import { useCallback, useMemo, useState, ChangeEvent } from 'react'
import { useParams } from 'react-router-dom'
import { useService } from 'hooks/use-service'
import { useError } from 'hooks/use-error'
import { Api } from 'utils/api'
import { PatientStudiesListActions } from './actions'

export type TUsePatientStudiesList = {
  queryKey: any[]
  data: { count: number; results: any[] }
  isLoading: boolean
  page: number
  columns: TColumn[]
  onPaginate: (page: number) => void
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

export const usePatientStudiesList = (): TUsePatientStudiesList => {
  const routerParams = useParams() as any
  const { useGet } = useService()
  const { onError } = useError()

  const [params, setParams] = useState({
    page: 1,
    search: null,
    patient_id: routerParams.id,
  })

  const queryKey = useMemo(() => ['PATIENT_STUDIES_LIST', params], [params])

  const { data, isLoading, isFetching } = useGet({
    key: queryKey,
    url: `${Api.studies}`,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    onError,
  })

  return {
    queryKey,
    columns: useMemo(
      () => [
        {
          head: 'Current Study',
          key: 'current_study',
          width: 'w-1/3',
        },

        {
          head: 'Study Status',
          key: 'study_status',
          width: 'w-1/3',
        },
        {
          head: 'Status Details',
          key: 'status_details',
          width: 'w-1/2',
        },
        {
          head: '',
          width: 'w-[100px]',
          key: '',
          render: (item: any) => PatientStudiesListActions({ item, queryKey }),
        },
      ],
      [queryKey]
    ),
    data: data ? data.data : { count: 0, results: [] },
    isLoading: useMemo(() => isLoading || isFetching, [isLoading, isFetching]),
    page: useMemo(() => params.page, [params.page]),
    onPaginate: useCallback(
      (index) => {
        setParams((prev) => ({ ...prev, page: index }))
      },
      [params.page]
    ),
    onSearch: useCallback(
      (event) => {
        setTimeout(() => {
          setParams((prev: any) => ({
            ...prev,
            page: 1,
            search: event.target.value,
          }))
        }, 500)
      },
      [params.search]
    ),
  }
}
