import { FC, memo } from 'react'
import { Select } from 'components/select'

export const ComputerType: FC<IPatientField> = memo(
  ({ control, state, setValue }) => {
    return (
      <Select
        label="Computer Type"
        name="computer_type"
        control={control}
        value={state}
        setValue={setValue}
      >
        <option value="Windows" selected={state === 'Windows'}>
          Windows
        </option>
        <option value="Mac" selected={state === 'Mac'}>
          Mac
        </option>
        <option value="Both" selected={state === 'Both'}>
          Both
        </option>
      </Select>
    )
  }
)
