import { FormSelect } from 'components/form-select'

export const Availability = () => {
  return (
    <FormSelect
      label="Availability"
      name="availability"
      options={[
        { id: 'Daily', title: 'Daily' },
        { id: 'Weekly', title: 'Weekly' },
        { id: 'Fortnightly', title: 'Fortnightly' },
        { id: 'Monthly', title: 'Monthly' },
      ]}
    />
  )
}
