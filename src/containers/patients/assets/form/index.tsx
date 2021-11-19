import { memo } from 'react'
import { Button } from 'components/button'
import { Api } from 'utils/api'
import { TypeDetails } from './type-details'
import { FormControl } from 'components/form-control'
import { FormSelect } from 'components/form-select'
import { FormInput } from 'components/form-input'
import { FormDatePicker } from 'components/form-datepicker'
import { FormSearchBox } from 'components/form-searchbox'
import { usePatientAssetForm } from './use-patient-asset-form'

export const PatientAssetForm = memo(() => {
  const { onSubmit, isLoading, defaultValues, pathname } = usePatientAssetForm()

  return (
    <FormControl onSubmit={onSubmit} defaultValues={defaultValues}>
      <div className="w-full grid grid-cols-2 gap-8 mt-6">
        {!pathname.includes('patient') && (
          <FormSearchBox
            url={Api.patients}
            label="Owner"
            name="owner"
            placeholder="Search for patients"
            required
          />
        )}
        <FormSelect name="status" label="Status" required>
          <option value="warehouse">Warehouse</option>
          <option value="allocated_not_dispensed">
            Allocated-not-dispensed
          </option>
          <option value="allocated_dispensed">Allocated-dispensed</option>
          <option value="recalled">Recalled</option>
          <option value="returned">Returned</option>
          <option value="complaint">Complaint</option>
        </FormSelect>
        <FormSelect name="category" label="Category" required>
          <option value="consumable">Consumable</option>
          <option value="hardware">Hardware</option>
        </FormSelect>
        <FormSelect name="ownership" label="Owner ship" required>
          <option value="investigational_sponsor">
            Investigational sponsor
          </option>
          <option value="non_investigational_sponsor">
            Non investigational sponsor
          </option>
          <option value="non_investigational_dtrg">
            Non investigational dtrg
          </option>
        </FormSelect>
        <FormSelect name="type" label="Type" required>
          <option value="sensors">Sensors</option>
          <option value="transmitters">Transmitters</option>
          <option value="pump">Pump</option>
          <option value="meters">Meters</option>
          <option value="receivers">Receivers</option>
          <option value="pdm">PDM</option>
          <option value="other">Other</option>
        </FormSelect>
        <TypeDetails />
        <FormInput
          name="lot_number"
          label="Lot Number"
          placeholder="Enter contact admin"
          required
        />

        <FormInput
          name="serial_number"
          label="Serial Number"
          placeholder="Enter contact admin"
          required
        />
        <FormDatePicker
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
    </FormControl>
  )
})
