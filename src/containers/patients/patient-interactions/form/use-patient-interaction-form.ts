import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useError, useService, useToast, useUi } from 'hooks'
import { Api } from 'utils'
import { useParams } from 'react-router-dom'

export const usePatientInteractionForm = () => {
  const { id } = useParams() as any
  const { usePost, client } = useService()
  const {
    toggleDialog,
    uiState: {
      dialog: { data },
    },
  } = useUi()
  const { onError } = useError()
  const { success } = useToast()

  const { control, handleSubmit, setValue } = useForm({
    defaultValues:
      data && data.isEditing
        ? {
            interaction_type: data.interaction_type,
            interaction_datetime: data.interaction_datetime,
            contact_admin: data.contact_admin,
            contact_details: data.contact_details,
          }
        : {},
  })

  const { mutate: save, isLoading: saveLoading } = usePost({
    url: Api.interactions,
    onError,
    onSuccess: () => {
      success('You successfully added an interaction.')
      toggleDialog({
        open: false,
        type: null,
      })
      client.invalidateQueries('PATIENT_INTERACTION_LIST')
    },
  })

  const { mutate: edit, isLoading: editLoading } = usePost({
    url: data ? `${Api.interactions}/${data.patient_id}/` : '',
    onError,
    onSuccess: () => {
      success('You successfully edited an interaction.')
      toggleDialog({
        open: false,
        type: null,
      })
      client.invalidateQueries('PATIENT_INTERACTION_LIST')
    },
  })

  return {
    control,
    setValue,
    isLoading: useMemo(
      () => saveLoading || editLoading,
      [saveLoading, editLoading]
    ),
    onSubmit: handleSubmit((state) => {
      const payload = {
        ...state,
        id,
        interaction_datetime:
          state.interaction_datetime ||
          `${new Date().toISOString().slice(0, 10)} ${new Date()
            .toISOString()
            .slice(11, 16)}`,
      }
      data.isEditing ? edit({ payload }) : save({ payload })
    }),
  }
}
