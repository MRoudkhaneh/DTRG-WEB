import { TextArea } from 'components/text-area'
import { FC, memo } from 'react'

export const OtherMedicalIssue = memo(({ control }: IPatientField) => {
  return (
    <TextArea
      label="Other Medical Issue"
      placeholder="Enter Other Medical Issue"
      name="other_medical_issue"
      control={control}
    />
  )
})
