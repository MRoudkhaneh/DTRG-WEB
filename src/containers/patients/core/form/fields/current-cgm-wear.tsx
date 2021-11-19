import { memo } from 'react'
import { FormSelect } from 'components/form-select'

export const CurrentCGMWear = memo(() => {
  return (
    <FormSelect label="Current CGM Wear" name="current_cgm_wear">
      <option value="Libre">Libre</option>
      <option value="Guardian Connect">Guardian Connect</option>
      <option value="Guardian Sensor 3">Guardian Sensor 3</option>
      <option value="Dexcom G5">Dexcom G5</option>
      <option value="Dexcom G6">Dexcom G6</option>
      <option value="Libre 2">Libre 2</option>
      <option value="None">None</option>
    </FormSelect>
  )
})
