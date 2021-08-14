import { UiProvider, UiContext } from '..'
import { act, renderHook } from '@testing-library/react-hooks'
import { useContext } from 'react'

const initialState = {
  drawer: { open: false },
  dialog: { open: false, data: {}, type: null },
  toast: { open: false, type: null, title: null, description: null },
  theme: 'dark',
}

const wrapper = ({ children }) => <UiProvider>{children}</UiProvider>

describe('UI Provider', () => {
  it('Should return currect state', () => {
    const { result } = renderHook(() => useContext(UiContext), { wrapper })
    expect(result.current.uiState).toStrictEqual(initialState)
  })
  it('Should toggle drawer', () => {
    const { result } = renderHook(() => useContext(UiContext), { wrapper })
    act(() => result.current.uiDispatch({ type: 'TOGGLE_DRAWER' }))
    expect(result.current.uiState.drawer.open).toBeTruthy()
  })
  it('Should toggle toast', () => {
    const { result } = renderHook(() => useContext(UiContext), { wrapper })
    act(() =>
      result.current.uiDispatch({
        type: 'TOGGLE_TOAST',
        payload: { open: true },
      })
    )
    expect(result.current.uiState.toast.open).toBeTruthy()
  })
  it('Should toggle dialog', () => {
    const { result } = renderHook(() => useContext(UiContext), { wrapper })
    act(() =>
      result.current.uiDispatch({
        type: 'TOGGLE_DIALOG',
        payload: { open: true },
      })
    )
    expect(result.current.uiState.dialog.open).toBeTruthy()
  })
  it('Should toggle dark', () => {
    const { result } = renderHook(() => useContext(UiContext), { wrapper })
    act(() =>
      result.current.uiDispatch({
        type: 'TOGGLE_DARK',
        payload: false,
      })
    )
    expect(result.current.uiState.theme).toBe('light')
  })
})
