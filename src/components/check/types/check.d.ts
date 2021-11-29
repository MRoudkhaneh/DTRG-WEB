import { ComponentProps } from 'react'

export type TCheck = {
  label: string
  id: string
  ref?: any
} & ComponentProps<'input'>
