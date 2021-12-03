import { FormSelect } from 'components/form-select'

export const PatientStatus = () => {
  return (
    <FormSelect
      label="Patient Status"
      name="status"
      required
      options={[
        { id: 'potential candidate', title: 'Potential candidate' },
        { id: 'enrolled', title: 'Enrolled' },
      ]}
    />
  )
}
