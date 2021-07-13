import { Input } from 'components/input'
import { FC, memo } from 'react'

export const NextStep: FC<IPatientField> = memo(({ control }) => {
  return (
    <Input
      label="Next Steps"
      placeholder="Enter Next Steps"
      name="next_step"
      control={control}
    />
  )
})
