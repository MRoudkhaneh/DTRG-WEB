import { Select } from 'components/select'
import { SelectOption } from 'components/select-option'
import { memo } from 'react'
import { useWatch } from 'react-hook-form'

export const AgeCategory = memo(
  ({ control, setValue }: { control: any; setValue: any }) => {
    const state = useWatch({ control, name: 'age_category' })
    return (
      <Select
        control={control}
        setValue={setValue}
        name="age_category"
        label="Age category"
        multiple
      >
        <SelectOption value="18-20" selected={state && state.includes('18-20')}>
          18-20
        </SelectOption>
        <SelectOption value="21-30" selected={state && state.includes('21-30')}>
          21-30
        </SelectOption>
        <SelectOption value="31-40" selected={state && state.includes('31-40')}>
          31-40
        </SelectOption>
        <SelectOption value="41-50" selected={state && state.includes('41-50')}>
          41-50
        </SelectOption>
        <SelectOption value="51-60" selected={state && state.includes('51-60')}>
          51-60
        </SelectOption>
        <SelectOption value="61-70" selected={state && state.includes('61-70')}>
          61-70
        </SelectOption>
        <SelectOption value="71-80" selected={state && state.includes('71-80')}>
          71-80
        </SelectOption>
        <SelectOption value="81-90" selected={state && state.includes('81-90')}>
          81-90
        </SelectOption>
        <SelectOption
          value="91-100"
          selected={state && state.includes('91-100')}
        >
          91-100
        </SelectOption>
      </Select>
    )
  }
)
