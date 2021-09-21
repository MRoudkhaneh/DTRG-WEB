import { memo } from 'react'
import { DatePicker } from 'components/date-picker'
import { Button } from 'components/button'
import { Form } from 'components/form'
import { Input } from 'components/input'
import { Select } from 'components/select'
import { usePatientAssetForm } from './use-patient-asset-form'
import { SearchBox } from 'components/search-box'
import { Api } from 'utils/api'
import { TypeDetails } from './type-details'

export const PatientAssetForm = memo(() => {
  const { control, onSubmit, setValue, isLoading, pathname } =
    usePatientAssetForm()

  return (
    <Form onSubmit={onSubmit}>
      <div className="w-full grid grid-cols-2 gap-8 mt-6">
        {!pathname.includes('patient') && (
          <SearchBox
            url={Api.patients}
            control={control}
            label="Owner"
            name="owner"
            placeholder="Search for patients"
            required
          />
        )}
        <Select
          control={control}
          setValue={setValue}
          name="status"
          label="Status"
          required
        >
          <option value="warehouse">Warehouse</option>
          <option value="allocated_not_dispensed">
            Allocated-not-dispensed
          </option>
          <option value="allocated_dispensed">Allocated-dispensed</option>
          <option value="recalled">Recalled</option>
          <option value="returned">Returned</option>
          <option value="complaint">Complaint</option>
        </Select>
        <Select
          control={control}
          setValue={setValue}
          name="category"
          label="Category"
          required
        >
          <option value="consumable">Consumable</option>
          <option value="hardware">Hardware</option>
        </Select>
        <Select
          control={control}
          setValue={setValue}
          name="ownership"
          label="Owner ship"
          required
        >
          <option value="investigational_sponsor">
            Investigational sponsor
          </option>
          <option value="non_investigational_sponsor">
            Non investigational sponsor
          </option>
          <option value="non_investigational_dtrg">
            Non investigational dtrg
          </option>
        </Select>
        <Select
          control={control}
          setValue={setValue}
          name="type"
          label="Type"
          required
        >
          <option value="sensors">Sensors</option>
          <option value="transmitters">Transmitters</option>
          <option value="pump">Pump</option>
          <option value="meters">Meters</option>
          <option value="receivers">Receivers</option>
          <option value="pdm">PDM</option>
          <option value="other">Other</option>
        </Select>
        <TypeDetails control={control} />
        <Input
          control={control}
          name="lot_number"
          label="Lot Number"
          placeholder="Enter contact admin"
          required
        />

        <Input
          control={control}
          name="serial_number"
          label="Serial Number"
          placeholder="Enter contact admin"
          required
        />
        <DatePicker
          control={control}
          name="expiration_date"
          label="Expiration Date"
          required
          later
        />
      </div>

      <Button
        type="submit"
        loading={isLoading}
        icon
        className=" w-1/2 mx-auto h-12 mt-14 mb-10 text-white shadow-blue bg-secondary dark:bg-primary"
      >
        Save Asset
      </Button>
    </Form>
  )
})
