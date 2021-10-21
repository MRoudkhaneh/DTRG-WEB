import { useUi } from 'hooks/use-ui'
import { useForm } from 'react-hook-form'

export const usePatientAdvanceSearch = () => {
  const { uiState, setParams, toggleDialog } = useUi()

  const { control, setValue, handleSubmit } = useForm({
    defaultValues: { ...uiState.params, page: 1 },
  })

  return {
    control,
    setValue,
    onSubmit: handleSubmit((state) => {
      setParams({ ...state })
      toggleDialog({ open: false, data: null, type: null })
    }),
  }
}
