import { FC, memo } from 'react'
import { Select } from 'components/select'
import { SelectOption } from 'components/select-option'

export const PreferedContactMethod: FC<IPatientField> = memo(
  ({ control, setValue }) => {
    return (
      <Select
        label="Prefered Contact Method"
        name="preferred_contact_method"
        control={control}
        setValue={setValue}
        required
      >
        <SelectOption value="Email">Email</SelectOption>
        <SelectOption value="Phone">Phone</SelectOption>
        <SelectOption value="Either">Either</SelectOption>
      </Select>
    )
  }
)
