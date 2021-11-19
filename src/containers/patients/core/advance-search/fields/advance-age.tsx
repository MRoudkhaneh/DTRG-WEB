import { FormMultiSelect } from 'components/form-multi-select'
import { memo } from 'react'

export const AdvanceAgeCategory = memo(() => {
  return (
    <FormMultiSelect
      name="age_category"
      label="Age category"
      options={[
        { id: '18-20', title: '18-20' },
        { id: '21-30', title: '21-30' },
        { id: '31-40', title: '31-40' },
        { id: '41-50', title: '41-50' },
        { id: '51-60', title: '51-60' },
        { id: '61-70', title: '61-70' },
        { id: '71-80', title: '71-80' },
        { id: '81-90', title: '81-90' },
        { id: '91-100', title: '91-100' },
      ]}
    />
  )
})
