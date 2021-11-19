import { memo } from 'react'
import { Tab } from 'components/tab'
import { Grid } from 'components/grid'
import { usePatientForm } from './use-patient-form'
import { PatientFormToolbar } from './toolbar'
import { classNames } from 'utils/classes'
import { FormControl } from 'components/form-control'
import {
  CHOCounting,
  FirstName,
  CurrentCGMWear,
  PostCode,
  DateOfBirth,
  DiabetesEducator,
  CurrentDiabetesManagement,
  DKADetail,
  DKAExperience,
  EmailAddress,
  Endocrinologist,
  ExerciseDetail,
  ExerciseType,
  FrequencyOfDailyFingerstick,
  Gender,
  HadAbnormalKidney,
  HadFeetNeuropathy,
  HadretionopathyDiag,
  HadSevereHypo,
  HadUnawareHypo,
  CurrentInsulinUse,
  LatestHBA1CReading,
  LatestHBA1CReadingDate,
  PastCGMWear,
  PhoneNumber,
  PreferedContactMethod,
  PreferedContactDate,
  PumpDetail,
  State,
  Suburb,
  LastName,
  DateOfDiagnosisOfT1D,
  OtherMedicalIssue,
  WillComeToSt,
  Availability,
  AvailabilityDetail,
  HasInternetAccess,
  NextStep,
  ComputerType,
  PWODReferal,
  StudyForConsideration,
  DoNotCallUntil,
  CHOCountingDetails,
  DiabetesType,
  PhoneType,
  InfusionLineType,
  Deceased,
  PatientStatus,
  PatientFormSubmit,
} from './fields'

export const PatientForm = memo((props?: IPatientForm) => {
  const { onSubmit, saveLoading, editLoading, defaultValues } =
    usePatientForm(props)

  return (
    <div className="w-full">
      {!props.isEditing && <PatientFormToolbar />}
      <FormControl
        className="w-full  px-5"
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      >
        <Tab text="Patient Bio" className="mt-10">
          <Grid className="mt-4">
            <PatientStatus />
          </Grid>

          <Grid className=" pt-6 mt-4 ">
            <FirstName />
            <LastName />
          </Grid>

          <Grid className=" pt-6 mt-4">
            <DateOfBirth />
            <Gender />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <PhoneNumber />
            <PhoneType />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <PreferedContactDate />
            <PreferedContactMethod />
          </Grid>
          <Grid className=" pt-6 mt-4 ">
            <EmailAddress />
            <Suburb />
            <PostCode />
            <State />
          </Grid>
          {props.isEditing && (
            <Grid className=" pt-6 mt-4">
              <Deceased />
            </Grid>
          )}
        </Tab>

        <Tab
          initialIsOpen={!props.isEditing}
          text="Medical History"
          className="mt-10"
        >
          <Grid className=" mt-4 ">
            <DiabetesType />
            <DateOfDiagnosisOfT1D />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CHOCounting />
            <CHOCountingDetails />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <ExerciseType />
            <ExerciseDetail />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CurrentDiabetesManagement />
            <InfusionLineType />
            <PumpDetail />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CurrentInsulinUse />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CurrentCGMWear />
            <PastCGMWear />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <FrequencyOfDailyFingerstick />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <Endocrinologist />
            <DiabetesEducator />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <LatestHBA1CReading />
            <LatestHBA1CReadingDate />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <DKAExperience />

            <DKADetail />

            <HadSevereHypo />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <span className={classNames('text-light dark:text-dark')}>
              Have you ever been diagnosed with:
            </span>
          </Grid>
          <Grid className="mt-4">
            <div className="col-span-1 grid grid-cols-1 ">
              <HadUnawareHypo />
              <HadAbnormalKidney />
              <HadretionopathyDiag />
              <HadFeetNeuropathy />
            </div>
            <div className="col-span-2" />
          </Grid>
          <Grid className="mt-4">
            <OtherMedicalIssue />
          </Grid>
        </Tab>

        <Tab
          initialIsOpen={!props.isEditing}
          text="Logistics"
          className="mt-10"
        >
          <Grid className="mt-4 ">
            <WillComeToSt />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <HasInternetAccess />
            <ComputerType />
          </Grid>

          <Grid className=" pt-6 mt-4">
            <PWODReferal />
            <StudyForConsideration />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <Availability />
            <AvailabilityDetail />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <NextStep />
            <DoNotCallUntil />
          </Grid>
        </Tab>

        <PatientFormSubmit
          loading={props.isEditing ? false : saveLoading || editLoading}
        />
      </FormControl>
    </div>
  )
})
