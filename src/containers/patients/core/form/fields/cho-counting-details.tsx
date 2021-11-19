import { FormTextArea } from 'components/form-textarea'
import { memo } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

export const CHOCountingDetails = memo(() => {
  const { control } = useFormContext()
  const state = useWatch({ control, name: 'cho_counting' })
  if (state && state.includes('Other'))
    return (
      <FormTextArea
        label="CHO Counting Details"
        name="cho_counting_details"
        required
      />
    )
  else return null
})
