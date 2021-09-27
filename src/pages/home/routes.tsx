import { lazy } from 'utils/lazy'

export const route = {
  path: '/',
  name: 'ROUTE:HOME',
  exact: true,
  layout: 'admin',
  authorize: true,
  component: lazy(() => import('.')),
}
