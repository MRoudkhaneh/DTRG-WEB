import { FormSelect } from 'components/form-select'

export const ExerciseType = () => {
  return (
    <FormSelect label="Exercise Type" name="exercise_type">
      <option value="Casual">Casual</option>
      <option value="Structured">Structured</option>
      <option value="None">None</option>
    </FormSelect>
  )
}
