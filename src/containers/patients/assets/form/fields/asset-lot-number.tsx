import { FormInput } from 'components/form-input'
import { memo } from 'react'

export const AssetLotNumber = memo(() => {
  return (
    <FormInput
      name="lot_number"
      label="Lot Number"
      placeholder="Enter contact admin"
      required
    />
  )
})
