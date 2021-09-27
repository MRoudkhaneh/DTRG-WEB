import { lazy } from 'utils/lazy'

export const route = {
  path: '/admin/patients/studies/:id',
  name: 'ROUTE:ADMIN:PATIENTS/STUDIES',
  exact: true,
  layout: 'admin',
  authorize: true,
  component: lazy(() => import('.')),
}
