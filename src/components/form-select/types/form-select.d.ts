import { ComponentProps } from 'react'

export type TFormSelect = {
  label?: string
  size?: 'small' | 'large' | 'default'
  validation?: (value: any) => string
  name: string
  options?: {
    id: string | number
    title: string | number
    disabled?: boolean
  }[]
} & ComponentProps<'select'>
