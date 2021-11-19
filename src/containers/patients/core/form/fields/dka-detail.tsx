import { FormTextArea } from 'components/form-textarea'
import { memo } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

export const DKADetail = memo(() => {
  const { control } = useFormContext()
  const state = useWatch({
    control,
    name: 'dka_requiring_hospital_admission_past_12_months',
  })

  if (state)
    return (
      <FormTextArea label="DKA Detail" name="dka_details" required max={200} />
    )
  else return null
})
