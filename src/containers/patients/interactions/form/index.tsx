import { memo } from 'react'
import { usePatientInteractionForm } from './use-patient-interaction-form'
import { FormControl } from 'components/form-control'
import {
  InteractionAdmin,
  InteractionDate,
  InteractionDetails,
  InteractionSubmit,
  InteractionType,
} from './fields'

export const PatientInteractionsForm = memo(() => {
  const { defaultValues, onSubmit } = usePatientInteractionForm()

  return (
    <FormControl onSubmit={onSubmit} defaultValues={defaultValues}>
      <InteractionType />
      <InteractionDate />
      <InteractionAdmin />
      <InteractionDetails />
      <InteractionSubmit />
    </FormControl>
  )
})
