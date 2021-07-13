import { Switch } from 'components/switch'
import { FC, memo } from 'react'

export const DKAExperience: FC<IPatientField> = memo(({ control }) => {
  return (
    <Switch
      label="In the past 12 months, have you had Diabetic Ketoacidosis (DKA) requiring a hospital admission?"
      name="dka_requiring_hospital_admission_past_12_months"
      control={control}
    />
  )
})
