import { DatePicker } from 'components/date-picker'
import { FC, memo } from 'react'

export const ContactDate = memo(({ control }: IPatientField) => {
  return (
    <DatePicker
      label="Contact Date"
      name="contact_date"
      control={control}
      later
    />
  )
})
