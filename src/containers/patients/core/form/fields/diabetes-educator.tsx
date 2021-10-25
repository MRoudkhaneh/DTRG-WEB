import { Input } from 'components/input'
import { FC, memo } from 'react'

export const DiabetesEducator = memo(({ control }: IPatientField) => {
  return (
    <Input
      label="Diabetes Educator"
      placeholder="Enter Diabetes Educator"
      name="diabetes_educator"
      control={control}
      max={50}
    />
  )
})
