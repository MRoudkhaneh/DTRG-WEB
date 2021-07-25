import { FC, memo } from 'react'
import { Select } from 'components/select'
import { SelectOption } from 'components/select-option'

export const Deceased: FC<IPatientField> = memo(({ control, setValue }) => {
  return (
    <Select
      label="Deceased"
      name="deceased"
      control={control}
      setValue={setValue}
    >
      <SelectOption value="No">No</SelectOption>
      <SelectOption value="Yes">Yes</SelectOption>
    </Select>
  )
})
