import { Input } from 'components/input'
import { FC, memo } from 'react'

export const DoNotCallUntil: FC<IPatientField> = memo(({ control }) => {
  return (
    <Input
      label="Do Not Call Until"
      placeholder="Enter Do Not Call Until"
      name="do_not_call_until"
      type="text"
      control={control}
    />
  )
})
