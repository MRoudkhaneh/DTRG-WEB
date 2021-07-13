import { useCallback, useContext } from 'react'
import { UiContext } from 'provider/ui-provider'
import { uiTypes } from 'provider/ui-provider/types'

export const useUi = () => {
  const { uiState, uiDispatch } = useContext(UiContext)

  const toggleDrawer = useCallback(
    () => uiDispatch({ type: uiTypes.TOGGLE_DRAWER }),
    [uiState.drawer.open]
  )

  const toggleDialog = useCallback(
    (payload) => uiDispatch({ type: uiTypes.TOGGLE_DIALOG, payload }),
    [uiState.dialog]
  )

  const toggleToast = useCallback(
    (payload) => uiDispatch({ type: uiTypes.TOGGLE_TOAST, payload }),
    [uiState.toast]
  )

  const toggleDark = useCallback(
    (payload) => {
      if (payload) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      uiDispatch({ type: uiTypes.TOGGLE_DARK, payload })
    },
    [uiState.dark]
  )

  return {
    uiState,
    toggleDrawer,
    toggleDialog,
    toggleToast,
    toggleDark,
  }
}
