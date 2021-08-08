import { FC, memo } from 'react'
import { Select } from 'components/select'

export const StudyStatus: FC<IPatientField> = memo(({ control, setValue }) => {
  return (
    <Select
      label="Study Status"
      name="study_status"
      control={control}
      setValue={setValue}
      required
      className="my-6"
    >
      <option value="Approached - ineligible">Approached - ineligible</option>
      <option value="Approached - declined">Approached - declined</option>
      <option value="Approached - recruited">Approached - recruited</option>
      <option value="Approached - in discussion">
        Approached - in discussion
      </option>
      <option value="Screening - ineligible">Screening - ineligible</option>
      <option value="Screening - drop out">Screening - drop out</option>
      <option value="Consented and Active">Consented and Active</option>
      <option value="Withdrawn">Withdrawn</option>
    </Select>
  )
})
