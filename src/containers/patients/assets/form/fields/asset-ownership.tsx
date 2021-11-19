import { FormSelect } from 'components/form-select'
import { memo } from 'react'

export const AssetOwnerShip = memo(() => {
  return (
    <FormSelect name="ownership" label="Owner ship" required>
      <option value="investigational_sponsor">Investigational sponsor</option>
      <option value="non_investigational_sponsor">
        Non investigational sponsor
      </option>
      <option value="non_investigational_dtrg">Non investigational dtrg</option>
    </FormSelect>
  )
})
