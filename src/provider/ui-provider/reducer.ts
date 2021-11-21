import { uiTypes } from './types'
import { initialState } from './state'

export const reducer = (
  state = initialState,
  { type, payload }: TProviderAction
) => {
  switch (type) {
    case uiTypes.TOGGLE_TOAST:
      return {
        ...state,
        toast: { ...state.toast, ...payload },
      }

    default:
      return state
  }
}
