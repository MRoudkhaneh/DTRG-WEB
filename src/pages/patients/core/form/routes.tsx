import { lazy } from 'utils/lazy'
const View = lazy(() => import('.'))
export const route = {
  path: '/admin/patients/form',
  name: 'ROUTE:ADMIN:PATIENTS:FORM',
  layout: 'admin',
  authorize: true,
  element: <View />,
}
