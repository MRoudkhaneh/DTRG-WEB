import { memo } from 'react'
import { DatePicker } from 'components/date-picker'
import { Button } from 'components/button'
import { Form } from 'components/form'
import { Input } from 'components/input'
import { Select } from 'components/select'
import { TextArea } from 'components/text-area'

import { usePatientInteractionForm } from './use-patient-interaction-form'

export const PatientInteractionsForm = memo(() => {
  const { control, onSubmit, setValue } = usePatientInteractionForm()

  return (
    <Form onSubmit={onSubmit}>
      <Select
        control={control}
        name="interaction_type"
        label="Interaction Type"
        className="mt-4"
        setValue={setValue}
        required
      >
        <option value="email">Email</option>
        <option value="phone call">Phone call</option>
        <option value="in person">In person</option>
      </Select>
      <DatePicker
        control={control}
        name="interaction_date"
        label="Interaction date"
        className="mt-5"
      />
      <Input
        control={control}
        name="contact_admin"
        label="Contact admin"
        placeholder="Enter contact admin"
        className="mt-10"
        required
      />
      <TextArea
        control={control}
        name="contact_details"
        label="Contact details"
        placeholder="Enter contact details"
        className="my-5"
        expanded
        required
        max={300}
      />
      <Button
        type="submit"
        icon
        className=" w-full h-12 my-10 text-white shadow-blue bg-secondary dark:bg-primary"
      >
        Save Interaction
      </Button>
    </Form>
  )
})
