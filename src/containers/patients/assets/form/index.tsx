import { memo } from 'react'
import { DatePicker } from 'components/date-picker'
import { Button } from 'components/button'
import { Form } from 'components/form'
import { Input } from 'components/input'

import { usePatientAssetForm } from './use-patient-asset-form'

export const PatientAssetForm = memo(() => {
  const { control, onSubmit } = usePatientAssetForm()

  return (
    <Form onSubmit={onSubmit}>
      <Input
        control={control}
        name="lot_number"
        label="Lot Number"
        placeholder="Enter contact admin"
        className="mt-4"
        required
      />
      <Input
        control={control}
        name="serial_number"
        label="Serial Number"
        placeholder="Enter contact admin"
        className="mt-4"
        required
      />
      <DatePicker
        control={control}
        name="expiration_date"
        label="Expiration Date"
        className="mt-4"
        required
      />

      <Button
        type="submit"
        icon
        className=" w-full h-12 mt-20 mb-10 text-white shadow-blue bg-secondary dark:bg-primary"
      >
        Save Asset
      </Button>
    </Form>
  )
})
