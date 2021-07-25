import { TextArea } from 'components/text-area'
import { FC } from 'react'

export const StudyForConsideration: FC<IPatientField> = ({ control }) => {
  return (
    <TextArea
      label="Study For Consideration"
      placeholder="Enter Study For Consideration"
      name="study_for_consideration"
      control={control}
    />
  )
}
