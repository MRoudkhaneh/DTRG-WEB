import { FormSelect } from 'components/form-select'

export const Deceased = () => {
  return (
    <FormSelect label="Deceased" name="deceased">
      <option value="No">No</option>
      <option value="Yes">Yes</option>
    </FormSelect>
  )
}
