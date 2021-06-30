import { Table } from 'components'
import { FC, memo } from 'react'
import { PatientAssetsDetails } from './patient-assets-details'
import { usePatientAssets } from './use-patient-assets'
import { PatientAssetsToolbar } from './patient-assets-toolbar'

export const PatientAssets: FC<{ item?: any }> = memo(() => {
  const { data, columns, page, onPaginate, isLoading } = usePatientAssets()

  return (
    <div className="w-full">
      <PatientAssetsToolbar />
      <Table
        className="w-full my-10"
        columns={columns}
        total={data.count}
        data={data.results}
        page={page}
        onPaginate={onPaginate}
        expand={(item) => <PatientAssetsDetails />}
        loading={isLoading}
      />
    </div>
  )
})
