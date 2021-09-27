import { lazy } from 'utils/lazy'

export const route = {
  path: '/authentication/login',
  name: 'ROUTE:LOGIN',
  exact: true,
  layout: 'admin',
  component: lazy(() => import('.')),
}
