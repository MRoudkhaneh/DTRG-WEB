import { memo } from 'react'
import { Button } from 'components/button'
import { Check } from 'components/check'
import { Form } from 'components/form'
import { Text } from 'components/text'

import { PreviousStudyLoading } from './previou-study-loading'
import { usepreviousStudy } from './use-previous-study'
import { classNames } from 'utils/classes'

export const PreviousStudy = memo(() => {
  const { control, onSubmit, isLoading, saveLoading } = usepreviousStudy()

  if (isLoading) return <PreviousStudyLoading />
  return (
    <Form onSubmit={onSubmit} className="w-1/4 h-full">
      <div
        className={classNames(
          ' flex flex-col space-y-5',
          saveLoading && 'opacity-50 animate-pulse'
        )}
      >
        <Text size="title" className="text-light dark:text-dark pb-6">
          Previous Studies
        </Text>

        <Check label="All in One" control={control} name="all_in_one" />

        <Check label="Glysens PAVE" control={control} name="glysens_pave" />

        <Check label="Glysens FREE" control={control} name="glysens_free" />

        <Check
          label="Additional Signals PWOD"
          control={control}
          name="Additional_Signals_PWOD"
        />

        <Check
          label="Fiasp Original V1"
          control={control}
          name="fiasp_original_v1"
        />

        <Check
          label="Fiasp Extension V2"
          control={control}
          name="fiasp_extension_v2"
        />

        <Check label="Clear" control={control} name="clear" />

        <Check label="FAME 1 EYE" control={control} name="fame_1_eye" />

        <Check label="MEWS" control={control} name="mews" />

        <Check label="Serodus" control={control} name="serodus" />

        <Check label="FLASH" control={control} name="flash" />

        <Check
          label="Additional Signals"
          control={control}
          name="additional_signals"
        />

        <Check label="Optimapp" control={control} name="optimapp" />

        <Check
          label="Biocap Feasibility"
          control={control}
          name="biocap_feasibility"
        />

        <Check
          label="No previous study involvement"
          control={control}
          name="no_previous_study_involvement"
        />

        <Check label="Other" control={control} name="other" />

        <Button
          type="submit"
          loading={saveLoading}
          icon
          className=" w-full h-10 my-10 text-white shadow-blue bg-secondary dark:bg-primary self-end"
        >
          Save Previous Studies
        </Button>
      </div>
    </Form>
  )
})
