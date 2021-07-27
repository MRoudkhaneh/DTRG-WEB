import { Skeleton } from 'components/skeleton'
import { useUi } from 'hooks/use-ui'
import { Suspense } from 'react'
import { PatientStudiesList } from 'containers/patients/studies/list'
import { PatientStudiesModal } from 'containers/patients/studies/modal'

const PatientStudies = () => {
  const {
    uiState: {
      dialog: { open },
    },
  } = useUi()
  return (
    <Suspense fallback={<Skeleton />}>
      <PatientStudiesList />
      {open && <PatientStudiesModal />}
    </Suspense>
  )
}

export default PatientStudies
