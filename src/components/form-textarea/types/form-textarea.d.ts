import { ComponentProps, memo } from 'react'

export type TFormTextArea = {
  label?: string
  size?: 'small' | 'large' | 'default'
  expanded?: boolean
  max?: number
  min?: number
  name: string
} & Omit<ComponentProps<'textarea'>, 'onChange'>
