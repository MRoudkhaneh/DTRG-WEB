import { FormDatePicker } from 'components/form-datepicker'
import { memo } from 'react'

export const ContactDate = memo(() => {
  return <FormDatePicker label="Contact Date" name="contact_date" later />
})
