import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { useUi } from 'hooks/use-ui'
import { Api } from 'utils/api'

const defaultValues = { email: '' }

export const usePassword = () => {
  const { success } = useToast()
  const { usePost } = useService()
  const push = useNavigate()
  const { onError } = useError()
  const { uiState } = useUi()

  const { control, handleSubmit } = useForm({ defaultValues })

  const { mutate, isLoading, isSuccess, data } = usePost({
    url: `${Api.users}reset/`,
    onError,
    onSuccess: () => {
      push('/authentication/login')
      success('New password has been sent to your email.')
    },
  })

  return {
    control,
    handleSubmit,
    isLoading,
    isSuccess,
    data,
    toast: useMemo(() => uiState.toast, [uiState.toast]),
    onSubmit: useCallback((payload) => mutate({ payload }), []),
    onPush: useCallback(() => push('/authentication/login'), []),
  }
}
