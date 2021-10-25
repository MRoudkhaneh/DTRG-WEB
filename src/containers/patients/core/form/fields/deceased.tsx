import { FC, memo } from 'react'
import { Select } from 'components/select'

export const Deceased = memo(({ control, setValue }: IPatientField) => {
  return (
    <Select
      label="Deceased"
      name="deceased"
      control={control}
      setValue={setValue}
    >
      <option value="No">No</option>
      <option value="Yes">Yes</option>
    </Select>
  )
})
