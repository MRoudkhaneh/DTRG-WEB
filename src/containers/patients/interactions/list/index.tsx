import { memo } from 'react'
import { Table } from 'components/table'

import { usePatientInteractionList } from './use-patient-interactien-list'
import { PatientinteractionListToolbar } from './toolbar'

export const PatientInteractionsList = memo(() => {
  const { data, isLoading, columns, onPaginate, page } =
    usePatientInteractionList()

  return (
    <div className="w-full flex flex-col items-end">
      <PatientinteractionListToolbar />

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
