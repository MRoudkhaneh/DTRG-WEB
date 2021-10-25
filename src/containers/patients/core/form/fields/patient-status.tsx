import { FC, memo } from 'react'
import { Select } from 'components/select'

export const PatientStatus = memo(({ control, setValue }: IPatientField) => {
  return (
    <Select
      label="Patient Status"
      name="status"
      control={control}
      setValue={setValue}
      required
    >
      <option value="potential candidate">Potential candidate</option>
      <option value="enrolled">Enrolled</option>
    </Select>
  )
})
