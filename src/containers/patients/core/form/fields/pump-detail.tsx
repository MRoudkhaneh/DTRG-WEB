import { FormTextArea } from 'components/form-textarea'

import { memo } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

export const PumpDetail = memo(() => {
  const { control } = useFormContext()
  const state = useWatch({ control, name: 'current_diabetes_management' })
  if (state === 'Looping' || state === 'Other')
    return (
      <FormTextArea
        label="Pump Details"
        name="pump_details"
        required
        max={250}
      />
    )
  else return null
})
