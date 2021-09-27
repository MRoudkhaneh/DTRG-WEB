import { lazy } from 'utils/lazy'

export const route = {
  path: '/admin/assets',
  name: 'ROUTE:ASSETS',
  exact: true,
  layout: 'admin',
  authorize: true,
  component: lazy(() => import('.')),
}
