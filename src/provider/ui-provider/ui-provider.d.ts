type TProviderState = {
  toast: { open: boolean; type: any; title: any; description: any }
}

type TProviderAction = {
  type: string
  payload?: any
}

type TProviderTypes =
  | 'TOGGLE_DRAWER'
  | 'TOGGLE_DIALOG'
  | 'TOGGLE_TOAST'
  | 'TOGGLE_DARK'
  | 'SET_PARAMS'
  | 'SET_ADVANCE_PARAMS'
  | 'SET_CURRENT'

type TUiProvider = {
  children?: ReactNode
}

type TUiContext = {
  uiState: TProviderState
  uiDispatch: Dispatch<TProviderAction>
}
