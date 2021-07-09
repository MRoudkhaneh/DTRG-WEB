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

  return {
    deletePatient: () =>
      useDelete({
        url: dialog.data ? `${Api.patients}${dialog.data.id}/` : '',
        onMutate: async () => {
          await client.cancelQueries(dialog.queryKey)
          const snapshot = client.getQueryData(dialog.queryKey)
          client.setQueryData(dialog.queryKey, (old: any) => {
            old.data.results = old.data.results.map((item) =>
              item.id == dialog.data.id
                ? {
                    ...item,
                    surename: '',
                    first_name: '',
                    date_of_birth: '',
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
        onSettled: (data, error) => {
          if (error) onError(error)
          success('You successfully deleted this patient.')
          client.invalidateQueries(dialog.queryKey)
        },
      }),
  }
}
