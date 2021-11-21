import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'
import { useDialog } from 'hooks/use-dialog'

export const usePatientModal = (): { deletePatient: () => void } => {
  const { success } = useToast()
  const { onError } = useError()
  const { useDelete, client } = useService()
  const { dialog, reset } = useDialog()

  const { mutate: deletePatient } = useDelete({
    url: dialog.data ? `${Api.patients}${dialog.data.id}/` : '',
    onMutate: async () => {
      await client.cancelQueries(dialog.queryKey)
      const snapshot = client.getQueryData(dialog.queryKey)
      client.setQueryData(dialog.queryKey, (old: any) => {
        old.data.results = old.data.results.map((item: any) =>
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

      reset()
      return { snapshot }
    },
    onError: (error: any, data: any, context: any) => {
      client.setQueryData(dialog.queryKey, context.snapshot)
      onError(error)
    },
    onSuccess: () => success('You successfully deleted this patient.'),
    onSettled: () => client.invalidateQueries(dialog.queryKey),
  })

  return {
    deletePatient,
  }
}
