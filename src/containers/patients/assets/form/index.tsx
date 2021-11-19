import { memo } from 'react'
import { FormControl } from 'components/form-control'
import {
  SearchPatient,
  AssetTypeDetails,
  AssetExpireDate,
  AssetSerialNumber,
  AssetLotNumber,
  AssetType,
  AssetOwnerShip,
  AssetCategory,
  AssetStatus,
  AssetSubmit,
} from './fields'

import { usePatientAssetForm } from './use-patient-asset-form'

export const PatientAssetForm = memo(() => {
  const { onSubmit, isLoading, defaultValues } = usePatientAssetForm()

  return (
    <FormControl onSubmit={onSubmit} defaultValues={defaultValues}>
      <div className="w-full grid grid-cols-2 gap-8 mt-6">
        <SearchPatient />
        <AssetStatus />
        <AssetCategory />
        <AssetOwnerShip />
        <AssetType />
        <AssetTypeDetails />
        <AssetLotNumber />
        <AssetSerialNumber />
        <AssetExpireDate />
      </div>
      <AssetSubmit isLoading={isLoading} />
    </FormControl>
  )
})
