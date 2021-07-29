import { useParams } from 'react-router-dom'
import { useUi } from 'hooks/use-ui'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'

export const usePatientStudiesModal = () => {
  const { success } = useToast()
  const { onError } = useError()
  const { useDelete, client } = useService()
  const { id } = useParams() as any
  const {
    uiState: {
      dialog: { data, queryKey },
    },
    toggleDialog,
  } = useUi()

  return {
    deleteInteraction: () =>
      useDelete({
        url: data ? `${Api.studies}${data.id}/` : '',
        params: { patient_id: id },
        onMutate: async () => {
          await client.cancelQueries(queryKey)
          const snapshot = client.getQueryData(queryKey)
          client.setQueryData(queryKey, (old: any) => {
            old.data.results = old.data.results.map((item) =>
              item.id == data.id
                ? {
                    ...item,
                    current_study: '',
                    study_status: '',
                    status_details: '',
                  }
                : item
            )
            return old
          })

          toggleDialog({ open: false, type: null, data: {} })
          return { snapshot }
        },
        onError: (error, data, context) => {
          client.setQueryData(queryKey, context.snapshot)
          onError(error)
        },
        onSuccess: () => success('You successfully deleted this study.'),
        onSettled: () => client.invalidateQueries(queryKey),
      }),
  }
}
