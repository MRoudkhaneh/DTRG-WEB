import { FormInput } from 'components/form-input'

export const FirstName = () => {
  return (
    <FormInput
      label="First Name"
      placeholder="Enter First Name"
      name="first_name"
      required
      max={64}
    />
  )
}
