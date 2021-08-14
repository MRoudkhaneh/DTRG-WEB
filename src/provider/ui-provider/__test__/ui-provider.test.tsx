import { UiProvider, UiContext } from '..'
import { renderHook } from '@testing-library/react-hooks'
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
})
