import { memo } from 'react'
import { Button } from 'components/button'
import { Form } from 'components/form'
import { CurrentStudy, StatusDetails, StudyStatus } from './fields'

import { usePatientStudyForm } from './use-patient-study-form'

export const PatientInteractionsForm = memo(() => {
  const { control, onSubmit, setValue } = usePatientStudyForm()

  return (
    <Form onSubmit={onSubmit}>
      <CurrentStudy control={control} setValue={setValue} />
      <StudyStatus control={control} setValue={setValue} />
      <StatusDetails control={control} />
      <Button
        type="submit"
        icon
        className=" w-full h-12 my-10 text-white shadow-blue bg-secondary dark:bg-primary"
      >
        Save Study
      </Button>
    </Form>
  )
})
