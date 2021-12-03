import { memo } from 'react'
import { useWatch } from 'react-hook-form'
import { years } from 'utils/constants'
import { FormSelect } from 'components/form-select'

export const DateOfDiagnosisOfT1D = memo(() => {
  const state = useWatch({ name: 'diabetes_type' })
  if (state === 'Type 1')
    return (
      <FormSelect
        label="Date Of Diagnosis Of T1D"
        name="date_of_diagnosis_of_t1d"
        options={years.map((year) => ({ id: year, title: year }))}
      />
    )
  else return null
})
