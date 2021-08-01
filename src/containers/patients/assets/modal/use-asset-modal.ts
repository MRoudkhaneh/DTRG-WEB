import { useUi } from 'hooks/use-ui'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'

export const useAssetModal = () => {
  const { success } = useToast()
  const { onError } = useError()
  const { useDelete, client } = useService()
  const {
    uiState: { dialog },
    toggleDialog,
  } = useUi()

  return {
    deletePatient: () =>
      useDelete({
        url: dialog.data ? `${Api.assets}${dialog.data.id}` : '',
        onMutate: async () => {
          await client.cancelQueries(dialog.queryKey)
          const snapshot = client.getQueryData(dialog.queryKey)
          client.setQueryData(dialog.queryKey, (old: any) => {
            old.data.results = old.data.results.map((item) =>
              item.id == dialog.data.id
                ? {
                    ...item,
                    lot_number: '',
                    serial_number: '',
                    expiration_date: '',
                  }
                : item
            )
            return old
          })
          toggleDialog({ open: false, type: null, data: {} })
          return { snapshot }
        },
        onError: (error, data, context) => {
          client.setQueryData(dialog.queryKey, context.snapshot)
          onError(error)
        },
        onSuccess: () => success('You successfully deleted this asset.'),
        onSettled: (data, error) => {
          client.invalidateQueries(dialog.queryKey)
        },
      }),
  }
}
