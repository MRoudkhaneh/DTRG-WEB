import { TextArea } from 'components'
import { FC, memo } from 'react'
import { useWatch } from 'react-hook-form'

export const PatientStatusDetails: FC<IPatientField> = memo(({ control }) => {
  const state = useWatch({ control, name: 'status' })
  if (state === 'Approached - declined' || state === 'Approached - ineligible')
    return (
      <TextArea
        label="Patient Status Details"
        name="status_details"
        control={control}
        max={250}
        required
      />
    )
  else return null
})
