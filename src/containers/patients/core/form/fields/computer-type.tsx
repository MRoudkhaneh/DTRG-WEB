import { memo } from 'react'

import { FormSelect } from 'components/form-select'

export const ComputerType = () => {
  return (
    <FormSelect label="Computer Type" name="computer_type">
      <option value="Windows">Windows</option>
      <option value="Mac">Mac</option>
      <option value="Both">Both</option>
    </FormSelect>
  )
}
