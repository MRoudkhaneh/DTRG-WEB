type TInput = {
  label?: string
  error?: string
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
} & ComponentProps<'input'>
