import { useParams } from 'react-router-dom'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'
import { useDialog } from 'hooks/use-dialog'

export const usePatientInteractionModal = (): {
  deleteInteraction: () => void
} => {
  const { success } = useToast()
  const { onError } = useError()
  const { useDelete, client } = useService()
  const { id } = useParams() as any
  const {
    dialog: { data, queryKey },
    reset,
  } = useDialog()

  const { mutate: deleteInteraction } = useDelete({
    url: data ? `${Api.interactions}${data.id}/` : '',
    params: { patient_id: id },
    onMutate: async () => {
      await client.cancelQueries(queryKey)
      const snapshot = client.getQueryData(queryKey)
      client.setQueryData(queryKey, (old: any) => {
        old.data.results = old.data.results.map((item: any) =>
          item.id == data.id
            ? {
                ...item,
                interaction_type: '',
                interaction_datetime: '',
                contact_admin: '',
                contact_details: '',
              }
            : item
        )
        return old
      })

      reset()
      return { snapshot }
    },
    onError: (error: any, data: any, context: any) => {
      client.setQueryData(queryKey, context.snapshot)
      onError(error)
    },
    onSuccess: () => success('You successfully deleted this interaction.'),
    onSettled: () => client.invalidateQueries(queryKey),
  })

  return {
    deleteInteraction,
  }
}
