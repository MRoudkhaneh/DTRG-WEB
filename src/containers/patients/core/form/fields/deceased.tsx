import { FormSelect } from 'components/form-select'

export const Deceased = () => {
  return (
    <FormSelect
      label="Deceased"
      name="deceased"
      options={[
        { id: 'No', title: 'No' },
        { id: 'Yes', title: 'Yes' },
        { id: 'Both', title: 'Both' },
      ]}
    />
  )
}
