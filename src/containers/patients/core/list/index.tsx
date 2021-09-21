import { lazy, memo, Suspense } from 'react'
import { Table } from 'components/table'
import { Skeleton } from 'components/skeleton'

import { usePatientList } from './use-patient-list'
import { PatientListToolbar } from './toolbar'

const PatientListDetails = lazy(() =>
  import('./details').then((module) => ({ default: module.PatientListDetails }))
)

export const PatientList = memo(() => {
  const { data, columns, onPaginate, isLoading, page, onSearch, search } =
    usePatientList()

  return (
    <div className="w-full">
      <PatientListToolbar onSearch={onSearch} search={search} />
      <Suspense fallback={<Skeleton />}>
        <Table
          className="w-full my-10"
          data={data.results}
          total={data.count}
          page={page}
          columns={columns}
          onPaginate={onPaginate}
          loading={isLoading}
          expand={(item) => <PatientListDetails item={item} />}
        />
      </Suspense>
    </div>
  )
})
