import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'

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

  const push = useNavigate()

  const { onError } = useError()

  const { mutate, isLoading } = usePost({
    url: `${Api.users}`,
    onError,
    onSuccess: () => {
      success('You successfully created an account.')
      push('/authentication/login')
    },
  })

  return {
    control,
    handleSubmit,
    isLoading,
    onSubmit: useCallback((payload) => mutate({ payload }), []),
  }
}
