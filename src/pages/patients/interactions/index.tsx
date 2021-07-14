import { Skeleton } from 'components/skeleton'
import { useUi } from 'hooks/use-ui'
import { Suspense } from 'react'
import { PatientInteractionsList } from 'containers/patients/interactions/list'
import { PatientInteractionsModal } from 'containers/patients/interactions/modal'

const PatientInteractions = () => {
  const {
    uiState: {
      dialog: { open },
    },
  } = useUi()
  return (
    <Suspense fallback={<Skeleton />}>
      <PatientInteractionsList />
      {open && <PatientInteractionsModal />}
    </Suspense>
  )
}

export default PatientInteractions
