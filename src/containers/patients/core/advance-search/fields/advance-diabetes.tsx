import { FormSelect } from 'components/form-select'

export const AdvanceDiabetes = () => {
  return (
    <FormSelect name="diabetes_type" label="Diabetes type">
      <option value="Type 1">Type 1</option>
      <option value="Type 2">Type 2</option>
      <option value="LADA">LADA</option>
      <option value="Other">Other</option>
    </FormSelect>
  )
}
