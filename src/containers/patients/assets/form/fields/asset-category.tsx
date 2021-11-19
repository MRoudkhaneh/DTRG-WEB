import { FormSelect } from 'components/form-select'
import { memo } from 'react'

export const AssetCategory = memo(() => {
  return (
    <FormSelect name="category" label="Category" required>
      <option value="consumable">Consumable</option>
      <option value="hardware">Hardware</option>
    </FormSelect>
  )
})
