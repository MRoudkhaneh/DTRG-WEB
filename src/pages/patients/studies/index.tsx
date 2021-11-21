import { PatientStudiesList } from 'containers/patients/studies/list'
import { PatientStudiesModal } from 'containers/patients/studies/modal'
import { RecoilRoot } from 'recoil'

const PatientStudies = () => {
  return (
    <RecoilRoot>
      <PatientStudiesList />
      <PatientStudiesModal />
    </RecoilRoot>
  )
}

export default PatientStudies
