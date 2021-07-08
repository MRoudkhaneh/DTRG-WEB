import { memo } from 'react'
import { Table } from 'components'

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
        columns={columns}
        data={data.results}
        total={data.count}
        loading={isLoading}
        page={page}
        onPaginate={onPaginate}
      />
    </div>
  )
})
