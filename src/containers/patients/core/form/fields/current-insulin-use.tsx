import { memo } from 'react'
import { FormMultiSelect } from 'components/form-multi-select'

export const CurrentInsulinUse = memo(() => {
  return (
    <FormMultiSelect
      label="Current Insulin Use"
      name="current_insulin_use"
      options={[
        { id: 'Novorapid', title: 'Novorapid' },
        { id: 'Humalog', title: 'Humalog' },
        { id: 'Levemir', title: 'Levemir' },
        { id: 'Lantus', title: 'Lantus' },
        { id: 'Fiasp', title: 'Fiasp' },
        { id: 'Toujeo', title: 'Toujeo' },
        { id: 'Ryzodeg', title: 'Ryzodeg' },
        { id: 'Optisulin', title: 'Optisulin' },
        { id: 'Mixtard 30/70', title: 'Mixtard 30/70' },
        { id: 'Actrapid', title: 'Actrapid' },
        { id: 'Protophane', title: 'Protophane' },
      ]}
    />
  )
})
