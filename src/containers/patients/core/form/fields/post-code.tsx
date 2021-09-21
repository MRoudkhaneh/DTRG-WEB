import { Input } from 'components/input'
import { FC, memo } from 'react'

export const PostCode: FC<IPatientField> = memo(({ control }) => {
  return (
    <Input
      label="Post Code"
      placeholder="Enter Post Code"
      name="post_code"
      control={control}
      required
    />
  )
})
