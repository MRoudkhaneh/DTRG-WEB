import { useDialog } from 'hooks/use-dialog'
import { patientParamsAtom } from 'provider/recoil/atoms'
import { useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'

export const usePatientAdvanceSearch = () => {
  const [params, setParams] = useRecoilState(patientParamsAtom)
  const { reset } = useDialog()

  const { control, setValue, handleSubmit } = useForm({
    defaultValues: { ...params, page: 1 },
  })

  return {
    control,
    setValue,
    onSubmit: handleSubmit((state) => {
      setParams((prev) => ({ ...prev, ...state }))
      reset()
    }),
  }
}
