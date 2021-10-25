import { Input } from 'components/input'
import { FC, memo } from 'react'

export const DiabeticMedicalHistory = memo(({ control }: IPatientField) => {
  return (
    <Input
      label="Diabetic & Medical History"
      name="DiabeticHistory"
      control={control}
    />
  )
})
