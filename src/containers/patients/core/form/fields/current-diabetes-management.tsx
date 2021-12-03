import { memo } from 'react'
import { FormSelect } from 'components/form-select'

export const CurrentDiabetesManagement = memo(() => {
  return (
    <FormSelect
      label="Current Diabetes Management"
      name="current_diabetes_management"
      options={[
        { id: '640G', title: '640G' },
        { id: '670G', title: '670G' },
        { id: '770G', title: '770G' },
        { id: 'MDT AHC', title: 'MDT AHC' },
        { id: 'Tslim X2', title: 'Tslim X2' },
        { id: 'Tslim BasallQ', title: 'Tslim BasallQ' },
        { id: 'Ypsomed', title: 'Ypsomed' },
        { id: 'Looping', title: 'Looping' },
        { id: 'Oral Agents', title: 'Oral Agents' },
        { id: 'Multiple Daily Injections', title: 'Multiple Daily Injections' },
        { id: 'Other', title: 'Other' },
      ]}
    />
  )
})
