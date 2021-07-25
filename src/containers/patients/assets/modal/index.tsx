import { useUi } from 'hooks'
import { lazy, memo } from 'react'
import { Modal } from 'components/modal'
import { Confirm } from 'components/confirm'
import { useAssetModal } from './use-asset-modal'

const PatientAssetForm = lazy(() =>
  import('containers/patients/assets/form').then((module) => ({
    default: module.PatientAssetForm,
  }))
)

export const AssetModal = memo(() => {
  const { deletePatient } = useAssetModal()

  const { mutate } = deletePatient()

  const {
    uiState: { dialog },
    toggleDialog,
  } = useUi()

  switch (dialog.type) {
    case 'asset-edit':
      return (
        <Modal
          size="sm"
          className="px-10 "
          onClose={() => toggleDialog({ open: false, type: null, data: null })}
          header="Edit asset"
          withHeader
        >
          <PatientAssetForm />
        </Modal>
      )

    case 'asset-delete':
      return (
        <Confirm
          type="delete"
          description="You are about to delete this asset."
          onConfirm={() => mutate()}
          onCancel={() => toggleDialog({ open: false, type: null })}
        />
      )

    default:
      return null
  }
})
