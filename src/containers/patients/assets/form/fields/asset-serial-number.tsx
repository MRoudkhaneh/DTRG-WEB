import { FormInput } from 'components/form-input'
import { memo } from 'react'

export const AssetSerialNumber = memo(() => {
  return (
    <FormInput
      name="serial_number"
      label="Serial Number"
      placeholder="Enter contact admin"
      required
    />
  )
})
