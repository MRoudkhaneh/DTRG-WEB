import { FormInput } from 'components/form-input'

export const EmailAddress = () => {
  return (
    <FormInput
      label="Email Address"
      placeholder="Enter Email Address"
      name="email"
      type="email"
      max={64}
      required
    />
  )
}
