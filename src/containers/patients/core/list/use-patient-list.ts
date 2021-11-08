import { useCallback, useMemo, useState } from 'react'
import { useService } from 'hooks/use-service'
import { useError } from 'hooks/use-error'
import { Api } from 'utils/api'
import { useUi } from 'hooks/use-ui'
import { PatientListActions } from './actions'
import * as FileSaver from 'file-saver'

export const usePatientList = () => {
  const { useGet } = useService()
  const { onError } = useError()
  const {
    uiState: { params, current },
    setParams,
    setCurrent,
  } = useUi()

  const [isExport, setIsExport] = useState(false)

  const queryKey = useMemo(() => ['PATIENTS_LIST', { ...params }], [params])

  const { data, isLoading, isFetching } = useGet({
    key: queryKey,
    url: Api.patients,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    onError,
  })

  const { isFetching: exportLoading } = useGet({
    url: `${Api.patients}export`,
    key: ['PATIENT_EXPORT'],
    refetchOnWindowFocus: false,
    keepPreviousData: false,
    enabled: isExport,
    onSuccess: ({ data }) => {
      const fileType =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
      const fileExtension = '.csv'
      const newData = new Blob([data], { type: fileType })
      setIsExport(false)
      FileSaver.saveAs(newData, 'Patients' + fileExtension)
    },
  })

  return {
    current,
    exportLoading,
    search: params.name,
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
    onPaginate: useCallback((page) => {
      setParams({ page })
    }, []),
    onSearch: useCallback(
      (event) => setParams({ name: event.target.value, page: 1 }),
      []
    ),
    onRowClick: useCallback((item) => setCurrent(item), []),
    onExport: useCallback(() => setIsExport(true), []),
  }
}
