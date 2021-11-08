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
        <SelectOption value="18-28" selected={state && state.includes('18-28')}>
          18-28
        </SelectOption>
        <SelectOption value="28-38" selected={state && state.includes('28-38')}>
          28-38
        </SelectOption>
        <SelectOption value="38-48" selected={state && state.includes('38-48')}>
          38-48
        </SelectOption>
        <SelectOption value="48-58" selected={state && state.includes('48-58')}>
          48-58
        </SelectOption>
        <SelectOption value="58-68" selected={state && state.includes('58-68')}>
          58-68
        </SelectOption>
        <SelectOption value="68-78" selected={state && state.includes('68-78')}>
          68-78
        </SelectOption>
        <SelectOption value="78-88" selected={state && state.includes('78-88')}>
          78-88
        </SelectOption>
        <SelectOption
          value="88-100"
          selected={state && state.includes('88-100')}
        >
          88-100
        </SelectOption>
      </Select>
    )
  }
)
