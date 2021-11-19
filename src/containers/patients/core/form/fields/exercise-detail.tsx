import { FormTextArea } from 'components/form-textarea'

export const ExerciseDetail = () => {
  return (
    <FormTextArea
      label="Exercise Detail"
      placeholder="Enter Exercise Detail"
      name="exercise_detail"
      max={2000}
    />
  )
}
