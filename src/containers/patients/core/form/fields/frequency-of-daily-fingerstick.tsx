import { FC, memo } from 'react'
import { Select } from 'components/select'

export const FrequencyOfDailyFingerstick: FC<IPatientField> = memo(
  ({ control, setValue }) => {
    return (
      <Select
        label="Frequency of Daily Fingerstick"
        name="frequency_of_daily_fingerstick"
        control={control}
        setValue={setValue}
      >
        <option value="0">0</option>
        <option value="0-2">0-2</option>
        <option value=" 2-4">2-4</option>
        <option value="4-8">4-8</option>
        <option value=">8">{'>8'}</option>
      </Select>
    )
  }
)
