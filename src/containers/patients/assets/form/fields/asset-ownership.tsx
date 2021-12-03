import { FormSelect } from 'components/form-select'
import { memo } from 'react'

export const AssetOwnerShip = memo(() => {
  return (
    <FormSelect
      name="ownership"
      label="Owner ship"
      required
      options={[
        { id: 'investigational_sponsor', title: 'Investigational sponsor' },
        {
          id: 'non_investigational_sponsor',
          title: 'Non investigational sponsor',
        },
        {
          id: 'non_investigational_dtrg',
          title: 'Non investigational dtrg',
        },
      ]}
    />
  )
})
