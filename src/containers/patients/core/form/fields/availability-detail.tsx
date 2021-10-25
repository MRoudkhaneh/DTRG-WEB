import { TextArea } from 'components/text-area'
import { FC, memo } from 'react'

export const AvailabilityDetail = memo(({ control }: IPatientField) => {
  return (
    <TextArea
      label="Availability Detail"
      placeholder="Enter Availability Detail"
      name="availability_detail"
      control={control}
      max={2000}
    />
  )
})
