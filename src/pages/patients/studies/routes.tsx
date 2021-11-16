import { lazy } from 'utils/lazy'
const View = lazy(() => import('.'))
export const route = {
  path: '/admin/patients/studies/:id',
  name: 'ROUTE:ADMIN:PATIENTS/STUDIES',
  layout: 'admin',
  authorize: true,
  element: <View />,
}
