import { FormInput } from 'components/form-input'

export const Suburb = () => {
  return (
    <FormInput
      label="Suburb"
      placeholder="Enter Suburb"
      name="suburb"
      max={20}
      required
    />
  )
}
