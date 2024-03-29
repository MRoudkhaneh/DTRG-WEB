import { memo, useEffect } from 'react'
import { Modal } from 'components/modal'
import { Confirm } from 'components/confirm'
import { usePatientInteractionModal } from './use-patient-interactions-modal'
import { useDialog } from 'hooks/use-dialog'
import { PatientInteractionsForm } from '../form'

export const PatientInteractionsModal = memo(() => {
  const { deleteInteraction } = usePatientInteractionModal()

  const { dialog, reset } = useDialog()

  useEffect(() => {
    return () => reset()
  }, [])

  if (dialog.open)
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
          >
            <PatientInteractionsForm />
          </Modal>
        )

      case 'patient-interaction-delete':
        return (
          <Confirm
            type="delete"
            description={`You are about to delete this interaction.`}
            onConfirm={() => deleteInteraction()}
            onCancel={reset}
          />
        )
      default:
        return null
    }
  else return null
})
