import { FormMultiSelect } from 'components/form-multi-select'

export const PhoneType = () => {
  return (
    <FormMultiSelect
      label="Phone Type"
      name="phone_type"
      options={[
        { id: 'Android', title: 'Android' },
        { id: 'IOS', title: 'IOS' },
        { id: 'Windows', title: 'Windows' },
        { id: 'Other', title: 'Other' },
      ]}
    />
  )
}
