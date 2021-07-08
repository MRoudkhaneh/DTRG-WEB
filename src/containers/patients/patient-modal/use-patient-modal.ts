import { useError, useService, useToast, useUi } from 'hooks'
import { Api } from 'utils'

export const usePatientModal = () => {
  const { success } = useToast()
  const { onError } = useError()
  const { useDelete, client } = useService()
  const {
    uiState: { dialog },
    toggleDialog,
  } = useUi()

  const { mutate: deletePatient } = useDelete({
    url: dialog.data ? `${Api.patients}${dialog.data.id}/` : '',
    onMutate: async () => {
      await client.cancelQueries(dialog.queryKey)
      const snapshot = client.getQueryData(dialog.queryKey)
      client.setQueryData(dialog.queryKey, (old: any) => {
        old.data.results = old.data.results.filter(
          (item) => item.id != dialog.data.id
        )
        return old
      })
      success('You successfully deleted this patient.')
      toggleDialog({ open: false, type: null, data: {} })
      return { snapshot }
    },
    onError: (error, data, context) => {
      client.setQueryData(dialog.queryKey, context.snapshot)
      onError(error)
    },
    onSuccess: () => {
      client.invalidateQueries(dialog.queryKey)
    },
  })

  return {
    deletePatient,
  }
}
