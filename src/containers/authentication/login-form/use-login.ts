import { useCallback } from 'react'
import { useHistory } from 'react-router'
import { useForm } from 'react-hook-form'
import { useError, useService, useToast } from 'hooks'
import { Api } from 'utils'

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
