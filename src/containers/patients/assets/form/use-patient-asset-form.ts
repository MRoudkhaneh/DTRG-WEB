import { useForm } from 'react-hook-form'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'
import { useLocation } from 'react-router'
import { useDialog } from 'hooks/use-dialog'

export const usePatientAssetForm = () => {
  const { usePut, usePost, client } = useService()
  const { pathname } = useLocation()
  const { onError } = useError()
  const { success } = useToast()
  const {
    reset,
    dialog: { data, queryKey, isEditing },
  } = useDialog()

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
            type_details: data.type_details,
            status: data.status,
            owner: {
              first_name: data.patient_name
                ? data.patient_name.split(' ')[0]
                : '',
              surename: data.patient_name
                ? data.patient_name.split(' ')[1]
                : '',
              id: data.patient,
            },
          }
        : {
            lot_number: '',
            serial_number: '',
            expiration_date: '',
            ownership: '',
            category: '',
            type: '',
            owner: null,
            status: '',
            type_details: '',
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

  const { mutate: save, isLoading } = usePost({
    url: `${Api.assets}`,
    onSuccess: () => {
      success('You successfully save an interaction.')
      reset()
      client.invalidateQueries(queryKey)
    },
    onError,
  })

  return {
    control,
    setValue,
    isLoading,
    isEditing,
    pathname,
    onSubmit: handleSubmit((state) => {
      if (isEditing) {
        const payload = {
          patient: state.owner.id,
          owner: state.owner.id,
          lot_number: state.lot_number,
          serial_number: state.serial_number,
          expiration_date: state.expiration_date,
          status: state.status,
          category: state.category,
          ownership: state.ownership,
          type: state.type,
          type_details: state.type_details,
        }
        edit({ payload })
      } else {
        const payload = {
          owner: state.owner.id,
          patient: state.owner.id,
          lot_number: state.lot_number,
          serial_number: state.serial_number,
          expiration_date: state.expiration_date,
          status: state.status,
          category: state.category,
          ownership: state.ownership,
          type: state.type,
          type_details: state.type_details,
        }
        save({ payload })
      }
    }),
  }
}
