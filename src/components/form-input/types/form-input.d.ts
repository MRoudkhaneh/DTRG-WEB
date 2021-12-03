import { ComponentProps } from 'react'

export type TFormInput = {
  label?: string
  size?: 'small' | 'large' | 'default'
  precent?: boolean
  number?: boolean
  later?: boolean
  validation?: Function
  hours?: boolean
  name: string
  min?: number
  max?: number
} & ComponentProps<'input'>
