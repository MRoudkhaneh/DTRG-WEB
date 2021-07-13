import { FC, memo } from 'react'
import { Select } from 'components/select'
import { SelectOption } from 'components/select-option'

export const CurrentDiabetesManagement: FC<IPatientField> = memo(
  ({ control, setValue }) => {
    return (
      <Select
        label="Current Diabetes Management"
        name="current_diabetes_management"
        control={control}
        setValue={setValue}
      >
        <SelectOption value="640G">640G</SelectOption>
        <SelectOption value="670G">670G</SelectOption>
        <SelectOption value="770G">770G</SelectOption>
        <SelectOption value="MDT AHCL">MDT AHCL</SelectOption>
        <SelectOption value="Tslim X2">Tslim X2</SelectOption>
        <SelectOption value="Tslim BasallQ">Tslim BasallQ</SelectOption>
        <SelectOption value="Ypsomed">Ypsomed</SelectOption>
        <SelectOption value="Looping">Looping</SelectOption>
        <SelectOption value="Multiple Daily Injections">
          Multiple Daily Injections
        </SelectOption>
        <SelectOption value="Other">Other</SelectOption>
      </Select>
    )
  }
)
