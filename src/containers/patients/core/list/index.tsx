import { memo, lazy } from 'react'
import { Table } from 'components/table'
import { usePatientList } from './use-patient-list'
import { PatientListToolbar } from './toolbar'

const PatientListDetails = lazy(() =>
  import('./details').then((module) => ({ default: module.PatientListDetails }))
)

export const PatientList = memo(() => {
  const {
    data,
    columns,
    onPaginate,
    isLoading,
    page,
    onSearch,
    search,
    onRowClick,
    current,
    onExport,
    exportLoading,
    onResetFilter,
  } = usePatientList()

  return (
    <div className="w-full">
      <PatientListToolbar
        onSearch={onSearch}
        search={search}
        onExport={onExport}
        exportLoading={exportLoading}
        onResetFilter={onResetFilter}
      />
      <Table
        className="w-full my-10"
        data={data.results}
        total={data.count}
        page={page}
        columns={columns}
        onPaginate={onPaginate}
        loading={isLoading}
        onRowClick={onRowClick}
        expanded={current}
        expand={(item) => <PatientListDetails item={item} />}
      />
    </div>
  )
})
