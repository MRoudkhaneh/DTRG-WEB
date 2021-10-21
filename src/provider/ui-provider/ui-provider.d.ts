type TProviderState = {
  drawer: { open: boolean }
  dialog: { open: boolean; data: any; type: any; queryKey: any }
  toast: { open: boolean; type: any; title: any; description: any }
  current: any
  theme: string
  params: {
    page: number
    name: any
    diabetes_type: any
    current_diabetes_management: any
    current_cgm_wear: any
    date_of_diagnosis_of: any
    dka_requiring_hospital_admission_past_12_months: any
    hypoglycemic_event_past_12_months: any
    hypo_unawareness: any
    abnormal_kidney_function: any
    retinopathy: any
    foot_neuropathy: any
    latest_hba1c_reading_min: any
    latest_hba1c_reading_max: any
    age_category: any
    post_code: any
  }
}

type TProviderAction = {
  type: string
  payload?: any
}

type TProviderTypes =
  | 'TOGGLE_DRAWER'
  | 'TOGGLE_DIALOG'
  | 'TOGGLE_TOAST'
  | 'TOGGLE_DARK'
  | 'SET_PARAMS'
  | 'SET_ADVANCE_PARAMS'
  | 'SET_CURRENT'

type TUiProvider = {
  children?: ReactNode
}
