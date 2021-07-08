import { useForm } from 'react-hook-form'
import { useError, useService, useToast, useUi } from 'hooks'
import { useMemo } from 'react'
import { Api } from 'utils'
import { useHistory } from 'react-router'

const initialState = {
  status: '',
  status_details: '',
  surename: '',
  first_name: '',
  current_study: '',
  previous_study: '',
  date_of_birth: '',
  gender: '',
  phone_number: '',
  phone_type: '',
  preferred_contact_time: '',
  preferred_contact_method: '',
  availability: null,
  availability_detail: null,
  cho_counting: null,
  cho_counting_details: null,
  computer_type: null,
  contact_date: null,
  current_cgm_wear: null,
  current_diabetes_management: null,
  current_insulin_use: null,
  date_of_diagnosis_of_t1d: null,
  diabetes_educator: null,
  diabetes_type: null,
  discussion_held_and_what_discussed: null,
  dka_detials: null,
  do_not_call_until: null,
  email: '',
  endocrinologist: null,
  exercise_detail: null,
  exercise_type: null,
  frequency_of_daily_fingerstick: null,
  infusion_line_type: null,
  latest_hba1c_reading: null,
  latest_hba1c_reading_date: null,
  next_step: null,
  other_medical_issue: null,
  past_cgm_wear: null,
  pump_details: null,
  pwod_referral: null,
  state: '',
  study_for_consideration: null,
  suburb: '',
  abnormal_kidney_function: false,
  dka_requiring_hospital_admission_past_12_months: false,
  foot_neuropathy: false,
  retinopathy: false,
  has_internet_access: false,
  hypo_unawareness: false,
  hypoglycemic_event_past_12_month: false,
  will_come_to_st_vincent: false,
  deceased: 'No',
}

export const usePatientForm = (props: IPatientForm) => {
  const { usePost, usePut, client } = useService()
  const { push } = useHistory()
  const { success } = useToast()
  const { onError } = useError()
  const {
    toggleDialog,
    uiState: { dialog },
  } = useUi()

  const { isEditing, editInitials } = props

  const defaultValues = useMemo(
    () => (isEditing && editInitials ? editInitials : initialState),
    [isEditing, editInitials]
  )

  const { handleSubmit, control, setValue } = useForm({
    defaultValues,
  })

  const { mutate: save, isLoading: saveLoading } = usePost({
    url: `${Api.patients}`,
    onSuccess: () => {
      success('You successfully added a new patient.')
      push('/admin/patients')
    },
    onError,
  })

  const { mutate: edit, isLoading: editLoading } = usePut({
    url: editInitials ? `${Api.patients}${editInitials.id}/` : '',
    onMutate: async ({ payload }) => {
      await client.cancelQueries(dialog.queryKey)
      const snapshot = client.getQueryData(dialog.queryKey)
      client.setQueryData(dialog.queryKey, (old: any) => {
        old.data.results = old.data.results.map((item) =>
          item.id == editInitials.id ? payload : item
        )
        return old
      })
      success('You successfully edited this patient.')
      toggleDialog({ open: false, type: null, data: {} })
      return { snapshot }
    },
    onError: (error, data, context) => {
      client.setQueryData(dialog.queryKey, context.snapshot)
      onError(error)
    },
    onSuccess: () => {
      client.invalidateQueries(dialog.queryKey)
      toggleDialog({ open: false, data: {}, type: null })
    },
  })

  return {
    control,
    setValue,
    saveLoading,
    editLoading,
    onSubmit: handleSubmit((payload) => {
      isEditing ? edit({ payload }) : save({ payload })
    }),
  }
}
