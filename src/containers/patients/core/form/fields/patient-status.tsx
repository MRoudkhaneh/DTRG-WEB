import { FC, memo } from 'react'
import { Select } from 'components/select'
import { SelectOption } from 'components/select-option'

export const PatientStatus: FC<IPatientField> = memo(
  ({ control, setValue }) => {
    return (
      <Select
        label="Patient Status"
        name="patient_status"
        control={control}
        setValue={setValue}
        required
      >
        <SelectOption value="potential candidate">
          potential candidate
        </SelectOption>
        <SelectOption value="enrolled">enrolled</SelectOption>
      </Select>
    )
  }
)
