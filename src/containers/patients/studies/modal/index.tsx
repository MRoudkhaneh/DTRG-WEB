import { memo } from 'react'
import { Modal } from 'components/modal'
import { Confirm } from 'components/confirm'

import { usePatientStudiesModal } from './use-patient-studies-modal'
import { PatientStudiesForm } from '../form'
import { useDialog } from 'hooks/use-dialog'

export const PatientStudiesModal = memo(() => {
  const { deleteInteraction } = usePatientStudiesModal()

  const { mutate } = deleteInteraction()

  const { dialog, reset } = useDialog()

  switch (dialog.type) {
    case 'patient-study-form':
      return (
        <Modal
          size="sm"
          className="px-10"
          onClose={reset}
          header={
            dialog.data && dialog.data.isEditing
              ? 'Edit study'
              : `Add an study `
          }
        >
          <PatientStudiesForm />
        </Modal>
      )

    case 'patient-study-delete':
      return (
        <Confirm
          type="delete"
          description={`You are about to delete this study.`}
          onConfirm={() => mutate()}
          onCancel={reset}
        />
      )
    default:
      return null
  }
})
