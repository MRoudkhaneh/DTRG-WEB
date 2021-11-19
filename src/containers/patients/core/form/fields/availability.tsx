import { FormSelect } from 'components/form-select'

export const Availability = () => {
  return (
    <FormSelect label="Availability" name="availability">
      <option value="Daily">Daily</option>
      <option value="Weekly">Weekly</option>
      <option value="Fortnightly">Fortnightly</option>
      <option value="Monthly">Monthly</option>
    </FormSelect>
  )
}
