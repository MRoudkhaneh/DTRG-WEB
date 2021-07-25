import { Input } from 'components/input'
import { FC, memo } from 'react'

export const FirstName: FC<IPatientField> = memo(({ control }) => {
  return (
    <Input
      label="First Name"
      placeholder="Enter First Name"
      name="first_name"
      control={control}
      required
      max={64}
    />
  )
})
