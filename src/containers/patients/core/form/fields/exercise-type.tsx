import { FormSelect } from 'components/form-select'

export const ExerciseType = () => {
  return (
    <FormSelect
      label="Exercise Type"
      name="exercise_type"
      options={[
        { id: 'Casual', title: 'Casual' },
        { id: 'Structured', title: 'Structured' },
        { id: 'None', title: 'None' },
      ]}
    />
  )
}
