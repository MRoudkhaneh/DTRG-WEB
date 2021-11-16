import { lazy } from 'utils/lazy'
const View = lazy(() => import('.'))
export const route = {
  path: '/authentication/password',
  name: 'ROUTE:FORGOT_PASSWORD',
  layout: 'admin',
  element: <View />,
}
