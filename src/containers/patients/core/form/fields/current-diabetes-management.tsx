import { FC, memo } from 'react'
import { Select } from 'components/select'

export const CurrentDiabetesManagement: FC<IPatientField> = memo(
  ({ control, setValue }) => {
    return (
      <Select
        label="Current Diabetes Management"
        name="current_diabetes_management"
        control={control}
        setValue={setValue}
      >
        <option value="640G">640G</option>
        <option value="670G">670G</option>
        <option value="770G">770G</option>
        <option value="MDT AHCL">MDT AHCL</option>
        <option value="Tslim X2">Tslim X2</option>
        <option value="Tslim BasallQ">Tslim BasallQ</option>
        <option value="Ypsomed">Ypsomed</option>
        <option value="Looping">Looping</option>
        <option value="Oral Agents">Oral Agents</option>
        <option value="Multiple Daily Injections">
          Multiple Daily Injections
        </option>
        <option value="Other">Other</option>
      </Select>
    )
  }
)
