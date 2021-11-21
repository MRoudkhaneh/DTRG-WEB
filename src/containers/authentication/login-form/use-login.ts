import { useCallback, useMemo, MouseEventHandler } from 'react'
import { useNavigate } from 'react-router-dom'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'

const isProd = process.env.variable === 'prod'

const defaultValues = { email: '', password: '' }

type TUseLogin = {
  isSuccess: boolean
  isLoading: boolean
  defaultValues: typeof defaultValues
  data: any
  onSubmit: (values: any) => void
  onPush: MouseEventHandler<HTMLButtonElement>
  href: string
}

export const useLogin = (): TUseLogin => {
  const { success } = useToast()
  const { usePost } = useService()
  const { onError } = useError()
  const push = useNavigate()

  const { mutate, isLoading, isSuccess, data } = usePost({
    url: `${Api.users}login/`,
    onError,
    onSuccess: (res: any) => {
      localStorage.setItem('token', res.data ? res.data.access : null)
      push('/admin/patients')
      success('You successfully loged in.')
    },
  })

  return {
    defaultValues,
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
