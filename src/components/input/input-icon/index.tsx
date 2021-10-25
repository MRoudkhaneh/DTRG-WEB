import { FC, memo } from 'react'
import { TInput } from '../input'
import { inputIconClassName } from './helper'

export const InputIcon = memo(({ label, icon, size }: TInput) => {
  if (icon)
    return <div className={inputIconClassName(label, size)}>{icon()}</div>
  else return null
})
