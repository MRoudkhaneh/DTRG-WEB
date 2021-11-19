import { FormSwitch } from 'components/form-switch'

export const DKAExperience = () => {
  return (
    <FormSwitch
      label="In the past 12 months, have you had Diabetic Ketoacidosis (DKA) requiring a hospital admission?"
      name="dka_requiring_hospital_admission_past_12_months"
    />
  )
}
