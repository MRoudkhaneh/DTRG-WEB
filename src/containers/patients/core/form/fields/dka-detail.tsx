import { TextArea } from 'components/text-area'
import { FC, memo } from 'react'
import { useWatch } from 'react-hook-form'

export const DKADetail: FC<IPatientField> = memo(({ control }) => {
  const state = useWatch({
    control,
    name: 'dka_requiring_hospital_admission_past_12_months',
  })
  if (state)
    return (
      <TextArea
        label="DKA Detail"
        name="dka_details"
        control={control}
        required
        max={200}
      />
    )
  else return null
})
