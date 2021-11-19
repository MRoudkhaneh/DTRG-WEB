import { FormDatePicker } from 'components/form-datepicker'
import { memo } from 'react'

export const AssetExpireDate = memo(() => {
  return (
    <FormDatePicker
      name="expiration_date"
      label="Expiration Date"
      required
      later
    />
  )
})
