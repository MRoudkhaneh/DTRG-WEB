import { FC, memo } from 'react'
import { Select } from 'components/select'
import { SelectOption } from 'components/select-option'

export const CurrentInsulinUse = memo(
  ({ control, setValue }: IPatientField) => {
    return (
      <Select
        label="Current Insulin Use"
        name="current_insulin_use"
        control={control}
        setValue={setValue}
        multiple
      >
        <SelectOption value="Novorapid">Novorapid</SelectOption>
        <SelectOption value="Humalog">Humalog</SelectOption>
        <SelectOption value="Levemir">Levemir</SelectOption>
        <SelectOption value="Lantus">Lantus</SelectOption>
        <SelectOption value="Fiasp">Fiasp</SelectOption>
        <SelectOption value="Toujeo">Toujeo</SelectOption>
        <SelectOption value="Ryzodeg">Ryzodeg</SelectOption>
        <SelectOption value="Optisulin">Optisulin</SelectOption>
        <SelectOption value="Mixtard 30/70">Mixtard 30/70</SelectOption>
        <SelectOption value="Actrapid">Actrapid</SelectOption>
        <SelectOption value="Protophane">Protophane</SelectOption>
      </Select>
    )
  }
)
