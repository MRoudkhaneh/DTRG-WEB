import { ComponentProps } from 'react'

export type TCheck = {
  label: string
  control: any
  id: any
  ref?: any
} & ComponentProps<'input'>
