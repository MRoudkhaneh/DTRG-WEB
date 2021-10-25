import { Switch } from 'components/switch'
import { FC, memo } from 'react'

export const HadFeetNeuropathy = memo(({ control }: IPatientField) => {
  return (
    <Switch label="Foot neuropathy?" name="foot_neuropathy" control={control} />
  )
})
