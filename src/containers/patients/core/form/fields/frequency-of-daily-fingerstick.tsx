import { FormSelect } from 'components/form-select'

export const FrequencyOfDailyFingerstick = () => {
  return (
    <FormSelect
      label="Frequency of Daily Fingerstick"
      name="frequency_of_daily_fingerstick"
      options={[
        { id: '0', title: '0' },
        { id: '0-2', title: '0-2' },
        { id: '2-4', title: '2-4' },
        { id: '4-8', title: '4-8' },
        { id: '>8', title: '>8' },
      ]}
    />
  )
}
