import { FC, memo } from 'react'
import { TInput } from '../input'
import { inputLabelClassName } from './helper'

export const InputLabel = memo(({ label, size }: TInput) => {
  if (label) return <label className={inputLabelClassName(size)}>{label}</label>
  else return null
})
