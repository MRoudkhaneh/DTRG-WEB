import { createContext, FC, useReducer } from 'react'
import { reducer } from './reducer'
import { initialState } from './state'

export const UiContext = createContext({} as TUiContext)

export const UiProvider = ({ children }: TUiProvider) => {
  const [uiState, uiDispatch] = useReducer(reducer, initialState)

  return (
    <UiContext.Provider value={{ uiState, uiDispatch }}>
      {children}
    </UiContext.Provider>
  )
}
