import { FC, memo } from 'react'
import { Select } from 'components/select'
import { SelectOption } from 'components/select-option'
import { useWatch } from 'react-hook-form'

export const CHOCounting = memo(({ control, setValue }: IPatientField) => {
  const state = useWatch({ control, name: 'cho_counting' })
  return (
    <Select
      label="CHO Counting"
      name="cho_counting"
      control={control}
      setValue={setValue}
      multiple
    >
      <SelectOption value="DAFNE" selected={state && state.includes('DAFNE')}>
        DAFNE
      </SelectOption>
      <SelectOption value="Food App">Food App</SelectOption>
      <SelectOption value="Yes" disabled={state && state.includes('No')}>
        Yes
      </SelectOption>
      <SelectOption disabled={state && state.includes('Yes')} value="No">
        No
      </SelectOption>
      <SelectOption value="Other">Other</SelectOption>
    </Select>
  )
})
