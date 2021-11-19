import { FormInput } from 'components/form-input'

export const PhoneNumber = () => {
  return (
    <FormInput
      label="Phone Number (Mobile)"
      placeholder="Enter Phone Number"
      name="phone_number"
      max={20}
      required
    />
  )
}
