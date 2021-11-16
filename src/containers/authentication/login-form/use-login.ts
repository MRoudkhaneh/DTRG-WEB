import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'

const isProd = process.env.variable === 'prod'

const defaultValues = { email: '', password: '' }

export const useLogin = () => {
  const { control, handleSubmit } = useForm({ defaultValues })

  const { success } = useToast()

  const { usePost } = useService()

  const push = useNavigate()

  const { onError } = useError()

  const { mutate, isLoading, isSuccess, data } = usePost({
    url: `${Api.users}login/`,
    onError,
    onSuccess: (res) => {
      localStorage.setItem('token', res.data ? res.data.access : null)
      push('/admin/patients')
      success('You successfully loged in.')
    },
  })

  return {
    control,
    handleSubmit,
    isLoading,
    isSuccess,
    data,
    onSubmit: useCallback((payload) => mutate({ payload }), []),
    onPush: useCallback(() => push('/authentication/register'), []),
    href: useMemo(
      () =>
        isProd
          ? 'https://wa-syd-prod-kl-dtrgcrmbe.azurewebsites.net/web/password-reset/'
          : 'https://wa-syd-dev-kl-dtrgcrmbe.azurewebsites.net/web/password-reset/',
      []
    ),
  }
}
