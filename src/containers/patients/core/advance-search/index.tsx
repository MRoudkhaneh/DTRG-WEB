import { memo } from 'react'

import { Button } from 'components/button'
import { Form } from 'components/form'
import { Input } from 'components/input'
import { Select } from 'components/select'

import { Switch } from 'components/switch'

import { usePatientAdvanceSearch } from './use-patient-advance-search'

export const PatientAdvanceSearch = memo(() => {
  const { onSubmit, control, setValue } = usePatientAdvanceSearch()

  return (
    <Form onSubmit={onSubmit}>
      <div className="w-full grid grid-cols-3 gap-8 mt-6">
        <Input
          control={control}
          name="name"
          placeholder="Enter name"
          label="Name"
        />

        <Input
          control={control}
          name="post_code"
          placeholder="Enter post code"
          label="Post code"
        />
        <Select
          control={control}
          setValue={setValue}
          name="diabetes_type"
          label="Diabetes type"
        >
          <option value="Type 1">Type 1</option>
          <option value="Type 2">Type 2</option>
          <option value="LADA">LADA</option>
          <option value="Other">Other</option>
        </Select>
        <Select
          label="Current Diabetes Management"
          name="current_diabetes_management"
          control={control}
          setValue={setValue}
        >
          <option value="640G">640G</option>
          <option value="670G">670G</option>
          <option value="770G">770G</option>
          <option value="MDT AHCL">MDT AHCL</option>
          <option value="Tslim X2">Tslim X2</option>
          <option value="Tslim BasallQ">Tslim BasallQ</option>
          <option value="Ypsomed">Ypsomed</option>
          <option value="Looping">Looping</option>
          <option value="Oral Agents">Oral Agents</option>
          <option value="Multiple Daily Injections">
            Multiple Daily Injections
          </option>
          <option value="Other">Other</option>
        </Select>
        <Input
          control={control}
          name="date_of_diagnosis_of"
          placeholder="Enter number of months since diagnosis"
          label="Number of months since diagnosis"
          number
        />
        <Select
          control={control}
          setValue={setValue}
          name="age_category"
          label="Age category"
        >
          <option value="18-20">18-20</option>
          <option value="21-25">21-25</option>
          <option value="26-30">26-30</option>
          <option value="31-35">31-35</option>
          <option value="36-40">36-40</option>
          <option value="41-45">41-45</option>
          <option value="46-50">46-50</option>
          <option value="51-55">51-55</option>
          <option value="56-60">56-60</option>
          <option value="61-65">61-65</option>
          <option value="66-70">66-70</option>
          <option value="71-75">71-75</option>
          <option value="76-80">76-80</option>
          <option value="81-85">81-85</option>
          <option value="86-90">86-90</option>
          <option value="91-95">91-95</option>
          <option value="96-100">96-100</option>
        </Select>
        <Input
          label="Latest HbA1c Reading min"
          placeholder="Enter Latest HbA1c Reading min"
          name="latest_hba1c_reading_min"
          control={control}
          precent
          number
        />
        <Input
          label="Latest HbA1c Reading max"
          placeholder="Enter Latest HbA1c Reading max"
          name="latest_hba1c_reading_max"
          control={control}
          precent
          number
        />
        <Select
          label="Current CGM Wear"
          name="current_cgm_wear"
          control={control}
          setValue={setValue}
        >
          <option value="Libre">Libre</option>
          <option value="Guardian Connect">Guardian Connect</option>
          <option value="Guardian Sensor 3">Guardian Sensor 3</option>
          <option value="Dexcom G5">Dexcom G5</option>
          <option value="Dexcom G6">Dexcom G6</option>
          <option value="Libre 2">Libre 2</option>
          <option value="None">None</option>
        </Select>
        <div className="col-span-2" />
        <Switch
          label="In the past 12 months, have you had Diabetic Ketoacidosis (DKA) requiring a hospital admission?"
          name="dka_requiring_hospital_admission_past_12_months"
          control={control}
          className="col-span-3"
        />
        <Switch
          label="In the past 12 months, have you had a severe Hypoglycaemic event requiring 3rd party assistance?"
          name="hypoglycemic_event_past_12_months"
          control={control}
          className="col-span-3"
        />
        <Switch
          label="Had Abnormal kidney function?"
          name="abnormal_kidney_function"
          control={control}
        />
        <Switch
          label="Had Foot neuropathy?"
          name="foot_neuropathy"
          control={control}
        />
        <Switch label="HadRetinopathy?" name="retinopathy" control={control} />
        <Switch
          label="Had Hypo unawareness?"
          name="hypo_unawareness"
          control={control}
        />
      </div>

      <Button
        type="submit"
        icon
        className=" w-1/2 mx-auto h-12 mt-14 mb-10 text-white shadow-blue bg-secondary dark:bg-primary"
      >
        Search for patient
      </Button>
    </Form>
  )
})
