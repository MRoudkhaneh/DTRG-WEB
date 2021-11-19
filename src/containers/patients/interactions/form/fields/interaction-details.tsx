import { FormTextArea } from 'components/form-textarea'

export const InteractionDetails = () => {
  return (
    <FormTextArea
      name="contact_details"
      label="Contact details"
      placeholder="Enter contact details"
      className="my-5"
      expanded
      required
      max={300}
    />
  )
}
