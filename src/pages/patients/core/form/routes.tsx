import { lazy } from 'react'

export const route = {
  path: '/admin/patients/form',
  name: 'ROUTE:ADMIN:PATIENTS:FORM',
  exact: true,
  layout: 'admin',
  authorize: true,
  component: lazy(() => import('.')),
}
