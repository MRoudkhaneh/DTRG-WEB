import { FC, memo } from 'react'
import { Select } from 'components/select'

export const Deceased: FC<IPatientField> = memo(({ control, setValue }) => {
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
