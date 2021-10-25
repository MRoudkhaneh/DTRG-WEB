import { TextArea } from 'components/text-area'
import { FC, memo } from 'react'
import { useWatch } from 'react-hook-form'

export const TypeDetails = memo(({ control }: { control?: any }) => {
  const state = useWatch({ control, name: 'type' })
  if (state === 'other')
    return (
      <TextArea
        control={control}
        name="type_details"
        label="Type details"
        placeholder="Enter type details"
        required
      />
    )
  else return null
})
