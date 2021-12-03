import { FormSelect } from 'components/form-select'

export const Gender = () => {
  return (
    <FormSelect
      label="Gender"
      name="gender"
      required
      options={[
        { id: 'Male', title: 'Male' },
        { id: 'Female', title: 'Female' },
      ]}
    />
  )
}
