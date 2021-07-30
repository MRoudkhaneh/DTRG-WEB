import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { Api } from 'utils/api'
import { useToast } from 'hooks/use-toast'

export const usepreviousStudy = () => {
  const { useGet, usePost, client } = useService()
  const { onError } = useError()
  const { success } = useToast()

  const queryKey = useMemo(() => ['PATIENT_PREVIOUS_STUDY'], [])

  const { data, isLoading, isFetching } = useGet({
    key: queryKey,
    url: `${Api.studies}`,
    onFocus: false,
    keepPreviousData: true,
    onError,
  })

  const { mutate: save, isLoading: saveLoading } = usePost({
    url: Api.studies,
    onMutate: async ({ payload }) => {
      await client.cancelQueries(queryKey)
      const snapshot = client.getQueryData(queryKey)
      client.setQueryData(queryKey, (old: any) => {
        old.data.results = [payload, ...old.data.results]
        return old
      })
      return { snapshot }
    },
    onError: (error, data, context) => {
      client.setQueryData(queryKey, context.snapshot)
      onError(error)
    },
    onSettled: (data, error) => {
      client.invalidateQueries(queryKey)
      if (!error) success('You successfully save previous studies.')
    },
  })

  const { control, handleSubmit } = useForm({
    defaultValues: {
      'Additional Signals': false,
      'Additional Signals PWOD': false,
      'All in One': false,
      'Biocap Feasibility': false,
      Clear: false,
      'FAME 1 EYE': false,
      FLASH: false,
      'Fiasp Extension V2': false,
      'Fiasp Original V1': false,
      'Glysens FREE': false,
      'Glysens PAVE': false,
      MEWS: false,
      'No previous study involvement': false,
      Optimapp: false,
      Other: false,
      Serodus: false,
    },
  })

  return {
    control,
    isLoading: useMemo(() => isLoading || isFetching, [isLoading, isFetching]),
    onSubmit: useCallback(
      handleSubmit((payload) => save({ payload })),
      []
    ),
  }
}
