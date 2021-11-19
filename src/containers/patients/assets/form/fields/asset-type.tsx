import { FormSelect } from 'components/form-select'
import { memo } from 'react'

export const AssetType = memo(() => {
  return (
    <FormSelect name="type" label="Type" required>
      <option value="sensors">Sensors</option>
      <option value="transmitters">Transmitters</option>
      <option value="pump">Pump</option>
      <option value="meters">Meters</option>
      <option value="receivers">Receivers</option>
      <option value="pdm">PDM</option>
      <option value="other">Other</option>
    </FormSelect>
  )
})
