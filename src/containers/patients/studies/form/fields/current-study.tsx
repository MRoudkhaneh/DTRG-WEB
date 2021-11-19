import { memo } from 'react'
import { FormSelect } from 'components/form-select'

export const CurrentStudy = memo(() => {
  return (
    <FormSelect
      label="Current Study"
      name="current_study"
      required
      className="mt-6"
    >
      <option value="Biocapillary Pilot">Biocapillary Pilot</option>
      <option value="All in One">All in One</option>
      <option value="Glysens PAVE">Glysens PAVE</option>
      <option value="Glysens FREE">Glysens FREE</option>
      <option value="Additional Signals PWOD">Additional Signals PWOD</option>
      <option value="Fiasp Original V1">Fiasp Original V1</option>
      <option value="Fiasp Extension V2">Fiasp Extension V2</option>
      <option value="Clear">Clear</option>
      <option value="FAME 1 EYE">FAME 1 EYE</option>
      <option value="MEWS">MEWS</option>
      <option value="Serodus">Serodus</option>
      <option value="FLASH">FLASH</option>
      <option value="Insulet">Insulet</option>
      <option value="Zeus">Zeus</option>
      <option value="Not currently enrolled in a study">
        Not currently enrolled in a study
      </option>
      <option value="Other">Other</option>
    </FormSelect>
  )
})
