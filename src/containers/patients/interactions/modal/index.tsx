import { memo } from 'react'
import { Modal } from 'components/modal'
import { Confirm } from 'components/confirm'

import { usePatientInteractionModal } from './use-patient-interactions-modal'
import { PatientInteractionsForm } from '../form'
import { useDialog } from 'hooks/use-dialog'

export const PatientInteractionsModal = memo(() => {
  const { deleteInteraction } = usePatientInteractionModal()

  const { mutate } = deleteInteraction()

  const { dialog, reset } = useDialog()

  switch (dialog.type) {
    case 'patient-interactions-form':
      return (
        <Modal
          size="sm"
          className="px-10 "
          onClose={reset}
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
          onCancel={reset}
        />
      )
    default:
      return null
  }
})
