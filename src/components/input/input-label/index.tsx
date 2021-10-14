import { FC, memo } from 'react'
import { inputLabelClassName } from './helper'

export const InputLabel: FC<TInput> = memo(({ label, size }) => {
  if (label) return <label className={inputLabelClassName(size)}>{label}</label>
  else return null
})
