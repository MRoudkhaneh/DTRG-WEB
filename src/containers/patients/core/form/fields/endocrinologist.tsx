import { Input } from 'components/input'
import { FC, memo } from 'react'

export const Endocrinologist = memo(({ control }: IPatientField) => {
  return (
    <Input
      label="Endocrinologist"
      placeholder="Enter Endocrinologist"
      name="endocrinologist"
      control={control}
      max={50}
    />
  )
})
