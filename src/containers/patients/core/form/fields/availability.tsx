import { FC, memo } from 'react'
import { Select } from 'components/select'

export const Availability: FC<IPatientField> = memo(({ control, setValue }) => {
  return (
    <Select
      label="Availability"
      name="availability"
      control={control}
      setValue={setValue}
    >
      <option value="Daily">Daily</option>
      <option value="Weekly">Weekly</option>
      <option value="Fortnightly">Fortnightly</option>
      <option value="Monthly">Monthly</option>
    </Select>
  )
})
