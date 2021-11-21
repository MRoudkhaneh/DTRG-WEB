import { UiContext } from 'provider'
import { useCallback, useContext } from 'react'

export const useToast = () => {
  const {
    uiState: { toast },
    uiDispatch,
  } = useContext(UiContext)

  return {
    toast,
    error: useCallback(
      (description) =>
        uiDispatch({
          type: 'TOGGLE_TOAST',
          payload: {
            open: true,
            type: 'error',
            title: 'Error',
            description,
          },
        }),

      []
    ),
    success: useCallback(
      (description) =>
        uiDispatch({
          type: 'TOGGLE_TOAST',
          payload: {
            open: true,
            type: 'success',
            title: 'Success',
            description,
          },
        }),

      []
    ),
    close: useCallback(
      () =>
        uiDispatch({
          type: 'TOGGLE_TOAST',
          payload: {
            open: false,
            type: null,
            title: null,
            description: null,
          },
        }),

      []
    ),
  }
}
