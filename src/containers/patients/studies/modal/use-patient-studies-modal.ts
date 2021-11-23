import { useParams } from 'react-router-dom'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'
import { useDialog } from 'hooks/use-dialog'
import { UseMutateFunction } from 'react-query'

export const usePatientStudiesModal = (): {
  deleteStudy: UseMutateFunction<any, any, any, { snapshot: unknown }>
} => {
  const { success } = useToast()
  const { onError } = useError()
  const { useOptimisticDelete } = useService()
  const { id } = useParams() as any
  const {
    dialog: { data, queryKey },
    reset,
  } = useDialog()

  const { mutate: deleteStudy } = useOptimisticDelete({
    url: `${Api.studies}${data?.id}/`,
    params: { patient_id: id },
    key: queryKey,
    id: data?.id,
    onMutate: reset,
    onError,
    onSuccess: () => success('You successfully deleted this study.'),
  })

  return {
    deleteStudy,
  }
}
