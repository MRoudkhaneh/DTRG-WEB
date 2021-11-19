import { useDialog } from 'hooks/use-dialog'
import { patientParamsAtom } from 'provider/recoil/atoms'
import { useCallback, useMemo } from 'react'
import { useRecoilState } from 'recoil'

export const usePatientAdvanceSearch = () => {
  const [params, setParams] = useRecoilState(patientParamsAtom)
  const { reset } = useDialog()

  return {
    onSubmit: useCallback((state) => {
      setParams((prev) => ({ ...prev, ...state }))
      reset()
    }, []),
    defaultValues: useMemo(() => ({ ...params, page: 1 }), [params]),
  }
}
