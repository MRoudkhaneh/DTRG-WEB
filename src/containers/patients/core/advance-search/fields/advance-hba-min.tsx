import { FormInput } from 'components/form-input'

export const AdvanceHbaMin = () => {
  return (
    <FormInput
      label="Latest HbA1c Reading min"
      placeholder="Enter Latest HbA1c Reading min"
      name="latest_hba1c_reading_min"
      precent
      number
    />
  )
}
