import { FormTextArea } from 'components/form-textarea'

export const AvailabilityDetail = () => {
  return (
    <FormTextArea
      label="Availability Detail"
      placeholder="Enter Availability Detail"
      name="availability_detail"
      max={2000}
    />
  )
}
