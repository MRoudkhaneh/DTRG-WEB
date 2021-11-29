import { ComponentProps } from 'react'

export type TButton = {
  icon: boolean
  loading: boolean
  id: string
} & ComponentProps<'button'>
