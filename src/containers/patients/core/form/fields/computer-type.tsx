import { FormSelect } from 'components/form-select'

export const ComputerType = () => {
  return (
    <FormSelect
      label="Computer Type"
      name="computer_type"
      options={[
        { id: 'Windows', title: 'Windows' },
        { id: 'Mac', title: 'Mac' },
        { id: 'Both', title: 'Both' },
      ]}
    />
  )
}
