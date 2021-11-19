import { FormSelect } from 'components/form-select'

export const InfusionLineType = () => {
  return (
    <FormSelect label="Infusion Line Type" name="infusion_line_type">
      <option value=" 90 Degree">90 Degree</option>
      <option value="45 Degree">45 Degree</option>
      <option value="Metal">Metal</option>
    </FormSelect>
  )
}
