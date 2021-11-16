import { lazy } from 'utils/lazy'
const View = lazy(() => import('.'))
export const route = {
  path: '/admin/patients/interactions/:id',
  name: 'ROUTE:ADMIN:PATIENTS/INTERACTIONS',
  layout: 'admin',
  authorize: true,
  element: <View />,
}
