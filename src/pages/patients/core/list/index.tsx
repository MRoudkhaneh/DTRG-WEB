import { Suspense } from 'react'
import { Skeleton } from 'components/skeleton'
import { PatientList } from 'containers/patients/core/list'
import { PatientModal } from 'containers/patients/core/modal'
import { useDialog } from 'hooks/use-dialog'

const Patients = () => {
  const {
    dialog: { open },
  } = useDialog()
  return (
    <Suspense fallback={<Skeleton />}>
      <PatientList />
      {open && <PatientModal />}
    </Suspense>
  )
}

export default Patients
