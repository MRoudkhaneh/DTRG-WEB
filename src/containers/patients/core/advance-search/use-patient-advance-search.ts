import { useUi } from 'hooks/use-ui'
import { useForm } from 'react-hook-form'

export const usePatientAdvanceSearch = () => {
  const { setParams, toggleDialog } = useUi()
  const { control, setValue, handleSubmit } = useForm({
    defaultValues: {
      name: null,
      diabetes_type: null,
      current_diabetes_management: null,
      current_cgm_wear: null,
      date_of_diagnosis_of: null,
      dka_requiring_hospital_admission_past_12_months: null,
      hypoglycemic_event_past_12_months: null,
      hypo_unawareness: null,
      abnormal_kidney_function: null,
      retinopathy: null,
      foot_neuropathy: null,
      latest_hba1c_reading_min: null,
      latest_hba1c_reading_max: null,
      age_category: null,
      post_code: null,
    },
  })

  return {
    control,
    setValue,
    onSubmit: handleSubmit((state) => {
      setParams({ ...state })
      toggleDialog({ open: false, data: null, type: null })
    }),
  }
}
