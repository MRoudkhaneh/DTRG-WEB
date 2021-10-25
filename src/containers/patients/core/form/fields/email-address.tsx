import { Input } from 'components/input'
import { FC, memo } from 'react'

export const EmailAddress = memo(({ control }: IPatientField) => {
  return (
    <Input
      label="Email Address"
      placeholder="Enter Email Address"
      name="email"
      type="email"
      control={control}
      max={64}
      required
    />
  )
})
