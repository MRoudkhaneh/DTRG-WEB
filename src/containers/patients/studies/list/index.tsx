import { memo } from 'react'
import { Table } from 'components/table'

import { usePatientStudiesList } from './use-patient-studies-list'
import { PatientStudiesListToolbar } from './toolbar'
import { PreviousStudy } from './previous-study'

export const PatientStudiesList = memo(() => {
  const { data, isLoading, columns, onPaginate, page } = usePatientStudiesList()

  return (
    <div className="w-full flex flex-col items-end">
      <PatientStudiesListToolbar />
      <div className="w-full flex my-10 space-x-14">
        <Table
          className="w-3/4 "
          data={data.results}
          total={data.count}
          page={page}
          columns={columns}
          onPaginate={onPaginate}
          loading={isLoading}
        />
        <PreviousStudy />
      </div>
    </div>
  )
})
