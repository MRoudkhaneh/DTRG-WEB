import { FormSelect } from 'components/form-select'

export const AdvanceDiabetes = () => {
  return (
    <FormSelect
      name="diabetes_type"
      label="Diabetes type"
      options={[
        { id: 'Type 1', title: 'Type 1' },
        { id: 'Type 2', title: 'Type 2' },
        { id: 'LADA', title: 'LADA' },
        { id: 'Other', title: 'Other' },
      ]}
    />
  )
}
