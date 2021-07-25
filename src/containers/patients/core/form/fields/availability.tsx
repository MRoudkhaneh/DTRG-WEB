import { FC, memo } from 'react'
import { Select } from 'components/select'
import { SelectOption } from 'components/select-option'

export const Availability: FC<IPatientField> = memo(({ control, setValue }) => {
  return (
    <Select
      label="Availability"
      name="availability"
      control={control}
      setValue={setValue}
    >
      <SelectOption value="Daily">Daily</SelectOption>
      <SelectOption value="Weekly">Weekly</SelectOption>
      <SelectOption value="Fortnightly">Fortnightly</SelectOption>
      <SelectOption value="Monthly">Monthly</SelectOption>
    </Select>
  )
})
