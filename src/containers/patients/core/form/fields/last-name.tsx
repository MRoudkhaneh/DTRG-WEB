import { FormInput } from 'components/form-input'

export const LastName = () => {
  return (
    <FormInput
      label="Last Name "
      placeholder="Enter Last Name"
      name="surename"
      max={64}
      required
    />
  )
}
