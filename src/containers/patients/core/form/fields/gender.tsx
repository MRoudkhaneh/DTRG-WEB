import { FC, memo } from 'react'
import { Select } from 'components/select'

export const Gender: FC<IPatientField> = memo(({ control, setValue }) => {
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
