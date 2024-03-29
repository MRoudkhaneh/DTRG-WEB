import { useCallback, useMemo, useState, ChangeEvent } from 'react'
import { useParams } from 'react-router-dom'
import { useService } from 'hooks/use-service'
import { useError } from 'hooks/use-error'
import { Api } from 'utils/api'

import { PatientInteractionListActions } from './actions'
import { PatientInteractionListDate } from './date'
import { PatientInteractionListDetails } from './details'

export type TUsePatientInteractionList = {
  queryKey: any[]
  columns: TColumn[]
  data: { count: number; results: any[] }
  isLoading: boolean
  page: number
  onPaginate: (page: number) => void
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

export const usePatientInteractionList = (): TUsePatientInteractionList => {
  const routerParams = useParams() as any
  const { useGet } = useService()
  const { onError } = useError()

  const [params, setParams] = useState({
    page: 1,
    search: null,
    patient_id: routerParams.id,
  })

  const queryKey = useMemo(() => ['PATIENT_INTERACTION_LIST', params], [params])

  const { data, isLoading, isFetching } = useGet({
    key: queryKey,
    url: `${Api.interactions}`,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    onError,
  })

  return {
    queryKey,
    columns: useMemo(
      () => [
        {
          head: 'Type',
          key: 'interaction_type',
          width: 'w-1/6',
        },
        { head: 'Admin', key: 'contact_admin', width: 'w-1/6' },
        {
          head: 'Date',
          key: 'interaction_datetime',
          width: 'w-1/6',
          render: (item: any) => PatientInteractionListDate({ item }),
        },
        {
          head: 'Details',
          key: 'contact_details',
          width: 'w-4/5',
          render: (item: any) => PatientInteractionListDetails({ item }),
        },
        {
          head: '',
          width: 'w-[100px]',
          key: '',
          render: (item: any) =>
            PatientInteractionListActions({ item, queryKey }),
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
