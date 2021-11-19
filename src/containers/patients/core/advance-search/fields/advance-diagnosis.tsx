import { FormInput } from 'components/form-input'

export const AdvanceDiagnosis = () => {
  return (
    <FormInput
      name="date_of_diagnosis_of"
      placeholder="Enter number of months since diagnosis"
      label="Number of months since diagnosis"
      number
    />
  )
}
