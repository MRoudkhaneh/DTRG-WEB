import { FormSelect } from 'components/form-select'
import { memo } from 'react'

export const AssetCategory = memo(() => {
  return (
    <FormSelect
      name="category"
      label="Category"
      required
      options={[
        { id: 'consumable', title: 'Consumable' },
        { id: 'hardware', title: 'Hardware' },
      ]}
    />
  )
})
