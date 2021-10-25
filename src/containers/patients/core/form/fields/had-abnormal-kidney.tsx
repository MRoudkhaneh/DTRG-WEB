import { Switch } from 'components/switch'
import { FC, memo } from 'react'

export const HadAbnormalKidney = memo(({ control }: IPatientField) => {
  return (
    <Switch
      label="Abnormal kidney function?"
      name="abnormal_kidney_function"
      control={control}
    />
  )
})
