import { FC, memo } from 'react'
import { Select } from 'components/select'
import { SelectOption } from 'components/select-option'

export const PhoneType = memo(({ control, setValue }: IPatientField) => {
  return (
    <Select
      label="Phone Type"
      name="phone_type"
      control={control}
      setValue={setValue}
      multiple
    >
      <SelectOption value="Android">Android</SelectOption>
      <SelectOption value=" IOS">IOS</SelectOption>
      <SelectOption value="Windows">Windows</SelectOption>
      <SelectOption value="Other">Other</SelectOption>
    </Select>
  )
})
