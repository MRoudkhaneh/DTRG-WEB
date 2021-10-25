import { DatePicker } from 'components/date-picker'
import { FC, memo } from 'react'

export const PreferedContactDate = memo(({ control }: IPatientField) => {
  return (
    <DatePicker
      label="Prefered Contact Date"
      name="preferred_contact_time"
      control={control}
    />
  )
})
