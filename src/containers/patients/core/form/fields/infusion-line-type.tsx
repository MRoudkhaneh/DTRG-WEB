import { FormSelect } from 'components/form-select'

export const InfusionLineType = () => {
  return (
    <FormSelect
      label="Infusion Line Type"
      name="infusion_line_type"
      options={[
        { id: '90 Degree', title: '90 Degree' },
        { id: '45 Degree', title: '45 Degree' },
        { id: 'Metal', title: 'Metal' },
      ]}
    />
  )
}
