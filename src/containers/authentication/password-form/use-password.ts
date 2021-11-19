import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'

const defaultValues = { email: '' }

export const usePassword = () => {
  const { success } = useToast()
  const { usePost } = useService()
  const { onError } = useError()
  const { toast } = useToast()
  const push = useNavigate()

  const { mutate, isLoading, isSuccess, data } = usePost({
    url: `${Api.users}reset/`,
    onError,
    onSuccess: () => {
      push('/authentication/login')
      success('New password has been sent to your email.')
    },
  })

  return {
    defaultValues,
    isLoading,
    isSuccess,
    data,
    toast,
    onSubmit: useCallback((payload) => mutate({ payload }), []),
    onPush: useCallback(() => push('/authentication/login'), []),
  }
}
