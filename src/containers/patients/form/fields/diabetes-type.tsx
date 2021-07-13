import { FC, memo } from 'react'
import { Select } from 'components/select'
import { SelectOption } from 'components/select-option'

export const DiabetesType: FC<IPatientField> = memo(({ control, setValue }) => {
  return (
    <Select
      label="Diabetes Type"
      name="diabetes_type"
      control={control}
      setValue={setValue}
    >
      <SelectOption value="Type 1">Type 1</SelectOption>
      <SelectOption value="Type 2">Type 2</SelectOption>
      <SelectOption value="LADA">LADA</SelectOption>
      <SelectOption value="Other">Other</SelectOption>
    </Select>
  )
})
