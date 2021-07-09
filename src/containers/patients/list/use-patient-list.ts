import { useCallback, useMemo, useState } from 'react'
import { useError, useService } from 'hooks'
import { Api } from 'utils'
import { PatientListActions } from './actions'

export const usePatientList = () => {
  const [params, setParams] = useState({ page: null, search: null })
  const { useGet } = useService()
  const { onError } = useError()

  const queryKey = useMemo(() => ['PATIENTS_LIST', params], [params])

  const { data, isLoading, isFetching } = useGet({
    key: queryKey,
    url: Api.patients,
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
        { head: 'Name', key: 'first_name', width: 'w-1/3' },
        { head: 'Last Name', key: 'surename', width: 'w-1/3' },
        { head: 'Birth Date', key: 'date_of_birth', width: 'w-1/3' },
        {
          head: '',
          width: ' w-[0px]',
          render: (item) => PatientListActions({ item, queryKey }),
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
  }
}
