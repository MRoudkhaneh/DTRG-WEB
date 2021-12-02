import { FormTextArea } from 'components/form-textarea'
import { memo } from 'react'
import { useWatch } from 'react-hook-form'

export const StatusDetails = memo(() => {
  const state = useWatch({ name: 'study_status' })
  if (
    state === 'Approached - declined' ||
    state === 'Approached - ineligible' ||
    state === 'Screening - drop out' ||
    state === 'Withdrawn'
  )
    return (
      <FormTextArea
        label="Status Details"
        name="status_details"
        placeholder="Enter Study Status Details"
        max={250}
        required
        expanded
        className="mb-6"
      />
    )
  else return null
})
