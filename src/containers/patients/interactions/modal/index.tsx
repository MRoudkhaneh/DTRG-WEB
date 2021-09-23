import { memo } from 'react'
import { useUi } from 'hooks/use-ui'
import { Modal } from 'components/modal'
import { Confirm } from 'components/confirm'

import { usePatientInteractionModal } from './use-patient-interactions-modal'
import { PatientInteractionsForm } from '../form'

export const PatientInteractionsModal = memo(() => {
  const { deleteInteraction } = usePatientInteractionModal()

  const { mutate } = deleteInteraction()

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
          onConfirm={() => mutate()}
          onCancel={() => toggleDialog({ open: false, type: null, data: null })}
        />
      )
    default:
      return null
  }
})
