import { lazy, memo } from 'react'
import { useUi } from 'hooks/use-ui'
import { Modal } from 'components/modal'
import { Confirm } from 'components/confirm'

import { usePatientStudiesModal } from './use-patient-studies-modal'

const PatientStudiesForm = lazy(() =>
  import('containers/patients/studies/form').then((module) => ({
    default: module.PatientInteractionsForm,
  }))
)

export const PatientStudiesModal = memo(() => {
  const { deleteInteraction } = usePatientStudiesModal()

  const { mutate } = deleteInteraction()

  const {
    uiState: { dialog },
    toggleDialog,
  } = useUi()

  switch (dialog.type) {
    case 'patient-study-form':
      return (
        <Modal
          size="sm"
          className="px-10 "
          onClose={() => toggleDialog({ open: false, type: null, data: null })}
          header={
            dialog.data && dialog.data.isEditing
              ? 'Edit study'
              : `Add an study `
          }
          withHeader
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
          onCancel={() => toggleDialog({ open: false, type: null, data: null })}
        />
      )
    default:
      return null
  }
})
