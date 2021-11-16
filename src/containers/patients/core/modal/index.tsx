import { memo } from 'react'
import { Modal } from 'components/modal'
import { Confirm } from 'components/confirm'
import { usePatientModal } from './use-patient-modal'
import { lazy } from 'utils/lazy'
import { PatientAdvanceSearch } from '../advance-search'
import { useDialog } from 'hooks/use-dialog'

const PatientForm = lazy(() =>
  import('containers/patients/core/form').then((module) => ({
    default: module.PatientForm,
  }))
)

export const PatientModal = memo(() => {
  const { deletePatient } = usePatientModal()

  const { mutate } = deletePatient()

  const { dialog, reset } = useDialog()

  switch (dialog.type) {
    case 'patient-edit':
      return (
        <Modal
          size="xl"
          className="px-10 "
          onClose={reset}
          header={
            dialog.data
              ? `Edit ${dialog.data.first_name} ${dialog.data.surename}'s informations`
              : `Edit patient's information`
          }
          withHeader
        >
          <PatientForm isEditing editInitials={dialog.data} />
        </Modal>
      )

    case 'patient-delete':
      return (
        <Confirm
          type="delete"
          description={
            dialog.data
              ? `You are about to delete ${dialog.data.first_name} ${dialog.data.surename}`
              : 'You are about to delete this patient.'
          }
          onConfirm={() => mutate()}
          onCancel={reset}
        />
      )

    case 'patient-advance-search':
      return (
        <Modal
          size="lg"
          className="px-10 "
          onClose={reset}
          header="Search for patient"
          withHeader
        >
          <PatientAdvanceSearch />
        </Modal>
      )

    default:
      return null
  }
})
