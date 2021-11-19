import { useCallback, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'
import { useDialog } from 'hooks/use-dialog'

export const usePatientInteractionForm = () => {
  const { id } = useParams() as any
  const { usePost, usePut, client } = useService()
  const { onError } = useError()
  const { success } = useToast()
  const {
    reset,
    dialog: { data, queryKey },
  } = useDialog()

  const { mutate: save } = usePost({
    url: Api.interactions,
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
    onSuccess: () => success('You successfully add an interaction.'),
    onSettled: () => client.invalidateQueries(queryKey),
  })

  const { mutate: edit } = usePut({
    url: data ? `${Api.interactions}/${data.id}/` : '',
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
    onSuccess: () => success('You successfully edit this interaction.'),
    onSettled: () => client.invalidateQueries(queryKey),
  })

  return {
    onSubmit: useCallback(
      (state) => {
        const payload = {
          ...state,
          patient: parseInt(id),
          interaction_datetime: `${state.interaction_date}`,
        }
        data && data.isEditing ? edit({ payload }) : save({ payload })
      },
      [data]
    ),
    defaultValues: useMemo(
      () =>
        data && data.isEditing
          ? {
              interaction_type: data.interaction_type,
              interaction_date: data.interaction_datetime.slice(0, 10),
              contact_admin: data.contact_admin,
              contact_details: data.contact_details,
            }
          : {
              interaction_type: '',
              interaction_date: new Date().toISOString().slice(0, 10),
              contact_admin: '',
              contact_details: '',
            },
      [data]
    ),
  }
}
