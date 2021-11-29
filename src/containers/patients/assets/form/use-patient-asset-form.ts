import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { useLocation } from 'react-router'
import { useDialog } from 'hooks/use-dialog'
import { useCallback, useMemo } from 'react'
import { Api } from 'utils/api'

type TUsePatientAssetForm = {
  isEditing: boolean
  isLoading: boolean
  pathname: string
  onSubmit: (values: any) => void
  defaultValues: Record<string, any>
}

export const usePatientAssetForm = (): TUsePatientAssetForm => {
  const { usePost, useOptimisticPut, client } = useService()
  const { pathname } = useLocation()
  const { onError } = useError()
  const { success } = useToast()
  const {
    reset,
    dialog: { data, queryKey, isEditing },
  } = useDialog()

  const { mutate: edit } = useOptimisticPut({
    url: `${Api.assets}${data?.id}`,
    key: queryKey,
    id: data ? data.id : '',
    onMutate: reset,
    onSuccess: () => success('You successfully edit this asset.'),
    onError,
  })

  const { mutate: save, isLoading } = usePost({
    url: `${Api.assets}`,
    onSuccess: () => {
      success('You successfully save an asset.')
      client.invalidateQueries(queryKey)
      reset()
    },
    onError,
  })

  return {
    isLoading,
    isEditing,
    pathname,
    onSubmit: useCallback(
      (state) => {
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
      },
      [isEditing]
    ),
    defaultValues: useMemo(
      () =>
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
      [data, isEditing]
    ),
  }
}
