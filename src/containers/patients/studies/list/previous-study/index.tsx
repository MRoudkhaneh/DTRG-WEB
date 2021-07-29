import { memo } from 'react'
import { Button } from 'components/button'
import { Check } from 'components/check'
import { Form } from 'components/form'
import { Text } from 'components/text'

import { PreviousStudyLoading } from './previou-study-loading'
import { usepreviousStudy } from './use-previous-study'

export const PreviousStudy = memo(() => {
  const { control, onSubmit, isLoading } = usepreviousStudy()

  if (isLoading) return <PreviousStudyLoading />
  return (
    <Form onSubmit={onSubmit} className="w-1/4 h-full">
      <div className=" flex flex-col space-y-5">
        <Text size="title" className="text-light dark:text-dark pb-6">
          Previous Studies
        </Text>

        <Check label="All in One" control={control} name="All in One" />

        <Check label="Glysens PAVE" control={control} name="Glysens PAVE" />

        <Check label="Glysens FREE" control={control} name="Glysens FREE" />

        <Check
          label="Additional Signals PWOD"
          control={control}
          name="Additional Signals PWOD"
        />

        <Check
          label="Fiasp Original V1"
          control={control}
          name="Fiasp Original V1"
        />

        <Check
          label="Fiasp Extension V2"
          control={control}
          name="Fiasp Extension V2"
        />

        <Check label="Clear" control={control} name="Clear" />

        <Check label="FAME 1 EYE" control={control} name="FAME 1 EYE" />

        <Check label="MEWS" control={control} name="MEWS" />

        <Check label="Serodus" control={control} name="Serodus" />

        <Check label="FLASH" control={control} name="FLASH" />

        <Check
          label="Additional Signals"
          control={control}
          name="Additional Signals"
        />

        <Check label="Optimapp" control={control} name="Optimapp" />

        <Check
          label="Biocap Feasibility"
          control={control}
          name="Biocap Feasibility"
        />

        <Check
          label="No previous study involvement"
          control={control}
          name="No previous study involvement"
        />

        <Check label="Other" control={control} name="Other" />

        <Button
          type="submit"
          icon
          className=" w-full h-10 my-10 text-white shadow-blue bg-secondary dark:bg-primary self-end"
        >
          Save Previous Studies
        </Button>
      </div>
    </Form>
  )
})
