import { useCallback, useMemo, useState } from 'react'
import { useError, useService } from 'hooks'
import { Api } from 'utils'

import { PatientInteractionListActions } from './actions'
import { PatientInteractionListDate } from './date'
import { PatientInteractionListDetails } from './details'
import { useParams } from 'react-router-dom'

export const usePatientInteractionList = () => {
  const routerParams = useParams() as any
  const [params, setParams] = useState({
    page: 1,
    search: null,
    patient_id: routerParams.id,
  })
  const { useGet } = useService()
  const { onError } = useError()

  const queryKey = useMemo(() => ['PATIENT_INTERACTION_LIST', params], [params])

  const { data, isLoading, isFetching } = useGet({
    key: ['PATIENT_INTERACTION_LIST', params],
    url: `${Api.interactions}`,
    onFocus: false,
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
          render: (item) => PatientInteractionListDate({ item }),
        },
        {
          head: 'Details',
          key: 'contact_details',
          width: 'w-4/5',
          render: (item) => PatientInteractionListDetails({ item }),
        },
        {
          head: '',
          width: 'w-[100px]',
          render: (item) => PatientInteractionListActions({ item, queryKey }),
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
          setParams((prev) => ({
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
