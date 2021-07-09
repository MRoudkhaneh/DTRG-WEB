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
  const { control, onSubmit, isLoading, setValue } = usePatientInteractionForm()

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
        className="my-4"
      />
      <Input
        control={control}
        name="interaction_time"
        label="Interaction time"
        required
        className="mt-10"
      />
      <Input
        control={control}
        name="contact_admin"
        label="Contact admin"
        className="mt-4"
        required
      />
      <TextArea
        control={control}
        name="contact_details"
        label="Contact details"
        className="my-4"
        required
        max={512}
      />
      <Button
        type="submit"
        className=" mx-auto w-1/2 h-12 my-10 ml-auto bg-pink-700 text-white"
        //loading={isLoading}
      >
        Save Interaction
      </Button>
    </Form>
  )
})
