import { Select, SelectOption } from 'components'
import { FC, memo } from 'react'
import { useWatch } from 'react-hook-form'
import { years } from 'utils/constants'

export const DateOfDiagnosisOfT1D: FC<IPatientField> = memo(
  ({ control, setValue }) => {
    const state = useWatch({ control, name: 'diabetes_type' })
    if (state === 'Type 1')
      return (
        <Select
          label="Date Of Diagnosis Of T1D"
          name="date_of_diagnosis_of_t1d"
          control={control}
          setValue={setValue}
        >
          {years.map((year, index) => (
            <SelectOption key={index} value={year}>
              {year}
            </SelectOption>
          ))}
        </Select>
      )
    else return null
  }
)
