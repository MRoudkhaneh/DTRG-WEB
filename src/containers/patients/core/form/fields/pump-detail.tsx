import { TextArea } from 'components/text-area'
import { FC, memo } from 'react'
import { useWatch } from 'react-hook-form'

export const PumpDetail = memo(({ control }: IPatientField) => {
  const state = useWatch({ control, name: 'current_diabetes_management' })
  if (state === 'Looping' || state === 'Other')
    return (
      <TextArea
        label="Pump Details"
        name="pump_details"
        control={control}
        required
        max={250}
      />
    )
  else return null
})
