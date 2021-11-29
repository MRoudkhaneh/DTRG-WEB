import { useCallback, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'
import { useDialog } from 'hooks/use-dialog'

type TUsePatientInteractionForm = {
  isLoading: boolean
  onSubmit: (state: any) => void
  defaultValues: Record<string, any>
}

export const usePatientStudyForm = (): TUsePatientInteractionForm => {
  const { id } = useParams() as any
  const { useOptimisticPut, useOptimisticPost } = useService()
  const { onError } = useError()
  const { success } = useToast()
  const {
    reset,
    dialog: { data, queryKey },
  } = useDialog()

  const { mutate: save, isLoading: saveLoading } = useOptimisticPost({
    url: Api.studies,
    key: queryKey,
    onMutate: reset,
    onError,
    onSuccess: () => success('You successfully add an study.'),
  })

  const { mutate: edit, isLoading: editLoading } = useOptimisticPut({
    url: `${Api.studies}${data?.id}/`,
    key: queryKey,
    id: data ? data.id : '',
    onMutate: reset,
    onError,
    onSuccess: () => success('You successfully edit this study.'),
  })

  return {
    isLoading: useMemo(
      () => saveLoading || editLoading,
      [saveLoading, editLoading]
    ),
    onSubmit: useCallback(
      (state) => {
        const payload = {
          ...state,
          patient: parseInt(id),
        }
        data && data.isEditing ? edit({ payload }) : save({ payload })
      },
      [data]
    ),
    defaultValues: useMemo(
      () =>
        data && data.isEditing
          ? {
              current_study: data.current_study,
              study_status: data.study_status,
              status_details: data.status_details,
            }
          : {
              current_study: '',
              study_status: '',
              status_details: '',
            },
      [data]
    ),
  }
}
