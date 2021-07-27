import { Button } from 'components/button'
import { Check } from 'components/check'
import { Text } from 'components/text'
import { memo } from 'react'

export const PreviousStudy = memo(() => {
  return (
    <div className="w-1/4 h-full flex flex-col mt-10 space-y-3">
      <Text size="title" className="text-light dark:text-dark">
        Previous Studies
      </Text>

      <Check label="All in One" />

      <Check label="Glysens PAVE" />

      <Check label="Glysens FREE" />

      <Check label="Additional Signals PWOD" />

      <Check label="Fiasp Original V1" />

      <Check label="Fiasp Extension V2" />

      <Check label="Clear" />

      <Check label="FAME 1 EYE" />

      <Check label="MEWS" />

      <Check label="Serodus" />

      <Check label="FLASH" />

      <Check label="Additional Signals" />

      <Check label="Optimapp" />

      <Check label="Biocap Feasibility" />

      <Check label=" No previous study involvement" />

      <Check label="Other" />

      <Button
        type="submit"
        icon
        className=" w-1/2 h-10 text-white shadow-blue bg-secondary dark:bg-primary self-end"
      >
        Save Previous Studies
      </Button>
    </div>
  )
})
