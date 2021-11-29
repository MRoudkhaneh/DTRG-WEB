import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'
import { useDialog } from 'hooks/use-dialog'
import { UseMutateFunction } from 'react-query'

export const usePatientModal = (): {
  deletePatient: UseMutateFunction<any, any, any, { snapshot: unknown }>
} => {
  const { success } = useToast()
  const { onError } = useError()
  const { useOptimisticDelete } = useService()
  const { dialog, reset } = useDialog()

  const { mutate: deletePatient } = useOptimisticDelete({
    url: `${Api.patients}${dialog?.data?.id}/`,
    key: dialog.queryKey,
    id: dialog?.data?.id,
    onMutate: reset,
    onError,
    onSuccess: () => success('You successfully deleted this patient.'),
  })

  return {
    deletePatient,
  }
}
