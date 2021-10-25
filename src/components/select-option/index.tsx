import { FC, memo } from 'react'

import { SelectOptionMultiple } from './select-option-multiple'
import { SelectOptionSingle } from './select-option-single'

export const SelectOption = memo((props: ISelectOption) => {
  const { multiple } = props

  if (multiple) return <SelectOptionMultiple {...props} />
  else return <SelectOptionSingle {...props} />
})
