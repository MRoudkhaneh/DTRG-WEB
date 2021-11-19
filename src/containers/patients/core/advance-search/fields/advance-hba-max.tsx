import { FormInput } from 'components/form-input'

export const AdvanceHbaMax = () => {
  return (
    <FormInput
      label="Latest HbA1c Reading max"
      placeholder="Enter Latest HbA1c Reading max"
      name="latest_hba1c_reading_max"
      precent
      number
    />
  )
}
