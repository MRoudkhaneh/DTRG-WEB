import { lazy, memo, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Toast } from 'components/toast'
//import { Page } from 'components/page'
import { useUi } from 'hooks/use-ui'
import { AdminLayout } from 'layouts/admin'
//import { routes } from './routes'

const Home = lazy(() => import('pages/home'))
const Login = lazy(() => import('pages/authentication/login'))
const Password = lazy(() => import('pages/authentication/password'))
const Register = lazy(() => import('pages/authentication/register'))
const Patients = lazy(() => import('pages/patients/list'))
const PatientForm = lazy(() => import('pages/patients/add'))
const PatientInteractions = lazy(() => import('pages/patients/interactions'))
const PatientAssets = lazy(() => import('pages/patients/assets'))

export const Router = memo(() => {
  const {
    uiState: { toast },
  } = useUi()

  return (
    <BrowserRouter>
      <AdminLayout>
        <Suspense fallback={<div></div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/authentication/login" component={Login} />
            <Route exact path="/authentication/password" component={Password} />
            <Route exact path="/authentication/register" component={Register} />
            <Route exact path="/admin/patients" component={Patients} />
            <Route exact path="/admin/patients/add" component={PatientForm} />
            <Route
              exact
              path="/admin/patients/interactions/:id"
              component={PatientInteractions}
            />
            <Route
              exact
              path="/admin/patients/assets/:id"
              component={PatientAssets}
            />
            {/* {routes.map((route, index) => (
              <Route key={index} {...route}>
                <Page route={route} />
              </Route>
            ))} */}
          </Switch>
        </Suspense>
      </AdminLayout>
      {toast.open && <Toast {...toast} />}
    </BrowserRouter>
  )
})
