import { Suspense } from 'react'
import { useUi } from 'hooks/use-ui'
import { Skeleton } from 'components/skeleton'
import { PatientList } from 'containers/patients/core/list'
import { PatientModal } from 'containers/patients/core/modal'

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
