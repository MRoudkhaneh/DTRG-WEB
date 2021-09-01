import { memo } from 'react'
import { DatePicker } from 'components/date-picker'
import { Button } from 'components/button'
import { Form } from 'components/form'
import { Input } from 'components/input'
import { Select } from 'components/select'
import { usePatientAssetForm } from './use-patient-asset-form'

export const PatientAssetForm = memo(() => {
  const { control, onSubmit, setValue } = usePatientAssetForm()

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

      <Select
        control={control}
        setValue={setValue}
        name="category"
        label="Category"
        className="mt-10"
        required
      >
        <option value="consumable">consumable</option>
        <option value="hardware">hardware</option>
      </Select>
      <Select
        control={control}
        setValue={setValue}
        name="ownership"
        label="Owner ship"
        className="mt-4"
        required
      >
        <option value="investigational_sponsor">investigational sponsor</option>
        <option value="non_investigational_sponsor">
          non investigational sponsor
        </option>
        <option value="non_investigational_dtrg">
          non investigational dtrg
        </option>
      </Select>
      <Select
        control={control}
        setValue={setValue}
        name="type"
        label="Type"
        className="mt-4"
        required
      >
        <option value="sensors">sensors</option>
        <option value="transmitters">transmitters</option>
        <option value="pump">pump</option>
        <option value="meters">meters</option>
        <option value="receivers">receivers</option>
        <option value="pdm">pdm</option>
        <option value="other">other</option>
      </Select>
      <Button
        type="submit"
        icon
        className=" w-full h-12 mt-10 mb-10 text-white shadow-blue bg-secondary dark:bg-primary"
      >
        Save Asset
      </Button>
    </Form>
  )
})
