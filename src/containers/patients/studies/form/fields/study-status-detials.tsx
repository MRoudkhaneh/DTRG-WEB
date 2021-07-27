import { TextArea } from 'components/text-area'
import { FC, memo } from 'react'
import { useWatch } from 'react-hook-form'

export const StatusDetails: FC<IPatientField> = memo(({ control }) => {
  const state = useWatch({ control, name: 'status' })
  if (state === 'Approached - declined' || state === 'Approached - ineligible')
    return (
      <TextArea
        label="Study Status Details"
        name="Study_status_details"
        placeholder="Enter Study Status Details"
        control={control}
        max={250}
        required
        expanded
        className="mb-6"
      />
    )
  else return null
})
