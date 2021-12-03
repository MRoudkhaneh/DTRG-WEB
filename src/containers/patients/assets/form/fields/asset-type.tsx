import { FormSelect } from 'components/form-select'
import { memo } from 'react'

export const AssetType = memo(() => {
  return (
    <FormSelect
      name="type"
      label="Type"
      required
      options={[
        { id: 'sensors', title: 'Sensors' },
        { id: 'transmitters', title: 'Transmitters' },
        { id: 'pump', title: 'Pump' },
        { id: 'meters', title: 'Meters' },
        { id: 'receivers', title: 'Receivers' },
        { id: 'pdm', title: 'PDM' },
        { id: 'other', title: 'Other' },
      ]}
    />
  )
})
