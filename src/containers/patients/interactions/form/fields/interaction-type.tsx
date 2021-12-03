import { FormSelect } from 'components/form-select'

export const InteractionType = () => {
  return (
    <FormSelect
      name="interaction_type"
      label="Interaction Type"
      className="mt-4"
      required
      options={[
        { id: 'email', title: 'Email' },
        { id: 'phone call', title: 'Phone call' },
        { id: 'in person', title: 'In person' },
      ]}
    />
  )
}
