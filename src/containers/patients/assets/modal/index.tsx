import { memo, useEffect } from 'react'
import { Modal } from 'components/modal'
import { Confirm } from 'components/confirm'
import { useAssetModal } from './use-asset-modal'
import { PatientAssetForm } from '../form'

export const AssetModal = memo(() => {
  const { deleteAsset, dialog, reset } = useAssetModal()

  useEffect(() => {
    return () => reset()
  }, [])

  if (dialog.open)
    switch (dialog.type) {
      case 'asset-edit':
        return (
          <Modal
            aria-labelledby="form"
            size="md"
            className="px-10 "
            onClose={reset}
            header={dialog.isEditing ? 'Edit asset' : 'Add an new asset'}
          >
            <PatientAssetForm />
          </Modal>
        )

      case 'asset-delete':
        return (
          <Confirm
            type="delete"
            description="You are about to delete this asset."
            onConfirm={deleteAsset}
            onCancel={reset}
          />
        )

      default:
        return null
    }
  else return null
})
