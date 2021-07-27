import { useCallback, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useService } from 'hooks/use-service'
import { useError } from 'hooks/use-error'
import { Api } from 'utils/api'

import { PatientInteractionListActions } from './actions'
import { PatientInteractionListDate } from './date'
import { PatientInteractionListDetails } from './details'

export const usePatientStudiesList = () => {
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
          head: 'Cuurent Study',
          key: 'interaction_type',
          width: 'w-1/3',
        },

        {
          head: 'Study Status',
          key: 'contact_details',
          width: 'w-1/3',
        },
        {
          head: 'Details',
          key: 'contact_details',
          width: 'w-1/2',
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
