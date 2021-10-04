import { useUi } from 'hooks'
import { memo } from 'react'
import { Modal } from 'components/modal'
import { Confirm } from 'components/confirm'
import { usePatientModal } from './use-patient-modal'
import { lazy } from 'utils/lazy'
import { PatientAdvanceSearch } from '../advance-search'

const PatientForm = lazy(() =>
  import('containers/patients/core/form').then((module) => ({
    default: module.PatientForm,
  }))
)

export const PatientModal = memo(() => {
  const { deletePatient } = usePatientModal()

  const { mutate } = deletePatient()

  const {
    uiState: { dialog },
    toggleDialog,
  } = useUi()

  switch (dialog.type) {
    case 'patient-edit':
      return (
        <Modal
          size="xl"
          className="px-10 "
          onClose={() => toggleDialog({ open: false, type: null, data: null })}
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
          onCancel={() => toggleDialog({ open: false, type: null })}
        />
      )

    case 'patient-advance-search':
      return (
        <Modal
          size="md"
          className="px-10 "
          onClose={() => toggleDialog({ open: false, type: null, data: null })}
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
