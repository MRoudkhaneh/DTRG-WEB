import { lazy } from 'utils/lazy'
const View = lazy(() => import('.'))
export const route = {
  path: '/admin/assets',
  name: 'ROUTE:ASSETS',
  layout: 'admin',
  authorize: true,
  element: <View />,
}
