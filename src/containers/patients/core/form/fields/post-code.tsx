import { FormInput } from 'components/form-input'

export const PostCode = () => {
  return (
    <FormInput
      label="Post Code"
      placeholder="Enter Post Code"
      name="post_code"
      required
    />
  )
}
