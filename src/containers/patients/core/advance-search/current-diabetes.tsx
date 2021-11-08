import { Select } from 'components/select'
import { SelectOption } from 'components/select-option'
import { memo } from 'react'
import { useWatch } from 'react-hook-form'

export const CurrentDiabetes = memo(
  ({ control, setValue }: { control: any; setValue: any }) => {
    const state = useWatch({ control, name: 'current_diabetes_management' })
    return (
      <Select
        label="Current Diabetes Management"
        name="current_diabetes_management"
        control={control}
        setValue={setValue}
        multiple
      >
        <SelectOption value="640G" selected={state && state.includes('640G')}>
          640G
        </SelectOption>
        <SelectOption value="670G" selected={state && state.includes('670G')}>
          670G
        </SelectOption>
        <SelectOption value="770G" selected={state && state.includes('770G')}>
          770G
        </SelectOption>
        <SelectOption
          value="MDT AHCL"
          selected={state && state.includes('MDT AHCL')}
        >
          MDT AHCL
        </SelectOption>
        <SelectOption
          value="Tslim X2"
          selected={state && state.includes('Tslim X2')}
        >
          Tslim X2
        </SelectOption>
        <SelectOption
          value="Tslim BasallQ"
          selected={state && state.includes('Tslim BasallQ')}
        >
          Tslim BasallQ
        </SelectOption>
        <SelectOption
          value="Ypsomed"
          selected={state && state.includes('Ypsomed')}
        >
          Ypsomed
        </SelectOption>
        <SelectOption
          value="Looping"
          selected={state && state.includes('Looping')}
        >
          Looping
        </SelectOption>
        <SelectOption
          value="Oral Agents"
          selected={state && state.includes('Oral Agents')}
        >
          Oral Agents
        </SelectOption>
        <SelectOption
          value="Multiple Daily Injections"
          selected={state && state.includes('Multiple Daily Injections')}
        >
          Multiple Daily Injections
        </SelectOption>
        <SelectOption
          value="Looping"
          selected={state && state.includes('Other')}
        >
          Other
        </SelectOption>
      </Select>
    )
  }
)
