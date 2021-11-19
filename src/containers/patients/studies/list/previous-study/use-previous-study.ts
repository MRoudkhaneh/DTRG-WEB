import { useCallback, useMemo, useState } from 'react'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { useParams } from 'react-router-dom'
import { Api } from 'utils/api'

const defaultState = {
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
  const [defaultValues, setDefaultValues] = useState(defaultState)
  const { id } = useParams() as any
  const { useGet, usePost } = useService()
  const { onError } = useError()
  const { success } = useToast()

  const queryKey = useMemo(
    () => [`PATIENT_PREVIOUS_STUDY`, { patient_id: id }],
    [id]
  )

  const { isLoading, isFetching } = useGet({
    key: queryKey,
    url: `${Api.prevStudies}`,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    onSuccess: ({ data }) => setDefaultValues(data),
    onError,
  })

  const { mutate: save, isLoading: saveLoading } = usePost({
    url: Api.prevStudies,
    onError: (error) => onError(error),
    onSuccess: () => success('You successfully save previous studies.'),
  })

  return {
    defaultValues,
    saveLoading,
    isLoading: useMemo(() => isLoading || isFetching, [isLoading, isFetching]),
    onSubmit: useCallback(
      (state) => {
        const payload = { ...state, patient: id }
        save({ payload })
      },
      [id]
    ),
  }
}
