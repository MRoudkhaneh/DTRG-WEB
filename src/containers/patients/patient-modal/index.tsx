import { useUi } from 'hooks'
import { lazy, memo } from 'react'
import { Confirm, Modal } from 'components'
import { usePatientModal } from './use-patient-modal'

const PatientForm = lazy(() =>
  import('containers').then((module) => ({ default: module.PatientForm }))
)

export const PatientModal = memo(() => {
  const { deletePatient } = usePatientModal()

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
          //loading={deletePatientLoading}
          onConfirm={() => deletePatient()}
          onCancel={() => toggleDialog({ open: false, type: null })}
        />
      )

    default:
      return null
  }
})
