import { FormInput } from 'components/form-input'

export const InteractionAdmin = () => {
  return (
    <FormInput
      name="contact_admin"
      label="Contact admin"
      placeholder="Enter contact admin"
      className="mt-10"
      required
    />
  )
}
