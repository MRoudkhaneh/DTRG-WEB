import { FormInput } from 'components/form-input'

export const State = () => {
  return (
    <FormInput
      label="State"
      placeholder="Enter State"
      name="state"
      max={10}
      required
    />
  )
}
