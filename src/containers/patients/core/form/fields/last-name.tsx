import { Input } from 'components/input'
import { FC, memo } from 'react'

export const LastName = memo(({ control }: IPatientField) => {
  return (
    <Input
      label="Last Name "
      placeholder="Enter Last Name"
      name="surename"
      control={control}
      max={64}
      required
    />
  )
})
