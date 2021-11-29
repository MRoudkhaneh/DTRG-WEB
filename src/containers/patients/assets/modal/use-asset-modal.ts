import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'
import { useDialog } from 'hooks/use-dialog'
import { UseMutateFunction } from 'react-query'

type TUseAssetModal = {
  deleteAsset: UseMutateFunction<any, any, any, { snapshot: unknown }>
  dialog: TDialog
  reset: () => void
}

export const useAssetModal = (): TUseAssetModal => {
  const { success } = useToast()
  const { onError } = useError()
  const { useOptimisticDelete } = useService()
  const { dialog, reset } = useDialog()

  const { mutate: deleteAsset } = useOptimisticDelete({
    url: `${Api.assets}${dialog?.data?.id}`,
    key: dialog.queryKey,
    id: dialog?.data?.id,
    onMutate: reset,
    onError,
    onSuccess: () => success('You successfully deleted this asset.'),
  })

  return {
    deleteAsset,
    dialog,
    reset,
  }
}
