import { memo } from 'react'
import { FormControl } from 'components/form-control'
import { usePatientAdvanceSearch } from './use-patient-advance-search'
import {
  AdvanceAgeCategory,
  AdvanceCurrentCgm,
  AdvanceCurrentDiabetes,
  AdvanceDiabetes,
  AdvanceDiagnosis,
  AdvanceDKA,
  AdvanceFoot,
  AdvanceHbaMax,
  AdvanceHbaMin,
  AdvanceHypo,
  AdvanceKidney,
  AdvanceName,
  AdvancePostCode,
  AdvanceRetino,
  AdvanceSubmit,
  AdvanceUnawere,
} from './fields'

export const PatientAdvanceSearch = memo(() => {
  const { onSubmit, defaultValues } = usePatientAdvanceSearch()

  return (
    <FormControl onSubmit={onSubmit} defaultValues={defaultValues}>
      <div className="w-full grid grid-cols-3 gap-8 mt-6">
        <AdvanceName />
        <AdvancePostCode />
        <AdvanceDiabetes />
        <AdvanceCurrentDiabetes />
        <AdvanceDiagnosis />
        <AdvanceAgeCategory />
        <AdvanceHbaMin />
        <AdvanceHbaMax />
        <AdvanceCurrentCgm />
        <div className="col-span-2" />
        <AdvanceDKA />
        <AdvanceHypo />
        <AdvanceKidney />
        <AdvanceFoot />
        <AdvanceRetino />
        <AdvanceUnawere />
      </div>
      <AdvanceSubmit />
    </FormControl>
  )
})
