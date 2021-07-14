import { Suspense } from 'react'
import { useUi } from 'hooks/use-ui'
import { PatientList } from 'containers/patients/list'
import { Skeleton } from 'components/skeleton'
import { PatientModal } from 'containers/patients/modal'

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
