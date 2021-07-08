import { useService, useToast, useUi } from 'hooks'
import { Api } from 'utils'

export const usePatientInteractionModal = () => {
  const { uiState, toggleDialog } = useUi()
  const { success, error } = useToast()
  const { useDelete, client } = useService()

  const { mutate: deleteInteraction, isLoading: deleteInteractionLoading } =
    useDelete({
      url: uiState.dialog.data
        ? `${Api.interactions}${uiState.dialog.data.id}/`
        : '',
      onSuccess: () => {
        client.invalidateQueries('PATIENTS_INTERACTIONS_LIST')
        toggleDialog({ open: false, type: null, data: {} })
        success('You successfully deleted this interaction.')
      },
      onError: (er) => {
        error('Something went wrong.')
        console.log(er)
      },
    })

  return {
    deleteInteractionLoading,
    deleteInteraction,
  }
}
