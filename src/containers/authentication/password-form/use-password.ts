import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'

const defaultValues = { email: '' }

export const usePassword = () => {
  const { success } = useToast()
  const { usePost } = useService()
  const { push } = useHistory()
  const { onError } = useError()

  const { control, handleSubmit } = useForm({ defaultValues })

  const { mutate, isLoading } = usePost({
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

    onSubmit: useCallback((payload) => mutate({ payload }), []),
  }
}
