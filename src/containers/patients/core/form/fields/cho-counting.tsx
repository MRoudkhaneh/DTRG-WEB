import { memo } from 'react'
import { useWatch } from 'react-hook-form'
import { FormMultiSelect } from 'components/form-multi-select'

export const CHOCounting = memo(() => {
  const state = useWatch({ name: 'cho_counting' })

  return (
    <FormMultiSelect
      label="CHO Counting"
      name="cho_counting"
      options={[
        { id: 'DAFNE', title: 'DAFNE' },
        {
          id: 'Yes',
          title: 'Yes',
          disabled: state && state.includes('No'),
        },
        {
          id: 'No',
          title: 'No',
          disabled: state && state.includes('Yes'),
        },
        { id: 'Other', title: 'Other' },
      ]}
    />
  )
})
