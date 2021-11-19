import { FormSelect } from 'components/form-select'

export const PatientStatus = () => {
  return (
    <FormSelect label="Patient Status" name="status" required>
      <option value="potential candidate">Potential candidate</option>
      <option value="enrolled">Enrolled</option>
    </FormSelect>
  )
}
