import { FC, memo } from 'react'
import { Select } from 'components/select'
import { SelectOption } from 'components/select-option'

export const Gender: FC<IPatientField> = memo(({ control, setValue }) => {
  return (
    <Select
      control={control}
      label="Gender"
      name="gender"
      setValue={setValue}
      required
    >
      <SelectOption value="Male">Male</SelectOption>
      <SelectOption value="Female">Female</SelectOption>
    </Select>
  )
})
