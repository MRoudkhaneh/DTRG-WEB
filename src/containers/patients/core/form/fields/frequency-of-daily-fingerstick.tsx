import { FormSelect } from 'components/form-select'

export const FrequencyOfDailyFingerstick = () => {
  return (
    <FormSelect
      label="Frequency of Daily Fingerstick"
      name="frequency_of_daily_fingerstick"
    >
      <option value="0">0</option>
      <option value="0-2">0-2</option>
      <option value=" 2-4">2-4</option>
      <option value="4-8">4-8</option>
      <option value=">8">{'>8'}</option>
    </FormSelect>
  )
}
