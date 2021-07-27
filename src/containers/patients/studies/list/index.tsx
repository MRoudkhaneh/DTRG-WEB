import { memo } from 'react'
import { Table } from 'components/table'

import { usePatientStudiesList } from './use-patient-studies-list'
import { PatientStudiesListToolbar } from './toolbar'

export const PatientStudiesList = memo(() => {
  const { data, isLoading, columns, onPaginate, page } = usePatientStudiesList()

  return (
    <div className="w-full flex flex-col items-end">
      <PatientStudiesListToolbar />

      <Table
        className="w-full my-10"
        data={data.results}
        total={data.count}
        page={page}
        columns={columns}
        onPaginate={onPaginate}
        loading={isLoading}
      />
    </div>
  )
})
