import { useUi } from 'hooks'
import { lazy, memo } from 'react'
import { Confirm, Modal } from 'components'
import { usePatientInteractionModal } from './use-patient-interactions-modal'

const PatientInteractionsForm = lazy(() =>
  import('containers').then((module) => ({
    default: module.PatientInteractionsForm,
  }))
)

export const PatientInteractionsModal = memo(() => {
  const { deleteInteraction, deleteInteractionLoading } =
    usePatientInteractionModal()

  const {
    uiState: { dialog },
    toggleDialog,
  } = useUi()

  switch (dialog.type) {
    case 'patient-interactions-form':
      return (
        <Modal
          size="sm"
          className="px-10 "
          onClose={() => toggleDialog({ open: false, type: null, data: null })}
          header={
            dialog.data && dialog.data.isEditing
              ? 'Edit interaction'
              : `Add an interaction `
          }
          withHeader
        >
          <PatientInteractionsForm />
        </Modal>
      )

    case 'patient-interaction-delete':
      return (
        <Confirm
          type="delete"
          description={`You are about to delete this interaction.`}
          loading={deleteInteractionLoading}
          onConfirm={() => deleteInteraction()}
          onCancel={() => toggleDialog({ open: false, type: null, data: null })}
        />
      )
    default:
      return null
  }
})
