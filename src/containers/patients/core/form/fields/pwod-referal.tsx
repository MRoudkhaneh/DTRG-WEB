import { TextArea } from 'components/text-area'
import { FC, memo } from 'react'

export const PWODReferal: FC<IPatientField> = memo(({ control }) => {
  return (
    <TextArea
      label="PWOD Referral"
      placeholder="Enter PWOD Referral"
      name="pwod_referral"
      control={control}
    />
  )
})
