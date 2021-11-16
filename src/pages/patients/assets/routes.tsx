import { lazy } from 'utils/lazy'
const View = lazy(() => import('.'))

export const route = {
  path: '/admin/patients/assets/:id',
  name: 'ROUTE:PATIENTS:ASSETS',
  layout: 'admin',
  authorize: true,
  element: <View />,
}
