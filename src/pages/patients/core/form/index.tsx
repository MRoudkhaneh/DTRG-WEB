import { PatientForm } from 'containers/patients/core/form'
import { RecoilRoot } from 'recoil'

const AddPatient = () => {
  return (
    <RecoilRoot>
      <PatientForm />
    </RecoilRoot>
  )
}

export default AddPatient
