import { lazy } from 'utils/lazy'

const View = lazy(() => import('.'))
export const route = {
  path: '/admin/patients',
  name: 'ROUTE:ADMIN:PATIENTS',
  layout: 'admin',
  authorize: true,
  element: <View />,
}
