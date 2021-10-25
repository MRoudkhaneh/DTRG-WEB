import { FC, memo } from 'react'
import { Select } from 'components/select'

export const DiabetesType = memo(({ control, setValue }: IPatientField) => {
  return (
    <Select
      label="Diabetes Type"
      name="diabetes_type"
      control={control}
      setValue={setValue}
    >
      <option value="Type 1">Type 1</option>
      <option value="Type 2">Type 2</option>
      <option value="LADA">LADA</option>
      <option value="Other">Other</option>
    </Select>
  )
})
