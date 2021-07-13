import { FC, memo } from 'react'
import { Select } from 'components/select'
import { SelectOption } from 'components/select-option'

export const InfusionLineType: FC<IPatientField> = memo(
  ({ control, setValue }) => {
    return (
      <Select
        label="Infusion Line Type"
        name="infusion_line_type"
        control={control}
        setValue={setValue}
      >
        <SelectOption value=" 90 Degree">90 Degree</SelectOption>
        <SelectOption value="45 Degree">45 Degree</SelectOption>
        <SelectOption value="Metal">Metal</SelectOption>
      </Select>
    )
  }
)
