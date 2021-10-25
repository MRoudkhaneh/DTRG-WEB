import { FC, memo } from 'react'
import { Select } from 'components/select'

export const Gender = memo(({ control, setValue }: IPatientField) => {
  return (
    <Select
      control={control}
      label="Gender"
      name="gender"
      setValue={setValue}
      required
    >
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </Select>
  )
})
