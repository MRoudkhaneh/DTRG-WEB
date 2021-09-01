import { useForm } from 'react-hook-form'
import { useUi } from 'hooks/use-ui'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'
import { useParams } from 'react-router-dom'

export const usePatientAssetForm = () => {
  const { id } = useParams() as any
  const { usePut, client } = useService()
  const { onError } = useError()
  const { success } = useToast()
  const {
    toggleDialog,
    uiState: {
      dialog: { data, queryKey },
    },
  } = useUi()

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      lot_number: data.lot_number,
      serial_number: data.serial_number,
      expiration_date: data.expiration_date?.slice(0, 10),
      ownership: data.ownership,
      category: data.category,
      type: data.type,
    },
  })

  const { mutate: edit, isLoading: editLoading } = usePut({
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

  return {
    control,
    setValue,
    isLoading: editLoading,
    onSubmit: handleSubmit((state) => {
      const payload = { ...state, patient: id }
      edit({ payload })
    }),
  }
}
