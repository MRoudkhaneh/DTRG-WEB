import { memo, Suspense, lazy, useEffect } from 'react'
import { Modal } from 'components/modal'
import { Confirm } from 'components/confirm'
import { useAssetModal } from './use-asset-modal'
import { Skeleton } from 'components/skeleton'

const PatientAssetForm = lazy(() =>
  import('../form').then(({ PatientAssetForm }) => ({
    default: PatientAssetForm,
  }))
)

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
            <Suspense fallback={<Skeleton />}>
              <PatientAssetForm />
            </Suspense>
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
