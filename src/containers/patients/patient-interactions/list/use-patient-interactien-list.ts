import { useCallback, useMemo, useState } from 'react'
import { useError, useService } from 'hooks'
import { Api } from 'utils'

import { PatientInteractionListActions } from './actions'
import { PatientInteractionListDate } from './date'
import { PatientInteractionListDetails } from './details'
import { useParams } from 'react-router-dom'

const columns = [
  {
    head: 'Type',
    key: 'interaction_type',
    width: 'w-1/6',
  },
  { head: 'Contact admin', key: 'contact_admin', width: 'w-1/6' },
  {
    head: 'Date',
    key: 'interaction_datetime',
    width: 'w-1/6',
    render: (item) => PatientInteractionListDate({ item }),
  },

  {
    head: 'Contact details',
    key: 'contact_details',
    width: 'w-3/4',
    render: (item) => PatientInteractionListDetails({ item }),
  },
  {
    head: '',
    width: 'w-[0px]',
    render: (item) => PatientInteractionListActions({ item }),
  },
]

export const usePatientInteractionList = () => {
  const routerParams = useParams() as any
  const [params, setParams] = useState({ page: null, search: null })
  const { useGet } = useService()
  const { onError } = useError()

  const { data, isLoading, isFetching } = useGet({
    key: ['PATIENT_INTERACTION_LIST', params],
    url: `${Api.interactions}${routerParams.id}/`,
    onFocus: false,
    keepPreviousData: true,
    onError,
  })

  return {
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
