import { lazy } from 'utils/lazy'

export const route = {
  path: '/admin/patients/assets/:id',
  name: 'ROUTE:PATIENTS:ASSETS',
  exact: true,
  layout: 'admin',
  authorize: true,
  component: lazy(() => import('.')),
}
