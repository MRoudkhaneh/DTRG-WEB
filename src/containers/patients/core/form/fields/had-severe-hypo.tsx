import { Switch } from 'components/switch'
import { FC, memo } from 'react'

export const HadSevereHypo = memo(({ control }: IPatientField) => {
  return (
    <Switch
      label="In the past 12 months, have you had a severe Hypoglycaemic event requiring 3rd party assistance?"
      name="hypoglycemic_event_past_12_months"
      control={control}
    />
  )
})
