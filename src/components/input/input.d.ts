import { ComponentProps } from 'react'

type TInputOwn = {
  label?: string
  error?: FieldError
  later?: boolean | undefined
  required?: boolean | undefined
  max?: string | number | undefined
  min?: string | number | undefined
  precent?: boolean
  size?: 'small' | 'default' | 'large'
  onClick?: any
  withError?: boolean
  icon?: any
  open?: boolean
  toggle?: any
  validate?: any
  validation?: any
  control?: any
  fieldChange?: any
  fieldValue?: any
  fieldError?: any
  fieldRef?: any
  hours?: boolean
  minutes?: boolean
  number?: boolean
  url?: any
  ref?: any
}

export type TInput = TInputOwn & Omit<ComponentProps<'input'>, keyof TInputOwn>
