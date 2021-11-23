import { useCallback, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'
import { useDialog } from 'hooks/use-dialog'

type TUsePatientInteractionForm = {
  onSubmit: (state: any) => void
  defaultValues: Record<string, any>
}

export const usePatientInteractionForm = (): TUsePatientInteractionForm => {
  const { id } = useParams() as any
  const { useOptimisticPost, useOptimisticPut } = useService()
  const { onError } = useError()
  const { success } = useToast()
  const {
    reset,
    dialog: { data, queryKey },
  } = useDialog()

  const { mutate: save } = useOptimisticPost({
    url: Api.interactions,
    key: queryKey,
    onMutate: reset,
    onError,
    onSuccess: () => success('You successfully add an interaction.'),
  })

  const { mutate: edit } = useOptimisticPut({
    url: `${Api.interactions}/${data?.id}/`,
    id: data ? data.id : '',
    key: queryKey,
    onMutate: reset,
    onError,
    onSuccess: () => success('You successfully edit this interaction.'),
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
