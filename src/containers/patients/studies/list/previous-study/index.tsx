import { memo } from 'react'
import { Button } from 'components/button'
import { Text } from 'components/text'

import { PreviousStudyLoading } from './previou-study-loading'
import { usepreviousStudy } from './use-previous-study'
import { classNames } from 'utils/classes'
import { FormControl } from 'components/form-control'
import { FormCheckBox } from 'components/form-checkbox'

export const PreviousStudy = memo(() => {
  const { onSubmit, isLoading, saveLoading, defaultValues } = usepreviousStudy()

  if (isLoading) return <PreviousStudyLoading />
  return (
    <FormControl
      onSubmit={onSubmit}
      defaultValues={defaultValues}
      className="w-1/4 h-full"
    >
      <div
        className={classNames(
          ' flex flex-col space-y-5',
          saveLoading && 'opacity-50 animate-pulse'
        )}
      >
        <Text size="title" className="text-light dark:text-dark pb-6">
          Previous Studies
        </Text>

        <FormCheckBox label="All in One" name="all_in_one" />

        <FormCheckBox label="Glysens PAVE" name="glysens_pave" />

        <FormCheckBox label="Glysens FREE" name="glysens_free" />

        <FormCheckBox
          label="Additional Signals PWOD"
          name="Additional_Signals_PWOD"
        />

        <FormCheckBox label="Fiasp Original V1" name="fiasp_original_v1" />

        <FormCheckBox label="Fiasp Extension V2" name="fiasp_extension_v2" />

        <FormCheckBox label="Clear" name="clear" />

        <FormCheckBox label="FAME 1 EYE" name="fame_1_eye" />

        <FormCheckBox label="MEWS" name="mews" />

        <FormCheckBox label="Serodus" name="serodus" />

        <FormCheckBox label="FLASH" name="flash" />

        <FormCheckBox label="Additional Signals" name="additional_signals" />

        <FormCheckBox label="Optimapp" name="optimapp" />

        <FormCheckBox label="Biocap Feasibility" name="biocap_feasibility" />

        <FormCheckBox
          label="No previous study involvement"
          name="no_previous_study_involvement"
        />

        <FormCheckBox label="Other" name="other" />

        <Button
          type="submit"
          loading={saveLoading}
          icon
          className=" w-full h-10 my-10 text-white shadow-blue bg-secondary dark:bg-primary self-end"
        >
          Save Previous Studies
        </Button>
      </div>
    </FormControl>
  )
})
