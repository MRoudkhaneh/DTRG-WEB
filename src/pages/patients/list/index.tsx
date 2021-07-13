import { lazy, Suspense } from 'react'
import { useUi } from 'hooks/use-ui'
import { PatientList } from 'containers/patients/list'
import { Skeleton } from 'components/skeleton'

const PatientModal = lazy(() =>
  import('containers/patients/modal').then((module) => ({
    default: module.PatientModal,
  }))
)

const Patients = () => {
  const {
    uiState: {
      dialog: { open },
    },
  } = useUi()
  return (
    <Suspense fallback={<Skeleton />}>
      <PatientList />
      {open && <PatientModal />}
    </Suspense>
  )
}

export default Patients
