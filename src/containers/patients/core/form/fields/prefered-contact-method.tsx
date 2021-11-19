import { FormSelect } from 'components/form-select'

export const PreferedContactMethod = () => {
  return (
    <FormSelect label="Prefered Contact Method" name="preferred_contact_method">
      <option value="Email">Email</option>
      <option value="Phone">Phone</option>
      <option value="Either">Either</option>
    </FormSelect>
  )
}
