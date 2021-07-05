import { useCallback } from 'react'
import { useHistory } from 'react-router'
import { useForm } from 'react-hook-form'
import { useError, useService, useToast } from 'hooks'
import { Api } from 'utils'

const defaultValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  verification_code: '',
}

export const useRegister = () => {
  const { control, handleSubmit } = useForm({ defaultValues })

  const { success } = useToast()

  const { usePost } = useService()

  const { push } = useHistory()

  const { onError } = useError()

  const { mutate, isLoading } = usePost({
    url: `${Api.users}register/`,
    onError,
    onSuccess: (res) => {
      localStorage.setItem('token', res.data.access)
      success('You successfully created an account.')
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
