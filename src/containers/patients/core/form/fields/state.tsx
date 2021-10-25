import { Input } from 'components/input'
import { FC, memo } from 'react'

export const State = memo(({ control }: IPatientField) => {
  return (
    <Input
      label="State"
      placeholder="Enter State"
      name="state"
      control={control}
      max={10}
      required
    />
  )
})
