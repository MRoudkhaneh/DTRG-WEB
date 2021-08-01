import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { Api } from 'utils/api'
import { useToast } from 'hooks/use-toast'
import { useParams } from 'react-router-dom'

export const usepreviousStudy = () => {
  const { id } = useParams() as any
  const { useGet, usePost, client } = useService()
  const { onError } = useError()
  const { success } = useToast()

  const queryKey = useMemo(
    () => [`PATIENT_PREVIOUS_STUDY`, { patient_id: id }],
    [id]
  )

  const { data, isLoading, isFetching } = useGet({
    key: queryKey,
    url: `${Api.prevStudies}`,
    onFocus: false,
    keepPreviousData: true,
    onError,
  })

  const { control, handleSubmit } = useForm({
    defaultValues: {
      flash: true,
      optimapp: true,
      other: true,
      serodus: true,
      all_in_one: true,
      glysens_pave: true,
      glysens_free: true,
      Additional_Signals_PWOD: true,
      fiasp_original_v1: true,
      fiasp_extension_v2: true,
      clear: true,
      fame_1_eye: true,
      mews: true,
      additional_signals: true,
      biocap_feasibility: true,
      no_previous_study_involvement: true,
    },
  })

  const { mutate: save, isLoading: saveLoading } = usePost({
    url: Api.prevStudies,
    onError: (error) => onError(error),
    onSuccess: () => success('You successfully save previous studies.'),
    onSettled: () => client.invalidateQueries(queryKey),
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
