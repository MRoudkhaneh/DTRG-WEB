import { useCallback, useMemo, useState } from 'react'
import { useError, useService } from 'hooks'
import { Api } from 'utils'
import { PatientListActions } from './actions'

const columns = [
  { head: 'Name', key: 'first_name', width: 'w-1/3' },
  { head: 'Last Name', key: 'surename', width: 'w-1/3' },
  { head: 'Birth Date', key: 'date_of_birth', width: 'w-1/3' },
  {
    head: '',
    width: ' w-[0px]',
    render: (item) => PatientListActions({ item }),
  },
]

export const usePatientList = () => {
  const [params, setParams] = useState({ page: null, search: null })
  const { useGet } = useService()
  const { onError } = useError()

  const { data, isLoading, isFetching } = useGet({
    key: ['PATIENTS_LIST', params],
    url: Api.patients,
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
