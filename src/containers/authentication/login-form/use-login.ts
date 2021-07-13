import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'

const defaultValues = { email: '', password: '' }

export const useLogin = () => {
  const { control, handleSubmit } = useForm({ defaultValues })

  const { success } = useToast()

  const { usePost } = useService()

  const { push } = useHistory()

  const { onError } = useError()

  const { mutate, isLoading } = usePost({
    url: `${Api.users}login/`,
    onError,
    onSuccess: (res) => {
      localStorage.setItem('token', res.data.access)
      success('You successfully loged in.')
      push('/admin/patients')
    },
  })

  return {
    control,
    handleSubmit,
    isLoading,
    onSubmit: useCallback((payload) => mutate({ payload }), []),
  }
}
