import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useUi } from 'hooks/use-ui'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'

export const usePatientAssetForm = () => {
  const params: { id: string } = useParams()
  const { usePut, usePost, client } = useService()
  const { onError } = useError()
  const { success } = useToast()
  const {
    toggleDialog,
    uiState: {
      dialog: { data, queryKey, isEditing },
    },
  } = useUi()

  const { control, handleSubmit, setValue } = useForm({
    defaultValues:
      isEditing && data
        ? {
            lot_number: data.lot_number,
            serial_number: data.serial_number,
            expiration_date: data.expiration_date?.slice(0, 10),
            ownership: data.ownership,
            category: data.category,
            type: data.type,
          }
        : {
            lot_number: '',
            serial_number: '',
            expiration_date: '',
            ownership: '',
            category: '',
            type: '',
            owner: '',
          },
  })

  const { mutate: edit } = usePut({
    url: data ? `${Api.assets}${data.id}` : '',
    onMutate: async ({ payload }) => {
      await client.cancelQueries(queryKey)
      const snapshot = client.getQueryData(queryKey)
      client.setQueryData(queryKey, (old: any) => {
        old.data.results = old.data.results.map((item) =>
          item.id == data.id ? payload : item
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
    onSuccess: () => success('You successfully edit this interaction.'),
    onSettled: () => client.invalidateQueries(queryKey),
  })

  const { mutate: save } = usePost({
    url: `${Api.assets}`,
    onMutate: async ({ payload }) => {
      await client.cancelQueries(queryKey)
      const snapshot = client.getQueryData(queryKey)
      client.setQueryData(queryKey, (old: any) => [payload, ...old])
      toggleDialog({ open: false, type: null, data: {} })
      return { snapshot }
    },
    onError: (error, data, context) => {
      client.setQueryData(queryKey, context.snapshot)
      onError(error)
    },
    onSuccess: () => success('You successfully save an interaction.'),
    onSettled: () => client.invalidateQueries(queryKey),
  })

  return {
    control,
    setValue,
    onSubmit: handleSubmit((state) => {
      if (isEditing) {
        const payload = { ...state, patient: params.id }
        edit({ payload })
      } else {
        save({ payload: state })
      }
    }),
  }
}
