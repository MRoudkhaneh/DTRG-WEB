import { DatePicker } from 'components/date-picker'
import { FC, memo } from 'react'

export const DateOfBirth = memo(({ control }: IPatientField) => {
  return (
    <DatePicker
      label="Date Of Birth"
      name="date_of_birth"
      control={control}
      required
    />
  )
})
