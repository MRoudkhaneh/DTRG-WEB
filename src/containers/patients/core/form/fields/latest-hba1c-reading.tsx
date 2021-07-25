import { Input } from 'components/input'
import { FC, memo } from 'react'

export const LatestHBA1CReading: FC<IPatientField> = memo(({ control }) => {
  return (
    <Input
      label="Latest HbA1c Reading"
      placeholder="Enter Latest HbA1c Reading"
      name="latest_hba1c_reading"
      control={control}
      precent
      number
    />
  )
})
