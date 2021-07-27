import { FC, memo } from 'react'
import { Select } from 'components/select'
import { SelectOption } from 'components/select-option'

export const StudyStatus: FC<IPatientField> = memo(({ control, setValue }) => {
  return (
    <Select
      label="Study Status"
      name="status"
      control={control}
      setValue={setValue}
      required
      className="my-6"
    >
      <SelectOption value="Approached - ineligible">
        Approached - ineligible
      </SelectOption>
      <SelectOption value="Approached - declined">
        Approached - declined
      </SelectOption>
      <SelectOption value="Approached - recruited">
        Approached - recruited
      </SelectOption>
      <SelectOption value="Screening - ineligible">
        Screening - ineligible
      </SelectOption>
      <SelectOption value="Screening - drop out">
        Screening - drop out
      </SelectOption>
      <SelectOption value="Consented and Active">
        Consented and Active
      </SelectOption>
      <SelectOption value="Drop out">Drop out</SelectOption>
    </Select>
  )
})
