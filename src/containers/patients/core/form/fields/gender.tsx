import { FormSelect } from 'components/form-select'

export const Gender = () => {
  return (
    <FormSelect label="Gender" name="gender" required>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </FormSelect>
  )
}
