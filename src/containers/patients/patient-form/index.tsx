import { memo } from 'react'
import { Form, Grid, Text, Tab } from 'components'
import { usePatientForm } from './use-patient-form'
import { PatientFormToolbar } from './toolbar'
import { PatientFormSubmit } from './submit'
import {
  CHOCounting,
  FirstName,
  CurrentCGMWear,
  CurrentStudy,
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
  PreviousStudy1,
  PumpDetail,
  State,
  Suburb,
  Surename,
  DateOfDiagnosisOfT1D,
  OtherMedicalIssue,
  WillComeToSt,
  Availability,
  AvailabilityDetail,
  HasInternetAccess,
  NextStep,
  ComputerType,
  ContactDate,
  PWODReferal,
  DiscussionHeld,
  StudyForConsideration,
  DoNotCallUntil,
  CHOCountingDetails,
  DiabetesType,
  PhoneType,
  InfusionLineType,
  Deceased,
  PatientStatus,
  PatientStatusDetails,
} from './fields'

export const PatientForm = memo((props?: IPatientForm) => {
  const { isEditing, editInitials } = props
  const { onSubmit, control, setValue, saveLoading, editLoading } =
    usePatientForm({ isEditing, editInitials })

  return (
    <div className="w-full">
      {!isEditing && <PatientFormToolbar />}
      <Form className="w-full  px-5" onSubmit={onSubmit}>
        <Tab
          expandable
          initialIsOpen={!isEditing}
          text="Patient Bio"
          className="mt-10"
        >
          <Grid className="mt-4">
            <PatientStatus control={control} setValue={setValue} />
            <PatientStatusDetails control={control} />
          </Grid>
          <Grid className="mt-4">
            <Surename control={control} />
            <FirstName control={control} />
          </Grid>

          <Grid className=" pt-6 mt-4">
            <CurrentStudy control={control} setValue={setValue} />
            <PreviousStudy1 control={control} setValue={setValue} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <DateOfBirth control={control} setValue={setValue} />
            <Gender control={control} setValue={setValue} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <PhoneNumber control={control} />
            <PhoneType control={control} setValue={setValue} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <PreferedContactDate control={control} setValue={setValue} />
            <PreferedContactMethod control={control} setValue={setValue} />
          </Grid>
          <Grid className=" pt-6 mt-4 ">
            <EmailAddress control={control} />
            <Suburb control={control} />
            <State control={control} />
          </Grid>
          {isEditing && (
            <Grid className=" pt-6 mt-4">
              <Deceased control={control} setValue={setValue} />
            </Grid>
          )}
        </Tab>

        <Tab
          expandable
          initialIsOpen={!isEditing}
          text="Medical History"
          className="mt-10"
        >
          <Grid className=" mt-4 ">
            <DiabetesType control={control} setValue={setValue} />
            <DateOfDiagnosisOfT1D control={control} setValue={setValue} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CHOCounting control={control} setValue={setValue} />
            <CHOCountingDetails control={control} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <ExerciseType control={control} setValue={setValue} />
            <ExerciseDetail control={control} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CurrentDiabetesManagement control={control} setValue={setValue} />
            <InfusionLineType control={control} setValue={setValue} />
            <PumpDetail control={control} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CurrentInsulinUse control={control} setValue={setValue} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CurrentCGMWear control={control} setValue={setValue} />
            <PastCGMWear control={control} setValue={setValue} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <FrequencyOfDailyFingerstick
              control={control}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <Endocrinologist control={control} />
            <DiabetesEducator control={control} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <LatestHBA1CReading control={control} />
            <LatestHBA1CReadingDate control={control} setValue={setValue} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <DKAExperience control={control} />

            <DKADetail control={control} />

            <HadSevereHypo control={control} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <Text>Have you ever been diagnosed with:</Text>
          </Grid>
          <Grid className="mt-4">
            <div className="col-span-1 grid grid-cols-1 ">
              <HadUnawareHypo control={control} />
              <HadAbnormalKidney control={control} />
              <HadretionopathyDiag control={control} />
              <HadFeetNeuropathy control={control} />
            </div>
            <div className="col-span-2" />
          </Grid>
          <Grid className="mt-4">
            <OtherMedicalIssue control={control} />
          </Grid>
        </Tab>

        <Tab
          expandable
          initialIsOpen={!isEditing}
          text="Logistics"
          className="mt-10"
        >
          <Grid className="mt-4 ">
            <WillComeToSt control={control} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <HasInternetAccess control={control} />
            <ComputerType control={control} setValue={setValue} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <DiscussionHeld control={control} />
            <ContactDate control={control} setValue={setValue} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <PWODReferal control={control} />
            <StudyForConsideration control={control} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <Availability control={control} setValue={setValue} />
            <AvailabilityDetail control={control} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <NextStep control={control} />
            <DoNotCallUntil control={control} />
          </Grid>
        </Tab>

        <PatientFormSubmit
          loading={isEditing ? false : saveLoading || editLoading}
        />
      </Form>
    </div>
  )
})
