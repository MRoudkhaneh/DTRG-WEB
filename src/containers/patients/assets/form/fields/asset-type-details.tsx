import { FormTextArea } from 'components/form-textarea'
import { memo } from 'react'
import { useWatch } from 'react-hook-form'

export const AssetTypeDetails = memo(() => {
  const state = useWatch({ name: 'type' })
  if (state === 'other')
    return (
      <FormTextArea
        name="type_details"
        label="Type details"
        placeholder="Enter type details"
        required
      />
    )
  else return null
})
