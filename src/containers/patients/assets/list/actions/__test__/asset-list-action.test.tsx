import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import { PatientAssetActions } from '..'
import { wrapper } from 'test'
import { renderHook } from '@testing-library/react-hooks'
import { useUi } from 'hooks/use-ui'

describe('Asset actions', () => {
  it('Should click edit properly', async () => {
    render(<PatientAssetActions item="ITEM" queryKey="KEY" />, { wrapper })
    const { result } = renderHook(() => useUi(), { wrapper })
    const edit = screen.getByTestId('edit')
    act(() => edit.click())
    // fireEvent.click(edit)
    // await waitFor(() => result.current.uiState.dialog.open)
    console.log(result.current.uiState)

    //expect(result.current.uiState.dialog.open).toBeTruthy()
  })
})
