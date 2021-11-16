import { lazy } from 'utils/lazy'
const View = lazy(() => import('.'))
export const route = {
  path: '/authentication/login',
  name: 'ROUTE:LOGIN',
  layout: 'admin',
  element: <View />,
}
