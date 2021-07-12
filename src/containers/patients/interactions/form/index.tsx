import { memo } from 'react'
import {
  Form,
  Input,
  Button,
  Select,
  SelectOption,
  DatePicker,
  TextArea,
} from 'components'

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
        <SelectOption value="email">Email</SelectOption>
        <SelectOption value="phone call">Phone call</SelectOption>
        <SelectOption value="in person">In person</SelectOption>
      </Select>
      <DatePicker
        control={control}
        name="interaction_date"
        label="Interaction date"
        className="mt-5"
      />

      <Input
        control={control}
        name="interaction_minutes"
        label="Interaction time (minutes)"
        placeholder="Enter interaction time in minutes"
        className="mt-10"
        min={0}
        required
        max={9999}
        number
      />

      <Input
        control={control}
        name="contact_admin"
        label="Contact admin"
        placeholder="Enter contact admin"
        className="mt-5"
        required
      />
      <TextArea
        control={control}
        name="contact_details"
        label="Contact details"
        placeholder="Enter contact details"
        className="my-5"
        required
        max={450}
      />
      <Button
        type="submit"
        className=" mx-auto w-1/2 h-12 my-10 ml-auto bg-pink-700 text-white"
      >
        Save Interaction
      </Button>
    </Form>
  )
})
