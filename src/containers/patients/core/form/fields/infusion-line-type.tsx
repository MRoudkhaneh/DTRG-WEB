import { FC, memo } from 'react'
import { Select } from 'components/select'

export const InfusionLineType = memo(({ control, setValue }: IPatientField) => {
  return (
    <Select
      label="Infusion Line Type"
      name="infusion_line_type"
      control={control}
      setValue={setValue}
    >
      <option value=" 90 Degree">90 Degree</option>
      <option value="45 Degree">45 Degree</option>
      <option value="Metal">Metal</option>
    </Select>
  )
})
