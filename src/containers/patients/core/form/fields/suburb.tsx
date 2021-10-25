import { Input } from 'components/input'
import { FC, memo } from 'react'

export const Suburb = memo(({ control }: IPatientField) => {
  return (
    <Input
      label="Suburb"
      placeholder="Enter Suburb"
      name="suburb"
      control={control}
      max={20}
      required
    />
  )
})
