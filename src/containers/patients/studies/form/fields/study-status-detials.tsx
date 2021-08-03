import { TextArea } from 'components/text-area'
import { FC, memo } from 'react'
import { useWatch } from 'react-hook-form'

export const StatusDetails: FC<IPatientField> = memo(({ control }) => {
  const state = useWatch({ control, name: 'study_status' })
  if (
    state === 'Approached - declined' ||
    state === 'Approached - ineligible' ||
    state === 'Screening - drop out' ||
    state === 'Drop out'
  )
    return (
      <TextArea
        label="Status Details"
        name="status_details"
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
