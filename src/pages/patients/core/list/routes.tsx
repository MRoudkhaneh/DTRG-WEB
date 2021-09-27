import { lazy } from 'utils/lazy'

export const route = {
  path: '/admin/patients',
  name: 'ROUTE:ADMIN:PATIENTS',
  exact: true,
  layout: 'admin',
  authorize: true,
  component: lazy(() => import('.')),
}
