import { FC, memo } from 'react'
import { Input } from 'components/input'
import { TextArea } from 'components/text-area'
import { Switch } from 'components/switch'

export const PatientListDetails: FC<{ item?: any }> = memo(({ item }) => {
  return (
    <div className="grid gird-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-3 w-full">
      <Input size="small" disabled label="Patient Status" value={item.status} />

      {(item.status == 'Approached - declined' ||
        item.status == 'Approached - ineligible') && (
        <TextArea
          size="small"
          disabled
          label="Patient Status Details"
          value={item.status_details}
        />
      )}

      {/* <Input
        size="small"
        disabled
        label="Current Study"
        value={item.current_study}
      />
      <Input
        size="small"
        disabled
        label="Previous Study"
        value={item.previous_study}
      /> */}
      <Input size="small" disabled label="Gender" value={item.gender} />
      <Input
        size="small"
        disabled
        label="Phone Number"
        value={item.phone_number}
      />
      <Input size="small" disabled label="Phone Type" value={item.phone_type} />
      <Input
        size="small"
        disabled
        label="Prefered Contact Date"
        value={item.preferred_contact_time}
      />
      <Input
        size="small"
        disabled
        label="Prefered Contact Method"
        value={item.preferred_contact_method}
      />
      <Input size="small" disabled label="Email Address" value={item.email} />
      <Input size="small" disabled label="Suburb" value={item.suburb} />
      <Input size="small" disabled label="State" value={item.state} />
      <Input
        size="small"
        disabled
        label="Deceased"
        value={item.deceased ? item.deceased : 'No'}
        withError={item.deceased === 'Yes' ? true : false}
      />

      <Input
        size="small"
        disabled
        label="Diabetes Type"
        value={item.diabetes_type}
      />

      <Input
        size="small"
        disabled
        label="Date Of Diagnosis Of T1D"
        value={
          item.date_of_diagnosis_of_t1d &&
          item.date_of_diagnosis_of_t1d.slice(0, 4)
        }
      />

      <Input
        size="small"
        disabled
        label="CHO Counting"
        value={item.cho_counting}
      />

      {item.cho_counting && item.cho_counting.includes('Other') && (
        <TextArea
          size="small"
          disabled
          label="CHO Counting Detail"
          value={item.cho_counting_details}
        />
      )}

      <Input
        size="small"
        disabled
        label="Exercise Type"
        value={item.exercise_type}
      />

      <TextArea
        size="small"
        disabled
        label="Exercise Detail"
        value={item.exercise_detail}
      />

      <Input
        size="small"
        disabled
        label="Current Diabetes Management"
        value={item.current_diabetes_management}
      />

      {(item.current_diabetes_management == 'Looping' ||
        item.current_diabetes_management == 'Other') && (
        <TextArea
          size="small"
          disabled
          label="Pump Details"
          value={item.pump_details}
        />
      )}

      <Input
        size="small"
        disabled
        label="Infusion Line Type"
        value={item.infusion_line_type}
      />

      <Input
        size="small"
        disabled
        label="Current Insulin Use"
        value={item.current_insulin_use}
      />

      <Input
        size="small"
        disabled
        label="Current CGM Wear"
        value={item.current_cgm_wear}
      />

      <Input
        size="small"
        disabled
        label="Past CGM Wear"
        value={item.past_cgm_wear}
      />

      <Input
        size="small"
        disabled
        label="Frequency of Daily Fingerstick"
        value={item.frequency_of_daily_fingerstick}
      />

      <Input
        size="small"
        disabled
        label="Endocrinologist"
        value={item.endocrinologist}
      />

      <Input
        size="small"
        disabled
        label="Diabetes Educator"
        value={item.diabetes_educator}
      />

      <Input
        size="small"
        disabled
        label="Latest HbA1c Reading"
        value={item.latest_hba1c_reading}
      />

      <Input
        size="small"
        disabled
        label="Latest HbA1c Reading Date"
        value={item.latest_hba1c_reading_date}
      />

      <Switch
        size="small"
        disabled
        label="In the past 12 months, have you had Diabetic Ketoacidosis (DKA) requiring a hospital admission?"
        checked={item.dka_requiring_hospital_admission_past_12_months}
      />

      {item.dka_requiring_hospital_admission_past_12_months && (
        <TextArea
          size="small"
          disabled
          label="DKA Details"
          value={item.dka_details}
        />
      )}

      <Switch
        size="small"
        disabled
        label="In the past 12 months, have you had a severe Hypoglycaemic event requiring 3rd party assistance?"
        checked={item.hypoglycemic_event_past_12_months}
      />
      <Switch
        size="small"
        disabled
        label="Have you ever been diagnosed with Hypo-unawareness?"
        checked={item.hypo_unawareness}
      />
      <Switch
        size="small"
        disabled
        label="Have you ever been diagnosed with abnormal kidney function?"
        checked={item.abnormal_kidney_function}
      />
      <Switch
        size="small"
        disabled
        label="Have you ever been diagnosed with Retinopathy?"
        checked={item.retinopathy}
      />
      <Switch
        size="small"
        disabled
        label="Have you ever been diagnosed with foot neuropathy?"
        checked={item.foot_neuropathy}
      />

      <Input
        size="small"
        disabled
        label="Other Medical Issue"
        value={item.other_medical_issue}
      />

      <Switch
        size="small"
        disabled
        label="Will come to St Vincent's Hospital?"
        checked={item.will_come_to_st_vincent}
        withError={!item.will_come_to_st_vincent}
      />
      <Switch
        size="small"
        disabled
        label="Has Internet Access?"
        checked={item.has_internet_access}
      />

      <Input
        size="small"
        disabled
        label="Computer Type"
        value={item.computer_type}
      />

      <Input
        size="small"
        disabled
        label="PWOD Referral"
        value={item.pwod_referral}
      />

      <Input
        size="small"
        disabled
        label="Study For Consideration"
        value={item.study_for_consideration}
      />

      <Input
        size="small"
        disabled
        label="Availability"
        value={item.availability}
      />

      <TextArea
        size="small"
        disabled
        label="Availability Detail"
        value={item.availability_detail}
      />

      <Input size="small" disabled label="Next Steps" value={item.next_step} />

      <Input
        size="small"
        disabled
        label="Do Not Call Until"
        value={item.do_not_call_until}
      />
    </div>
  )
})
