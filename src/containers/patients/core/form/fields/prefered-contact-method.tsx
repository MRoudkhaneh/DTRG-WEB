import { FC, memo } from 'react'
import { Select } from 'components/select'

export const PreferedContactMethod = memo(
  ({ control, setValue }: IPatientField) => {
    return (
      <Select
        label="Prefered Contact Method"
        name="preferred_contact_method"
        control={control}
        setValue={setValue}
      >
        <option value="Email">Email</option>
        <option value="Phone">Phone</option>
        <option value="Either">Either</option>
      </Select>
    )
  }
)
