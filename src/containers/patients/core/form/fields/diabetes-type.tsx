import { FormSelect } from 'components/form-select'

export const DiabetesType = () => {
  return (
    <FormSelect
      label="Diabetes Type"
      name="diabetes_type"
      options={[
        { id: 'Type 1', title: 'Type 1' },
        { id: 'Type 2', title: 'Type 2' },
        { id: 'LADA', title: 'LADA' },
        { id: 'Other', title: 'Other' },
      ]}
    />
  )
}
