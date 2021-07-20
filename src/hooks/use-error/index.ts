import { useCallback } from 'react'
import { useHistory } from 'react-router'
import { useToast } from 'hooks'

export const useError = () => {
  const { error: errorToast } = useToast()
  const { push } = useHistory()

  return {
    onError: useCallback((error) => {
      if (error.message) {
        switch (error.message) {
          case 'Request failed with status code 401':
            errorToast(error.message)
            push('/authentication/login')
            break
          default:
            errorToast(error.message)
            break
        }
      }
    }, []),
  }
}
