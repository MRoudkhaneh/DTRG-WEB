import { useCallback, MouseEventHandler } from 'react'
import { useNavigate } from 'react-router-dom'
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

type TUseRegister = {
  isLoading: boolean
  defaultValues: typeof defaultValues
  onSubmit: (values: any) => void
  onPush: MouseEventHandler<HTMLButtonElement>
}

export const useRegister = (): TUseRegister => {
  const { success } = useToast()
  const { usePost } = useService()
  const { onError } = useError()
  const push = useNavigate()

  const { mutate, isLoading } = usePost({
    url: `${Api.users}`,
    onError,
    onSuccess: () => {
      success('You successfully created an account.')
      push('/authentication/login')
    },
  })

  return {
    defaultValues,
    isLoading,
    onSubmit: useCallback((payload) => mutate({ payload }), []),
    onPush: useCallback(() => push('/authentication/login'), []),
  }
}
