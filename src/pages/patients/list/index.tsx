import { useUi } from 'hooks/use-ui'
import { PatientList } from 'containers/patients/list'
// import { PatientModal } from 'containers/patients/modal'

const Patients = () => {
  // const {
  //   uiState: {
  //     dialog: { open },
  //   },
  // } = useUi()
  return (
    <>
      <PatientList />
      {/* {open && <PatientModal />} */}
    </>
  )
}

export default Patients
