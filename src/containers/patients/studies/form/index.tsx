import { memo } from 'react'
import { CurrentStudy, StatusDetails, StudyStatus, StudySubmit } from './fields'
import { usePatientStudyForm } from './use-patient-study-form'
import { FormControl } from 'components/form-control'

export const PatientStudiesForm = memo(() => {
  const { onSubmit, defaultValues } = usePatientStudyForm()

  return (
    <FormControl onSubmit={onSubmit} defaultValues={defaultValues}>
      <CurrentStudy />
      <StudyStatus />
      <StatusDetails />
      <StudySubmit />
    </FormControl>
  )
})
