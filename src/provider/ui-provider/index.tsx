import { createContext, FC, useReducer } from 'react'
import { reducer } from './reducer'
import { initialState } from './state'

export const UiContext = createContext<TUiContext | null>(null)

export const UiProvider: FC<TUiProvider> = ({ children }) => {
  const [uiState, uiDispatch] = useReducer(reducer, initialState)

  return (
    <UiContext.Provider value={{ uiState, uiDispatch }}>
      {children}
    </UiContext.Provider>
  )
}
