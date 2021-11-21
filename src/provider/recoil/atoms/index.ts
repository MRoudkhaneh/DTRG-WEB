import { atom } from 'recoil'

export const patientParamsAtom = atom({
  default: {
    page: 1,
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
  key: 'patientParamsAtom',
})

export const patientCurrentAtom = atom({
  key: 'patienCurrentAtom',
  default: {},
})

export const toastAtom = atom({
  key: 'toastAtom',
  default: { open: false, type: null, title: null, description: null },
})

export const drawerAtom = atom({ key: 'drawerAtom', default: false })

export const dialogAtom = atom({
  key: 'dialogAtom',
  default: {
    open: false,
    data: {},
    type: '',
    queryKey: '',
    isEditing: false,
  } as TDialog,
})
