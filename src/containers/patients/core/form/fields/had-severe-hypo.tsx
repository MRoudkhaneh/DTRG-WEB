import { FormSwitch } from 'components/form-switch'

export const HadSevereHypo = () => {
  return (
    <FormSwitch
      label="In the past 12 months, have you had a severe Hypoglycaemic event requiring 3rd party assistance?"
      name="hypoglycemic_event_past_12_months"
    />
  )
}
