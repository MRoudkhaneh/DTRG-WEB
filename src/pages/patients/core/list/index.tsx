import { PatientList } from 'containers/patients/core/list'
import { PatientModal } from 'containers/patients/core/modal'
import { RecoilRoot } from 'recoil'

const Patients = () => {
  return (
    <RecoilRoot>
      <PatientList />
      <PatientModal />
    </RecoilRoot>
  )
}

export default Patients
