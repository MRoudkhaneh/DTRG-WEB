import { render, screen, waitFor } from '@testing-library/react'
import { PatientAssetActions } from '..'
import { wrapper, history } from 'test'

describe('Asset actions', () => {
  it('Should click edit properly', () => {
    render(<PatientAssetActions item={{}} queryKey="" />, { wrapper })
  })
})
