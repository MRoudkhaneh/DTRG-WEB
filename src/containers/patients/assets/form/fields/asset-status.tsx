import { FormSelect } from 'components/form-select'
import { memo } from 'react'

export const AssetStatus = memo(() => {
  return (
    <FormSelect
      name="status"
      label="Status"
      required
      options={[
        { id: 'warehouse', title: 'Warehouse' },
        { id: 'allocated_not_dispensed', title: 'Allocated-not-dispensed' },
        { id: 'allocated_dispensed', title: 'Allocated-dispensed' },
        { id: 'recalled', title: 'Recalled' },
        { id: 'returned', title: 'Returned' },
        { id: 'complaint', title: 'Complaint' },
      ]}
    />
  )
})
