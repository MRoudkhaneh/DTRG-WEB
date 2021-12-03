import { FormSelect } from 'components/form-select'

export const PreferedContactMethod = () => {
  return (
    <FormSelect
      label="Prefered Contact Method"
      name="preferred_contact_method"
      options={[
        { id: 'Email', title: 'Email' },
        { id: 'Phone', title: 'Phone' },
        { id: 'Either', title: 'Either' },
      ]}
    />
  )
}
