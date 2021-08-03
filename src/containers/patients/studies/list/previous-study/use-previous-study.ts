import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { useParams } from 'react-router-dom'
import { Api } from 'utils/api'

const defaultValues = {
  flash: false,
  optimapp: false,
  other: false,
  serodus: false,
  all_in_one: false,
  glysens_pave: false,
  glysens_free: false,
  Additional_Signals_PWOD: false,
  fiasp_original_v1: false,
  fiasp_extension_v2: false,
  clear: false,
  fame_1_eye: false,
  mews: false,
  additional_signals: false,
  biocap_feasibility: false,
  no_previous_study_involvement: false,
}

export const usepreviousStudy = () => {
  const { id } = useParams() as any
  const { useGet, usePost, client } = useService()
  const { onError } = useError()
  const { success } = useToast()

  const queryKey = useMemo(
    () => [`PATIENT_PREVIOUS_STUDY`, { patient_id: id }],
    [id]
  )

  const { control, handleSubmit, reset } = useForm({
    defaultValues,
  })

  const { isLoading, isFetching } = useGet({
    key: queryKey,
    url: `${Api.prevStudies}`,
    onFocus: false,
    keepPreviousData: true,
    onSuccess: (data) => reset(data.data),
    onError,
  })

  const { mutate: save, isLoading: saveLoading } = usePost({
    url: Api.prevStudies,
    onError: (error) => onError(error),
    onSuccess: (result) => {
      success('You successfully save previous studies.')
      reset({ ...result.data })
    },
    // onSettled: () => client.invalidateQueries(queryKey),
  })

  return {
    control,
    saveLoading,
    isLoading: useMemo(() => isLoading || isFetching, [isLoading, isFetching]),
    onSubmit: handleSubmit((state) => {
      const payload = { patient: id, ...state }
      save({ payload })
    }),
  }
}
