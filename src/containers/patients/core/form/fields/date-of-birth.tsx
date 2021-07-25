import { DatePicker } from 'components/date-picker'
import { FC, memo } from 'react'

export const DateOfBirth: FC<IPatientField> = memo(({ control }) => {
  return (
    <DatePicker
      label="Date Of Birth"
      name="date_of_birth"
      control={control}
      required
    />
  )
})
