import { lazy } from 'utils/lazy'
const View = lazy(() => import('.'))
export const route = {
  path: '/admin/audits',
  name: 'ROUTE:AUDITS',
  layout: 'admin',
  authorize: true,
  element: <View />,
}
