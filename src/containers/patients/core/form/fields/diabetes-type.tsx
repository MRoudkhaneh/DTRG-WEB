import { FormSelect } from 'components/form-select'

export const DiabetesType = () => {
  return (
    <FormSelect label="Diabetes Type" name="diabetes_type">
      <option value="Type 1">Type 1</option>
      <option value="Type 2">Type 2</option>
      <option value="LADA">LADA</option>
      <option value="Other">Other</option>
    </FormSelect>
  )
}
