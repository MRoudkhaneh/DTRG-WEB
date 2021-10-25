import { Switch } from 'components/switch'
import { FC, memo } from 'react'

export const HadretionopathyDiag = memo(({ control }: IPatientField) => {
  return <Switch label="Retinopathy?" name="retinopathy" control={control} />
})
