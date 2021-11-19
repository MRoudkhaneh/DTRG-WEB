import { FormSelect } from 'components/form-select'

export const InteractionType = () => {
  return (
    <FormSelect
      name="interaction_type"
      label="Interaction Type"
      className="mt-4"
      required
    >
      <option value="email">Email</option>
      <option value="phone call">Phone call</option>
      <option value="in person">In person</option>
    </FormSelect>
  )
}
