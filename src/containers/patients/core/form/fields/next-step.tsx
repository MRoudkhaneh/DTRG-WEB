import { Input } from 'components/input'
import { FC, memo } from 'react'

export const NextStep = memo(({ control }: IPatientField) => {
  return (
    <Input
      label="Next Steps"
      placeholder="Enter Next Steps"
      name="next_step"
      control={control}
    />
  )
})
