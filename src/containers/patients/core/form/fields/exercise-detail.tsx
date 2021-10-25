import { TextArea } from 'components/text-area'
import { FC, memo } from 'react'

export const ExerciseDetail = memo(({ control }: IPatientField) => {
  return (
    <TextArea
      label="Exercise Detail"
      placeholder="Enter Exercise Detail"
      name="exercise_detail"
      control={control}
      max={2000}
    />
  )
})
