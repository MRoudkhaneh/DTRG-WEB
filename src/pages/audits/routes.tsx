import { lazy } from 'utils/lazy'

export const route = {
  path: '/admin/audits',
  name: 'ROUTE:AUDITS',
  exact: true,
  layout: 'admin',
  authorize: true,
  component: lazy(() => import('.')),
}
