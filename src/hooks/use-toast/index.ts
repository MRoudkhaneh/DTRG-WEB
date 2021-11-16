import { toastAtom } from 'provider/recoil/atoms'
import { useCallback } from 'react'
import { useRecoilState } from 'recoil'

export const useToast = () => {
  const [toast, setToast] = useRecoilState(toastAtom)

  return {
    toast,
    error: useCallback(
      (description) =>
        setToast((prev) => ({
          ...prev,
          open: true,
          type: 'error',
          title: 'Error',
          description,
        })),
      []
    ),
    success: useCallback(
      (description) =>
        setToast((prev) => ({
          ...prev,
          open: true,
          type: 'success',
          title: 'Success',
          description,
        })),

      []
    ),
    close: useCallback(
      () =>
        setToast((prev) => ({
          ...prev,
          open: false,
          type: null,
          title: null,
          description: null,
        })),

      []
    ),
  }
}
