import { FC, memo } from 'react'
import { Select } from 'components/select'
import { SelectOption } from 'components/select-option'

export const PhoneType: FC<IPatientField> = memo(({ control, setValue }) => {
  return (
    <Select
      label="Phone Type"
      name="phone_type"
      control={control}
      setValue={setValue}
      multiple
      required
    >
      <SelectOption value="Android">Android</SelectOption>
      <SelectOption value=" IOS">IOS</SelectOption>
      <SelectOption value="Windows">Windows</SelectOption>
      <SelectOption value="Other">Other</SelectOption>
    </Select>
  )
})
