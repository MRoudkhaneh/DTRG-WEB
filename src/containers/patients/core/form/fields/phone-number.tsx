import { Input } from 'components/input'
import { FC, memo } from 'react'

export const PhoneNumber = memo(({ control }: IPatientField) => {
  return (
    <Input
      label="Phone Number (Mobile)"
      placeholder="Enter Phone Number"
      name="phone_number"
      control={control}
      max={20}
      required
    />
  )
})
