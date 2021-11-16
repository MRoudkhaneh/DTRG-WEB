import { Skeleton } from 'components/skeleton'
import { Suspense } from 'react'
import { PatientStudiesList } from 'containers/patients/studies/list'
import { PatientStudiesModal } from 'containers/patients/studies/modal'
import { useDialog } from 'hooks/use-dialog'

const PatientStudies = () => {
  const {
    dialog: { open },
  } = useDialog()
  return (
    <Suspense fallback={<Skeleton />}>
      <PatientStudiesList />
      {open && <PatientStudiesModal />}
    </Suspense>
  )
}

export default PatientStudies
