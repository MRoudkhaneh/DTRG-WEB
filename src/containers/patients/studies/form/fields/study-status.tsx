import { memo } from 'react'
import { FormSelect } from 'components/form-select'

export const StudyStatus = memo(() => {
  return (
    <FormSelect
      label="Study Status"
      name="study_status"
      required
      className="my-6"
      options={[
        { id: 'Approached - ineligible', title: 'Approached - ineligible' },
        { id: 'Approached - declined', title: 'Approached - declined' },
        { id: 'Approached - recruited', title: 'Approached - recruited' },
        {
          id: 'Approached - in discussion',
          title: 'Approached - in discussion',
        },
        { id: 'Screening - ineligible', title: 'Screening - ineligible' },
        { id: 'Screening - drop out', title: 'Screening - drop out' },
        { id: 'Consented and Active', title: 'Consented and Active' },
        { id: 'Withdrawn', title: 'Withdrawn' },
      ]}
    />
  )
})
