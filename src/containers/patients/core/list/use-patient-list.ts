import { useCallback, useMemo, useState, ChangeEvent } from 'react'
import { useService } from 'hooks/use-service'
import { useError } from 'hooks/use-error'
import { Api } from 'utils/api'
import { PatientListActions } from './actions'
import * as FileSaver from 'file-saver'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { patientParamsAtom, patientCurrentAtom } from 'provider/recoil/atoms'

export type TUsePatientList = {
  onResetFilter: () => void
  current: any
  exportLoading: boolean
  search: string | null
  data: { count: number; results: any[] }
  isLoading: boolean
  page: number
  columns: TColumn[]
  onPaginate: (page: number) => void
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void
  onRowClick: (item: any) => void
  onExport: () => void
}

export const usePatientList = (): TUsePatientList => {
  const { useGet } = useService()
  const { onError } = useError()
  const [params, setParams] = useRecoilState(patientParamsAtom)
  const [current, setCurrent] = useRecoilState(patientCurrentAtom)
  const onResetFilter = useResetRecoilState(patientParamsAtom)

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
    onSuccess: ({ data }: { data: any }) => {
      const fileType =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
      const fileExtension = '.csv'
      const newData = new Blob([data], { type: fileType })
      setIsExport(false)
      FileSaver.saveAs(newData, 'Patients' + fileExtension)
    },
  })

  return {
    onResetFilter,
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
          key: '',
          render: (item: any) => PatientListActions({ item, queryKey }),
        },
      ],
      [queryKey]
    ),
    onPaginate: useCallback((page) => {
      setParams((prev) => ({ ...prev, page }))
    }, []),
    onSearch: useCallback(
      (event) =>
        setParams((prev: any) => ({
          ...prev,
          name: event.target.value,
          page: 1,
        })),
      []
    ),
    onRowClick: useCallback((item) => setCurrent(item), []),
    onExport: useCallback(() => setIsExport(true), []),
  }
}
