import { ComponentProps } from 'react'

export type TFormCheckBox = {
  label?: string
  name: string
} & Omit<ComponentProps<'input'>, 'type' | 'id' | 'name'>
