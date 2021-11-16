import { dialogAtom } from 'provider/recoil/atoms'
import { useCallback } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

export const useDialog = () => {
  const [dialog, setDialog] = useRecoilState(dialogAtom)
  const reset = useResetRecoilState(dialogAtom)

  return {
    dialog,
    reset,
    toggleDialog: useCallback(
      (payload) => setDialog((prev) => ({ ...prev, ...payload })),
      []
    ),
  }
}
