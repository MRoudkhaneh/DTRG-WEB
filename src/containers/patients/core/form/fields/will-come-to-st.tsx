import { Switch } from 'components/switch'
import { FC, memo } from 'react'

export const WillComeToSt = memo(({ control }: IPatientField) => {
  return (
    <Switch
      label="Will come to St Vincent's Hospital?"
      name="will_come_to_st_vincent"
      control={control}
    />
  )
})
