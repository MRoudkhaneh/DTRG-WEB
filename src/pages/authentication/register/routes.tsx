import { lazy } from 'utils/lazy'
const View = lazy(() => import('.'))
export const route = {
  path: '/authentication/register',
  name: 'ROUTE:REGISTER',
  layout: 'admin',
  element: <View />,
}
