import { useCallback, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'
import { useDialog } from 'hooks/use-dialog'

export const usePatientStudyForm = () => {
  const { id } = useParams() as any
  const { usePost, usePut, client } = useService()
  const { onError } = useError()
  const { success } = useToast()
  const {
    reset,
    dialog: { data, queryKey },
  } = useDialog()

  const { mutate: save, isLoading: saveLoading } = usePost({
    url: Api.studies,
    onMutate: async ({ payload }) => {
      await client.cancelQueries(queryKey)
      const snapshot = client.getQueryData(queryKey)
      client.setQueryData(queryKey, (old: any) => {
        old.data.results = [payload, ...old.data.results]
        return old
      })
      reset()
      return { snapshot }
    },
    onError: (error, data, context) => {
      client.setQueryData(queryKey, context.snapshot)
      onError(error)
    },
    onSuccess: () => success('You successfully add an study.'),
    onSettled: () => client.invalidateQueries(queryKey),
  })

  const { mutate: edit, isLoading: editLoading } = usePut({
    url: data ? `${Api.studies}${data.id}/` : '',
    onMutate: async ({ payload }) => {
      await client.cancelQueries(queryKey)
      const snapshot = client.getQueryData(queryKey)
      client.setQueryData(queryKey, (old: any) => {
        old.data.results = old.data.results.map((item) =>
          item.id == data.id ? payload : item
        )
        return old
      })
      reset()
      return { snapshot }
    },
    onError: (error, data, context) => {
      client.setQueryData(queryKey, context.snapshot)
      onError(error)
    },
    onSuccess: () => success('You successfully edit this study.'),
    onSettled: () => client.invalidateQueries(queryKey),
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
