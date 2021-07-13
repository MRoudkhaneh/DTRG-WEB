import { useLocation, useHistory } from 'react-router-dom'
import { Suspencer } from 'components/suspencer'
import { AuthGuard } from './auth-gurad'

export const Page = ({ route }) => {
  const location = useLocation()
  const history = useHistory()
  const { component: Component, data = {}, authorize } = route

  return (
    <AuthGuard authorize={authorize}>
      <Suspencer>
        <Component {...data} location={location} history={history} />
      </Suspencer>
    </AuthGuard>
  )
}
