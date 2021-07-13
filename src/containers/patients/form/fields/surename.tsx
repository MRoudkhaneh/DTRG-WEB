import { Input } from 'components/input'
import { FC, memo } from 'react'

export const Surename: FC<IPatientField> = memo(({ control }) => {
  return (
    <Input
      label="Surename "
      placeholder="Enter Surename"
      name="surename"
      control={control}
      max={64}
      required
    />
  )
})
