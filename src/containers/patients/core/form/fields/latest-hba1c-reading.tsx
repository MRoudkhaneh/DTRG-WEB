import { FormInput } from 'components/form-input'

export const LatestHBA1CReading = () => {
  return (
    <FormInput
      label="Latest HbA1c Reading"
      placeholder="Enter Latest HbA1c Reading"
      name="latest_hba1c_reading"
      precent
      number
    />
  )
}
