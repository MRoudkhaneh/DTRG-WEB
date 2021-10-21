import { createContext, Dispatch, FC, useReducer } from 'react'
import { reducer } from './reducer'
import { initialState } from './state'

export const UiContext = createContext<{
  uiState: TProviderState
  uiDispatch: Dispatch<TProviderAction>
}>(undefined)

export const UiProvider: FC<TUiProvider> = ({ children }) => {
  const [uiState, uiDispatch] = useReducer(reducer, initialState)

  return (
    <UiContext.Provider value={{ uiState, uiDispatch }}>
      {children}
    </UiContext.Provider>
  )
}
