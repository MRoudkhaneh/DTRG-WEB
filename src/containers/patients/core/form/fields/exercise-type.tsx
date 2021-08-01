import { FC, memo } from 'react'
import { Select } from 'components/select'

export const ExerciseType: FC<IPatientField> = memo(({ control, setValue }) => {
  return (
    <Select
      label="Exercise Type"
      name="exercise_type"
      control={control}
      setValue={setValue}
    >
      <option value="Casual">Casual</option>
      <option value="Structured">Structured</option>
      <option value="None">None</option>
    </Select>
  )
})
