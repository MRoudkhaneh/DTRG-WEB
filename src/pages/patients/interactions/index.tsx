import { PatientInteractionsList } from 'containers/patients/interactions/list'
import { PatientInteractionsModal } from 'containers/patients/interactions/modal'
import { RecoilRoot } from 'recoil'

const PatientInteractions = () => {
  return (
    <RecoilRoot>
      <PatientInteractionsList />
      <PatientInteractionsModal />
    </RecoilRoot>
  )
}

export default PatientInteractions
