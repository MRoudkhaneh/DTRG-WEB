import { TextArea } from 'components/text-area'
import { FC, memo } from 'react'
import { useWatch } from 'react-hook-form'

export const TypeDetails: FC<{ control?: any }> = memo(({ control }) => {
  const state = useWatch({ control, name: 'type' })
  if (state === 'other')
    return (
      <TextArea
        control={control}
        name="type_details"
        label="Type details"
        placeholder="Enter type details"
        required
        className="col-span-2"
      />
    )
  else return null
})
