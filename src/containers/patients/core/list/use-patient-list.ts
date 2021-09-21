import { useCallback, useMemo, useState } from 'react'
import { useService } from 'hooks/use-service'
import { useError } from 'hooks/use-error'
import { Api } from 'utils/api'
import { useUi } from 'hooks/use-ui'
import { PatientListActions } from './actions'

export const usePatientList = () => {
  const { useGet } = useService()
  const { onError } = useError()
  const {
    uiState: { params },
    setParams,
  } = useUi()

  const queryKey = useMemo(() => ['PATIENTS_LIST', params], [params])

  const { data, isLoading, isFetching } = useGet({
    key: queryKey,
    url: Api.patients,
    onFocus: false,
    keepPreviousData: true,
    onError,
  })

  return {
    search: params.search,
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
      (page) => {
        setParams({ page })
      },
      [params.page]
    ),
    onSearch: useCallback(
      (event) => setParams({ search: event.target.value }),
      [params.search]
    ),
  }
}
