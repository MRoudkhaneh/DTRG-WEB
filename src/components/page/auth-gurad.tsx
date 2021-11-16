import { useAuth } from 'hooks'
import { Fragment, useLayoutEffect } from 'react'
import { useNavigate, useLocation } from 'react-router'

export const AuthGuard = ({ authorize = false, children }) => {
  const push = useNavigate()
  const { pathname } = useLocation()
  const { token } = useAuth()

  useLayoutEffect(() => {
    if (authorize && !token) push('/authentication/login')
  }, [token, pathname])

  return <Fragment>{children}</Fragment>
}
