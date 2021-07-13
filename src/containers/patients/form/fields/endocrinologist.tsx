import { Input } from 'components/input'
import { FC, memo } from 'react'

export const Endocrinologist: FC<IPatientField> = memo(({ control }) => {
  return (
    <Input
      label="Endocrinologist"
      placeholder="Enter Endocrinologist"
      name="endocrinologist"
      control={control}
      max={50}
    />
  )
})
