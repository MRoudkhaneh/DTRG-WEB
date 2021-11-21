import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'
import { useToast } from 'hooks/use-toast'
import { Api } from 'utils/api'
import { useDialog } from 'hooks/use-dialog'

const initialState = {
  status: '',
  last_name: '',
  first_name: '',
  date_of_birth: '',
  gender: '',
  phone_number: '',
  phone_type: null,
  preferred_contact_time: null,
  preferred_contact_method: null,
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
  dka_details: null,
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
  hypoglycemic_event_past_12_months: false,
  will_come_to_st_vincent: false,
  deceased: 'No',
  post_code: null,
}

export type IPatientForm = {
  isEditing?: boolean
  editInitials?: any
}

type TUsePatientForm = {
  saveLoading: boolean
  editLoading: boolean
  onSubmit: (state: any) => void
  defaultValues: typeof initialState
}

export const usePatientForm = (props: IPatientForm): TUsePatientForm => {
  const { usePost, usePut, client } = useService()
  const { success } = useToast()
  const { onError } = useError()
  const { dialog, reset } = useDialog()
  const push = useNavigate()

  const { isEditing, editInitials } = props

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
    onMutate: async ({ payload }: { payload: any }) => {
      await client.cancelQueries(dialog.queryKey)
      const snapshot = client.getQueryData(dialog.queryKey)
      client.setQueryData(dialog.queryKey, (old: any) => {
        old.data.results = old.data.results.map((item: any) =>
          item.id == editInitials.id ? payload : item
        )
        return old
      })
      reset()
      return { snapshot }
    },
    onError: (error: any, data: any, context: any) => {
      client.setQueryData(dialog.queryKey, context.snapshot)
      onError(error)
    },
    onSuccess: () => success('You successfully edited this patient.'),
    onSettled: () => client.invalidateQueries(dialog.queryKey),
  })

  return {
    saveLoading,
    editLoading,
    onSubmit: useCallback(
      (payload) => {
        isEditing ? edit({ payload }) : save({ payload })
      },
      [isEditing]
    ),
    defaultValues: useMemo(
      () => (isEditing && editInitials ? editInitials : initialState),
      [isEditing, editInitials]
    ),
  }
}
