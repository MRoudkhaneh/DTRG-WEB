import { FormSelect } from 'components/form-select'
import { memo } from 'react'

export const AssetStatus = memo(() => {
  return (
    <FormSelect name="status" label="Status" required>
      <option value="warehouse">Warehouse</option>
      <option value="allocated_not_dispensed">Allocated-not-dispensed</option>
      <option value="allocated_dispensed">Allocated-dispensed</option>
      <option value="recalled">Recalled</option>
      <option value="returned">Returned</option>
      <option value="complaint">Complaint</option>
    </FormSelect>
  )
})
