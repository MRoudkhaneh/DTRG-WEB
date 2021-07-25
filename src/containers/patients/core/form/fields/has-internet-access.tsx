import { Switch } from 'components/switch'
import { FC, memo } from 'react'

export const HasInternetAccess: FC<IPatientField> = memo(({ control }) => {
  return (
    <Switch
      label="Has Internet Access?"
      name="has_internet_access"
      control={control}
    />
  )
})
