import { memo } from 'react'
import { Table } from 'components/table'

import { PatientAssetsDetails } from './details'
import { usePatientAssets } from './use-patient-assets'
import { PatientAssetsToolbar } from './toolbar'

export const PatientAssets = memo(() => {
  const {
    data,
    columns,
    page,
    onPaginate,
    isLoading,
    onSearch,
    queryKey,
    onExport,
    exportLoading,
  } = usePatientAssets()

  return (
    <div className="w-full">
      <PatientAssetsToolbar
        onSearch={onSearch}
        queryKey={queryKey}
        onExport={onExport}
        exportLoading={exportLoading}
      />
      <Table
        className="w-full my-10"
        columns={columns}
        total={data.count}
        data={data.results}
        page={page}
        onPaginate={onPaginate}
        expand={(item) => <PatientAssetsDetails item={item} />}
        loading={isLoading}
      />
    </div>
  )
})
